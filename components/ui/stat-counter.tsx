"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Isolated Client Component for Viewport-Triggered Stat Counter
 *
 * Requirements (design-system.md §12.2):
 * - Isolates client-side logic to the smallest possible boundary
 * - Counts up only when entering the viewport
 * - Respects prefers-reduced-motion by displaying final value immediately
 * - Uses cubic-bezier ease-out curve for fast, purposeful counting
 */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1000,
  className,
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic curve (fast start, deliberate finish)
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.round(easedProgress * value);

            setDisplayValue(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef} className={cn("font-mono tabular-nums", className)}>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        {prefix}
        <span>{displayValue}</span>
        {suffix && (
          <span className="text-primary font-mono ml-0.5 select-none font-semibold">
            {suffix}
          </span>
        )}
      </span>
    </span>
  );
}
