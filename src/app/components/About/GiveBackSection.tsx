// components/GiveBackSection.tsx

"use client";

import Image from "next/image";
import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import Container from "../Container";

type GiveBackImage = {
  src: string;
  alt: string;
};

export default function GiveBackSection() {
  const images: GiveBackImage[] = useMemo(
    () => [
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789119986/29f622a7ab22c74e9a772d6e47f84076235bcecc.jpg",
        alt: "Scenery Villas guests visiting a local community",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789119988/0ea7c67ad3d27b98109a574d02b4b2908971cfa9.jpg",
        alt: "Scenery Villas guests supporting a local community",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789119986/d2c0884ce7292c991f6f89218702668892562d16.jpg",
        alt: "Scenery Villas guests exploring a local village",
      },
    ],
    []
  );

  const [mobileIndex, setMobileIndex] = useState(0);

  const total = images.length;

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
     MOBILE AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    if (total <= 1) return;

    const interval = setInterval(() => {
      setMobileIndex((prev) =>
        prev >= total - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [total]);

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
    <section className="bg-white py-[32px] md:py-[64px]">
      <div className="hidden md:block">
        <Container>

          {/* Heading */}
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="font-heading text-[32px] font-bold leading-[42px] tracking-[-0.5px] text-gray-900 lg:text-[36px] xl:text-[38px] xl:leading-[48px]">
              <span className="text-gray-900">
                More Than a Stay,{" "}
              </span>
              <span className="text-[#FF751F]">
                A Chance to Give Back
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 font-body text-[16px] leading-[30px] text-gray-700">
              At Scenery Villas, travel can create a positive
              impact beyond the stay itself. Many of our guests
              have generously supported nearby communities by
              contributing essential supplies and assisting
              families in need. These thoughtful acts of kindness
              create meaningful connections and leave a lasting
              difference in the lives of local people.
            </p>
          </div>

          {/* Desktop Images */}
          <div className="mt-8 grid grid-cols-3 gap-6 lg:mt-12">
            {images.map((image, index) => (
              <div
                key={image.src}
                className="
                  relative
                  h-[255px]
                  w-full
                  overflow-hidden
                  rounded-[24px]
                  xl:h-[260px]
                "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="33vw"
                  priority={index === 0}
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.03]
                  "
                />
              </div>
            ))}
          </div>

        </Container>
      </div>

      {/* =====================================================
          MOBILE
          NO CONTAINER
      ===================================================== */}

      <div className="block md:hidden">

        {/* =================================================
            MOBILE HEADING
        ================================================= */}

        <div className="px-6 text-center">
          <h2
            className="
              mx-auto

              font-heading
              text-[22px]
              font-bold
              leading-[1.45]
              tracking-[-0.4px]
              text-gray-900
            "
          >
            <span className="text-gray-900">
              More Than a Stay,
            </span>

            <br />

            <span className="text-[#FF751F]">
              A Chance to Give Back
            </span>
          </h2>

          {/* =================================================
              MOBILE DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto
              mt-6
      
              font-body
              text-[14px]
              font-regular
              leading-[1.9]
              text-gray-700
            "
          >
            At Scenery Villas, travel can create a positive
            impact beyond the stay itself. Many of our guests
            have generously supported nearby communities by
            contributing essential supplies and assisting
            families in need. These thoughtful acts of kindness
            create meaningful connections and leave a lasting
            difference in the lives of local people.
          </p>
        </div>

        {/* =================================================
            MOBILE IMAGE CAROUSEL
        ================================================= */}

        <div className="mt-8 w-full overflow-hidden">

          <div
            className="
              w-full
              overflow-hidden
              touch-pan-y
            "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="
                flex
                transition-transform
                duration-500
                ease-out
                will-change-transform
              "
              style={{
                transform: `translateX(-${
                  mobileIndex * 100
                }%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className="
                    w-full
                    shrink-0
                    px-6
                  "
                >
                  <div
                    className="
                      relative
                      h-[235px]
                      w-full
                      overflow-hidden
                      rounded-[22px]
                    "
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="calc(100vw - 48px)"
                      priority={index === 0}
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              MOBILE DOTS
          ================================================= */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-[5px]
            "
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to image ${
                  index + 1
                }`}
                onClick={() =>
                  setMobileIndex(index)
                }
                className={`
                  h-[6px]
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    mobileIndex === index
                      ? "w-[16px] bg-[#FF751F]"
                      : "w-[6px] bg-gray-300"
                  }
                `}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}