"use client";

import Image from "next/image";
import Container from "../Container";

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 64 48"
      className="h-8 w-8 md:h-12 md:w-12 text-gray-900"
      fill="currentColor"
    >
      <path d="M18 0C8 0 0 8 0 18v12c0 10 8 18 18 18h6V28H16V18h14V0H18Zm40 0C48 0 40 8 40 18v12c0 10 8 18 18 18h6V28H56V18h14V0H58Z" />
    </svg>
  );
}

export default function FounderNote() {
  return (
    <section className="py-10 md:py-20">
      <Container>

        {/* Heading */}
        <h2 className="text-center mb-8 md:mb-0 md:text-right font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px]  leading-tight">
          <span className="italic font-serif">A Note From</span>{" "}
          <span className="font-semibold">Our Founder</span>
        </h2>

        <div className="flex flex-col md:flex-row ">

          {/* Founder Image */}
          <div className="">
            <div className="relative md:absolute md:w-[340px] h-[320px] md:h-[480px] rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772960206/DSC02788_clnnyq.webp"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote Card */}
          <div className="md:ml-30 -mt-10 md:mt-20 z-10 md:z-[-1]">
            <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-200 p-4 md:p-14">
            <div className="flex flex-col md:ml-60">
              <QuoteIcon  />

              <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
                Welcome to Scenery Villas. My journey in hospitality has always
                been driven by a passion for showcasing the best of Sri Lanka
                to the world. As the General Manager of Scenery Villas and the
                founder of Digital Escapes, I believe that modern travel
                requires a blend of seamless service and genuine human
                connection.
              </p>
                      </div>

              <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed lg:ml-60">
                We have built this collection to offer you the privacy of a
                villa with the reliability of professional management. Whether
                you are here for a family reunion, a creative retreat, or a
                quiet escape, my team and I are dedicated to ensuring your stay
                is nothing short of exceptional.
              </p>
    

              <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
                We don't just hand you a key; we open the door to the real
                Bentota.
              </p>

              {/* Signature */}
              <div className="mt-8 md:mt-10">
                <p className="md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed font-semibold text-gray-900">
                  Shashindu de Silva,
                </p>
                <p className="italic font-[helvetica] text-[16px] md:text-[18px] text-gray-600">
                  General Manager
                </p>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}