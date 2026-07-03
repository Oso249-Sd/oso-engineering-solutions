"use client";

import {useEffect, useRef, useState} from "react";
import {useInView} from "framer-motion";
import {formatNumber} from "@/lib/utils";

export function AnimatedCounter({
  value,
  suffix = "",
  locale
}: {
  value: number;
  suffix?: string;
  locale: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {once: true, margin: "-60px"});
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {formatNumber(count, locale)}
      {suffix}
    </span>
  );
}
