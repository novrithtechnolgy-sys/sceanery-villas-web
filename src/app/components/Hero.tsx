// components/Hero.tsx
import Image from "next/image";
import BookingBar from "./BookingBar";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="pb-10 md:pb-20 pt-1 md:pt-2">

        <div className="relative overflow-hidden md:rounded-b-[20px] rounded-t-[20px] md:aspect-[8/5] lg:aspect-[10/5] xl:aspect-[12/5]">
          {/* Background Image */}
<div className="absolute inset-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    poster="https://res.cloudinary.com/dpjmcup95/image/upload/v1772884984/IMG-20250927-WA0043_x4850s.jpg"
  >
    <source src="https://res.cloudinary.com/dpjmcup95/video/upload/v1772887224/Best_villas_in_Sri_Lanka___Scenery_Villas___Top_rated___Ideal_for_relaxing___Kids_friendly___Bentota_mkgtc5.webm" type="video/mp4" />
  </video>
</div>

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

            <p className="mt-4 md:mt-8 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
              Discover a curated collection of 6 private villas and residences in Bentota and Aluthgama.
              <br />
              From hilltop sanctuaries and group retreats to cozy homestays.
              <br />
              Book your perfect Sri Lankan escape.
            </p>

            <button className="md:hidden font-[helvetica] font-semibold mt-8 md:mt-6 bg-white w-[200px] py-2 text-[14px] rounded-full text-black">
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