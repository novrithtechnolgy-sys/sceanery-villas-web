"use client";

import { useEffect, useMemo, useRef } from "react";
import ArrowButton from "./ArrowButton";

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
  autoSpeed = 0.5,
}: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const items = useMemo(() => {
    return Array.isArray(children) ? children : [children];
  }, [children]);

  const loopItems = useMemo(() => {
    return [...items, ...items];
  }, [items]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || items.length === 0) return;

    const halfWidth = el.scrollWidth / 2;

    el.scrollLeft = 0;

    autoScrollRef.current = setInterval(() => {
      if (!scrollRef.current) return;

      const node = scrollRef.current;
      node.scrollLeft += autoSpeed;

      if (node.scrollLeft >= halfWidth) {
        node.scrollLeft -= halfWidth;
      }
    }, 16);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [items.length, autoSpeed]);

  const normalizeScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const halfWidth = el.scrollWidth / 2;

    if (el.scrollLeft >= halfWidth) {
      el.scrollLeft -= halfWidth;
    } else if (el.scrollLeft < 0) {
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
        className="flex gap-6 overflow-x-auto md:gap-10"
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

      <div className="mt-8 flex items-center justify-center gap-4 md:mt-16 md:gap-6">
        <ArrowButton
          direction="left"
          onClick={() => scrollByCard("left")}
          disabled={false}
        />
        <ArrowButton
          direction="right"
          onClick={() => scrollByCard("right")}
          disabled={false}
        />
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}