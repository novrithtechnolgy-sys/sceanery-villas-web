"use client";

import Image from "next/image";
import Container from "../Container";

type GalleryItem = {
  src: string;
  alt: string;
  className?: string;
};

type GalleryTitle = {
  italic: string;
  bold: string;
};

type GallerySectionData = {
  title: GalleryTitle;
  items: GalleryItem[];
};

type GallerySectionProps = GallerySectionData & {
  index: number;
};

const gallerySections: GallerySectionData[] = [
  {
    title: {
      italic: "The ",
      bold: "Architecture",
    },
    items: [
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772883965/IMG-20250927-WA0049_1_ggytqt.jpg",
        alt: "Architecture image 2",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772962601/IMG-20250927-WA0016_1_qqtfnd.jpg",
        alt: "Architecture image 1",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772884984/IMG-20250927-WA0043_x4850s.jpg",
        alt: "Architecture image 4",
      },
            {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772944549/DJI_20260302180714_0212_D_exndrg.webp",
        alt: "Architecture image 3",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963539/IMG-20250927-WA0040_dsqccu.jpg",
        alt: "Architecture image 5",
      },
      
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772962380/IMG-20250927-WA0045_1_qewmks.jpg",
        alt: "Architecture image 6",
      },
      // {
      //   src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772941365/upftzhasthk4h7vhswa9_qlbgjx.webp",
      //   alt: "Architecture image 7",
      // },
      // {
      //   src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940785/IMG-20250927-WA0021_xbraaf.jpg",
      //   alt: "Architecture image 8",
      // },
    ],
  },
  {
    title: {
      italic: "The ",
      bold: "Interiors",
    },
    items: [
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939699/dji_mimo_20260302_175014_0_1772510343858_photo_admkvk.webp",
        alt: "Culinary image 1",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940663/dji_mimo_20260302_174346_0_1772510316232_photo_qehx5t.webp",
        alt: "Culinary image 2",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896613/IMG-20250927-WA0032_n8gzge.jpg",
        alt: "Culinary image 3",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896466/IMG-20250927-WA0061_wslrzu.jpg",
        alt: "Culinary image 4",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939529/dji_mimo_20260302_175004_0_1772510342526_photo_jprutg.webp",
        alt: "Culinary image 5",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg",
        alt: "Culinary image 6",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963284/IMG-20250927-WA0034_plev6i.jpg",
        alt: "Culinary image 7",
      },
            {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963284/IMG-20250927-WA0034_plev6i.jpg",
        alt: "Culinary image 8",
      },

    ],
  },
    {
    title: {
      italic: "The ",
      bold: "Vibe",
    },
    items: [
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963284/IMG-20250927-WA0034_plev6i.jpg",
        alt: "Culinary image 1",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772960568/152aaaa6601c81b5d07fc36dda998d95d8137683_aetolo.webp",
        alt: "Culinary image 2",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940785/IMG-20250927-WA0021_xbraaf.jpg",
        alt: "Culinary image 4",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896463/IMG-20250927-WA0050_1_gl041w.jpg",
        alt: "Culinary image 3",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940785/IMG-20250927-WA0021_xbraaf.jpg",
        alt: "Culinary image 5",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940785/IMG-20250927-WA0021_xbraaf.jpg",
        alt: "Culinary image 6",
      },

    ],
  },
];

const layoutPattern = [
  "col-span-12 md:col-span-4 h-[140px] md:h-[320px] md:-mt-[18px]",
  "col-span-6 md:col-span-8 h-[140px] md:h-[320px] md:-mt-[18px]",
  // "col-span-12 md:col-span-4 h-[245px]",
  // "col-span-12 md:col-span-4 h-[245px]",
  // "col-span-12 md:col-span-4 h-[245px]",
  "col-span-6 md:col-span-8 h-[140px] md:h-[320px]",
  "col-span-12 md:col-span-4 h-[140px] md:h-[660px]",
  "col-span-6 md:col-span-4 h-[140px] md:h-[320px]  md:-mt-[340px]",
  "col-span-6 md:col-span-4 h-[140px] md:h-[320px]  md:-mt-[340px]",

];

const layoutPatternFlipped = [
  "col-span-6 md:col-span-4 h-[140px] md:h-[525px]",
  "col-span-6 md:col-span-8 h-[140px] md:h-[260px]",
  "col-span-12 md:col-span-4 h-[140px] md:h-[245px]",
  "col-span-6 md:col-span-4  h-[140px] md:h-[245px] md:-mt-[264px]",
  "col-span-6 md:col-span-4 h-[140px] md:h-[510px] md:-mt-[264px]",
  "relative col-span-12 md:col-span-4 h-[140px] md:h-[245px] ",
  "col-span-6 md:col-span-4 h-[140px] md:h-[510px] md:-mt-[264px]",
  "col-span-6 md:col-span-4 h-[140px] md:h-[245px] md:-mt-[px]"
];  

export default function LuxuryGalleryPage() {
  return (
    <main className="bg-white py-10 md:py-16">
      <Container>
        {gallerySections.map((section, index) => (
          <GallerySection
            key={index}
            index={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </Container>
    </main>
  );
}

function GallerySection({ title, items, index }: GallerySectionProps) {
  const activePattern = index % 2 === 0 ? layoutPattern : layoutPatternFlipped;

  return (
    <section className="py-10 md:py-20">
      <h2 className="font-[timesTen] text-center text-[20px] md:text-[36px] xl:text-[46px] leading-tight mb-16">
        <span className="italic font-normal">{title.italic}</span>
        <span className="font-semibold">{title.bold}</span>
      </h2>

      <div className="grid grid-cols-12 gap-2 md:gap-5">
        {items.map((item, itemIndex) => {
          const layout =
            item.className || activePattern[itemIndex % activePattern.length];

          return (
            <div
              key={itemIndex}
              className={`relative overflow-hidden rounded-[20px] ${layout}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}