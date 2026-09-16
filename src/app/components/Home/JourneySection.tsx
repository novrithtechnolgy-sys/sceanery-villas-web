// components/JourneySection.tsx

import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function JourneySection() {
  return (
    <section className="bg-white py-[32px] md:py-[64px]">
      <Container>
        <div className="grid items-center md:gap-10 md:grid-cols-2 lg:gap-16 xl:gap-20">

            <h2
              className="
                md:hidden
                font-heading
                text-[22px]
                md:text-[32px]
                xl:text-[38px]
                font-bold
                md:leading-[42px]
                xl:leading-[48px]
                tracking-[-0.5px]
                text-gray-900
                text-center
                mb-8
              "
            >
              <span className="text-[#C9681B]">
                Plan Your
              </span>{" "}
              <span className="text-[#1E3954]">
                Complete Journey
              </span>
            </h2>

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[620px] order-2 md:order-1">

            {/* Heading */}
            <h2
              className="
                hidden
                md:block
                font-heading
                text-[22px]
                md:text-[32px]
                xl:text-[38px]
                font-bold
                md:leading-[42px]
                xl:leading-[48px]
                tracking-[-0.5px]
                text-gray-900
              "
            >
              <span className="text-[#C9681B]">
                Plan Your
              </span>{" "}
              <span className="text-[#1E3954]">
                Complete Journey
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                font-body
                font-regular
                text-[15px]
                leading-[1.9]
                text-gray-700
                md:mt-6
                md:text-[16px]
                lg:leading-[30px]
                text-center
                md:text-left
                
              "
            >
              Your experience doesn't have to end at the villa doors. As part of the Scenery Villas family, guests have exclusive access to our sister brand, Sri Lanka Tour Company. From local day trips to planning your entire island itinerary, we make exploring Sri Lanka completely effortless.
            </p>

            {/* CTA */}
            <div className="mt-8 md:mt-12 flex justify-center md:justify-start">
              <Link
                href="/experiences"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#214A70]
                  px-8
                  py-3
                  font-body
                  text-[14px]
                  md:text-[16px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#193B59]
                  hover:shadow-lg
                "
              >
                Discover Our Tours
              </Link>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative order-1 md:order-2">
            <div
              className="
                relative
                h-[300px]
                w-full
                overflow-hidden
                rounded-[24px]
                md:h-[350px]
                md:rounded-[26px]
                lg:h-[380px]
                lg:rounded-[28px]
                xl:h-auto
                xl:aspect-[15/10]
                2xl:aspect-[16/10]
              "
            >
              <Image
                src="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789036400/1c65070d8c054e5d654996ea0cee33476a41362c.jpg"
                alt="Sri Lanka travel and tour experience"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}