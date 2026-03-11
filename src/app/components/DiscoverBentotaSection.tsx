"use client";

import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import { useRouter } from "next/navigation";

type ExperienceCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: "river" | "water" | "bawa" | "turtle";
  variant: "wide" | "small" | "tall";
};

function Icon({ type }: { type: ExperienceCard["icon"] }) {
  // simple minimal line icons (no extra libs)
  if (type === "river") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
        <path d="M3 12c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
        <path d="M3 17c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
      </svg>
    );
  }
  if (type === "water") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
      </svg>
    );
  }
  if (type === "bawa") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 10l8-6 8 6v10H4V10Z" />
        <path d="M9 20v-7h6v7" />
      </svg>
    );
  }
  // turtle
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 7c-4 0-7 2.5-7 6s3 6 7 6 7-2.5 7-6-3-6-7-6Z" />
      <path d="M6 12l-2-1M18 12l2-1M9 7 8 5M15 7l1-2" />
    </svg>
  );
}

function Card({ item }: { item: ExperienceCard }) {
  const base =
    "relative overflow-hidden rounded-[26px] shadow-[0_14px_34px_rgba(0,0,0,0.10)]";

  const size =
    item.variant === "wide"
      ? "h-[200px] md:h-[300px]"
      : item.variant === "tall"
      ? "h-[200px] md:h-[340px] lg:h-[670px]"
      : "h-[200px] md:h-[340px]";

  return (
    <div className={`${base} ${size}`}>
      <Image src={item.image} alt={item.title} fill className={`object-cover ${item.variant === "tall" ? "object-right" : ""}`} />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* content */}
      <div className=" absolute left-4 md:left-7 right-7 bottom-7 text-white">
        <div className="flex items-center gap-3">
          <div className="text-white/90">
            <Icon type={item.icon} />
          </div>
          <h3 className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold leading-none">{item.title}</h3>
        </div>
        <p className="font-[helvetica] mt-2 text-[14px] md:text-[16px] text-white/85 leading-6 max-w-[420px]">
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
      subtitle: "Explore the mangroves of the Bentota Ganga",
      image:
        "https://res.cloudinary.com/dpjmcup95/image/upload/v1772364145/9692bf8eb29a127436698cf32d1f4ee5a74ae186_rkkkbg.webp",
      icon: "river",
      variant: "wide",
    },
    {
      id: "turtle",
      title: "Sea Turtle\nConservation",
      subtitle: "Visit the hatcheries protecting our marine life.",
      image:
        "https://res.cloudinary.com/dpjmcup95/image/upload/v1772270841/b314894fec786357b46f083d9265cd2174c2c9ec_i6nmf7.jpg",
      icon: "turtle",
      variant: "tall",
    },
    {
      id: "water",
      title: "Water Sports",
      subtitle: "Jet skiing, windsurfing, and diving at the water sports center",
      image:
        "https://res.cloudinary.com/dpjmcup95/image/upload/v1772364270/9fc326df32e80f348f08629c54c860c7a2345bb6_oxpygf.webp",
      icon: "water",
      variant: "small",
    },
    {
      id: "bawa",
      title: "Bawa Architecture",
      subtitle:
        "Visit Lunuganga and Brief Garden, the masterpieces of Geoffrey and Bevis Bawa",
      image:
        "https://res.cloudinary.com/dpjmcup95/image/upload/v1772364254/6b01591a9d3fb91b08706b593a7a8b3a5df64245_x2mksk.webp",
      icon: "bawa",
      variant: "small",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
            <span className="italic font-serif text-gray-900">Discover</span>{" "}
            <span className="font-semibold text-gray-900">Bentota</span>
          </h2>

          <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
            Located on the Gold Coast of Sri Lanka, Bentota is the island’s premier beach destination.
            <br />
            But there is more to this town than just the ocean.
          </p>
        </div>

        {/* Grid (desktop like screenshot) */}
        <div className="mt-8 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column */}
          <div className="lg:col-span-8 space-y-4 md:space-y-8">
            <Card item={data[0]} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
              <Card item={data[2]} />
              <Card item={data[3]} />
            </div>
          </div>

          {/* Right tall card */}
          <div className="lg:col-span-4 -mt-3 md:mt-2 lg:mt-0">
            <Card item={data[1]} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-14 flex justify-center">
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