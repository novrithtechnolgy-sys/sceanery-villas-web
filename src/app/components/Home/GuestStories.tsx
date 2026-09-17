"use client";

import { useMemo, useRef, useState } from "react";
import Container from "../Container";
import ArrowButton from "../ArrowButton";

type Story = {
  id: string;
  quote: string;
  author: string;
  country: string;
};

function Stars() {
  return (
    <div className="flex items-center gap-[2px] text-[#FFB800]">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          className="h-[19px] w-[19px] fill-current"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.57l-5.9 3.11 1.13-6.58-4.78-4.66 6.6-.96L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function StoryCard({
  story,
}: {
  story: Story;
}) {
  return (
    <div
      className="
        w-full
        shrink-0
        rounded-[24px]
        border
        border-gray-300
        bg-white
        px-8
        py-8
         shadow-[0_8px_25px_rgba(0,0,0,0.04)]
        md:px-8
        md:py-8
        h-full
      "
    >
      {/* Stars */}
      <Stars />

      {/* Quote */}
      <p
        className="
          mt-6
          font-body
          text-[15px]
          leading-[1.9]
          font-regular
          text-gray-900
          md:text-[16px]
          lg:leading-[1.75]
        "
      >
        {story.quote}
      </p>

      {/* Guest */}
      <div className="mt-6">
        <p
          className="
            font-body
            text-[16px]
            font-bold
            text-gray-900
          "
        >
          {story.author}
        </p>

        <p
          className="
            mt-1
            font-body
            text-[16px]
            font-regular
            text-gray-800
          "
        >
          {story.country}
        </p>
      </div>
    </div>
  );
}

export default function GuestStories() {
  const stories: Story[] = useMemo(
    () => [
      {
        id: "1",
        quote:
          "The villa was extremely awesome place for a group of people to hang around.  They have swimming pool access as well. Full villa can accommodate upto 20 to 25 people. We had lots of fun over there. They have a chef in place, so that it you want anything, he can make it for you, but you have to communicate to them prior about your requirements.  And we need to get the things or else they also get it for us. Had a plesant time over there.",
        author: "Suthar Shan",
        country: "Local Guide",
      },
      {
        id: "2",
        quote:
          "Had a wonderful time at Tara garden, the area is beautiful surrounded by greenery and animal noises. Beds are comfy, toilets are clean. But most important the service here is outstanding. The chef cooks wonderful food, and the manager went to get me medicine because i was sick. They also arranged a birthday party for us. Really can’t recommend this place enough. Thank you",
        author: "Krishtan Kane",
        country: "Local Guide",
      },
      {
        id: "3",
        quote:
          "Amazing location and peaceful mornings. The experience was luxury without being over the top — just perfect.",
        author: "Sofia",
        country: "Sweden",
      },
      {
        id: "4",
        quote:
          "Our family loved every moment. The pool, the staff, the privacy — everything exceeded expectations.",
        author: "Nina",
        country: "Australia",
      },
      {
        id: "5",
        quote:
          "Perfect for a workation. Fast internet, beautiful views, and a calm environment to reset your mind.",
        author: "Arjun",
        country: "India",
      },
      {
        id: "6",
        quote:
          "The best part was how personal it felt — they really cared about every detail of our stay.",
        author: "Maya",
        country: "Singapore",
      },
    ],
    []
  );

  const total = stories.length;

  const [index, setIndex] = useState(0);

  /* =========================================================
     MOBILE SWIPE
  ========================================================= */

  const startX = useRef<number | null>(null);
  const lastX = useRef<number | null>(null);
  const dragging = useRef(false);

  const onPointerDown = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    dragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
  };

  const onPointerMove = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!dragging.current) return;

    lastX.current = e.clientX;
  };

  const onPointerUp = () => {
    if (
      !dragging.current ||
      startX.current === null ||
      lastX.current === null
    ) {
      return;
    }

    dragging.current = false;

    const distance =
      lastX.current - startX.current;

    startX.current = null;
    lastX.current = null;

    const threshold = 50;

    if (distance < -threshold) {
      setIndex((prev) =>
        prev === total - 1 ? 0 : prev + 1
      );
    }

    if (distance > threshold) {
      setIndex((prev) =>
        prev === 0 ? total - 1 : prev - 1
      );
    }
  };

  const onPointerCancel = () => {
    dragging.current = false;
    startX.current = null;
    lastX.current = null;
  };

  /* =========================================================
     DESKTOP
  ========================================================= */

  const visibleCards = 3;

  const maxDesktopIndex = Math.max(
    0,
    total - visibleCards
  );

  const nextDesktop = () => {
    setIndex((prev) =>
      prev >= maxDesktopIndex ? 0 : prev + 1
    );
  };

  const prevDesktop = () => {
    setIndex((prev) =>
      prev <= 0 ? maxDesktopIndex : prev - 1
    );
  };

  return (
    <section className="bg-white py-[32px] md:py-[64px]">
      <Container>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex items-center justify-between">
          <h2
            className="
                font-heading
                text-[22px]
                md:text-[32px]
                xl:text-[38px]
                font-semibold
                md:leading-[42px]
                xl:leading-[48px]
                tracking-[-0.5px]
                text-gray-900
                text-center
                md:text-left
                w-full
            "
          >
            <span className="text-gray-900">
              Guest{" "}
            </span>

            <span className="text-[#FF751F]">
              Stories
            </span>
          </h2>

          {/* Desktop controls */}
          <div className="hidden items-center gap-5 sm:flex">
            <ArrowButton
              direction="left"
              disabled={false}
              onClick={prevDesktop}
            />

            <span
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
            </span>

            <ArrowButton
              direction="right"
              disabled={false}
              onClick={nextDesktop}
            />
          </div>
        </div>

        {/* =====================================================
            DESKTOP CAROUSEL
        ===================================================== */}

        <div className="mt-12 hidden overflow-hidden sm:block md:mt-12">
          <div
            className="
              flex
              gap-6
              transition-transform
              duration-500
              ease-out
            "
            style={{
              transform: `translateX(calc(-${
                index * 33.333333
              }% - ${index * 8}px))`,
            }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="
                  min-w-[calc(33.333333%_-_16px)]
                  w-[calc(33.333333%_-_16px)]
                "
              >
                <StoryCard story={story} />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE CAROUSEL
        ===================================================== */}

        <div className="mt-8 block sm:hidden">
          <div className="overflow-hidden">
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
                  index * 100
                }%)`,
                touchAction: "pan-y",
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
            >
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="w-full shrink-0 px-1"
                >
                  <StoryCard story={story} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <ArrowButton
              direction="left"
              disabled={false}
              onClick={() =>
                setIndex((prev) =>
                  prev === 0
                    ? total - 1
                    : prev - 1
                )
              }
            />

            <span
              className="
                min-w-[45px]
                text-center
                font-body
                text-[14px]
                tabular-nums
                text-gray-900
              "
            >
              {index + 1} / {total}
            </span>

            <ArrowButton
              direction="right"
              disabled={false}
              onClick={() =>
                setIndex((prev) =>
                  prev === total - 1
                    ? 0
                    : prev + 1
                )
              }
            />
          </div>
        </div>

      </Container>
    </section>
  );
}