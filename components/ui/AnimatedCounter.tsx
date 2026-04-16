"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

function parseValue(val: string): { num: number; prefix: string; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return {
    prefix: match[1] ?? "",
    num: parseFloat(match[2] ?? "0"),
    suffix: match[3] ?? "",
  };
}

export default function AnimatedCounter({
  value,
  duration = 1800,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");
  const { num, prefix, suffix } = parseValue(value);
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay(
        isDecimal ? current.toFixed(2) : Math.floor(current).toString()
      );
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, num, duration, isDecimal]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
