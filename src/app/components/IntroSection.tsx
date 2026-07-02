// components/IntroSection.tsx
import Image from "next/image";
import Container from "./Container";

export default function IntroSection() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <Container>
        <div className="text-center max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="font-heading text-[20px] md:text-[36px] xl:text-[46px]  leading-tight">
            <span className="italic text-gray-800">
              More Than A Stay. 
            </span>{" "}
            <span className="font-semibold text-[#FF751F]">
              A Space That Feels Like Yours.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-4 md:mt-8 font-body text-[16px] md:text-[20px] xl:text-[20px] text-gray-700 leading-[35px] md:leading-[44px]">
            Welcome to the Scenery Villas Collection.
            <br/>
Here, luxury is not defined by excess, but by space, privacy, and the freedom to experience your stay your way.
Whether you’re waking up to quiet paddy field views, gathering your loved ones in a spacious private villa, enjoying a chef-prepared meal together, or simply slowing down in a peaceful homestay, every stay is designed to feel personal. Because the best holidays aren’t just about where you go,  they’re about the moments you create together.
          </p>
          <p className="mt-4 md:mt-8 font-body text-[16px] md:text-[20px] xl:text-[20px] text-gray-700 leading-[35px] md:leading-[44px]">
            - Managed by Scenery Villas
            <br/>A Digital Escapes Venture
          </p>
        </div>

        {/* Image Layout */}
        <div className="mt-8 md:mt-16 flex flex-row items-center justify-center gap-4 md:gap-10">
          

          {/* Center Image (Larger) */}
          <div className="relative w-full h-[220px]  md:h-[480px] rounded-[28px] overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp"
              alt="Sunset palm beach"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}