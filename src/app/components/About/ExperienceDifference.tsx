"use client";

import Image from "next/image";
import Container from "../Container";
import Button from "../Button";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ExperienceDifference() {

  const router = useRouter();

  const whatsappNumber = "+94779082515";
  const message = "Hello, I would like to know more about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const handleBookStay = () => {
    router.push("/available-villas");
  };


  return (
    <section className="py-10 pb-20 md:pb-30 md:py-[64px] bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[30px] min-h-[420px]">

          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/vjp4gpfl/image/upload/v1789120155/1fc912ecc054a1e5330e7e9e05dce66307c88f6d.jpg"
            alt="Mountain Escape"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 py-20">
            
            <h2 className="text-white font-heading text-[26px] md:text-[36px] xl:text-[38px] font-bold tracking-wide">
               Experience the Difference
            </h2>

            <p className="mt-4 md:mt-6 text-white/90 font-body text-[14px] md:text-[16px] leading-8 max-w-2xl">
              Private stays and personalised Sri Lankan hospitality, designed around you.
            </p>

            {/* Buttons */}
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-6 items-center">
              
              {/* Primary */}
              <Button onClick={handleBookStay}>
                Explore Our Villas
              </Button>

              {/* Outline */}
              <Button
                variant="light"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
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