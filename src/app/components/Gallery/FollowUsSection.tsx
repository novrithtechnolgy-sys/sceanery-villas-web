"use client";

import Image from "next/image";
import AutoScrollCarousel from "../AutoScrollCarousel";

const posts = [
  { id: 1, image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773248394/0000000614_ukc5dy.jpg" },
  { id: 2, image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp" },
  { id: 3, image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg" },
  { id: 4, image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896613/IMG-20250927-WA0032_n8gzge.jpg" },
  { id: 5, image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773291401/dji_mimo_20260302_173902_0_1772510307346_photo_bozpzu.webp" },
];

export default function FollowUsSection() {
  return (
    <section className="w-full overflow-hidden py-10 md:py-20">
      <div className="">

        {/* TEXT */}
        <div className="text-center">
          <h3 className="font-[timesTen] text-[16px] md:text-[20px] xl:text-[24px] leading-none">
            <span className="italic font-serif font-normal">Follow Us On</span>
          </h3>

          <h2 className="mt-4 md:mt-4 font-[helvetica] text-[32px] md:text-[46px] font-semibold leading-none tracking-[-0.02em] text-[#111111]">
            @SceneryVillas
          </h2>

          <p className="mt-4 md:mt-8 max-w-[980px] mx-auto font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] leading-[1.5] text-[#222222]">
            See what our guests are posting and get daily travel inspiration
            from the southern coast.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="mt-8 md:mt-16">
          <AutoScrollCarousel cardWidth={370} gap={40} autoSpeed={0.5}>
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[370px]"
              >
                <div className="relative h-[220px] sm:h-[240px] md:h-[280px] rounded-[28px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Scenery Villas post ${post.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 280px, 370px"
                  />
                </div>
              </div>
            ))}
          </AutoScrollCarousel>
        </div>

      </div>
    </section>
  );
}