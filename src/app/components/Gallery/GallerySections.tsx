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
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616569/DSC00336-HDR.jpg",
        alt: "Architecture image 1",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616567/DSC00207-HDR-Edit-Edit.jpg",
        alt: "Architecture image 4",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616551/DSC00238-HDR-Edit.jpg",
        alt: "Architecture image 3",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616552/IMG-20240830-WA0024.jpg",
        alt: "Architecture image 5",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616532/DSC00156-HDR-Edit.jpg",
        alt: "Architecture image 6",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616524/DSC00333-HDR.jpg",
        alt: "Architecture image 7",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616507/DSC00114-HDR-Edit.jpg",
        alt: "Architecture image 8",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789616525/DSC00015-HDR-Edit-2.jpg",
        alt: "Architecture image 9",
      },
    ],
  },

  {
    title: "Tara Garden",

    items: [
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617178/DSC09699-HDR-Edit.jpg",
        alt: "Interior image 1",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617158/DJI_20240828155306_0125_D-Edit-2.jpg",
        alt: "Interior image 2",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617177/DSC09898-HDR-Edit.jpg",
        alt: "Interior image 3",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617158/DSC09800-HDR-Edit.jpg",
        alt: "Interior image 4",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617133/DSC09850-HDR-Edit.jpg",
        alt: "Interior image 5",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617062/DJI_20240828155015_0115_D-Edit-2.jpg",
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
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789617039/DSC09907-HDR-Edit.jpg",
        alt: "Interior image 9",
      },
    ],
  },

  {
    title: "Tree Top",

    items: [
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789627802/DSC01249-HDR.webp",
        alt: "Vibe image 1",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789627831/DSC07599.webp",
        alt: "Vibe image 2",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789627810/DSC01234-HDR.webp",
        alt: "Vibe image 3",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789625112/DSC07266.webp",
        alt: "Vibe image 4",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789625067/DSC01259-HDR.webp",
        alt: "Vibe image 5",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629052/DSC01244-HDR.webp",
        alt: "Vibe image 6",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789627822/Untitled_design.webp",
        alt: "Vibe image 7",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629060/DSC07378.webp",
        alt: "Vibe image 8",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629052/DSC07492_1.webp",
        alt: "Vibe image 9",
      },

    ],
  },

    {
    title: "Villa Desire",

    items: [
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630287/6f33740cdb7748b014a9dacf62a297161d574833.jpg",
        alt: "Vibe image 1",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630286/f682588ea24fd03462b5d64f238dc9301f24c941.jpg",
        alt: "Vibe image 2",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630283/9eab05ec3482515bee0bc58438b37edf1097bb8b.jpg",
        alt: "Vibe image 3",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630274/1ecef73096c5baa02cdf86e00103a5e3c6c3400c.jpg",
        alt: "Vibe image 4",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630266/ca04bdc7704c2c24c67c3fbbf0f03d8e7ca08a59.jpg",
        alt: "Vibe image 5",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630272/67b024cb194bd532284ae8bdd2ea438c1ea24dc4.jpg",
        alt: "Vibe image 6",
      },
    ],
  },

      {
    title: "Monara Villa",

    items: [
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629708/DSC01032-HDR-Edit.jpg",
        alt: "Vibe image 1",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629724/DSC01118-HDR-Edit.jpg",
        alt: "Vibe image 2",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629718/DSC01044-HDR-Edit.jpg",
        alt: "Vibe image 3",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629700/DSC01081-HDR-2-Edit.webp",
        alt: "Vibe image 4",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629701/DSC00987-HDR.webp",
        alt: "Vibe image 5",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789629687/DSC01091-HDR-2-Edit.webp",
        alt: "Vibe image 6",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630037/DSC01184-HDR.webp",
        alt: "Vibe image 7",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630048/DSC01159-HDR.webp",
        alt: "Vibe image 8",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630049/DSC01174-HDR.webp",
        alt: "Vibe image 9",
      }
    ],
  },

      {
    title: "Lucky palace",

    items: [
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630227/cf783c3e1ae34d7fbe77bb2111f1d5bc67482b53.webp",
        alt: "Vibe image 1",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630226/ed42b7f7408c234fbb8ae02612e98e3026347d02.webp",
        alt: "Vibe image 2",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630221/6c90fcd650a749fcad07498b727f3fd005fbdc3a.webp",
        alt: "Vibe image 3",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630216/52f03e77f51ad297f8b9560a1fd6100abc461a39.webp",
        alt: "Vibe image 4",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630213/a73b2b915da3243c6e83494b996f52bf478f3c15.webp",
        alt: "Vibe image 5",
      },
      {
        src: "https://res.cloudinary.com/vjp4gpfl/image/upload/v1789630211/f025ffb5e50465acc6588e219025b3a454294c05.webp",
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