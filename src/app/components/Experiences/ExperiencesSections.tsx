// components/ExperiencesSectionsSanity.tsx

"use client";

import Image from "next/image";
import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import { urlFor } from "../../../sanity/lib/image";
import Container from "../Container";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import ArrowButton from "../ArrowButton";

/* =========================================================
   TYPES
========================================================= */

type ExperienceCard = {
  _key: string;
  title: string;
  desc: string;
  image: any;
};

type ExperienceGroup = {
  _id: string;
  eyebrowItalic: string;
  titleBold: string;
  subtitle?: string;
  cards: ExperienceCard[];
};

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  item,
}: {
  item: ExperienceCard;
}) {
  const imgUrl = item.image
    ? urlFor(item.image)
        .width(1400)
        .quality(85)
        .url()
    : "";

  return (
    <article className="w-full">

      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className="
          relative
          h-[270px]
          w-full
          overflow-hidden
          rounded-[24px]

          sm:h-[280px]

          md:h-[260px]

          lg:h-[280px]

          xl:h-[320px]
        "
      >
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={item.title}
            fill
            sizes="
              (max-width: 767px) calc(100vw - 70px),
              (max-width: 1024px) 33vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              hover:scale-[1.03]
            "
            draggable={false}
          />
        )}
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="px-1 pt-7">

        <h3
          className="
            font-body
            text-[18px]
            font-semibold
            leading-tight
            text-gray-900

            md:text-[20px]

            xl:text-[22px]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-5
            font-body
            text-[14px]
            leading-[1.9]
            text-gray-800

            md:text-[15px]

            xl:text-[16px]
          "
        >
          {item.desc}
        </p>

      </div>

    </article>
  );
}

/* =========================================================
   MOBILE CAROUSEL
   Native touch + translateX
========================================================= */

