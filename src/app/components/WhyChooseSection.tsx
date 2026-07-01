"use client";

import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import Container from "./Container";
import ArrowButton from "./ArrowButton";
import { MdKitchen } from "react-icons/md";
import { FaBowlFood, FaMapLocation } from "react-icons/fa6";
import { FaLock, FaPlay, FaSort, FaSwimmingPool, FaTv } from "react-icons/fa";

type Feature = {
  icon: React.ReactNode;
  id: string;
  title: string;
  description: string;
};

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-10 w-10 rounded-lg bg-[#FF751F] text-white flex items-center justify-center">
      {children}
    </div>
  );
}



/* ---------------- DESKTOP CARD (your original layout) ---------------- */
function FeatureCardDesktop({ feature }: { feature: Feature }) {
  return (
    <div className="relative">
      <div className="relative flex items-center justify-center gap-4 mb-4">
        <div className="bg-white text-center rounded-[22px] border-2 border-gray-300 p-8">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            {feature.icon}

            <h3 className="font-body text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">{feature.title}</h3>
          </div>

          <p className="font-body text-[14px] md:text-[18px] leading-7 text-gray-700">{feature.description}</p>
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
        {/* content */}
        <div className="p-4 flex flex-col items-start justify-center gap-4">
          <div className="flex flex-col items-center text-center gap-4 justify-center w-full">
            <IconBox>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </IconBox>

            <h3 className="font-body text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">{feature.title}</h3>
          </div>

          <p className="font-body text-[14px] leading-6 text-gray-700 text-center">{feature.description}</p>
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
        icon: <FaBowlFood size={30} className="p-3 rounded-[25%] bg-[#FF751F] text-white h-12 w-12"/>
      },
      {
        id: "2",
        title: "Exclusive Use",
        description:
          "No strangers at the pool. No crowded buffets. The entire property is yours, ensuring total privacy and safety.",
        icon: <FaLock size={30} className="p-3 rounded-[25%] bg-[#FF751F] text-white h-12 w-12"/>
      },
      {
        id: "3",
        title: "The Real Bentota",
        description:
          "We guide you beyond the tourist traps. River safaris, hidden temples, and the best local spots, curated by our team.",
        icon: <FaMapLocation size={30} className="p-3 rounded-[25%] bg-[#FF751F] text-white h-12 w-12"/>
      },
      {
        id: "4",
        title: "Work and Play",
        description:
          "With high speed fiber internet and dedicated workspaces, our villas are perfect for digital nomads and workations.",
        icon: <FaTv size={30} className="p-3 rounded-[25%] bg-[#FF751F] text-white h-12 w-12"/>
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
          <h2 className="font-heading text-[20px] md:text-[36px] xl:text-[46px] leading-tight ">
            <span className="italic  text-gray-900">Why Stay with</span>{" "}
            <span className="font-semibold text-[#FF751F]">Scenery Villas?</span>
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