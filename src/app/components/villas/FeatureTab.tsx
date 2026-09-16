"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../../../sanity/lib/image";
import { FaAccessibleIcon, FaHome, FaSwimmingPool } from "react-icons/fa";
import Container from "../Container";
import ArrowButton from "../ArrowButton";

export default function FeatureTab({ villa }: { villa: any }) {
  const features = villa.features || [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!features.length) {
    return <div className="text-sm text-gray-600">No features available.</div>;
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const activeFeature = features[activeIndex];
  const activeImg = activeFeature?.image
    ? urlFor(activeFeature.image).width(1400).quality(85).url()
    : "";

  return (
    <section className="py-[32px] md:py-[64px]">

        {/* Section Title */}
        <h2 className="                font-heading
                text-[22px]
                font-bold
                tracking-[-0.5px]
                text-gray-900
                md:text-[32px]
                md:leading-[42px]
                xl:text-[38px]
                xl:leading-[48px]
                text-center
                md:mb-12">
          <span className="">Key</span>{" "}
          <span className="text-[#FF751F]">Features</span>
        </h2>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <MobileFeatureCarousel cards={features}/>

        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mx-auto px-4 md:px-8 lg:px-12 xl:mx-auto xl:px-12 max-w-[1430px]">
          {features.map((feature: any, i: number) => {
            const img = feature.image
              ? urlFor(feature.image).width(1400).quality(85).url()
              : "";

            return (
              <div
                key={i}
                className="overflow-hidden bg-white"
              >
                <div className="relative h-[340px] w-full rounded-[20px]">
                  {img && (
                    <Image
                      src={img}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-[20px]"
                    />
                  )}
                </div>

                <div className="pt-8 px-1">
                  <div className="mb-4 flex items-center gap-8">
                    <h3 className="              font-heading
              text-[18px]
              font-semibold
              leading-tight
              text-gray-900
              transition-colors
              hover:text-[#FF751F]
              md:text-[20px]">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="              mt-4
    
              font-body
              text-[14px]
              leading-[2]
              text-gray-800
              md:text-[14px]
              lg:text-[14px]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
}

function MobileFeatureCarousel({
  cards,
}: {
  cards: any[];
}) {
  const [mobileIndex, setMobileIndex] = useState(0);

  const [touchStart, setTouchStart] =
    useState<number | null>(null);

  const [touchEnd, setTouchEnd] =
    useState<number | null>(null);

  const total = cards.length;

  /* =========================================================
     NEXT
  ========================================================= */

  const nextMobile = () => {
    setMobileIndex((prev) =>
      prev >= total - 1
        ? 0
        : prev + 1
    );
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const prevMobile = () => {
    setMobileIndex((prev) =>
      prev <= 0
        ? total - 1
        : prev - 1
    );
  };

  /* =========================================================
     TOUCH START
  ========================================================= */

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchEnd(null);

    setTouchStart(
      e.targetTouches[0].clientX
    );
  };

  /* =========================================================
     TOUCH MOVE
  ========================================================= */

  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchEnd(
      e.targetTouches[0].clientX
    );
  };

  /* =========================================================
     TOUCH END
  ========================================================= */

  const handleTouchEnd = () => {
    if (
      touchStart === null ||
      touchEnd === null
    ) {
      return;
    }

    const distance =
      touchStart - touchEnd;

    const minSwipeDistance = 50;

    /* Swipe LEFT */
    if (distance > minSwipeDistance) {
      nextMobile();
    }

    /* Swipe RIGHT */
    if (distance < -minSwipeDistance) {
      prevMobile();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  /* =========================================================
     EMPTY
  ========================================================= */

  if (!total) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden">

      {/* =====================================================
          MOBILE SLIDER
      ===================================================== */}

      <div
        className="
          mt-8
          overflow-hidden
          pl-4
          touch-pan-y
        "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        <div
          className="
            flex
            gap-4
            transition-transform
            duration-500
            ease-out
            will-change-transform
          "
          style={{
            transform: `
              translateX(
                calc(
                  -${mobileIndex} * (100vw - 48px)
                )
              )
            `,
          }}
        >

          {cards.map(
            (card: any, index: number) => {
              const img = card.image
                ? urlFor(card.image)
                    .width(900)
                    .quality(85)
                    .url()
                : "";

              return (
                <article
                  key={
                    card._key ||
                    card._id ||
                    index
                  }
                  className="
                    w-[calc(100vw-48px)]
                    shrink-0
                  "
                >

                  {/* =========================================
                      IMAGE
                  ========================================= */}

                  <div
                    className="
                      relative
                      h-[270px]
                      w-full
                      overflow-hidden
                      rounded-[24px]
                      bg-gray-100
                    "
                  >

                    {img && (
                      <Image
                        src={img}
                        alt={
                          card.title ||
                          "Villa highlight"
                        }
                        fill
                        sizes="calc(100vw - 48px)"
                        className="
                          object-cover
                        "
                      />
                    )}

                  </div>

                  {/* =========================================
                      CONTENT
                  ========================================= */}

                  <div className="px-1 pt-6">

                    <h4
                      className="
                        font-body
                        text-[16px]
                        font-semibold
                        leading-tight
                        text-gray-900
                      "
                    >
                      {card.title}
                    </h4>

                    {card.desc && (
                      <p
                        className="
                          mt-4
                          font-body
                          text-[14px]
                          leading-[1.9]
                          text-gray-800
                        "
                      >
                        {card.desc}
                      </p>
                    )}

                  </div>

                </article>
              );
            }
          )}

        </div>

      </div>

      {/* =====================================================
          MOBILE CONTROLS
      ===================================================== */}

      {total > 1 && (
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-5
          "
        >

          {/* LEFT */}

          <ArrowButton
            direction="left"
            disabled={false}
            onClick={prevMobile}
          />

          {/* COUNTER */}

          <div
            className="
              min-w-[40px]
              text-center
              font-body
              text-[14px]
              tabular-nums
              text-gray-900
            "
          >
            {mobileIndex + 1}/{total}
          </div>

          {/* RIGHT */}

          <ArrowButton
            direction="right"
            disabled={false}
            onClick={nextMobile}
          />

        </div>
      )}

    </div>
  );
}

