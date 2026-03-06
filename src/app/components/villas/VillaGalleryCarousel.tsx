"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

const CARD_W = 440;
const GAP = 40;
const INITIAL_OFFSET = 220;

export default function VillaGalleryCarousel({
  items = [],
}: {
  items: any[];
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft = INITIAL_OFFSET;
  }, []);

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
    <section className="w-full py-12 md:py-20 overflow-hidden">

      <div className="mt-6 md:mt-12 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-x-auto scroll-smooth px-4 md:px-0"
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
                <div className="relative h-[230px] md:h-[300px] rounded-[28px] overflow-hidden bg-gray-100">
                  <Image
                    src={img}
                    alt={imgObj.alt || `Villa image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 80vw, 440px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* arrows */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-12">
        <button
          type="button"
          onClick={() => scrollByCard("left")}
          className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-gray-300 bg-white shadow flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
        </button>

        <button
          type="button"
          onClick={() => scrollByCard("right")}
          className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-gray-300 bg-white shadow flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
        </button>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}