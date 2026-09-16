"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative -mt-18 p-[20px]">
      <div className="relative overflow-hidden rounded-[20px] md:rounded-b-[20px] h-[60vh] md:h-[90vh]">

        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772963539/IMG-20250927-WA0040_dsqccu.jpg"
          alt="Luxury Villa"
          fill
          priority
          quality={75}
          className="object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20">

          <h1 className="font-heading text-[24px] md:text-[36px] xl:text-[76px] tracking-wide text-white">
            Let's Plan Your Escape
          </h1>
          {/* <p className="mt-4 md:mt-8 font-body max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
           We are here to help you find the perfect villa.    
           </p> */}
          <p className="mt-4 md:mt-8 font-body max-w-5xl text-white text-[15px] md:text-[20px] leading-relaxed">
            Whether you have a specific property in mind or need a recommendation for your group size, our team is ready to assist. Reach out to us via phone, email, or the form below.
          </p>

        </div>

      </div>
    </section>
  );
}