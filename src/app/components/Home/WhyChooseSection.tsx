"use client";

import React, { useMemo, useRef, useState } from "react";
import Container from "../Container";
import ArrowButton from "../ArrowButton";
import {
  LockKeyhole,
  UsersRound,
  Bell,
  Palmtree,
} from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  id: string;
  title: string;
  description: string;
};

/* =========================================================
   DESKTOP CARD
========================================================= */

function FeatureCardDesktop({
  feature,
}: {
  feature: Feature;
}) {
  return (
    <div
      className="
        h-full
        rounded-[24px]
        border
        border-gray-300
        bg-white
        px-8
        py-8
        shadow-[0_8px_25px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]
      "
    >
      {/* Icon */}
      <div className="mb-5 text-[#FF751F]">
        {feature.icon}
      </div>

      {/* Title */}
      <h3
        className="
          max-w-[230px]
          font-body
          text-[20px]
          font-semibold
          leading-[1.4]
          text-gray-900
          lg:text-[21px]
        "
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          font-body
          text-[14px]
          leading-[30px]
          text-gray-700
        "
      >
        {feature.description}
      </p>
    </div>
  );
}

/* =========================================================
   MOBILE CARD
========================================================= */

function FeatureCardMobile({
  feature,
}: {
  feature: Feature;
}) {
  return (
    <div className="w-full shrink-0">
      <div
        className="
          flex
          min-h-[240px]
          flex-col
          items-center
          justify-start
          rounded-[24px]
          border
          border-gray-200
          bg-white
          p-6
          shadow-[0_8px_25px_rgba(0,0,0,0.04)]
        "
      >
        {/* Icon */}
        <div className="mb-4 text-[#FF751F]">
          {feature.icon}
        </div>

        {/* Title */}
        <h3
          className="
            text-center
            font-body
            text-[18px]
            font-semibold
            leading-[1.4]
            text-gray-900
          "
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            text-center
            font-body
            text-[14px]
            leading-[1.9]
            text-gray-700
          "
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function WhyChooseSection() {
  const features: Feature[] = useMemo(
    () => [
      {
        id: "1",
        title: "Your Home in Sri Lanka",
        description:
          "Enjoy an entire villa with a private pool, spacious living areas, and thoughtful amenities, all the comfort and freedom of a home away from home.",
        icon: (
          <LockKeyhole
            size={34}
            strokeWidth={2}
          />
        ),
      },
      {
        id: "2",
        title: "Your Dedicated Villa Team",
        description:
          "Private chefs, housekeepers, gardeners, and drivers care for you throughout your entire stay, with tuk-tuks and villa vehicles arranged for your convenience.",
        icon: (
          <UsersRound
            size={36}
            strokeWidth={2}
          />
        ),
      },
      {
        id: "3",
        title: "A Stay Made for You",
        description:
          "Tailored meals, flexible housekeeping, and local guidance personalise your stay and reveal nearby villages, beaches, and hidden gems.",
        icon: (
          <Bell
            size={36}
            strokeWidth={2}
          />
        ),
      },
      {
        id: "4",
        title: "One Villa. Explore the Island.",
        description:
          "Explore Sri Lanka from your villa through curated journeys, day trips, and island-wide experiences arranged by our team for a seamless adventure.",
        icon: (
          <Palmtree
            size={38}
            strokeWidth={2}
          />
        ),
      },
    ],
    []
  );

  const total = features.length;

  const [mIndex, setMIndex] = useState(0);

  /* =========================================================
     MOBILE SWIPE
  ========================================================= */

  const startX = useRef<number | null>(null);
  const lastX = useRef<number | null>(null);
  const dragging = useRef(false);

  /* =========================================================
     MOBILE NAVIGATION
     Circular / Infinite
  ========================================================= */

  const nextMobile = () => {
    setMIndex((current) =>
      current >= total - 1
        ? 0
        : current + 1
    );
  };

  const prevMobile = () => {
    setMIndex((current) =>
      current <= 0
        ? total - 1
        : current - 1
    );
  };

  /* =========================================================
     POINTER DOWN
  ========================================================= */

  const onPointerDown = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    dragging.current = true;

    startX.current = e.clientX;
    lastX.current = e.clientX;

    // Capture pointer so swipe doesn't get interrupted
    e.currentTarget.setPointerCapture?.(
      e.pointerId
    );
  };

  /* =========================================================
     POINTER MOVE
  ========================================================= */

  const onPointerMove = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!dragging.current) return;

    lastX.current = e.clientX;
  };

  /* =========================================================
     POINTER UP
  ========================================================= */

  const onPointerUp = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      !dragging.current ||
      startX.current === null ||
      lastX.current === null
    ) {
      return;
    }

    dragging.current = false;

    const dx =
      lastX.current - startX.current;

    startX.current = null;
    lastX.current = null;

    const THRESHOLD = 50;

    // Swipe RIGHT
    if (dx > THRESHOLD) {
      prevMobile();
    }

    // Swipe LEFT
    if (dx < -THRESHOLD) {
      nextMobile();
    }

    e.currentTarget.releasePointerCapture?.(
      e.pointerId
    );
  };

  /* =========================================================
     POINTER CANCEL
  ========================================================= */

  const onPointerCancel = () => {
    dragging.current = false;

    startX.current = null;
    lastX.current = null;
  };

  return (
    <section className="bg-white py-[32px] md:py-[64px]">
      <Container>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mb-8 md:mb-12">
          <h2
            className="
              text-center
              font-heading
              text-[22px]
              font-semibold
              tracking-[-0.5px]
              text-gray-900
              md:text-left
              md:text-[32px]
              md:leading-[42px]
              xl:text-[38px]
              xl:leading-[48px]
            "
          >
            <span className="text-gray-900">
              Why{" "}
            </span>

            <span className="text-[#FF751F]">
              Stay with Us?
            </span>
          </h2>
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}

        <div className="block sm:hidden">

          {/* Mobile Slider */}
          <div className="overflow-hidden">
            <div
              className="
                flex
                touch-pan-y
                transition-transform
                duration-500
                ease-out
                will-change-transform
              "
              style={{
                transform: `translateX(-${
                  mIndex * 100
                }%)`,
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              role="region"
              aria-label="Why stay with us"
            >
              {features.map((feature) => (
                <FeatureCardMobile
                  key={feature.id}
                  feature={feature}
                />
              ))}
            </div>
          </div>

          {/* =================================================
              MOBILE CONTROLS
          ================================================= */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-4
            "
          >
            {/* Previous */}
            <ArrowButton
              direction="left"
              disabled={false}
              onClick={prevMobile}
            />

            {/* Counter */}
            <div
              className="
                min-w-[40px]
                text-center
                font-body
                text-[14px]
                tabular-nums
                text-gray-800
              "
            >
              {mIndex + 1}/{total}
            </div>

            {/* Next */}
            <ArrowButton
              direction="right"
              disabled={false}
              onClick={nextMobile}
            />
          </div>
        </div>

        {/* =====================================================
            DESKTOP
        ===================================================== */}

        <div
          className="
            hidden
            gap-5
            sm:grid
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {features.map((feature) => (
            <FeatureCardDesktop
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}