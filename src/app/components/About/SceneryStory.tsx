"use client";

import Container from "../Container";
import Image from "next/image";

export default function SceneryStory() {
  return (
    <section className="py-[32px] md:py-[64px] bg-white">
     <Container>
      <div className="mx-auto max-w-[910px] text-center">

        {/* Heading */}
        <h2 className="
                font-heading
                text-[22px]
                md:text-[32px]
                xl:text-[38px]
                font-bold
                md:leading-[42px]
                xl:leading-[48px]
                tracking-[-0.5px]
                text-gray-900
                text-center
                ">
          <span className="">The</span>{" "}
          <span className=" text-[#FF751F]">Scenery Story</span>
        </h2>
        {/* First Paragraph */}
        <p className="mt-4 md:mt-8 font-body font-regular text-[14px] md:text-[16px] text-black leading-[26px] md:leading-[30px]">
            Scenery Villas began with a love for Sri Lanka and a belief that the very best stays feel personal. Founder Shiral De Silva spent over 30 years as a guide, sharing his country's beauty with global travellers. Along the way, several guests fell deeply in love with the island, creating their own dream homes here. These were not just holiday rentals; they were sanctuaries built to live, belong, and return to.
          <br/>
          <span className="block mt-4 md:mt-6">
            The first was Villa Mandalay, a peaceful hilltop retreat created by a European family. This inspired a distinctive collection: Villa Desire, Tara Garden, and Monara Villa, each boasting unique character. Treetop Resort joined later, thoughtfully transformed from a popular venue into a spacious group retreat.
          <br/> 
          </span>
          <span className="block mt-4 md:mt-6">
            Today, these lovingly created homes form our collection. The owners are opening their doors, inviting you to experience true privacy, dedicated care, and genuine Sri Lankan warmth and hospitality. You are not simply booking a villa, you are stepping into someone’s Sri Lankan dream.
          </span>
        </p>
      </div>
     </Container>
    </section>
  );
}