"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "../Container";
import ArrowButton from "../ArrowButton";

type Feature = {
  id: string;
  title: string;
  description: string;
  image: string;
};

function FeatureCard({ item }: { item: Feature }) {
  return (
    <div className="rounded-[20px] w-full overflow-hidden bg-white border border-gray-200 md:shadow-[0_14px_34px_rgba(0,0,0,0.10)]">
      {/* Image */}
      <div className="relative h-[200px] sm:h-[200px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 33vw"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-8">
        <h3 className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">
          {item.title}
        </h3>

        <p className="mt-4 md:mt-4 font-[helvetica] text-[14px] md:text-[16px] leading-7 text-gray-700">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyDifferent() {
  const items: Feature[] = useMemo(
    () => [
      {
        id: "1",
        title: "Privacy First",
        description:
          "We believe your holiday belongs to you. Our villas are designed to be private sanctuaries where you can be yourself, away from the eyes of strangers.",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940663/dji_mimo_20260302_174346_0_1772510316232_photo_qehx5t.webp",
      },
      {
        id: "2",
        title: "Local Roots",
        description:
          "We are proudly Sri Lankan. Our staff are from the local villages, our food is sourced from local markets, and our experiences connect you with the local culture.",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1772960568/152aaaa6601c81b5d07fc36dda998d95d8137683_aetolo.webp",
      },
      {
        id: "3",
        title: "Professional Standards",
        description:
          "While our vibe is relaxed, our standards are rigorous. We combine the warmth of a family run business with professional housekeeping, maintenance, and guest service protocols.",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939529/dji_mimo_20260302_175004_0_1772510342526_photo_jprutg.webp",
      },
    ],
    []
  );

  // Mobile slider state
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  // Update active index while scrolling (mobile only)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Each slide has: min-w + gap. We infer "page" by closest snap point.
        const children = Array.from(el.children) as HTMLElement[];
        if (!children.length) return;

        const elRect = el.getBoundingClientRect();
        const centerX = elRect.left + elRect.width / 2;

        let bestIdx = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        children.forEach((child, idx) => {
          const r = child.getBoundingClientRect();
          const childCenter = r.left + r.width / 2;
          const dist = Math.abs(childCenter - centerX);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        });

        setActive(bestIdx);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToIndex = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children.item(idx) as HTMLElement | null;
    if (!child) return;
    child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="py-10 md:py-20 ">
      <Container>
        {/* Heading */}
        <h2 className="text-center font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
          <span className="italic">Why We Are</span>{" "}
          <span className="font-semibold">Different</span>
        </h2>

        {/* ✅ MOBILE: swipe carousel like your screenshot */}
        <div className="mt-8 md:mt-16 md:hidden">
          <div
            ref={scrollerRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="
                  snap-center
                  min-w-[100%]
                  sm:min-w-[100%]
                "
              >
                <FeatureCard item={item} />
              </div>
            ))}
          </div>

          {/* 1/3 indicator */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <ArrowButton
             direction="left"
             disabled={active === 0}
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            />
            <div className="text-[12px] font-[helvetica] text-gray-600">
              {active + 1}/{items.length}
            </div>

            <ArrowButton
              direction="right"
              disabled={active === items.length - 1}
              onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
            />

  
          </div>
        </div>

        {/* ✅ TABLET/DESKTOP: normal grid */}
        <div className="mt-14 hidden md:grid grid-cols-2 md:grid-cols-3 md:gap-10">
          {items.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}