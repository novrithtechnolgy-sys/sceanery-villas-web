"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { urlFor } from "../../../sanity/lib/image";
import Container from "../Container";
import ArrowButton from "../ArrowButton";

/* =========================================================
   OVERVIEW TAB
========================================================= */

export default function OverviewTab({
  villa,
}: {
  villa: any;
}) {
  const introImg = villa.intro?.image
    ? urlFor(villa.intro.image)
        .width(1200)
        .quality(85)
        .url()
    : "";

  const highlightCards =
    villa.highlights?.cards?.slice(0, 3) || [];

  return (
    <section className="bg-white">


        {/* =================================================
            INTRO
        ================================================= */}

        <div
          className="mx-auto px-4 md:px-8 lg:px-12 xl:mx-auto xl:px-12 max-w-[1430px]
            flex
            flex-col
            gap-8
            pb-[32px] md:pb-[64px]
            md:grid
            md:grid-cols-13
            md:items-center
            md:gap-10

            xl:gap-16
          "
        > 

          {/* IMAGE */}

          <div
            className="
              relative
              order-2
              md:order-1

              h-[300px]
              w-full

              overflow-hidden
              rounded-[22px]
              bg-gray-100

              md:col-span-6
              md:h-[350px]

              lg:h-[360px]

              xl:h-[440px]
            "
          >
            {introImg && (
              <Image
                src={introImg}
                alt={
                  villa.intro?.headingBold ||
                  "Villa overview"
                }
                fill
                priority
                sizes="
                  (max-width: 767px) 100vw,
                  (max-width: 1024px) 42vw,
                  455px
                "
                className="
                  object-cover
                  
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />
            )}
          </div>

          {/* CONTENT */}

          <div
            className="
              order-1
              md:order-2

              md:col-span-7
              md:pl-2

              xl:pl-4
            "
          >
            <h2
              className="font-heading text-[22px] md:text-[32px] xl:text-[38px] font-bold md:leading-[42px] xl:leading-[48px] tracking-[-0.5px] text-gray-900 text-center md:text-left"
            >
              {villa.intro?.headingItalic && (
                <span className="text-black">
                  {villa.intro.headingItalic}{" "}
                </span>
              )}
              <br className="sm:hidden" />
              {villa.intro?.headingBold && (
                <span className="text-[#FF751F]">
                  {villa.intro.headingBold}
                </span>
              )}
            </h2>

            {villa.intro?.description && (
              <p
                className="
                  mt-5
                  max-w-[720px]
                  font-body
                  text-[15px]
                  leading-[1.8]
                  text-gray-800
                  md:mt-7
                  md:text-[16px]
                  md:leading-[1.8]
                  xl:text-[17px]
                  xl:leading-[1.75]
                  text-center
                  md:text-left
                "
              >
                {villa.intro.description}
              </p>
            )}
          </div> 

        </div>
      

        {/* =================================================
            HIGHLIGHTS
        ================================================= */}

        {!!highlightCards.length && (
          <HighlightsSection
            villa={villa}
            cards={highlightCards}
          />
        )}


    </section>
  );
}

/* =========================================================
   HIGHLIGHTS SECTION
========================================================= */

function HighlightsSection({
  villa,
  cards,
}: {
  villa: any;
  cards: any[];
}) {
  return (
    <div
      className="py-[32px] md:py-[64px]">

      {/* =================================================
          HEADING
      ================================================= */}

      <div className="mx-auto px-4 md:px-8 lg:px-12 xl:mx-auto xl:px-12 max-w-[1430px] text-center">

        <h3 className="font-heading text-[22px] md:text-[32px] xl:text-[38px] font-bold md:leading-[42px] xl:leading-[48px] tracking-[-0.5px] text-gray-900 text-center">
          {villa.highlights?.headingItalic && (
            <span className="text-black">
              {villa.highlights.headingItalic}{" "}
            </span>
          )}

          {villa.highlights?.headingBold && (
            <span className="text-[#FF751F]">
              {villa.highlights.headingBold}
            </span>
          )}
        </h3>

        {/* DESCRIPTION */}

        {villa.highlights?.description && (
          <p
            className="
              mx-auto
              mt-4
              max-w-[850px]
              font-body
              text-[14px]
              leading-[1.8]
              text-gray-700
              md:mt-8
              md:text-[16px]
              md:leading-[1.8]
            "
          >
            {villa.highlights.description}
          </p>
        )}
      </div>

      {/* =================================================
          MOBILE
      ================================================= */}

      <div className="md:hidden">
        <MobileHighlightsCarousel cards={cards} />
      </div>

      {/* =================================================
          DESKTOP
      ================================================= */}

      <div
        className="mx-auto px-4 md:px-8 lg:px-12 xl:mx-auto xl:px-12 max-w-[1430px]
          mt-12
          hidden
          md:grid
          md:grid-cols-3
          md:gap-6
          lg:gap-7
          xl:gap-8
        "
      >
        {cards.map(
          (card: any, index: number) => (
            <HighlightCard
              key={
                card._key ||
                card._id ||
                index
              }
              card={card}
            />
          )
        )}
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP / COMMON CARD
========================================================= */

function HighlightCard({
  card,
}: {
  card: any;
}) {
  const img = card.image
    ? urlFor(card.image)
        .width(900)
        .quality(85)
        .url()
    : "";

  return (
    <article className="w-full">

      {/* IMAGE */}

      <div
        className="
          relative
          h-[240px]
          w-full
          overflow-hidden
          rounded-[22px]
          bg-gray-100

          lg:h-[270px]

          xl:h-[295px]
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
            sizes="
              (max-width: 1024px) 33vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              hover:scale-[1.03]
            "
          />
        )}
      </div>

      {/* CONTENT */}

      <div className="pt-6 px-1">

        <h4
          className="
            font-body
            text-[18px]
            font-semibold
            leading-[1.35]
            text-gray-900

            md:text-[19px]

            xl:text-[20px]
          "
        >
          {card.title}
        </h4>

        {card.desc && (
          <p
            className="
              mt-4
              max-w-[390px]
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

/* =========================================================
   MOBILE HIGHLIGHTS CAROUSEL
   Native horizontal scroll
   No Swiper
========================================================= */


export function MobileHighlightsCarousel({
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
      prev >= total - 1 ? 0 : prev + 1
    );
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const prevMobile = () => {
    setMobileIndex((prev) =>
      prev <= 0 ? total - 1 : prev - 1
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

    if (distance > minSwipeDistance) {
      nextMobile();
    }

    if (distance < -minSwipeDistance) {
      prevMobile();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!total) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden">

      {/* =====================================================
          SLIDER
      ===================================================== */}

      <div
        className="
          mt-8
          w-full
          overflow-hidden
          pl-4
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
            ease-out
            will-change-transform
          "
          style={{
            transform: `translateX(
              calc(-${mobileIndex} * (100vw - 40px))
            )`,
          }}
        >
          {cards.map(
            (card: any, index: number) => {
              const img = card.image
                ? urlFor(card.image)
                    .width(1000)
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
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* =========================================
                      CONTENT
                  ========================================= */}

                  <div className="pt-6 pl-1">

                    <h4
                      className="
                        font-body
                        text-[16px]
                        font-semibold
                        leading-[1.4]
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
          CONTROLS
      ===================================================== */}

      {total > 1 && (
        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-5
          "
        >
          <ArrowButton
            direction="left"
            disabled={false}
            onClick={prevMobile}
          />

          <span
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
          </span>

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