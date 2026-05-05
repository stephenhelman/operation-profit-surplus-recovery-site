"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, animate } from "framer-motion";

type Tile = {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
  label: string;
};

const tiles: Tile[] = [
  { prefix: "$", target: 2.3, decimals: 1, suffix: "B+", label: "Surplus Funds Available Nationwide" },
  { prefix: "",  target: 45,  decimals: 0, suffix: "+",  label: "States We Operate In" },
  { prefix: "",  target: 120, decimals: 0, suffix: "",   label: "Average Days to Complete a Claim" },
  { prefix: "",  target: 0,   decimals: 0, suffix: "",   label: "Upfront Cost to You" },
];

function Counter({ prefix, target, decimals, suffix, label }: Tile) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView || target === 0) return;
    const controls = animate(0, target, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(value);
      },
    });
    return () => controls.stop();
  }, [inView, target]);

  const display =
    target === 0
      ? "0"
      : `${prefix}${count.toFixed(decimals)}${suffix}`;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-white/5 border border-white/10 px-8 py-10 hover:border-gold/30 transition-colors duration-300"
    >
      <div className="font-heading text-4xl md:text-5xl text-gold leading-none mb-3">
        {target === 0 ? (
          <>{prefix}0{suffix}</>
        ) : (
          <>{prefix}{count.toFixed(decimals)}{suffix}</>
        )}
      </div>
      <div className="font-body text-gray-400 text-base tracking-wide text-center font-light">
        {label}
      </div>
    </div>
  );
}

export default function ImpactNumbers() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase font-semibold">
            By the Numbers
          </span>
          <div className="w-16 h-px bg-gold/30 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tiles.map((tile) => (
            <Counter key={tile.label} {...tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
