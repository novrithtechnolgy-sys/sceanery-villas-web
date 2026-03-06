"use client";

import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type Photo = {
  _id: string;
  title?: string;
  image: any;
};

type Section = {
  _id: string;
  title: string;
  photos: Photo[];
};

function GalleryImage({ photo }: { photo: Photo }) {
  const imgUrl = photo.image
    ? urlFor(photo.image).width(1200).quality(80).url()
    : "";

  return (
    <div className="rounded-[16px] overflow-hidden">
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={photo.title || "gallery"}
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      )}
    </div>
  );
}

function SectionUI({ section }: { section: Section }) {
  return (
    <section className="mt-16">
      <h3 className="text-center text-[26px] italic font-[timesTen] text-gray-900">
        {section.title}
      </h3>

      {/* Masonry grid */}
      <div className="mt-10 columns-2 md:columns-3 gap-6 h-full">
        {section.photos.map((p) => (
          <div key={p._id} className="mb-6 break-inside-avoid">
            <GalleryImage photo={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function GallerySections() {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setSections(data);
    }

    load();
  }, []);

  return (
    <section className="px-6 md:px-10 xl:px-20 pb-24">
      <div className="">
        {sections.map((section) => (
          <SectionUI key={section._id} section={section} />
        ))}
      </div>
    </section>
  );
}