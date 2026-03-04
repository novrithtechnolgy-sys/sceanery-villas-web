"use client";

import Image from "next/image";
import Container from "../Container";

export default function MeetYourHosts() {
  return (
    <section className="py-20">
    <Container >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px]  leading-tight">
            <span className="italic">Meet Your</span>{" "}
            <span className="font-semibold">Hosts</span>
          </h2>

          <p className="mt-8 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
            Behind every perfect stay is a dedicated team. From our villa
            managers who greet you with a smile to the chefs who remember your
            coffee order, our staff is the heartbeat of Scenery Villas. We
            invest in our people, providing training and opportunities that
            empower them to deliver the best service on the coast. When you stay
            with us, you are supported by a team that genuinely cares about
            your happiness.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5">
          <div className="relative w-full h-[280px] md:h-[360px] rounded-[26px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772364254/6b01591a9d3fb91b08706b593a7a8b3a5df64245_x2mksk.webp"
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