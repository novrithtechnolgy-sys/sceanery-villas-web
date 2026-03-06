"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";


export default function QuickChat() {
  return (
    <section className="bg-white py-10 pb-20 md:py-20 ">
      <Container >
        <div className="relative rounded-[26px] overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[320px] md:h-[420px]">
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
            <h2 className="font-[timesTen] uppercase text-[20px] md:text-[36px] xl:text-[46px] text-white tracking-[0.08em]">
              Inspired?
            </h2>

            <p className="mt-4 text-white font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
                Let's turn these stories into reality
            </p>

            <Button variant="primary" className="mt-10 w-[320px] md:w-[360px]">
              Explore Our Villas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}