"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

export function ComparisonSlider() {
  const [position, setPosition] = useState(54);
  const style = { "--comparison-position": `${position}%` } as CSSProperties;

  return (
    <div className="comparison" style={style}>
      <Image unoptimized className="comparison-image" src="/hero-blueprint.png" alt="Plano digital conceptual de una rejilla automotriz" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
      <div className="comparison-after" aria-hidden="true">
        <Image unoptimized className="comparison-image" src="/hero-physical.png" alt="" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
      </div>
      <div className="comparison-label comparison-label-before">Plano digital</div>
      <div className="comparison-label comparison-label-after">Pieza física</div>
      <div className="comparison-line" aria-hidden="true"><span>↔</span></div>
      <label className="sr-only" htmlFor="comparison-range">Comparar plano digital con pieza física</label>
      <input id="comparison-range" className="comparison-range" type="range" min="0" max="100" value={position} onInput={(event) => setPosition(Number(event.currentTarget.value))} onChange={(event) => setPosition(Number(event.currentTarget.value))} aria-valuetext={`${position}% de pieza física visible`} />
    </div>
  );
}
