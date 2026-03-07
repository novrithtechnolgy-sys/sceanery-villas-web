// components/Hero.tsx
import Image from "next/image";
import BookingBar from "./BookingBar";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="pb-10 md:pb-20 pt-1 md:pt-2">

        <div className="relative overflow-hidden md:rounded-b-[20px] rounded-t-[10px]  md:aspect-[8/5] lg:aspect-[10/5] xl:aspect-[12/5]">
          {/* Background Image */}
          <Image
            src="/208bb3164c040ef306a0874503fa5da68c734180.jpg"
            alt="Luxury Villa"
            fill
            priority
            className="object-cover "
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-28 2xl:pt-50">
            <h1 className="font-[timesTen] text-white font-semibold tracking-wide leading-tight
                           text-[20px] md:text-[36px] xl:text-[46px] ">
              LUXURY VILLAS AND HOMESTAYS IN
              <br />
              BENTOTA SRI LANKA
            </h1>

            <p className="mt-4 md:mt-6 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
              Discover a curated collection of 6 private villas and residences in Bentota and Aluthgama.
              <br />
              From hilltop sanctuaries and group retreats to cozy homestays.
              <br />
              Book your perfect Sri Lankan escape.
            </p>

            <button className="md:hidden mt-6 md:mt-6 bg-white w-[200px] py-2 text-[14px] rounded-full text-black">
                Book Now
            </button>
          </div>

          {/* Booking Bar */}
       

          <div className="h-28 md:h-20" />
        </div>
        <BookingBar />
    </section>
  );
}