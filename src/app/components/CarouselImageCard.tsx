"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function CarouselImageCard({
  image,
  alt,
}: {
  image: any;
  alt?: string;
}) {
  const img = urlFor(image).width(1400).quality(90).url();

  return (
    <div className="relative shrink-0 w-[80vw] md:w-[440px]">
      <div className="relative h-[230px] md:h-[300px] overflow-hidden rounded-[28px] bg-gray-100">
        <Image
          src={img}
          alt={alt || "Villa image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 440px"
        />
      </div>
    </div>
  );
}