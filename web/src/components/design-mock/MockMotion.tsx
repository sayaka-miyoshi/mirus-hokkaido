"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function MockReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function MockHeadline({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function useSmoothProgress(target: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  return useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.35 });
}

export function MockParallaxImage({
  src,
  alt,
  className,
  portrait = false,
}: {
  src: string;
  alt: string;
  className?: string;
  portrait?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const progress = useSmoothProgress(ref);
  const y = useTransform(progress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(progress, [0, 0.5, 1], [1.14, 1.05, 1.12]);

  return (
    <div
      ref={ref}
      className={`dm-scale-frame ${portrait ? "dm-scale-frame--portrait" : ""} ${className ?? ""}`}
    >
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y, scale }}>
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 960px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
}

export function MockHeroMedia({
  src,
  alt,
  objectPosition = "center center",
  className,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 26 });
  const scale = useTransform(smooth, [0, 1], [1.06, 1.22]);
  const y = useTransform(smooth, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(smooth, [0, 0.9], [1, 0.62]);

  return (
    <div ref={ref} className={`dm-hero-media ${className ?? ""}`} aria-hidden={!alt}>
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale, y, opacity }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition }}
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}

export type MockWorkCard = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

function WorkSlide({ item }: { item: MockWorkCard }) {
  return (
    <article className="dm-work-card">
      <div className="dm-work-media">
        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="420px" />
      </div>
      <div className="dm-work-body">
        <p className="dm-work-cat">{item.category}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export function MockHorizontalWorks({ items }: { items: MockWorkCard[] }) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setTravel(Math.max(track.scrollWidth - window.innerWidth + 80, 0));
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, -travel]);

  if (reduce) {
    return (
      <section className="dm-section dm-tone-c">
        <div className="dm-container">
          <p className="dm-label">Works</p>
          <h2 className="dm-title">公開できる実績・活動</h2>
          <p className="dm-lead">動きを減らす設定のため、横展開の代わりにグリッド表示しています。</p>
          <div className="dm-works-fallback">
            {items.map((item) => (
              <WorkSlide key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="dm-works-pin">
      <div className="dm-works-sticky">
        <div className="dm-container" style={{ marginBottom: 28 }}>
          <p className="dm-label">Works</p>
          <h2 className="dm-title dm-title-md" style={{ marginBottom: 8 }}>
            Works
          </h2>
          <p className="dm-lead">
            スクロールに連動して事例が横へ展開します（既存の公開素材によるモック）。
          </p>
        </div>
        <motion.div ref={trackRef} className="dm-works-track" style={{ x }}>
          {items.map((item) => (
            <WorkSlide key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
