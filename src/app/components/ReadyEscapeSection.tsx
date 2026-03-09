"use client";

import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

export default function ReadyEscapeSection() {
  return (
    <section className="py-10 pb-20 md:pb-40 md:py-20 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[30px] min-h-[420px]">

          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772896001/a79a72dc92065a82e3dcbaa5d44bc0b50a2e118a_bdo1wc.webp"
            alt="Mountain Escape"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 py-20">
            
            <h2 className="text-white font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] font-bold tracking-wide uppercase">
              READY FOR YOUR ESCAPE?
            </h2>

            <p className="mt-4 md:mt-6 text-white/90 text-[18px] leading-8 max-w-2xl">
              Book directly with us for the best rates and exclusive inclusions.
            </p>

            {/* Buttons */}
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-6 items-center">
              
              {/* Primary */}
              <Button>
                Book Your Stay
              </Button>

              {/* Outline */}
              <Button variant="light">               
                <FaWhatsapp className="h-5 w-5" />
                Whatsapp Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}