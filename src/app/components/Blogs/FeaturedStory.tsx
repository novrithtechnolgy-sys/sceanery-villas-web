// components/Blog/FeaturedStory.tsx
"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import { useRouter } from "next/navigation";


export default function FeaturedStory() {

  const router = useRouter();
    
  return (
      <main className="bg-white py-10 md:py-20 md:pt-40">
        <Container>

          {/* Featured Story */}
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200">

            {/* Background Image */}
            <div className="relative py-8 md:py-20">
              <Image
                src="https://res.cloudinary.com/dpjmcup95/image/upload/v1773327995/Sri_20Lanka_130525_GettyImages-519276262_zj2927.webp"
                alt="Featured Story"
                fill
                className="object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
         

            {/* Content */}
            <div className="relative flex items-start">
              <div className="max-w-[650px] px-8 md:px-16 text-white">

                {/* Eyebrow */}
                <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] tracking-wide text-white">
                  Featured Story
                </h2>

                {/* Title */}
                <h3 className="mt-4 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed font-semibold">
                  Why Bentota is the Perfect Alternative to Galle for Families
                </h3>

                {/* Description */}
                <p className="mt-4 md:mt-8 font-[helvetica] text-[14px] md:text-[16px] text-gray-700 md:leading-8 text-white/90">
                  Galle Fort is famous, but Bentota offers the space, the river,
                  and the golden beaches that families truly need to unwind.
                  Discover why the "Gold Coast" should be your next family base.
                </p>

                {/* Button */}
                <Button
                 onClick={() => router.push("/blogs/work-from-paradise-digital-nomad-guide-to-dharga")}
                 variant="white" className="mt-8">
                  Read Article
                </Button>

              </div>
            </div>

          </div>
          </div>

        </Container>
      </main>
  );
}