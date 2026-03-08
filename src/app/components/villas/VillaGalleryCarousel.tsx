"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { urlFor } from "@/sanity/lib/image";
import ArrowButton from "../ArrowButton";

export default function VillaGalleryCarousel({
  items = [],
}: {
  items: any[];
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // duplicate items for infinite illusion
  const loopItems = [...items, ...items];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    autoScrollRef.current = setInterval(() => {
      if (!el) return;

      el.scrollLeft += 0.1; // speed

      // when reaching half width reset
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 16); // ~60fps

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [items.length]);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = 480;

    el.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  if (!items.length) {
    return <div className="text-sm text-gray-500">No images yet</div>;
  }

  return (
    <section className="w-full overflow-hidden py-10 md:py-20">
      <div className="mt-6 overflow-hidden md:mt-12">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-4 md:gap-10 md:px-0"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {loopItems.map((imgObj, i) => {
            const img = urlFor(imgObj).width(1400).quality(90).url();

            return (
              <div
                key={imgObj._key ? `${imgObj._key}-${i}` : i}
                className="relative shrink-0 w-[80vw] md:w-[440px]"
              >
                <div className="relative h-[230px] overflow-hidden rounded-[28px] bg-gray-100 md:h-[300px]">
                  <Image
                    src={img}
                    alt={imgObj.alt || `Villa image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 440px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 md:mt-16 md:gap-6">
        <ArrowButton direction="left" onClick={() => scrollByCard("left")} />
        <ArrowButton direction="right" onClick={() => scrollByCard("right")} />
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}