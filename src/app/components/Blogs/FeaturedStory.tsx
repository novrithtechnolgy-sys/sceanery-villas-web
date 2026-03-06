// components/Blog/FeaturedStory.tsx
"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";


export default function FeaturedStory() {
    
  return (
      <main className="bg-white py-14">
        <Container>

          {/* Featured Story */}
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200">

            {/* Background Image */}
            <div className="relative h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                alt="Featured Story"
                fill
                className="object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-start">
              <div className="max-w-[650px] px-10 pt-14 text-white">

                {/* Eyebrow */}
                <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] tracking-wide text-white">
                  Featured Story
                </h2>

                {/* Title */}
                <h3 className="mt-6 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed font-semibold">
                  Why Bentota is the Perfect Alternative to Galle for Families
                </h3>

                {/* Description */}
                <p className="mt-6 font-[helvetica] text-[14px] md:text-[16px] text-gray-700 leading-8 text-white/90">
                  Galle Fort is famous, but Bentota offers the space, the river,
                  and the golden beaches that families truly need to unwind.
                  Discover why the "Gold Coast" should be your next family base.
                </p>

                {/* Button */}
                <Button variant="white" className="mt-8">
                  Read Article
                </Button>

              </div>
            </div>

          </div>

        </Container>
      </main>
  );
}