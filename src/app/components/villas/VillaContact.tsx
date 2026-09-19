// components/JoinOurJourney.tsx
"use client";

import Container from "../Container";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

type SocialCardProps = {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function SocialCard({
  href,
  title,
  description,
  icon,
}: SocialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group
        block
        h-full
        rounded-[22px]
        border
        border-gray-300
        bg-white
        px-4
        md:px-8
        py-4
        md:py-8
        shadow-[0_8px_25px_rgba(0,0,0,0.035)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* Icon */}
      <div className="flex h-[64px] items-center justify-center md:justify-start">
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          md:mt-7
          font-body
          text-[16px]
          md:text-[20px]
          font-semibold
          leading-tight
          text-gray-900
          text-center
          md:text-left
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          md:mt-5
          md:max-w-[350px]
          font-body
          text-[14px]
          leading-[2]
          text-gray-800
          text-center
          md:text-left
        "
      >
        {description}
      </p>
    </a>
  );
}

export default function VillaContact() {
  return (
    <section className="bg-white py-[32px] md:py-[64px] pb-[64px] md:pb-[128px]">
      <Container>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-[850px] text-center">
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
            "
          >
            <span className="text-gray-900">
              Join{" "}
            </span>

            <span className="text-[#FF751F]">
              Our Journey
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
            "
          >
            Follow us on social media for travel inspiration,
            beautiful villa updates, and a warm glimpse into
            daily island life in Bentota.
          </p>
        </div>

        {/* =====================================================
            SOCIAL CARDS
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            md:mt-12
            lg:grid-cols-3
            lg:gap-6
          "
        >

          {/* ================= FACEBOOK ================= */}

          <SocialCard
            href="https://www.facebook.com/p/Scenery-Villas-Sri-Lanka-61560604556336/"
            title="Facebook"
            description="
              Follow us on Facebook for villa updates,
              travel inspiration, and memorable moments
              from Sri Lanka.
            "
            icon={
              <FaFacebookF
                className="
                  h-[60px]
                  w-[60px]
                  rounded-full
                  bg-[#1877F2]
                  p-[14px]
                  text-white
                "
              />
            }
          />

          {/* ================= INSTAGRAM ================= */}

          <SocialCard
            href="https://www.instagram.com/sceneryvillas.srilanka"
            title="Instagram"
            description="
              Follow us on Instagram for beautiful villa
              moments, travel inspiration, and glimpses
              of life in Sri Lanka.
            "
            icon={
              <FaInstagram
                className="
                  h-[60px]
                  w-[60px]
                  rounded-[17px]
                  bg-gradient-to-br
                  from-[#F58529]
                  via-[#DD2A7B]
                  to-[#8134AF]
                  p-[11px]
                  text-white
                "
              />
            }
          />

          {/* ================= YOUTUBE ================= */}

          <SocialCard
            href="https://wa.me/+94779082515"
            title="WhatsApp"
            description="
              Watch us on YouTube for immersive virtual
              tours, travel inspiration, and beautiful
              moments from Sri Lanka.
            "
            icon={
              <FaWhatsapp
                className="
                  h-[60px]
                  w-[60px]
                  text-green-500
                "
              />
            }
          />

        </div>

      </Container>
    </section>
  );
}