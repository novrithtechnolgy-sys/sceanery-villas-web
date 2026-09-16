"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
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
    <article className="w-full">
      {/* Image */}
      <div
        className="
          relative
          h-[270px]
          w-full
          overflow-hidden
          rounded-[24px]
          md:h-[300px]
          lg:h-[320px]
        "
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="
            (max-width: 767px) calc(100vw - 70px),
            (max-width: 1023px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-[1.02]
          "
        />
      </div>

      {/* Content */}
      <div className="px-1 pt-6 md:pt-8">
        <h3
          className="
            font-body
            text-[17px]
            font-semibold
            leading-[1.4]
            text-gray-900
            md:text-[20px]
            lg:text-[21px]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-4
            max-w-[390px]
            font-body
            text-[14px]
            leading-[1.9]
            md:leading-[30px]
            text-gray-800
            md:text-[15px]
            lg:text-[16px]
          "
        >
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function WhyDifferent() {
  const items: Feature[] = useMemo(
    () => [
      {
        id: "1",
        title: "Privacy, Always",
        description:
          "Your holiday is your own. Our villas are designed as private spaces where you can relax, connect, and enjoy your time without interruption.",
        image:
          "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789119874/138c278d2d319b33cc63b5f5e2b90fd655d90e70.webp",
      },
      {
        id: "2",
        title: "Rooted in Sri Lanka",
        description:
          "From our team to our ingredients, everything is locally rooted, bringing you closer to Sri Lankan culture through food and experiences.",
        image:
          "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789119855/65791334d1fe0645d19bd52e81c6115dc336fb1e.webp",
      },
      {
        id: "3",
        title: "Thoughtful Standards",
        description:
          "Behind the relaxed atmosphere is professional service, with housekeeping and guest support managed with care and consistency.",
        image:
          "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789119876/03256eb7f88630b6952398d346a36ff1a1a1ab2d.webp",
      },
    ],
    []
  );

  const [mobileIndex, setMobileIndex] = useState(0);

  const total = items.length;

  /* =========================================================
     MOBILE NAVIGATION
  ========================================================= */

  const nextMobile = () => {
    setMobileIndex((prev) =>
      prev >= total - 1 ? 0 : prev + 1
    );
  };

  const prevMobile = () => {
    setMobileIndex((prev) =>
      prev <= 0 ? total - 1 : prev - 1
    );
  };

  /* =========================================================
     MOBILE SWIPE
  ========================================================= */

  const [touchStart, setTouchStart] =
    useState<number | null>(null);

  const [touchEnd, setTouchEnd] =
    useState<number | null>(null);

  const minSwipeDistance = 50;

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

    if (distance > minSwipeDistance) {
      nextMobile();
    }

    if (distance < -minSwipeDistance) {
      prevMobile();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="bg-white py-10 md:py-20">

      {/* =====================================================
          DESKTOP
          Container is ONLY used from md and above
      ===================================================== */}

      <div className="hidden md:block">
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
                The Values{" "}
              </span>

              <span className="text-[#FF751F]">
                Behind Every Stay
              </span>
            </h2>
          </div>

          {/* Desktop Grid */}
          <div
            className="
              mt-12
              grid
              grid-cols-3
              gap-6
              lg:mt-14
              lg:gap-6
            "
          >
            {items.map((item) => (
              <FeatureCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

        </Container>
      </div>

      {/* =====================================================
          MOBILE
          NO CONTAINER HERE
      ===================================================== */}

      <div className="block md:hidden">

        {/* Mobile Heading */}
        <div className="px-4 text-center">
          <h2
            className="
              mx-auto
              max-w-[320px]
              font-heading
              text-[22px]
              font-bold
              leading-[1.45]
              tracking-[-0.5px]
              text-gray-900
            "
          >
            <span className="text-gray-900">
              The Values
            </span>

            <br />

            <span className="text-[#FF751F]">
              Behind Every Stay
            </span>
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="mt-8 w-full overflow-hidden">

          <div
            className="w-full overflow-hidden px-4 touch-pan-y"
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
                      -${mobileIndex} * (100vw - 73px)
                    )
                  )
                `,
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="
                    w-[calc(100vw-70px)]
                    shrink-0
                  "
                >
                  <FeatureCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-8
            "
          >
            <ArrowButton
              direction="left"
              disabled={false}
              onClick={prevMobile}
            />

            <ArrowButton
              direction="right"
              disabled={false}
              onClick={nextMobile}
            />
          </div>

        </div>
      </div>

    </section>
  );
}