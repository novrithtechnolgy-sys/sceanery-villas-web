"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Container from "../Container";
import ArrowButton from "../ArrowButton";

export default function OverviewTab({ villa }: { villa: any }) {
  const introImg = villa.intro?.image
    ? urlFor(villa.intro.image).width(1200).quality(85).url()
    : "";

  const highlightCards = villa.highlights?.cards?.slice(0, 3) || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev: number) =>
      prev === 0 ? highlightCards.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev: number) =>
      prev === highlightCards.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-10 md:py-20">
      <Container>
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center pb-10 md:pb-20">
          <div>
            <h2 className="text-center md:text-left font-[timesTen] md:flex md:flex-col text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
              <span className="italic font-serif text-gray-800">
                {villa.intro?.headingItalic}
              </span>
              <span className="font-semibold md:mt-2">
                {villa.intro?.headingBold}
              </span>
            </h2>

            {villa.intro?.description && (
              <p className="mt-4 md:mt-8 text-center md:text-left font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed whitespace-pre-line">
                {villa.intro.description}
              </p>
            )}
          </div>

          <div className="relative h-[240px] md:h-[320px] md:h-full rounded-[20px] overflow-hidden bg-gray-100">
            {introImg && (
              <Image src={introImg} alt="Intro" fill className="object-cover" />
            )}
          </div>
        </div>

        {/* Highlights */}
        {!!highlightCards.length && (
          <div>
            {/* Section Title */}
            <h3 className="mt-10 md:mt-20 text-center font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
              <span className="italic">{villa.highlights.headingItalic}</span>{" "}
              <span className="font-semibold">{villa.highlights.headingBold}</span>
            </h3>

            {/* Description */}
            {villa.highlights.description && (
              <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed text-center max-w-4xl mx-auto px-4">
                {villa.highlights.description}
              </p>
            )}

            {/* Mobile Slider */}
            <div className="mt-8 md:mt-16 md:hidden">
              <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm">
                <div className="relative h-[200px] md:h-[220px] bg-gray-100">
                  {highlightCards[activeIndex]?.image && (
                    <Image
                      src={urlFor(highlightCards[activeIndex].image)
                        .width(900)
                        .quality(80)
                        .url()}
                      alt={highlightCards[activeIndex]?.title ?? "Highlight"}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="p-4 md:p-8">
                  <div className="font-[helvetica] text-[16px] font-semibold text-gray-900">
                    {highlightCards[activeIndex]?.title}
                  </div>

                  <p className="mt-4 font-[helvetica] text-[14px] leading-8 text-gray-700">
                    {highlightCards[activeIndex]?.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4">
                <ArrowButton
                  onClick={prevSlide}
                  direction="left"
                  disabled={activeIndex === 0}
                />
                <span className="font-[helvetica] text-[18px] text-gray-900">
                  {activeIndex + 1}/{highlightCards.length}
                </span>

                <ArrowButton
                  onClick={nextSlide}
                  direction="right"
                  disabled={activeIndex === highlightCards.length - 1}
                  />

              </div>
            </div>

            {/* Desktop Cards */}
            <div className="mt-16 hidden md:grid md:grid-cols-3 gap-6">
              {highlightCards.map((h: any, idx: number) => {
                const img = h.image
                  ? urlFor(h.image).width(900).quality(80).url()
                  : "";

                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm"
                  >
                    <div className="relative h-[220px] bg-gray-100">
                      {img && (
                        <Image
                          src={img}
                          alt={h.title ?? "Highlight"}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    <div className="p-8">
                      <div className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">
                        {h.title}
                      </div>

                      <p className="mt-2 font-[helvetica] text-[14px] md:text-[16px] leading-7 text-gray-700">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}