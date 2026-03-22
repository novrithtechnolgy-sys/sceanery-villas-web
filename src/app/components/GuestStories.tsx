"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import Container from "./Container";
import ArrowButton from "./ArrowButton";

type Story = {
  id: string;
  quote: string;
  author: string;
  image: string;
};

function QuoteMark() {
  return (
    <svg viewBox="0 0 64 48" className="h-8 w-8 md:h-16 md:w-16 text-gray-900">
      <path
        fill="currentColor"
        d="M18 0C8 0 0 8 0 18v12c0 10 8 18 18 18h6V28H16V18h14V0H18Zm40 0C48 0 40 8 40 18v12c0 10 8 18 18 18h6V28H56V18h14V0H58Z"
      />
    </svg>
  );
}

export default function GuestStories() {
  const stories: Story[] = useMemo(
    () => [
      {
        id: "1",
        quote:
          "We stayed at Villa Mandalay for a week and didn't want to leave. The view from the pool is magical. Staff was incredibly helpful.",
        author: "Louise, UK",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1773291305/DSC02596_iotcth.webp",
      },
      {
        id: "2",
        quote:
          "The villa felt like our own private world. Beautiful design, great food, and the team handled everything perfectly.",
        author: "Daniel, Germany",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1773857675/dji_mimo_20260302_175024_0_1772510345370_photo_xbutjc.webp",
      },
      {
        id: "3",
        quote:
          "Amazing location and peaceful mornings. The experience was luxury without being over the top — just perfect.",
        author: "Sofia, Sweden",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1773291649/0000009575_hzo6ny.webp",
      },
      {
        id: "4",
        quote:
          "Our family loved every moment. The pool, the staff, the privacy — everything exceeded expectations.",
        author: "Nina, Australia",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1773375823/DSC07235-Edit_myzadm.webp",
      },
      {
        id: "5",
        quote:
          "Perfect for a workation. Fast internet, beautiful views, and a calm environment to reset your mind.",
        author: "Arjun, India",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896466/IMG-20250927-WA0061_wslrzu.jpg",
      },
      {
        id: "6",
        quote:
          "The best part was how personal it felt — they really cared about every detail of our stay.",
        author: "Maya, Singapore",
        image:
          "https://res.cloudinary.com/dpjmcup95/image/upload/v1773856767/DSC02091-Edit_ffrh2q.jpg",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const total = stories.length;

  const canPrev = index > 0;
  // const canNext = index < total - 1;

  const [touchStart, setTouchStart] = useState<number | null>(null);
const [touchEnd, setTouchEnd] = useState<number | null>(null);

const minSwipeDistance = 50;

const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;

  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;

  if (isLeftSwipe) {
    setIndex((v) => (v === total - 1 ? 0 : v + 1));
  }

  if (isRightSwipe) {
    setIndex((v) => (v === 0 ? total - 1 : v - 1));
  }
};

  const active = stories[index];

  return (
    <section className="py-10 md:py-20 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center ">
          <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
            <span className="italic font-serif text-gray-900">Guest</span>{" "}
            <span className="font-semibold text-gray-900">Stories</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}>
          {/* Left quote card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[20px] border border-gray-200 shadow-[0_10px_26px_rgba(0,0,0,0.08)] p-8 md:px-12  md:py-12">
              <div className="mb-4 md:mb-10">
                <QuoteMark  />
              </div>

              <p className="font-[helvetica] text-[14px] md:text-[20px] xl:text-[24px] leading-[30px] md:leading-10 text-gray-800 max-w-[530px] lg:line-clamp-3">
                {active.quote}
              </p>

              <div className="mt-4 md:mt-12 font-[helvetica] text-[14px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">
                {active.author}
              </div>
            </div>

            {/* Controls under left card (like screenshot) */}
            <div className="mt-10 flex items-center text-gray-800 justify-center gap-10">
              <ArrowButton
                direction="left"
                disabled={!canPrev}
                  onClick={() => setIndex((v) => (v === 0 ? total - 1 : v - 1))}
              />

              <div className="text-[14px] text-gray-800 tabular-nums">
                {index + 1} / {total}
              </div>

              <ArrowButton
                direction="right"
                onClick={() => setIndex((v) => (v === total - 1 ? 0 : v + 1))} disabled={false}              />
            </div>
          </div>

          {/* Right image */}
          <div className="hidden md:block lg:col-span-6 flex justify-center lg:justify-end">
            {/* ✅ KEY FIX: key forces remount so image always updates */}
            <div
              key={active.id}
              className="relative h-[540px] w-full max-w-[520px] rounded-[28px] overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.10)]"
            >
              <Image
                src={active.image}
                alt={active.author}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}