// components/Blog/FeaturedStory.tsx

"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { Clock3 } from "lucide-react";

export default function FeaturedStory() {
  const router = useRouter();

  return (
    <main className="bg-white py-[32px] md:py-[64px]">
      <Container>
        <section>
          {/* =====================================================
              FEATURED STORY
          ===================================================== */}

          <div
            className="grid grid-cols-1
              items-center
              gap-8

              md:grid-cols-12
              md:gap-12
              lg:gap-16
            "
          >
            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="md:col-span-5 order-2 md:order-1">
              <div
                className="
                  relative
                  h-[330px]
                  w-full
                  overflow-hidden
                  rounded-[24px]

                  sm:h-[380px]

                  md:h-[420px]

                  lg:h-[460px]
                "
              >
                <Image
                  src="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789985914/4c5fac0180c828a73939354693005362402c4da5-1920x1280.webp"
                  alt="Why Bentota is the Perfect Alternative to Galle for Families"
                  fill
                  priority
                  sizes="
                    (max-width: 767px) 100vw,
                    (max-width: 1024px) 42vw,
                    520px
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                  "
                />
              </div>
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="md:col-span-7 order-1 md:order-2">
              <div className="max-w-[650px]">
                {/* Date */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    font-body
                    text-[14px]
                    text-gray-500

                    md:text-[15px]
                  "
                >
                  <Clock3
                    className="h-[18px] w-[18px]"
                    strokeWidth={1.8}
                  />

                  <span>21 Aug 2026</span>
                </div>

                {/* Title */}
                <h2
                  className="
                mt-4
                md:mt-8
                font-heading
                text-[22px]
                md:text-[32px]
                xl:text-[38px]
                font-bold
                md:leading-[42px]
                xl:leading-[48px]
                tracking-[-0.5px]
                text-gray-900
                text-left
                  "
                >
                  Discover Paradise: Your Ultimate Guide to Bentota's Sun, Sea & Adventure
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-4
                    font-body
                    font-regular
                    text-[14px]
                    leading-[26px]
                    text-gray-700
                    md:mt-8
                    md:text-[16px]
                    lg:leading-[30px]
                    text-left
                  "
                >
                  Galle Fort is famous, but Bentota offers the space, river, and golden beaches families truly need. Discover everything from thrilling water sports and river safaris to ancient temples and Ayurvedic spas—click to explore all our travel blogs and plan your getaway!
                </p>

                {/* Button */}
                <Button
                  onClick={() =>
                    router.push(
                      "https://www.bentotatravelblogs.com/"
                    )
                  }
                  className="
                    mt-4
                    md:mt-8 
                    bg-[#FF751F]
                    text-white
                    hover:bg-[#e96512]
                  "
                >
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}