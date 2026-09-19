"use client";

import { useEffect, useMemo, useRef } from "react";

type Props = {
  children: React.ReactNode[];
  cardWidth?: number;
  gap?: number;
  autoSpeed?: number;
};

export default function AutoScrollCarousel({
  children,
  cardWidth = 440,
  gap = 40,
  autoSpeed = 0.4,
}: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const animationRef = useRef<number | null>(null);
  const accumulatedRef = useRef(0);

  const items = useMemo(() => {
    return Array.isArray(children) ? children : [children];
  }, [children]);

  const loopItems = useMemo(() => {
    return [...items, ...items];
  }, [items]);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el || items.length === 0) return;

    accumulatedRef.current = 0;

    const animate = () => {
      const node = scrollRef.current;

      if (!node) return;

      const halfWidth = node.scrollWidth / 2;

      // Accumulate fractional movement
      accumulatedRef.current += autoSpeed;

      // Only move when we have at least 1px
      const pixelsToMove = Math.floor(accumulatedRef.current);

      if (pixelsToMove > 0) {
        node.scrollLeft += pixelsToMove;

        accumulatedRef.current -= pixelsToMove;
      }

      // Infinite loop
      if (node.scrollLeft >= halfWidth) {
        node.scrollLeft -= halfWidth;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [items.length, autoSpeed]);

  const normalizeScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    const halfWidth = el.scrollWidth / 2;

    if (el.scrollLeft >= halfWidth) {
      el.scrollLeft -= halfWidth;
    }

    if (el.scrollLeft < 0) {
      el.scrollLeft += halfWidth;
    }
  };

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollRef.current;

    if (!el) return;

    const amount = cardWidth + gap;

    el.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });

    setTimeout(() => {
      normalizeScroll();
    }, 450);
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto md:gap-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {loopItems.map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}