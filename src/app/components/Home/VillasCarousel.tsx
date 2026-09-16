"use client";

import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ArrowButton from "../ArrowButton";
import Container from "../Container";

type Villa = {
  _id: string;
  badge?: string;
  title: string;
  description?: string;
  image: any;
  bedrooms?: number;
  sleeps?: number;
  feature?: string;
  cta?: string;
  slug?: string;
};

/* =========================================================
   VILLA CARD - DESKTOP
========================================================= */

function VillaCard({ villa }: { villa: Villa }) {
  const imgUrl = villa.image
    ? urlFor(villa.image)
        .width(1400)
        .quality(85)
        .url()
    : "";

  const href = villa.slug
    ? `/villas/${villa.slug}`
    : "#";

  return (
    <div className="w-full shrink-0">
      {/* Image */}
      <Link href={href} className="block">
        <div
          className="
            relative
            h-[320px]
            w-full
            overflow-hidden
            rounded-[24px]
            md:h-[320px]
            lg:h-[320px]
          "
        >
          {imgUrl && (
            <Image
              src={imgUrl}
              alt={villa.title}
              fill
              sizes="
                (max-width: 767px) 100vw,
                (max-width: 1023px) 50vw,
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

          {/* Badge */}
          {villa.badge && (
            <div className="absolute left-4 top-4 md:left-5 md:top-5">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  font-body
                  text-[14px]
                  text-gray-900
                  shadow-sm
                "
              >
                {villa.badge}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="px-1 pt-8">
        <Link href={href}>
          <h3
            className="
              font-heading
              text-[18px]
              font-semibold
              leading-tight
              text-gray-900
              transition-colors
              hover:text-[#FF751F]
              md:text-[20px]
            "
          >
            {villa.title}
          </h3>
        </Link>

        {villa.description && (
          <p
            className="
              mt-4
              max-w-[390px]
              font-body
              text-[14px]
              leading-[2]
              text-gray-800
              md:text-[14px]
              lg:text-[14px]
            "
          >
            {villa.description}
          </p>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE CARD
========================================================= */

function VillaCardMobile({
  villa,
}: {
  villa: Villa;
}) {
  const imgUrl = villa.image
    ? urlFor(villa.image)
        .width(1400)
        .quality(85)
        .url()
    : "";

  const href = villa.slug
    ? `/villas/${villa.slug}`
    : "#";

  return (
    <div
      className="
        w-[calc(100vw-48px)]
        shrink-0
      "
    >
      {/* Image */}
      <Link href={href} className="block">
        <div
          className="
            relative
            h-[270px]
            w-full
            overflow-hidden
            rounded-[24px]
          "
        >
          {imgUrl && (
            <Image
              src={imgUrl}
              alt={villa.title}
              fill
              sizes="calc(100vw - 70px)"
              className="object-cover"
              draggable={false}
            />
          )}

          {/* Badge */}
          {villa.badge && (
            <div className="absolute left-4 top-4">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  font-body
                  text-[12px]
                  text-gray-900
                  shadow-sm
                "
              >
                {villa.badge}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="px-1 pt-6">
        <Link href={href}>
          <h3
            className="
              font-heading
              text-[16px]
              font-semibold
              leading-tight
              text-gray-900
            "
          >
            {villa.title}
          </h3>
        </Link>

        {villa.description && (
          <p
            className="
              mt-4
              font-body
              text-[14px]
              leading-[1.9]
              text-gray-800
            "
          >
            {villa.description}
          </p>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN CAROUSEL
========================================================= */

export default function VillasCarousel() {
  const [villas, setVillas] = useState<Villa[]>([]);
  const [loading, setLoading] = useState(true);

  /* =========================================================
     DESKTOP
  ========================================================= */

  const [index, setIndex] = useState(0);

  /* =========================================================
     MOBILE
  ========================================================= */

  const [mobileIndex, setMobileIndex] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(
    null
  );

  const [touchEnd, setTouchEnd] = useState<number | null>(
    null
  );

  /* =========================================================
     LOAD VILLAS
  ========================================================= */

  useEffect(() => {
    let mounted = true;

    async function loadVillas() {
      try {
        const res = await fetch("/api/villas_carosal", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to load villas");
        }

        const data = await res.json();

        if (!mounted) return;

        setVillas(
          Array.isArray(data) ? data : []
        );

        setIndex(0);
        setMobileIndex(0);
      } catch (error) {
        console.error(
          "Failed to load villas:",
          error
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadVillas();

    return () => {
      mounted = false;
    };
  }, []);

  const total = villas.length;

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <section className="bg-white py-20">
        <div className="text-center font-body text-gray-500">
          Loading villas...
        </div>
      </section>
    );
  }

  /* =========================================================
     EMPTY
  ========================================================= */

  if (!total) {
    return (
      <section className="bg-white py-20">
        <div className="text-center font-body text-gray-500">
          No villas found.
        </div>
      </section>
    );
  }

  /* =========================================================
     DESKTOP SETTINGS
  ========================================================= */

  const visibleCards = 3;

  const maxDesktopIndex = Math.max(
    0,
    total - visibleCards
  );

  const nextDesktop = () => {
    setIndex((prev) =>
      prev >= maxDesktopIndex
        ? 0
        : prev + 1
    );
  };

  const prevDesktop = () => {
    setIndex((prev) =>
      prev <= 0
        ? maxDesktopIndex
        : prev - 1
    );
  };

  /* =========================================================
     MOBILE SETTINGS
  ========================================================= */

  const nextMobile = () => {
    setMobileIndex((prev) =>
      prev >= total - 1
        ? 0
        : prev + 1
    );
  };

  const prevMobile = () => {
    setMobileIndex((prev) =>
      prev <= 0
        ? total - 1
        : prev - 1
    );
  };

  /* =========================================================
     MOBILE SWIPE
  ========================================================= */

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchEnd(null);

    setTouchStart(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchEnd(
      e.targetTouches[0].clientX
    );
  };

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

    // Swipe LEFT
    if (distance > minSwipeDistance) {
      nextMobile();
    }

    // Swipe RIGHT
    if (distance < -minSwipeDistance) {
      prevMobile();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <section className="hidden bg-white py-[32px] sm:block md:py-[64px]">
        <Container>

          {/* Heading */}
          <div className="text-center">
            <h2
              className="
                font-heading
                text-[22px]
                font-bold
                tracking-[-0.5px]
                text-gray-900
                md:text-[32px]
                md:leading-[42px]
                xl:text-[38px]
                xl:leading-[48px]
              "
            >
              <span className="text-gray-900">
                Explore{" "}
              </span>

              <span className="text-[#FF751F]">
                Our Villas
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-12 overflow-hidden">
            <div
              className="
                flex
                gap-6
                transition-transform
                duration-500
                ease-out
              "
              style={{
                transform: `translateX(calc(-${index} * (33.333333% + 8px)))`,
              }}
            >
              {villas.map((villa) => (
                <div
                  key={villa._id}
                  className="
                    min-w-[calc((100%-48px)/3)]
                    w-[calc((100%-48px)/3)]
                  "
                >
                  <VillaCard villa={villa} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <div
            className="
              mt-12
              flex
              items-center
              justify-center
              gap-5
            "
          >
            <ArrowButton
              direction="left"
              disabled={false}
              onClick={prevDesktop}
            />

            <div
              className="
                min-w-[45px]
                text-center
                font-body
                text-[15px]
                tabular-nums
                text-gray-900
              "
            >
              {index + 1} / {total}
            </div>

            <ArrowButton
              direction="right"
              disabled={false}
              onClick={nextDesktop}
            />
          </div>

        </Container>
      </section>

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <section className="block overflow-hidden bg-white py-12 sm:hidden">

        {/* Heading */}
        <div className="px-5 text-center">
          <h2
            className="
              font-heading
              text-[22px]
              font-bold
              tracking-[-0.5px]
              text-gray-900
            "
          >
            <span className="text-gray-900">
              Explore{" "}
            </span>

            <span className="text-[#FF751F]">
              Our Villas
            </span>
          </h2>
        </div>

        {/* =================================================
            MOBILE SLIDER
        ================================================= */}

        <div
          className="
            mt-8
            overflow-hidden
            pl-4
            // touch-pan-y
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
            "
            style={{
              transform: `
                translateX(
                  calc(
                    -${mobileIndex} * (100vw - 35px)
                  )
                )
              `,
            }}
          >
            {villas.map((villa) => (
              <VillaCardMobile
                key={villa._id}
                villa={villa}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            MOBILE CONTROLS
        ================================================= */}

        <div
          className="
            mt-9
            flex
            items-center
            justify-center
            gap-5
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
              min-w-[35px]
              text-center
              font-body
              text-[13px]
              tabular-nums
              text-gray-900
            "
          >
            {mobileIndex + 1} / {total}
          </div>

          {/* Next */}
          <ArrowButton
            direction="right"
            disabled={false}
            onClick={nextMobile}
          />
        </div>

      </section>
    </>
  );
}