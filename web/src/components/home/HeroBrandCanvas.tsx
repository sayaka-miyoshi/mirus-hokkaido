"use client";

import { useEffect, useRef } from "react";

/** Full loop length (ms). Logo completes around 8–10s, then holds several seconds. */
const LOOP_MS = 18000;
const ACCENT = { r: 110, g: 207, b: 245 };
const BG = "#05070c";

type Node = {
  ox: number;
  oy: number;
  tx: number;
  ty: number;
  size: number;
  alpha: number;
  kind: 0 | 1 | 2 | 3;
  phase: number;
};

type Edge = {
  a: number;
  b: number;
  strength: number;
};

type Layout = {
  cx: number;
  cy: number;
  spanX: number;
  spanY: number;
  mobile: boolean;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function phase(p: number, a: number, b: number) {
  return clamp01((p - a) / (b - a));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function loopFade(p: number) {
  if (p < 0.06) return easeInOutCubic(p / 0.06);
  if (p > 0.92) return 1 - easeInOutCubic((p - 0.92) / 0.08);
  return 1;
}

function getLayout(w: number, h: number, mobile: boolean): Layout {
  // Center network + logo in the top animation stage
  return {
    cx: w * 0.5,
    cy: h * 0.5,
    spanX: Math.min(w * (mobile ? 0.4 : 0.34), mobile ? 190 : 360),
    spanY: Math.min(h * (mobile ? 0.32 : 0.34), mobile ? 110 : 180),
    mobile,
  };
}

function createNetwork(w: number, h: number, count: number, layout: Layout) {
  const { cx, cy, spanX, spanY } = layout;

  const clusterCenters = [
    { x: cx - spanX * 0.75, y: cy - spanY * 0.55 },
    { x: cx + spanX * 0.7, y: cy - spanY * 0.35 },
    { x: cx - spanX * 0.45, y: cy + spanY * 0.7 },
    { x: cx + spanX * 0.55, y: cy + spanY * 0.55 },
  ] as const;

  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    const kind = (i % 4) as 0 | 1 | 2 | 3;
    const c = clusterCenters[kind];
    const ang = Math.random() * Math.PI * 2;
    const r = 14 + Math.random() * Math.min(spanX, spanY) * 0.55;
    const ox = c.x + Math.cos(ang) * r;
    const oy = c.y + Math.sin(ang) * r * 0.7;
    const slot = (i / count) * Math.PI * 2;
    const logoSpread = Math.min(spanX, spanY) * 0.55;
    nodes.push({
      ox,
      oy,
      tx: cx + Math.cos(slot) * logoSpread * (0.25 + Math.random() * 0.7),
      ty: cy + Math.sin(slot) * logoSpread * 0.32,
      size: 1.1 + Math.random() * 1.5,
      alpha: 0.28 + Math.random() * 0.38,
      kind,
      phase: Math.random() * Math.PI * 2,
    });
  }

  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const same = nodes[i].kind === nodes[j].kind;
      const dist = Math.hypot(nodes[i].ox - nodes[j].ox, nodes[i].oy - nodes[j].oy);
      const limit = same ? Math.min(spanX, spanY) * 0.9 : Math.min(spanX, spanY) * 1.35;
      if (dist < limit && (same || Math.random() < 0.14)) {
        edges.push({ a: i, b: j, strength: same ? 0.55 : 0.26 });
      }
    }
  }

  if (edges.length < count) {
    for (let i = 0; i < nodes.length - 1; i++) {
      edges.push({ a: i, b: i + 1, strength: 0.2 });
    }
  }

  return { nodes, edges };
}