function MobileCardCarousel({
  cards,
}: {
  cards: ExperienceCard[];
}) {
  const [mobileIndex, setMobileIndex] =
    useState(0);

  const [touchStart, setTouchStart] =
    useState<number | null>(null);

  const [touchEnd, setTouchEnd] =
    useState<number | null>(null);

  const total = cards.length;

  /* =======================================================
     NEXT
  ======================================================= */

  const nextMobile = () => {
    setMobileIndex((prev) =>
      prev >= total - 1
        ? 0
        : prev + 1
    );
  };

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const prevMobile = () => {
    setMobileIndex((prev) =>
      prev <= 0
        ? total - 1
        : prev - 1
    );
  };

  /* =======================================================
     TOUCH START
  ======================================================= */

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchEnd(null);

    setTouchStart(
      e.targetTouches[0].clientX
    );
  };

  /* =======================================================
     TOUCH MOVE
  ======================================================= */

  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchEnd(
      e.targetTouches[0].clientX
    );
  };

  /* =======================================================
     TOUCH END
  ======================================================= */

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
    if (
      distance > minSwipeDistance
    ) {
      nextMobile();
    }

    /* Swipe RIGHT */
    if (
      distance < -minSwipeDistance
    ) {
      prevMobile();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!total) {
    return null;
  }

  return (
    <div className="w-full">

      {/* =================================================
          MOBILE SLIDER
      ================================================= */}

      <div
        className="
          relative
          w-full
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
                  -${mobileIndex} *
                  (100vw - 73px)
                )
              )
            `,
          }}
        >

          {cards.map((card) => (
            <div
              key={card._key}
              className="
                w-[calc(100vw-70px)]
                shrink-0
              "
            >
              <ExperienceCard
                item={card}
              />
            </div>
          ))}

        </div>

      </div>

      {/* =================================================
          MOBILE DOTS
      ================================================= */}

      {total > 1 && (
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-[5px]
          "
        >
        </div>
      )}

      {/* =================================================
          MOBILE ARROWS
      ================================================= */}

      {total > 1 && (
        <div
          className="
                    
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

/* =========================================================
   EXPERIENCE GROUP
========================================================= */

function ExperienceGroupUI({
  group,
}: {
  group: ExperienceGroup;
}) {
  const cards = useMemo(
    () => group.cards ?? [],
    [group.cards]
  );

  return (
    <section
      className="
        py-[32px]
        md:py-[64px]
      "
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <div
        className="
          mx-auto
          max-w-[1050px]
          px-4
          text-center
          md:px-0
        "
      >

        <h2
          className="
            font-heading
            text-[22px]
            font-bold
            leading-[1.45]
            tracking-[-0.5px]
            text-gray-900

            md:text-[32px]
            md:leading-[42px]

            xl:text-[38px]
            xl:leading-[48px]
          "
        >

          <span className="text-black">
            {group.eyebrowItalic}
          </span>

          {" "}

          <span className="text-[#FF751F]">
            {group.titleBold}
          </span>

        </h2>

        {/* =================================================
            SUBTITLE
        ================================================= */}

        {group.subtitle && (
          <p
            className="
              mx-auto
              mt-4
              max-w-[900px]
              font-body
              text-[14px]
              leading-[26px]
              text-gray-700

              md:mt-8
              md:text-[16px]
              md:leading-[30px]
            "
          >
            {group.subtitle}
          </p>
        )}

      </div>

      {/* =================================================
          MOBILE
          NO CONTAINER
      ================================================= */}

      <div
        className="
          mt-8
          block
          hidden
        "
      >
        <MobileCardCarousel
          cards={cards}
        />
      </div>

      {/* =================================================
          DESKTOP
      ================================================= */}

      <div
        className="
          mt-10
          px-4
          grid
          md:grid
          md:grid-cols-3
          md:gap-6
          lg:mt-14
        "
      >

        {cards.map((card) => (
          <ExperienceCard
            key={card._key}
            item={card}
          />
        ))}

      </div>

    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ExperiencesSectionsSanity() {

  const [groups, setGroups] =
    useState<ExperienceGroup[]>([]);

  const [loading, setLoading] =
    useState(true);

  /* =======================================================
     LOAD SANITY DATA
  ======================================================= */

  useEffect(() => {

    let mounted = true;

    async function load() {

      try {

        const res = await fetch(
          "/api/experience-groups",
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error(
            "Failed to fetch experience groups"
          );
        }

        const data =
          await res.json();

        if (!mounted) {
          return;
        }

        setGroups(
          Array.isArray(data)
            ? data
            : []
        );

      } catch (error) {

        console.error(
          "Failed to load experiences:",
          error
        );

        if (mounted) {
          setGroups([]);
        }

      } finally {

        if (mounted) {
          setLoading(false);
        }

      }
    }

    load();

    return () => {
      mounted = false;
    };

  }, []);

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {

    return (
      <section
        className="
          bg-white
          py-20
        "
      >
        <div
          className="
            text-center
            font-body
            text-gray-500
          "
        >
          Loading experiences...
        </div>
      </section>
    );
  }

  /* =======================================================
     EMPTY
  ======================================================= */

  if (!groups.length) {

    return (
      <section
        className="
          bg-white
          py-20
        "
      >
        <div
          className="
            text-center
            font-body
            text-gray-500
          "
        >
          No Experience Groups found
          in Sanity.
        </div>
      </section>
    );
  }

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <section className="bg-white pb-[64px] md:pb-[128px]">

      {/* =================================================
          DESKTOP
          CONTAINER ONLY
      ================================================= */}

      <div className="hidden md:block">

        <Container>

          {groups.map((group) => (
            <ExperienceGroupUI
              key={group._id}
              group={group}
            />
          ))}

        </Container>

      </div>

      {/* =================================================
          MOBILE
          NO CONTAINER
      ================================================= */}

      <div className="block md:hidden">

        {groups.map((group) => (
          <ExperienceGroupUI
            key={group._id}
            group={group}
          />
        ))}

      </div>

    </section>
  );
}