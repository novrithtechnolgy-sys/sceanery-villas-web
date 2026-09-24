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
                  src="https://res.cloudinary.com/vjp4gpfl/image/upload/v1790229974/aaf3f600e5ce898384ea9609cd40eaa2d5f57f00-669x446.webp"
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
                {/* <div
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
                </div> */}

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
                  Take a historic day trip from Bentota to Galle Fort.
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
                  Bentota is perfect for relaxation, rivers, and Ayurveda. But just an hour south lies a completely different world: Galle Fort. A UNESCO World Heritage site, Galle is a living, breathing city trapped in time. Built by the Portuguese in 1588 and fortified by the Dutch in the 1600s, walking through its gates feels like stepping into a European village, but with tropical heat and tuk-tuks. Because it is so close (approx. 50km), you don’t need to book a hotel there. You can easily explore the best of Galle in a single day and be back in Bentota for dinner. Here is your step-by-step itinerary.
                </p>

                {/* Button */}
                <Button
                  onClick={() =>
                    router.push(
                      "https://www.bentotatravelblogs.com/post/take-a-historic-day-trip-from-bentota-to-galle-fort"
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