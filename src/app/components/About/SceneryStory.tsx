"use client";

import Container from "../Container";

export default function SceneryStory() {
  return (
    <section className="py-10 pt-20 md:py-20">
     <Container>
      <div className="max-w-[1000px] mx-auto text-center">

        {/* Heading */}
        <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
          <span className="italic font-serif">The</span>{" "}
          <span className="font-semibold">Scenery Story</span>
        </h2>

        {/* First Paragraph */}
        <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-800">
          Scenery Villas began with a simple idea: that the best travel
          experiences happen in private. We wanted to move away from the
          crowded lobbies and standardized rooms of large hotels to create
          something more personal. Starting with a single property in
          Bentota, we have grown into a diverse collection of six unique
          villas and residences.
        </p>

        {/* Second Paragraph */}
        <p className="mt-4 md:mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-800">
          From the hilltop silence of Villa Mandalay to the gathering spaces
          of Treetop Resort, each property in our portfolio has been chosen
          for its character, its location, and its ability to make you feel
          at home. Today, we are proud to host travelers from across the
          globe, offering them a sanctuary on the southern coast where they
          can slow down, reconnect, and experience the true warmth of our
          island.
        </p>

      </div>
     </Container>
    </section>
  );
}