export function HeroBrandCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let isMobile = mobileQuery.matches;

    let width = 0;
    let height = 0;
    let layout: Layout = getLayout(1, 1, true);
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let raf = 0;
    let start = performance.now();
    let inView = true;
    let pageVisible = document.visibilityState === "visible";
    let alive = true;

    const particleCount = () => (isMobile ? 24 : 52);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const nextW = parent.clientWidth;
      const nextH = parent.clientHeight;
      if (nextW <= 0 || nextH <= 0) return;

      width = nextW;
      height = nextH;
      const cap = isMobile ? 1.25 : 1.75;
      const dpr = Math.min(window.devicePixelRatio || 1, cap);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      // Keep CSS size tied to parent (.heroVisual canvas)
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      layout = getLayout(width, height, isMobile);
      const net = createNetwork(width, height, particleCount(), layout);
      nodes = net.nodes;
      edges = net.edges;
    };

    const shouldAnimate = () => alive && inView && pageVisible && !reducedMotion;

    const stopLoop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const drawAmbient = (p: number, fade: number) => {
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, width, height);

      const bloom = easeOutCubic(phase(p, 0, 0.18)) * fade * (isMobile ? 0.55 : 0.75);
      const { cx, cy } = layout;
      const radius = Math.min(width, height) * (isMobile ? 0.48 : 0.52);

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      g.addColorStop(0, `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${0.1 * bloom})`);
      g.addColorStop(0.5, `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${0.035 * bloom})`);
      g.addColorStop(1, "rgba(5,7,12,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    };

    const drawNetwork = (p: number, fade: number) => {
      const appear = easeOutCubic(phase(p, 0.02, 0.22));
      const connect = easeInOutCubic(phase(p, 0.12, 0.38));
      const gather = easeInOutCubic(phase(p, 0.34, 0.52));
      // During logo hold, fade network nearly out so wordmark reads alone & centered
      const logoSolo = easeInOutCubic(phase(p, 0.52, 0.6)) * (1 - easeInOutCubic(phase(p, 0.78, 0.88)));
      const settle = 1 - logoSolo * 0.92;
      const mobileDim = isMobile ? 0.72 : 1;

      const pos = nodes.map((n) => {
        const drift = Math.sin(p * Math.PI * 2 + n.phase) * (1 - gather) * 6;
        return {
          x: lerp(n.ox, n.tx, gather) + drift,
          y: lerp(n.oy, n.ty, gather) + drift * 0.4,
        };
      });

      ctx.lineWidth = 1;
      for (const e of edges) {
        const a = pos[e.a];
        const b = pos[e.b];
        if (!a || !b) continue;
        const alpha = appear * connect * e.strength * settle * fade * 0.38 * mobileDim;
        if (alpha < 0.02) continue;
        ctx.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      const glass = easeInOutCubic(phase(p, 0.2, 0.4)) * (1 - logoSolo * 0.9) * fade * mobileDim;
      if (glass > 0.01) {
        const { cx, cy } = layout;
        const s = Math.min(layout.spanX * 2.2, layout.spanY * 2.8);
        ctx.save();
        ctx.globalAlpha = glass * 0.09;
        const gg = ctx.createLinearGradient(cx - s * 0.3, cy, cx + s * 0.3, cy);
        gg.addColorStop(0, `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},0.12)`);
        gg.addColorStop(0.5, "rgba(255,255,255,0.07)");
        gg.addColorStop(1, `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},0.1)`);
        ctx.fillStyle = gg;
        ctx.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},0.22)`;
        ctx.beginPath();
        ctx.moveTo(cx - s * 0.34, cy - s * 0.08);
        ctx.lineTo(cx + s * 0.3, cy - s * 0.12);
        ctx.lineTo(cx + s * 0.36, cy + s * 0.14);
        ctx.lineTo(cx - s * 0.28, cy + s * 0.16);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const { x, y } = pos[i];
        const a = n.alpha * appear * settle * fade * mobileDim;
        if (a < 0.02) continue;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${a})`;
        ctx.arc(x, y, n.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawLogo = (p: number, fade: number) => {
      const form = easeOutCubic(phase(p, 0.48, 0.58));
      const hold = clamp01(phase(p, 0.55, 0.62));
      const peak = easeInOutCubic(phase(p, 0.52, 0.6)) * (1 - easeInOutCubic(phase(p, 0.78, 0.88)));
      // Hold logo several seconds, then soft exit before loop
      const exit = 1 - easeInOutCubic(phase(p, 0.86, 0.95));
      const alpha = form * exit * fade;
      if (alpha <= 0.01) return;

      const { cx, cy } = layout;
      const fontSize = Math.round(
        Math.min(
          Math.max(Math.min(width, height) * (isMobile ? 0.13 : 0.11), isMobile ? 40 : 48),
          isMobile ? 54 : 80,
        ),
      );

      ctx.save();
      if (peak > 0) {
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, fontSize * 2.2);
        glow.addColorStop(0, `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${0.08 * peak})`);
        glow.addColorStop(1, "rgba(5,7,12,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.font = `500 ${fontSize}px Syne, system-ui, sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";

      const mi = "MI";
      const rus = "RUS";
      const miW = ctx.measureText(mi).width;
      const total = miW + ctx.measureText(rus).width;
      const startX = cx - total / 2;

      ctx.globalAlpha = alpha;
      ctx.shadowColor = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${0.18 * hold})`;
      ctx.shadowBlur = 10 * hold;

      ctx.fillStyle = `rgba(245,247,250,${0.96})`;
      ctx.fillText(mi, startX, cy);
      ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${0.98})`;
      ctx.fillText(rus, startX + miW, cy);

      ctx.shadowBlur = 0;
      ctx.globalAlpha = alpha * 0.75;
      ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${0.8})`;
      ctx.fillRect(startX, cy + fontSize * 0.62, total * hold, 1);
      ctx.restore();
    };

    const render = (p: number) => {
      const fade = loopFade(p);
      drawAmbient(p, fade);
      drawNetwork(p, fade);
      drawLogo(p, fade);
    };

    const tick = (now: number) => {
      if (!shouldAnimate()) {
        raf = 0;
        return;
      }
      const elapsed = (now - start) % LOOP_MS;
      render(elapsed / LOOP_MS);
      raf = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (!shouldAnimate() || raf) return;
      start = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      pageVisible = document.visibilityState === "visible";
      if (pageVisible) startLoop();
      else {
        stopLoop();
        if (width > 0) render(0.65);
      }
    };

    const onMotionChange = () => {
      reducedMotion = motionQuery.matches;
      stopLoop();
      if (reducedMotion) render(0.65);
      else startLoop();
    };

    const onMobileChange = () => {
      isMobile = mobileQuery.matches;
      resize();
      if (reducedMotion) render(0.65);
    };

    resize();
    if (reducedMotion) render(0.65);
    else {
      render(0);
      startLoop();
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (!shouldAnimate()) render(0.65);
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) startLoop();
        else {
          stopLoop();
          if (width > 0) render(0.65);
        }
      },
      { threshold: 0.08 },
    );
    io.observe(canvas);

    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onMotionChange);
    mobileQuery.addEventListener("change", onMobileChange);

    return () => {
      alive = false;
      stopLoop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
      mobileQuery.removeEventListener("change", onMobileChange);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden />;
}
