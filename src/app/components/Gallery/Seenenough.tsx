"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import { useRouter } from "next/navigation";


export default function Seenenough() {

const router = useRouter();

  return (
    <section className="bg-white py-10 pb-20 md:py-20 ">
      <Container >
        <div className="relative rounded-[26px] overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[320px] md:h-[420px]">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1773334949/little-adams-peak-drone-view-mountains_nho9fy.jpg"
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
               Seen enough?
            </h2>

            <p className="mt-4 text-white font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
                Turn these pictures into memories.
            </p>

            
            <Button
             onClick={() => router.push("/available-villas")}
             variant="primary" className="mt-8">
              Book Your Stay
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}