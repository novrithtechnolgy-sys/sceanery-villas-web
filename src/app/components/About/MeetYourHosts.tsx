// components/MeetYourHosts.tsx
"use client";

import Image from "next/image";
import Container from "../Container";

export default function MeetYourHosts() {
  return (
    <section className="bg-white py-[32px] md:py-[64px]">
      <Container>
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            md:grid-cols-15
            md:gap-12
            lg:gap-16
            xl:gap-20
          "
        >
          {/* ================= LEFT IMAGE ================= */}
          <div className="order-2 md:order-1 md:col-span-7">
            <div
              className="
                relative
                h-[360px]
                w-full
                overflow-hidden
                rounded-[24px]
                md:h-[420px]
                lg:h-[460px]
                xl:h-[500px]
                
              "
            >
              <Image
                src="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789113390/39c624fe371ec92974bec3f32184e299f0bde2d0.jpg"
                alt="Meet the Scenery Villas team"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="order-1 md:order-2 md:col-span-8 max-w-[620px]">
            {/* Heading */}
            <h2
              className="
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
                Meet{" "}
              </span>

              <span className="text-[#FF751F]">
                Our Team
              </span>
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
                text-center
                md:text-left
              "
            >
              Behind every memorable stay is a team that cares. From
              the moment you arrive, you are welcomed by people who
              take pride in what they do, from villa managers who
              ensure everything runs smoothly to chefs who remember
              how you like your meals. At Scenery Villas, our team is
              more than staff; they are the heart of the experience.
              We invest in their growth because we believe that
              genuine hospitality begins with empowered people.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}