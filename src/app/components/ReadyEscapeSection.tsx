"use client";

import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

export default function ReadyEscapeSection() {
  return (
    <section className="py-10 pb-20 md:pb-40 md:py-20 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[30px] min-h-[420px]">

          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
            alt="Mountain Escape"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 py-20">
            
            <h2 className="text-white font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] tracking-wide uppercase">
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
                
                {/* WhatsApp icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 md:h-5 md:w-5"
                  fill="currentColor"
                >
                  <path d="M20 4.6A10 10 0 0 0 3.5 17.8L2 22l4.3-1.5A10 10 0 1 0 20 4.6ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.6.9.9-2.6-.2-.3A8 8 0 1 1 12 20Zm4.2-6.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.8c-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.7-1.1-.6-.5-1.1-1.2-1.2-1.4-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.3 0-.4 0-.1-.5-1.3-.7-1.7-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.4.2s-.6.6-.6 1.5.6 1.7.7 1.8c.1.1 1.2 1.8 2.9 2.5 1.7.7 1.7.5 2 .5.3 0 1-.4 1.2-.8.1-.4.1-.7.1-.8 0-.1-.2-.2-.4-.3Z" />
                </svg>

                Whatsapp Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}