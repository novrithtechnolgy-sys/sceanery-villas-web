// components/FollowUsSection.tsx

"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import AutoScrollCarousel from "../AutoScrollCarousel";

const posts = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1773248394/0000000614_ukc5dy.jpg",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896613/IMG-20250927-WA0032_n8gzge.jpg",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1773291401/dji_mimo_20260302_173902_0_1772510307346_photo_bozpzu.webp",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616569/DSC00336-HDR.jpg",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617178/DSC09699-HDR-Edit.jpg",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617158/DSC09800-HDR-Edit.jpg",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789625067/DSC01259-HDR.webp",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630286/f682588ea24fd03462b5d64f238dc9301f24c941.jpg",
  },
];

export default function FollowUsSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-[32px] md:py-[64px]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="text-center">

        {/* Instagram Icon */}

        <div className="flex justify-center">
          <FaInstagram
            className="
              stroke-current
              stroke-[20px] 
              h-12
              w-12
              font-bold
              text-[#FF751F]
              md:h-14
              md:w-14
            "
          />
        </div>

        {/* Heading */}

        <h2
          className="
                mt-4
                md:mt-8
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
            Follow Us on{" "}
          </span>

          <span className="text-[#FF751F]">
            @Scenery Villas
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-4
            max-w-[850px]
            px-5
            font-body
            text-[14px]
            leading-[1.8]
            text-gray-800
            md:mt-6
            md:px-4
            md:text-[17px]
            md:leading-[1.7]

            xl:text-[18px]
          "
        >
          See what our guests are posting and get daily travel inspiration
          from the southern coast.
        </p>

      </div>

      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div
        className="
          mt-8
          w-full
          md:mt-12
        "
      >
        <AutoScrollCarousel
          cardWidth={380}
          gap={24}
          autoSpeed={0.5}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="
                relative
                shrink-0

                w-[280px]
                sm:w-[330px]
                md:w-[380px]
              "
            >
              <div
                className="
                  relative
                  h-[220px]
                  w-full
                  overflow-hidden
                  rounded-[24px]

                  sm:h-[250px]
                  sm:rounded-[26px]

                  md:h-[280px]
                  md:rounded-[28px]
                "
              >
                <Image
                  src={post.image}
                  alt={`Scenery Villas Instagram post ${post.id}`}
                  fill
                  sizes="
                    (max-width: 640px) 280px,
                    (max-width: 768px) 330px,
                    380px
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.03]
                  "
                />
              </div>
            </div>
          ))}
        </AutoScrollCarousel>
      </div>

    </section>
  );
}