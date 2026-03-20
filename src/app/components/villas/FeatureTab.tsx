"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
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
    <section className="py-10 md:py-20">
      <Container>
        {/* Section Title */}
        <h2 className="mb-8 md:mb-16 text-center font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
          <span className="italic">Key</span>{" "}
          <span className="font-semibold">Features</span>
        </h2>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm">
            <div className="relative h-[200px] md:h-[220px] w-full bg-gray-100">
              {activeImg && (
                <Image
                  src={activeImg}
                  alt={activeFeature?.title ?? "Feature"}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <div className="mb-4 md:mb-8 flex items-center gap-4 md:gap-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
                  <FaSwimmingPool size={13} />
                </div>

                <h3 className="font-[helvetica] text-[16px] font-semibold text-gray-900">
                  {activeFeature?.title}
                </h3>
              </div>

              <p className="font-[helvetica] text-[14px] leading-8 text-gray-700">
                {activeFeature?.desc}
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
              {activeIndex + 1}/{features.length}
            </span>

            <ArrowButton
              onClick={nextSlide}
              direction="right"
              disabled={activeIndex === features.length - 1}
            />
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {features.map((feature: any, i: number) => {
            const img = feature.image
              ? urlFor(feature.image).width(1400).quality(85).url()
              : "";

            return (
              <div
                key={i}
                className="overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow"
              >
                <div className="relative h-[260px] w-full">
                  {img && (
                    <Image
                      src={img}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="p-8">
                  <div className="mb-8 flex items-center gap-8">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-black text-white">
                      <FaHome size={14} />
                    </div>

                    <h3 className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="font-[helvetica] text-[14px] md:text-[16px] leading-7 text-gray-600">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}