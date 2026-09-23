// components/Hero.tsx
"use client";

import BookingBar from "../BookingBar";
import { useRouter } from "next/navigation";
import Button from "../Button";

export default function Hero() {
  const router = useRouter();

  const handleBookStay = () => {
    router.push("/available-villas");
  };

  return (
    <section className="relative -mt-16  md:-mt-18 p-[16px] md:p-[20px]">
      <div className="py-[32px] relative overflow-hidden rounded-t-[20px] rounded-b-[20px] h-[60vh] md:h-[90vh]" >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dpjmcup95/image/upload/v1772939529/dji_mimo_20260302_175004_0_1772510342526_photo_jprutg.webp"
        >
          <source
            src="https://res.cloudinary.com/vjp4gpfl/video/upload/v1790165438/for_web_1.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div
          className="relative z-10 flex h-full flex-col items-center justify-end pb-8 text-center md:pb-10">
          <h1 className="max-w-[300px] font-heading text-[26px] font-bold leading-tight tracking-wide text-white md:max-w-[1000px] md:text-[34px] xl:text-[44px]">

            Your Private Space <br />  Slow Down and Stay Together

          </h1>

          <p
            className="mt-4 max-w-[300px] font-body text-[14px] font-normal leading-[26px] md:leading-[30px] text-white md:mt-6 md:max-w-5xl md:text-[16px] xl:text-[16px]">
            
            Curated private villas and homes in Bentota for comfortand privacy.
          
          </p>

          <div className="hidden md:block mt-4 w-full max-w-[490px] md:mt-8">
            <BookingBar />
          </div>

          <div className="md:hidden mt-4 md:mt-8">
            <Button
              onClick={handleBookStay}
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}