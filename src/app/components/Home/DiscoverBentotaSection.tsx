"use client";

import Image from "next/image";
import Container from "../Container";
import Button from "../Button";
import { useRouter } from "next/navigation";

type ExperienceCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: "river" | "boat" | "sunset" | "turtle";
  variant: "wide" | "small" | "tall";
};

function Icon({ type }: { type: ExperienceCard["icon"] }) {
  // simple minimal line icons (no extra libs)
/* =========================================================
   RIVER SAFARIS
========================================================= */

if (type === "river") {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Small boat */}
      <path d="M4 13h16l-2.5 4H6.5L4 13Z" />

      {/* Boat cabin */}
      <path d="M8 13V9h6l3 4" />

      {/* Water */}
      <path d="M3 19c2 1.2 4 1.2 6 0s4-1.2 6 0 4 1.2 6 0" />
    </svg>
  );
}


/* =========================================================
   WATER EXPERIENCES
========================================================= */

if (type === "boat") {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Speed boat */}
      <path d="M3 14h18l-3 5H6l-3-5Z" />

      {/* Front / windshield */}
      <path d="M7 14V9h7l4 5" />

      {/* Windshield detail */}
      <path d="M10 9l2-3h3l2 3" />

      {/* Water */}
      <path d="M3 20c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
    </svg>
  );
}


/* =========================================================
   GOLDEN SUNSETS
========================================================= */

if (type === "sunset") {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sun */}
      <path d="M7 14a5 5 0 0 1 10 0" />

      {/* Horizon */}
      <path d="M3 14h18" />

      {/* Sun rays */}
      <path d="M12 4v2" />
      <path d="M5.6 6.6l1.4 1.4" />
      <path d="M18.4 6.6L17 8" />

      {/* Water */}
      <path d="M4 18h16" />
      <path d="M6 21h12" />
    </svg>
  );
}


/* =========================================================
   SEA TURTLE CONSERVATION
========================================================= */

if (type === "turtle") {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Turtle shell */}
      <path d="M12 7c-4 0-7 2.5-7 6s3 6 7 6 7-2.5 7-6-3-6-7-6Z" />

      {/* Shell pattern */}
      <path d="M8 10c1.5 1 2.5 1.5 4 1.5s2.5-.5 4-1.5" />
      <path d="M8 16c1.5-1 2.5-1.5 4-1.5s2.5.5 4 1.5" />
      <path d="M12 7v12" />

      {/* Flippers */}
      <path d="M6 10 3.5 8.5" />
      <path d="M18 10l2.5-1.5" />
      <path d="M6 16l-2.5 1.5" />
      <path d="M18 16l2.5 1.5" />
    </svg>
  );
}
}

function Card({ item }: { item: ExperienceCard }) {
  const base =
    "relative overflow-hidden rounded-[26px] shadow-[0_14px_34px_rgba(0,0,0,0.10)]";

  const size =
    item.variant === "wide"
      ? "h-[240px] md:h-[280px]"
      : item.variant === "tall"
      ? "h-[240px] md:h-[300px] lg:h-[600px]"
      : "h-[240px] md:h-[300px]";

  return (
    <div className={`${base} ${size}`}>
      <Image src={item.image} alt={item.title} fill className={`object-cover ${item.variant === "tall" ? "object-right" : ""}`} />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* content */}
      <div className=" absolute left-4 md:left-8 right-4 md:right-8 bottom-4 md:bottom-8 text-white">
        <div className="flex items-center gap-3">
          <div className="text-white/90">
            <Icon type={item.icon} />
          </div>
          <h3 className="font-body text-[18px] md:text-[20px] font-semibold leading-none">{item.title}</h3>
        </div>
        <p className="font-body mt-2 text-[14px] md:text-[14px] text-white/85 md:leading-[30px]">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function DiscoverBentotaSection() {

  const router = useRouter();

  const data: ExperienceCard[] = [
    {
      id: "river",
      title: "River Safaris",
      subtitle: "Drift along the calm waters of the Bentota Ganga, surrounded by mangroves, wildlife, and quiet moments in nature.",
      image:
        "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789031540/4e4a9e626dff49413ffac0f3c1901007ed75f4d1.jpg",
      icon: "river",
      variant: "wide",
    },
    {
      id: "turtle",
      title: "Sea Turtle\nConservation",
      subtitle: "Visit local hatcheries dedicated to protecting marine life and witness the quiet effort to preserve Sri Lanka’s coastal ecosystems.",
      image:
        "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789031538/453225ae75904949724e102db94f05936139658d.jpg",
      icon: "turtle",
      variant: "tall",
    },
    {
      id: "water",
      title: "Water Sports",
      subtitle: "Explore the ocean with jet skiing, windsurfing, and more.",
      image:
        "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789031540/1161cafb31a851c6f3034f79f0f66b3403a6a6db.jpg",
      icon: "boat",
      variant: "small",
    },
    {
      id: "bawa",
      title: "Golden Sunsets",
      subtitle:
        "Enjoy peaceful evening walks along the quiet coast.",
      image:
        "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789031538/9514ac4c1cbd9ecc9de1293635cb894a937dfd2d.jpg",
      icon: "sunset",
      variant: "small",
    },
  ];

  return (
    <section className="py-[32px] md:py-[64px] bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="
                font-heading
                text-[22px]
                md:text-[32px]
                xl:text-[38px]
                font-semibold
                md:leading-[42px]
                xl:leading-[48px]
                tracking-[-0.5px]
                text-gray-900">
            <span className="text-gray-900">Discover</span>{" "}
            <span className=" text-[#FF751F]">Bentota</span>
          </h2>

          <p className="mt-4 md:mt-8 font-body text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
            Beyond Bentota’s golden beaches lies a peaceful world of rivers, tropical gardens, and
            <br />
             local traditions shaped by Sri Lanka’s gentle coastal life.
          </p>
        </div>

        {/* Grid (desktop like screenshot) */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Left column */}
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <Card item={data[0]} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card item={data[2]} />
              <Card item={data[3]} />
            </div>
          </div>

          {/* Right tall card */}
          <div className="lg:col-span-4  md:mt-2 lg:mt-0">
            <Card item={data[1]} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <Button
           onClick={() => router.push("/experiences")}
           variant="primary">
            View Experiences
          </Button>
        </div>
      </Container>
    </section>
  );
}