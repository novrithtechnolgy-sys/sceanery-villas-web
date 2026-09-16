"use client";

import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative -mt-18 p-[20px]">
      <div className="relative overflow-hidden rounded-[20px] md:rounded-b-[20px] h-[60vh] md:h-[90vh]">

        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg"
          alt="Luxury Villa"
          fill
          priority
          quality={75}
          className="object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* Content */}
        <div className="            
            relative
            z-10
            flex
            h-full
            flex-col
            items-center
            justify-end
            pb-8
            text-center
            md:pb-40">

          <h1 className="max-w-[300px]
              font-heading
              text-[26px]
              font-bold
              leading-tight
              tracking-wide
              text-white
              md:max-w-[1000px]
              md:text-[34px]
              xl:text-[44px] ">
            Gallery
          </h1>

          {/* <p className="mt-6 font-body max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
            Visual Stories from the Coast        
          </p> */}
          <p className="mt-4
              max-w-[300px]
              font-body
              text-[14px]
              font-normal
              leading-[26px]
              md:leading-[30px]
              text-white
              md:mt-6
              md:max-w-5xl
              md:text-[16px]
              xl:text-[16px]">
            Take a closer look at life in our sanctuaries. From golden hour sunsets at Villa Mandalay to the colonial details of Tara Garden, let the images speak for themselves.
          </p>

        </div>

      </div>
    </section>
  );
}