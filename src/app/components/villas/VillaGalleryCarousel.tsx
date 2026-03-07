"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import ArrowButton from "../ArrowButton";

const CARD_W = 440;
const GAP = 40;
const INITIAL_OFFSET = 220;

export default function VillaGalleryCarousel({
  items = [],
}: {
  items: any[];
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 2);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = INITIAL_OFFSET;
    updateScrollState();

    const handleScroll = () => updateScrollState();
    const handleResize = () => updateScrollState();

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [items.length]);

  const scrollByCard = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = CARD_W + GAP;

    scrollRef.current.scrollBy({
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
          className="flex gap-6 overflow-x-auto scroll-smooth px-4 md:gap-10 md:px-0"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingRight: "80px",
          }}
        >
          {items.map((imgObj, i) => {
            const img = urlFor(imgObj).width(1400).quality(90).url();

            return (
              <div
                key={imgObj._key || i}
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
        <ArrowButton
          direction="left"
          disabled={!canScrollLeft}
          onClick={() => scrollByCard("left")}
        />

        <ArrowButton
          direction="right"
          disabled={!canScrollRight}
          onClick={() => scrollByCard("right")}
        />
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}