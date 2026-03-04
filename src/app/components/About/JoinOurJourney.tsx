"use client";

import Image from "next/image";
import Container from "../Container";

function IconFacebook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.5-1.5H16.8V5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.6v8h3.9Z" />
    </svg>
  );
}

function IconInstagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2ZM17.6 6.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function IconLinkedIn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6.5 6.8A2.2 2.2 0 1 1 6.5 2.4a2.2 2.2 0 0 1 0 4.4ZM4.6 21.6h3.8V8.6H4.6v13ZM10.3 8.6h3.6v1.8h.1c.5-1 1.8-2.1 3.7-2.1 3.9 0 4.6 2.5 4.6 5.8v7.5h-3.8v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5v6.7h-3.8V8.6Z" />
    </svg>
  );
}

function SocialButton({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
    >
      {children}
    </a>
  );
}

export default function JoinOurJourney() {
  return (
    <section className="bg-white py-20">
     <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        
        {/* Left Image */}
        <div className="lg:col-span-5">
          <div className="relative w-full h-[340px] md:h-[460px] rounded-[26px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772270839/3759e62b0e00282ac6fdc8cfd3c32e9eadd9cb52_wvs7yd.jpg"
              alt="Join our journey"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 md:-mt-42">
          <div className="text-center lg:text-center">
            <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px]  leading-tight">
              <span className="italic">Join</span>{" "}
              <span className="font-semibold">Our Journey</span>
            </h2>

            <p className="mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
              Follow us on social media for travel inspiration, villa updates,
              and a glimpse into daily life in beautiful Bentota.
            </p>
          </div>
        </div>

      </div>
        {/* Social Bar */}
          <div className="md:w-full md:-mt-42 rounded-[18px] bg-gray-100 py-10 px-6 md:pl-150 flex items-center justify-center gap-8 z-[-1]">
            <SocialButton href="#" label="Facebook">
              <IconFacebook className="h-6 w-6 text-gray-800" />
            </SocialButton>
            <SocialButton href="#" label="Instagram">
              <IconInstagram className="h-6 w-6 text-gray-800" />
            </SocialButton>
            <SocialButton href="#" label="LinkedIn">
              <IconLinkedIn className="h-6 w-6 text-gray-800" />
            </SocialButton>
          </div>
      </Container>
    </section>
  );
}