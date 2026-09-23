"use client";

import Image from "next/image";

type PageHeroProps = {
  title: string;
  highlightTitle?: string;
  paragraph?: string;
  image: string;
};

export default function PageHero({
  title,
  highlightTitle,
  paragraph,
  image,
}: PageHeroProps) {
  return (
    <section className="relative -mt-16 p-[16px]">
      <div
        className="relative h-[60vh] overflow-hidden rounded-[20px] md:h-[90vh] md:rounded-b-[20px]">
        <Image
          src={image}
          alt={highlightTitle || title}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-8 text-center md:pb-40">
   
          <h1
            className="max-w-[300px] font-heading text-[26px] font-bold leading-tight tracking-wide text-white md:max-w-[1000px] md:text-[34px] xl:text-[44px]">
            {title}

            {highlightTitle && (
              <>
                <br />
                {highlightTitle}
              </>
            )}
          </h1>
          
          {paragraph && (
            <p className="mt-4 max-w-[300px] font-body text-[14px] font-normal leading-[26px] md:leading-[30px] text-white md:mt-6 md:max-w-5xl md:text-[16px] xl:text-[16px]">
              {paragraph}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}