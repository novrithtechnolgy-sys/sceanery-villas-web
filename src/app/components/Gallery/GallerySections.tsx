// components/LuxuryGalleryPage.tsx

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Container from "../Container";

/* =========================================================
   TYPES
========================================================= */

type GalleryItem = {
  src: string;
  alt: string;
};

type GalleryTitle = {
  italic: string;
  bold: string;
};

type GallerySectionData = {
  title: GalleryTitle | string;
  items: GalleryItem[];
};

/* =========================================================
   GALLERY DATA
========================================================= */

const gallerySections: GallerySectionData[] = [
  {
    title: "Villa Mandalay",

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
    ],
  },

  {
    title: "Tara Garden",

    items: [
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939699/dji_mimo_20260302_175014_0_1772510343858_photo_admkvk.webp",
        alt: "Interior image 1",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772940663/dji_mimo_20260302_174346_0_1772510316232_photo_qehx5t.webp",
        alt: "Interior image 2",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773291649/0000009575_hzo6ny.webp",
        alt: "Interior image 3",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896466/IMG-20250927-WA0061_wslrzu.jpg",
        alt: "Interior image 4",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773291305/DSC02596_iotcth.webp",
        alt: "Interior image 5",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773292009/WhatsApp_Image_2024-05-07_at_13.13.09_npcyfu.jpg",
        alt: "Interior image 6",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773375823/DSC07235-Edit_myzadm.webp",
        alt: "Interior image 7",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963284/IMG-20250927-WA0034_plev6i.jpg",
        alt: "Interior image 8",
      },
    ],
  },

  {
    title: "Tree Top",

    items: [
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg",
        alt: "Vibe image 1",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp",
        alt: "Vibe image 2",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773978356/DSC02767HDR-3-2_1_ksyd3g.jpg",
        alt: "Vibe image 3",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896463/IMG-20250927-WA0050_1_gl041w.jpg",
        alt: "Vibe image 4",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773247585/DSC02330HDR-2-Edit_eatoc4.webp",
        alt: "Vibe image 5",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963284/IMG-20250927-WA0034_plev6i.jpg",
        alt: "Vibe image 6",
      },
    ],
  },

    {
    title: "Villa Desire",

    items: [
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg",
        alt: "Vibe image 1",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp",
        alt: "Vibe image 2",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773978356/DSC02767HDR-3-2_1_ksyd3g.jpg",
        alt: "Vibe image 3",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896463/IMG-20250927-WA0050_1_gl041w.jpg",
        alt: "Vibe image 4",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773247585/DSC02330HDR-2-Edit_eatoc4.webp",
        alt: "Vibe image 5",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963284/IMG-20250927-WA0034_plev6i.jpg",
        alt: "Vibe image 6",
      },
    ],
  },

      {
    title: "Monara Villa",

    items: [
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg",
        alt: "Vibe image 1",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp",
        alt: "Vibe image 2",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773978356/DSC02767HDR-3-2_1_ksyd3g.jpg",
        alt: "Vibe image 3",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896463/IMG-20250927-WA0050_1_gl041w.jpg",
        alt: "Vibe image 4",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773247585/DSC02330HDR-2-Edit_eatoc4.webp",
        alt: "Vibe image 5",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963284/IMG-20250927-WA0034_plev6i.jpg",
        alt: "Vibe image 6",
      },
    ],
  },

      {
    title: "Lucky palace",

    items: [
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896456/IMG-20250927-WA0037_1_p0gqeo.jpg",
        alt: "Vibe image 1",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772939946/dji_mimo_20260302_175042_0_1772510346779_photo_q4dogy.webp",
        alt: "Vibe image 2",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773978356/DSC02767HDR-3-2_1_ksyd3g.jpg",
        alt: "Vibe image 3",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772896463/IMG-20250927-WA0050_1_gl041w.jpg",
        alt: "Vibe image 4",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1773247585/DSC02330HDR-2-Edit_eatoc4.webp",
        alt: "Vibe image 5",
      },
      {
        src: "https://res.cloudinary.com/dpjmcup95/image/upload/v1772963284/IMG-20250927-WA0034_plev6i.jpg",
        alt: "Vibe image 6",
      },
    ],
  },
  
];

/* =========================================================
   ALL IMAGES
========================================================= */

const allImages = gallerySections.flatMap(
  (section) => section.items
);

/* =========================================================
   GALLERY CARD
========================================================= */

function GalleryCard({
  item,
}: {
  item: GalleryItem;
}) {
  return (
    <div
      className="
        relative
        aspect-square
        w-full
        overflow-hidden
        rounded-[20px]
        bg-gray-100
        md:rounded-[22px]
      "
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="
          (max-width: 767px) 50vw,
          (max-width: 1024px) 33vw,
          33vw
        "
        className="
          object-cover
          transition-transform
          duration-500
          hover:scale-[1.03]
        "
      />
    </div>
  );
}

/* =========================================================
   FILTER BUTTON
========================================================= */

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        shrink-0
        rounded-full
        px-6
        py-3
        font-body
        text-[13px]
        font-medium
        transition-all
        duration-300

        md:px-7
        md:py-3.5
        md:text-[14px]

        ${
          active
            ? "bg-[#FF751F] text-white shadow-sm"
            : "border border-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-200"
        }
      `}
    >
      {children}
    </button>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function LuxuryGalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState("Villa Mandalay");

  /* =======================================================
     FILTER IMAGES
  ======================================================= */

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return allImages;
    }

    const section = gallerySections.find(
      (item) =>
        `${item.title}` ===
        activeCategory
    );

    return section?.items ?? [];
  }, [activeCategory]);

  /* =======================================================
     CATEGORIES
  ======================================================= */

  const categories = [
    ...gallerySections.map(
      (section) =>
        `${section.title}`
    ),"All",
  ];

  return (
    <main className="bg-white">

      {/* =================================================
          DESKTOP / MOBILE CONTAINER
      ================================================= */}

        <section
          className="py-[32px] md:py-[64px]"
        >
          <div
            className="md:hidden               flex
              items-center
              gap-2
              overflow-x-auto
              pb-2
              pl-4
              pr-4

              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              md:gap-2">
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={
                  activeCategory === category
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </FilterButton>
            ))}
          </div>
          <Container>

          {/* =================================================
              FILTER BAR
          ================================================= */}

          <div
            className="hidden md:flex
              items-center
              gap-2
              overflow-x-auto
              pb-2

              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              md:gap-2
            "
          >
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={
                  activeCategory === category
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </FilterButton>
            ))}

            {/* Image Count */}

            <div
              className="
                ml-auto
                hidden
                shrink-0
                whitespace-nowrap
                pl-6
                font-body
                text-[13px]
                italic
                text-gray-500
                md:block
                md:text-[14px]
              "
            >
              {filteredImages.length} Images
            </div>

          </div>

          {/* Mobile Image Count */}

          <div
            className="
              mt-3
              text-right
              font-body
              text-[12px]
              italic
              text-gray-500
              md:hidden
            "
          >
            {filteredImages.length} Images
          </div>

          {/* =================================================
              GALLERY
          ================================================= */}

          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-3

              sm:gap-4

              md:mt-12
              md:grid-cols-3
              md:gap-6
            "
          >

            {filteredImages.map(
              (item, index) => (
                <GalleryCard
                  key={`${item.src}-${index}`}
                  item={item}
                />
              )
            )}

          </div>

          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {!filteredImages.length && (
            <div
              className="
                py-20
                text-center
                font-body
                text-gray-500
              "
            >
              No images available.
            </div>
          )}
          </Container>
        </section>

      

    </main>
  );
}