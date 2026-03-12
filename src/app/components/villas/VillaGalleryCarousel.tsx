"use client";

import AutoScrollCarousel from "../AutoScrollCarousel";
import CarouselImageCard from "../CarouselImageCard";

export default function VillaGalleryCarousel({
  items = [],
}: {
  items: any[];
}) {
  if (!items.length) {
    return <div className="text-sm text-gray-500">No images yet</div>;
  }

  return (
    <section className="w-full overflow-hidden py-10 md:py-20">
      <div className="mt-6 overflow-hidden md:mt-12  md:px-0">
        <AutoScrollCarousel>
          {items.map((imgObj, i) => (
            <CarouselImageCard
              key={imgObj._key || i}
              image={imgObj}
              alt={imgObj.alt}
            />
          ))}
        </AutoScrollCarousel>
      </div>
    </section>
  );
}