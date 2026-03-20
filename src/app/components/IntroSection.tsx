// components/IntroSection.tsx
import Image from "next/image";
import Container from "./Container";

export default function IntroSection() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <Container>
        <div className="text-center max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px]  leading-tight">
            <span className="italic text-gray-800">
              More Than A Stay.
            </span>{" "}
            <span className="font-semibold text-gray-900">
              A State Of Mind.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
            Welcome to the Scenery Villas Collection. We believe true luxury is privacy and choice.
            Whether you are seeking the silence of a paddy field horizon, the charm of colonial
            heritage, a massive lodge for your entire tribe, or a quiet homestay for a long layover,
            our portfolio offers a home for every traveler.
          </p>
        </div>

        {/* Image Layout */}
        <div className="mt-8 md:mt-16 flex flex-row items-center justify-center gap-4 md:gap-10">
          
          {/* Left Image */}
          <div className="relative w-[100px] h-[180px] md:w-[300px] md:h-[380px] rounded-[24px] overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg"
              alt="Beach workspace"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Image (Larger) */}
          <div className="relative w-[120px] h-[220px] md:w-[380px] md:h-[480px] rounded-[28px] overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp"
              alt="Sunset palm beach"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-[100px] h-[180px] md:w-[300px] md:h-[380px] rounded-[24px] overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1773855264/DSC02255HDR_1_np1ziu.webp"
              alt="Sea turtle"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}