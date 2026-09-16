// components/IntroSection.tsx
"use client";

import Image from "next/image";
import Container from "../Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  {
    src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789033929/fff66d200014e784835fa8b0ab02d813857088c3.jpg",
    alt: "Scenery Villas guests enjoying Sri Lanka",
  },
  {
    src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789450121/f946fd57a03b6858e15b4929b06a31ed4db7b9e8.jpg",
    alt: "Scenery Villas experience",
  },
  {
    src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789033929/fff66d200014e784835fa8b0ab02d813857088c3.jpg",
    alt: "Sri Lanka villa experience",
  },
];

export default function IntroSection() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  // ================= TOUCH / SWIPE =================

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    // Minimum swipe distance
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left
      nextSlide();
    }

    if (distance < -minSwipeDistance) {
      // Swipe right
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // ================= AUTO SLIDE =================

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-[32px] lg:py-[64px]">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div className="max-w-[590px]">
            <h2 className="font-heading text-[22px] md:text-[32px] xl:text-[38px] font-bold md:leading-[42px] xl:leading-[48px] tracking-[-0.5px] text-gray-900 text-center md:text-left">
              <span className="block">
                More Than a Stay,
              </span>

              <span className="block text-[#FF751F]">
                Your Island Home
              </span>
            </h2>

            <p className="mt-4 font-body font-regular text-[14px] leading-[26px] text-gray-700 md:mt-8 md:text-[16px] lg:leading-[30px] text-center md:text-left">

              Welcome to the Scenery Villas Collection. Here, true luxury is about having the space and freedom to experience Sri Lanka at your own pace. 
              Whether you are waking up to peaceful paddy fields, sharing a chef-prepared meal with loved ones, or unwinding in a quiet homestay, every single detail here feels deeply personal. Because the very best holidays are all about the beautiful moments you create together.
            </p>
          </div>

          {/* ================= RIGHT CAROUSEL ================= */}

          <div className="relative">
            {/* Image container */}
            <div className="relative w-full overflow-hidden rounded-[24px] md:rounded-[26px] lg:rounded-[28px] h-[300px] md:h-[400px] xl:h-auto xl:aspect-[15/10] 2xl:aspect-[16/10] touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Images */}
              {images.map((image, index) => (
                <div
                  key={image.src + index}
                  className={`absolute inset-0 transition-opacity duration-700 
                    ${index === current ? "z-10 opacity-100" : "z-0 opacity-0"}
                    `}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover select-none"
                    priority={index === 0}
                    draggable={false}
                  />
                </div>
              ))}

              {/* ================= PREVIOUS ================= */}

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 z-20 flex h-[42px] w-[42px] md:h-[48px] md:w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-white/75 text-gray-700 shadow-sm backdrop-blur-sm transition hover:bg-white"
              >
                <ChevronLeft
                  size={22}
                  strokeWidth={1.8}
                />
              </button>

              {/* ================= NEXT ================= */}

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-4 top-1/2 z-20 flex h-[42px] w-[42px] md:h-[48px] md:w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-white/75 text-gray-700 shadow-sm backdrop-blur-sm transition hover:bg-white
                "
              >
                <ChevronRight
                  size={22}
                  strokeWidth={1.8}
                />
              </button>
            </div>

            {/* ================= DOTS ================= */}

            <div className="md:hidden mt-4 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      current === index
                        ? "w-6 bg-[#FF751F]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}