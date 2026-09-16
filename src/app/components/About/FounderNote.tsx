// components/FounderSection.tsx

import Image from "next/image";
import Container from "../Container";


export default function FounderSection() {
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
                md:text-left
                mb-8
              "
            >
              <span className="text-gray-900">
                A Note
              </span>{" "}
              <span className="text-[#FF751F]">
                from Our Founder
              </span>
            </h2>
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[650px] order-2 md:order-1">

            {/* Heading */}
            <h2
              className="
                md:block
                hidden
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
                md:text-left
              "
            >
              <span className="text-gray-900">
                A Note
              </span>{" "}
              <span className="text-[#FF751F]">
                from Our Founder
              </span>
            </h2>

            {/* Founder Message */}
            <div
              className="
                mt-4
                font-body
                font-regular
                text-[14px]
                leading-[26px]
                text-black
                md:mt-8
                md:text-[16px]
                lg:leading-[30px]
                text-center
                md:text-left
              "
            >
              <p>
                Welcome to the Scenery Villas Collection.
              </p>

              <p className="md:mt-1">
                For over 30 years, I have shared Sri Lanka with
                travellers from around the world. Some fell so deeply
                in love with the island that they created their own
                dream homes here. Scenery Villas brings these special
                homes together and warmly opens their doors to you.
              </p>

              <p className="md:mt-1">
                Each villa has been shaped by its surroundings and
                lovingly cared for by our team. The entire home becomes
                yours, with meals, housekeeping, transport, and
                experiences personalised around you.
              </p>

              <p className="md:mt-1">
                I hope you discover more than a beautiful stay — the
                warmth, care, and sense of belonging that make Sri Lanka
                feel like home.
              </p>
            </div>

            {/* Founder Details */}
            <div className="mt-4 md:mt-6">
              <p
                className="
                  font-body
                  text-[16px]
                  font-bold
                  text-gray-900
                  md:text-[20px]
                  text-center
                  md:text-left
                "
              >
                Shiral De Silva
              </p>

              <p
                className="
                  mt-1
                  font-body
                  text-[14px]
                  text-gray-800
                  md:text-[16px]
                  text-center
                  md:text-left
                "
              >
                Founder, Scenery Villas Collection
              </p>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative w-full justify-end md:flex order-1">
            <div
              className="
                relative
                h-[320px]
                w-full
                overflow-hidden
                rounded-[24px]
                md:h-[500px]
                md:rounded-[26px]
                lg:h-[560px]
                xl:h-[600px]
                xl:max-w-[575px]
              "
            >
              <Image
                src="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789108622/a7b3941974772c54e36710beeb0328286a241339.jpg"
                alt="Shiral De Silva, Founder of Scenery Villas Collection"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                "
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}