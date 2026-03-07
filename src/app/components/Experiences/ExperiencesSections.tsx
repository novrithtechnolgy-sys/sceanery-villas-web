"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Container from "../Container";

/* ---------------- TYPES ---------------- */
type ExperienceCard = {
  _key: string;
  title: string;
  desc: string;
  image: any;
};

type ExperienceGroup = {
  _id: string;
  eyebrowItalic: string;
  titleBold: string;
  subtitle?: string;
  cards: ExperienceCard[];
};

/* ---------------- UI: CARD (matches screenshot style) ---------------- */
function ExperienceCardMobile({ item }: { item: ExperienceCard }) {
  const imgUrl = item.image
    ? urlFor(item.image).width(1400).quality(85).url()
    : "";

  return (
    <div className="relative">
      {/* Image */}
      <div className="relative h-[200px] md:h-[220px] rounded-[20px] overflow-hidden">
        <Image
          src={imgUrl}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 33vw"
        />
      </div>

      {/* Bottom overlay content */}
      <div className="relative -mt-10 md:px-4 pb-3">
        <div className="bg-white rounded-[20px] border border-gray-200 shadow-[0_10px_26px_rgba(0,0,0,0.10)] p-4 md:p-8">
          <h4 className="font-[helvetica] text-[16px] font-semibold text-gray-900">
            {item.title}
          </h4>
          <p className="mt-4 md:mt-8 font-[helvetica] text-[14px] leading-6 text-gray-700">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI: MOBILE CAROUSEL PER GROUP ---------------- */
function MobileCardCarousel({ cards }: { cards: ExperienceCard[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        if (!children.length) return;

        const r = el.getBoundingClientRect();
        const centerX = r.left + r.width / 2;

        let bestIdx = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        children.forEach((child, idx) => {
          const cr = child.getBoundingClientRect();
          const childCenter = cr.left + cr.width / 2;
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

  const prev = () => scrollToIndex(Math.max(0, active - 1));
  const next = () => scrollToIndex(Math.min(cards.length - 1, active + 1));

  return (
    <div className="mt-8">
      {/* Slider */}
      <div
        ref={scrollerRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth
          snap-x snap-mandatory    
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {cards.map((c) => (
          <div
            key={c._key}
            className="snap-center min-w-[100%]"
          >
            <ExperienceCardMobile item={c} />
          </div>
        ))}
      </div>

      {/* Arrows (like screenshot) */}
      {cards.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-10">
          <button
            aria-label="Previous"
            onClick={prev}
            className="text-gray-600 active:scale-[0.98]"
          >
            <span className="text-[22px] leading-none">‹</span>
          </button>

          <button
            aria-label="Next"
            onClick={next}
            className="text-gray-600 active:scale-[0.98]"
          >
            <span className="text-[22px] leading-none">›</span>
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------- UI: DESKTOP CARD (keep your existing overlap style) ---------------- */
function ExperienceCardDesktop({ item }: { item: ExperienceCard }) {
  const imgUrl = item.image ? urlFor(item.image).width(1400).quality(85).url() : "";

  return (
    <div className="relative">
      <div className="relative h-[240px] xl:h-[300px] rounded-[24px] overflow-hidden mr-8 xl:mr-14">
        <Image src={imgUrl} alt={item.title} fill className="object-cover" />
      </div>

      <div className="relative -mt-14 pl-14 xl:pl-24">
        <div className="bg-white rounded-[22px] shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-gray-100 p-8">
          <h3 className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-3 font-[helvetica] text-[14px] md:text-[16px] leading-7 text-gray-700">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- GROUP ---------------- */
function ExperienceGroupUI({ group }: { group: ExperienceGroup }) {
  const cards = useMemo(() => group.cards ?? [], [group.cards]);

  return (
    <section className="py-10 md:py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="font-[timesTen] text-[18px] md:text-[36px] xl:text-[46px] leading-tight">
          <span className="italic">{group.eyebrowItalic}</span>{" "}
          <span className="font-semibold font-[helvetica]">{group.titleBold}</span>
        </h3>

        {group.subtitle && (
          <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-6 md:leading-relaxed">
            {group.subtitle}
          </p>
        )}
      </div>

      {/* ✅ MOBILE: one card slider */}
      <div className="md:hidden mt-8">
        <MobileCardCarousel cards={cards} />
      </div>

      {/* ✅ DESKTOP: grid */}
      <div className="hidden md:grid mt-16 grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mx-auto">
        {cards.map((c) => (
          <ExperienceCardDesktop key={c._key} item={c} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- PAGE SECTION ---------------- */
export default function ExperiencesSectionsSanity() {
  const [groups, setGroups] = useState<ExperienceGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/experience-groups", { cache: "no-store" });
        const data = await res.json();
        if (!mounted) return;
        setGroups(Array.isArray(data) ? data : []);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <div className="py-20 text-center text-gray-500">Loading experiences...</div>;
  }

  if (!groups.length) {
    return <div className="py-20 text-center text-gray-500">No Experience Groups found in Sanity.</div>;
  }

  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        {groups.map((g) => (
          <ExperienceGroupUI key={g._id} group={g} />
        ))}
      </Container>
    </section>
  );
}