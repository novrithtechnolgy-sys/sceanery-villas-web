// components/Hero.tsx
"use client";

import Image from "next/image";
import BookingBar from "./BookingBar";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleBookStay = () => {
    router.push("/available-villas");
  };

  return (
    <section className="pb-10 md:pb-20 ">

        <div className="relative overflow-hidden md:rounded-b-[20px] rounded-t-[20px] aspect-[8/10] md:aspect-[8/5] lg:aspect-[10/5] xl:aspect-[12/5] ">
          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772939529/dji_mimo_20260302_175004_0_1772510342526_photo_jprutg.webp"
            alt="Luxury Villa"
            fill
            priority
            className="object-cover "
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
            <h1 className="font-heading text-white font-semibold tracking-wide leading-tight
             text-[28px] md:text-[36px] xl:text-[74px] max-w-[300px] md:max-w-[1600px]">
              Your Private Space to Slow Down 
              <br />
              and Stay Together            
              </h1>

            <p className="mt-4 md:mt-8 font-body max-w-[300px] md:max-w-5xl text-white text-[16px] md:text-[18px] xl:text-[20px] leading-relaxed">
              Discover a curated collection of 6 private villas and residences in Bentota and Aluthgama.

              From hilltop sanctuaries and group retreats to cozy homestays.
         
              Book your perfect Sri Lankan escape.
            </p>

            <button
             onClick={handleBookStay}
             className="md:hidden font-body font-semibold mt-8 md:mt-6 bg-white w-[200px] py-2 text-[14px] rounded-full text-black">
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