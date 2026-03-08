"use client";

import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import Container from "./Container";
import ArrowButton from "./ArrowButton";

type Feature = {
  id: string;
  title: string;
  description: string;
  image: string;
};

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center">
      {children}
    </div>
  );
}



/* ---------------- DESKTOP CARD (your original layout) ---------------- */
function FeatureCardDesktop({ feature }: { feature: Feature }) {
  return (
    <div className="relative">
      <div className="relative h-[240px] xl:h-[300px] rounded-[24px] overflow-hidden mr-8 xl:mr-14">
        <Image src={feature.image} alt={feature.title} fill className="object-cover" />
      </div>

      <div className="relative -mt-14 pl-14 xl:pl-24">
        <div className="bg-white rounded-[22px] shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-gray-100 p-8">
          <div className="flex items-center gap-4 mb-4">
            <IconBox>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </IconBox>

            <h3 className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">{feature.title}</h3>
          </div>

          <p className="font-[helvetica] text-[14px] md:text-[16px] leading-7 text-gray-700">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MOBILE CARD (matches screenshot) ---------------- */
function FeatureCardMobile({ feature }: { feature: Feature }) {
  return (
    <div className="w-full shrink-0">
      {/* outer card */}
      <div className="rounded-[28px] bg-white overflow-hidden border border-gray-300">
        {/* image */}
        <div className="relative h-[220px]">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>

        {/* content */}
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <IconBox>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </IconBox>

            <h3 className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">{feature.title}</h3>
          </div>

          <p className="font-[helvetica] text-[14px] leading-6 text-gray-700">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseSection() {
  const features: Feature[] = useMemo(
    () => [
      {
        id: "1",
        title: "Private Dining",
        description:
          "From Sri Lankan rice and curry feasts to seafood BBQs, our private chefs craft meals around your cravings.",
        image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940663/dji_mimo_20260302_174346_0_1772510316232_photo_qehx5t.webp",
      },
      {
        id: "2",
        title: "Exclusive Use",
        description:
          "No strangers at the pool. No crowded buffets. The entire property is yours, ensuring total privacy and safety.",
        image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940785/IMG-20250927-WA0021_xbraaf.jpg",
      },
      {
        id: "3",
        title: "The Real Bentota",
        description:
          "We guide you beyond the tourist traps. River safaris, hidden temples, and the best local spots, curated by our team.",
        image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772941365/upftzhasthk4h7vhswa9_qlbgjx.webp",
      },
      {
        id: "4",
        title: "Work and Play",
        description:
          "With high speed fiber internet and dedicated workspaces, our villas are perfect for digital nomads and workations.",
        image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp",
      },
    ],
    []
  );

  const total = features.length;
  const [mIndex, setMIndex] = useState(0);

  // swipe (mobile)
  const startX = useRef<number | null>(null);
  const lastX = useRef<number | null>(null);
  const dragging = useRef(false);

  const mCanPrev = mIndex > 0;
  const mCanNext = mIndex < total - 1;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    lastX.current = e.clientX;
  };
  const onPointerUp = () => {
    if (!dragging.current || startX.current == null || lastX.current == null) return;
    dragging.current = false;

    const dx = lastX.current - startX.current;
    startX.current = null;
    lastX.current = null;

    const TH = 50;
    if (dx > TH && mCanPrev) setMIndex((v) => Math.max(0, v - 1));
    if (dx < -TH && mCanNext) setMIndex((v) => Math.min(total - 1, v + 1));
  };
  const onPointerCancel = () => {
    dragging.current = false;
    startX.current = null;
    lastX.current = null;
  };

  return (
    <section className="py-10  sm:py-20 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
            <span className="italic text-gray-900">Why Choose</span>{" "}
            <span className="font-semibold text-gray-900">Scenery Villas</span>
          </h2>
        </div>

        {/* ---------------- MOBILE (sm and below): carousel like screenshot ---------------- */}
        <div className="block sm:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform touch-pan-y"
              style={{ transform: `translateX(-${mIndex * 100}%)`, touchAction: "pan-y" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              role="region"
              aria-label="Why choose scenery villas carousel"
            >
              {features.map((f) => (
                <FeatureCardMobile key={f.id} feature={f} />
              ))}
            </div>
          </div>

          {/* bottom controls (like 1/4 with arrows) */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <ArrowButton direction="left" disabled={!mCanPrev} onClick={() => setMIndex((v) => Math.max(0, v - 1))} />
            <div className="text-[14px] text-gray-800 tabular-nums">
              {mIndex + 1}/{total}
            </div>
            <ArrowButton
              direction="right"
              disabled={!mCanNext}
              onClick={() => setMIndex((v) => Math.min(total - 1, v + 1))}
            />
          </div>
        </div>

        {/* ---------------- DESKTOP/TABLET (sm and up): your grid ---------------- */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-2 gap-4 xl:gap-10">
          {features.map((feature) => (
            <FeatureCardDesktop key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}