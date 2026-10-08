"use client";

import { MockShell, type MockConcept } from "@/components/design-mock/MockChrome";
import { HeroCreative } from "@/components/design-mock/HeroCreative";
import { HeroEditorial } from "@/components/design-mock/HeroEditorial";
import { MockSharedBody } from "@/components/design-mock/MockSharedSections";

export function DesignMockVariant({ concept }: { concept: MockConcept }) {
  return (
    <MockShell concept={concept}>
      {concept === "a" ? <HeroEditorial /> : <HeroCreative />}
      <MockSharedBody />
      <aside className="dm-proposals">
        <div className="dm-container">
          <h2>{concept === "a" ? "A案 — Minimal Editorial" : "B案 — Creative / Works"}</h2>
          <ol>
            <li>
              <strong>TOPビジュアル</strong>
              {concept === "a"
                ? " — 余白と小さなタイポ。代表者写真は除外し、北海道コンテンツを下段で大きく。"
                : " — 制作・実績写真を主役に。モザイクとズームでクリエイティブ感を強調。"}
            </li>
            <li>
              <strong>スクロール演出</strong>
              — パララックス／ズーム／WORKS横スクロールは両案共通。
            </li>
            <li>
              <strong>CEO写真</strong>
              — About / CEO セクションのみで使用。
            </li>
          </ol>
        </div>
      </aside>
    </MockShell>
  );
}
