"use client";

import Container from "../Container";
import Image from "next/image";

export default function SceneryStory() {
  return (
    <section className="py-10 pt-20 md:py-20">
     <Container>
      <div className="mx-auto text-center">

        {/* Heading */}
        <h2 className="font-heading text-[24px] md:text-[36px] xl:text-[46px] leading-tight">
          <span className="italic ">The</span>{" "}
          <span className="font-semibold text-[#FF751F]">Scenery Story</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 mt-4 md:mt-8">
        {/* First Paragraph */}
        <p className="mt-4 md:mt-8 font-body text-[15px] md:text-[20px] md:text-left text-gray-800 leading-[32px] md:leading-[44px]">
            Scenery Villas began with a simple belief that the most meaningful travel experiences are personal, private, and deeply connected to place.
          <br/>
            Our journey is shaped by decades of experience in Sri Lanka’s tourism industry. Our director, Shiral De Silva, began his career over 30 years ago as a driver and tour guide, sharing the beauty of the island with travelers from around the world. Along the way, he built lasting relationships, one of which would shape the future of Scenery Villas.
          <br/> 
            A European family he guided fell in love with Sri Lanka and chose to build a villa here. That first project became Villa Mandalay, a peaceful hilltop retreat that marked the beginning of something greater.
        </p>
          <div className="hidden md:block relative w-full md:w-7/3 h-[300px] md:h-[480px] rounded-[20px]">
          <Image
            src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg"
            alt="Scenery Story"
            fill
            className="mt-4 md:mt-8 object-cover rounded-[20px] border border-gray-200"
          />
          </div>
        </div>

        {/* Second Paragraph */}
        <p className="relative mt-4 md:mt-8 font-body text-[15px] md:text-[20px] md:text-left text-gray-800 leading-[32px] md:leading-[44px]">
          Soon after, another group of travelers experienced Sri Lanka in the same way and decided to create their own space, leading to the growth of the collection. Over time, this organic journey expanded to include Villa Desire, Tara Garden, and Monara Villa, each shaped by its own story, character, and setting.
          <br/>
Treetop Resort followed a different path. Once a well-known banquet and wedding venue in the area, it was reimagined into a spacious private retreat, now welcoming large groups and gatherings in a setting designed for connection.
Today, Scenery Villas is a curated collection of unique homes, each chosen not just for its location, but for the feeling it offers. Together, they create a space where guests can slow down, reconnect, and experience the true warmth of Sri Lanka.
        </p>

        <div className="md:hidden relative w-full md:w-7/3 h-[300px] md:h-[480px] rounded-[20px]">
          <Image
            src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg"
            alt="Scenery Story"
            fill
            className="mt-4 md:mt-8 object-cover rounded-[20px] border border-gray-200"
          />
          </div>

      </div>
     </Container>
    </section>
  );
}