"use client";

import Image from "next/image";
import Container from "../Container";

export default function MeetYourHosts() {
  return (
    <section className="py-10 md:py-20">
    <Container >
      <div className="grid grid-cols-1 md:grid-cols-13 md:gap-14 items-center">
        
        {/* Left Content */}
        <div className="md:col-span-7">
          <h2 className="font-heading text-[24px] md:text-[36px] xl:text-[46px] text-center md:text-left leading-tight">
            <span className="italic">Meet Your</span>{" "}
            <span className="font-semibold text-[#FF751F]">Team</span>
          </h2>

          <p className="mt-4 md:mt-8 font-body text-center md:text-left text-[15px] md:text-[20px] text-gray-700 leading-[32px] md:leading-[44px]">
            Behind every memorable stay is a team that cares.
From the moment you arrive, you are welcomed by people who take pride in what they do, from villa managers who ensure everything runs smoothly to chefs who remember how you like your meals.
At Scenery Villas, our team is more than staff; they are the heart of the experience. We invest in their growth because we believe that genuine hospitality begins with empowered people.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:col-span-6">
          <div className="relative w-full h-[280px] md:h-[420px] rounded-[26px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1773375384/589205959_1281275900707377_8437864311481068996_n_fekhzf.webp"
              alt="Meet your hosts"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </Container>
    </section>
  );
}