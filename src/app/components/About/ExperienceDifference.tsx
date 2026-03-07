"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";


export default function ExperienceDifference() {
  return (
    <section className="bg-white py-10 pb-20 md:py-20 ">
      <Container >
        <div className="relative rounded-[26px] overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[260px] md:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
              alt="Experience the difference"
              fill
              className="object-cover"
              priority
            />
            {/* Optional soft dark overlay (helps text readability) */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] text-white tracking-[0.08em]">
              EXPERIENCE THE DIFFERENCE
            </h2>

            <Button variant="primary" className="mt-10">
              Explore Our Villas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}