import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import VillaTabs from "@/app/components/villas/VillaTabs";
import type { Metadata } from "next";

export const revalidate = 60;

/* =========================================================
   VILLA QUERY
========================================================= */

const VILLA_BY_SLUG = `*[
  _type == "villas" &&
  slug.current == $slug
][0]{
  "slug": slug.current,

  title,
  tagline,

  metatitle,
  metadescription,

  heroImage,

  heroStats[]{
    _key,
    label,
    value
  },

  logo,

  intro,

  highlights{
    headingItalic,
    headingBold,
    description,

    cards[]{
      title,
      desc,
      image
    }
  },

  gallery[]{
    type,
    image,
    youtubeUrl,
    title
  },

  features[]{
    title,
    desc,
    image
  },

  amenities,

  amenitiesImage,

  carouselImages[]{
    _key,
    asset,
    alt
  },

  virtualTour{
    headingItalic,
    headingBold,
    description,
    tourImage
  },

  mapEmbedUrl
}`;

/* =========================================================
   SEO QUERY
========================================================= */

const VILLA_SEO_QUERY = `*[
  _type == "villas" &&
  slug.current == $slug
][0]{
  "slug": slug.current,

  title,
  tagline,

  metatitle,
  metadescription,

  heroImage
}`;

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const villa = await client.fetch(
    VILLA_SEO_QUERY,
    { slug }
  );

  /* =======================================================
     VILLA NOT FOUND
  ======================================================= */

  if (!villa) {
    return {
      title: "Villa Not Found | Scenery Villas",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  /* =======================================================
     BASIC DATA
  ======================================================= */

  const title =
    villa.metatitle ||
    villa.title ||
    "Luxury Villa in Sri Lanka";

  const description =
    villa.metadescription ||
    villa.tagline ||
    "Discover a private luxury villa in Sri Lanka with Scenery Villas.";

  const url =
    `https://sceneryvillassrilanka.com/villas/${villa.slug}`;

  /* =======================================================
     OG IMAGE
  ======================================================= */

  const image = villa.heroImage
    ? urlFor(villa.heroImage)
        .width(1200)
        .height(630)
        .url()
    : "https://sceneryvillassrilanka.com/og-image.jpg";

  /* =======================================================
     METADATA
  ======================================================= */

  return {
    title,

    description,

    keywords: [
      villa.title,
      "luxury villa Sri Lanka",
      "private villa Sri Lanka",
      "villa holiday Sri Lanka",
      "luxury villas Sri Lanka",
    ].filter(Boolean),

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,

      description,

      url,

      siteName: "Scenery Villas",

      locale: "en_LK",

      type: "website",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt:
            villa.title ||
            "Scenery Villas",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image],
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function VillaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const villa = await client.fetch(
    VILLA_BY_SLUG,
    { slug }
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!villa) {
    notFound();
  }

  /* =======================================================
     CANONICAL URL
  ======================================================= */

  const canonicalUrl =
    `https://sceneryvillassrilanka.com/villas/${villa.slug}`;

  /* =======================================================
     HERO IMAGE
  ======================================================= */

  const heroImage = villa.heroImage
    ? urlFor(villa.heroImage)
        .width(1200)
        .height(630)
        .url()
    : "https://sceneryvillassrilanka.com/og-image.jpg";

  /* =======================================================
     STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context": "https://schema.org",

    "@type": "LodgingBusiness",

    "@id": `${canonicalUrl}#lodging`,

    name: villa.title,

    description:
      villa.tagline ||
      villa.intro ||
      `Luxury private villa in Sri Lanka.`,

    url: canonicalUrl,

    image: [
      heroImage,
    ],

    brand: {
      "@type": "Brand",
      name: "Scenery Villas",
    },

    isPartOf: {
      "@type": "WebSite",
      name: "Scenery Villas",
      url: "https://sceneryvillassrilanka.com",
    },
  };

  return (
    <>
      {/* ===================================================
          JSON-LD
      =================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ),
        }}
      />

      {/* ===================================================
          VILLA PAGE
      =================================================== */}

      <VillaTabs villa={villa} />
    </>
  );
}