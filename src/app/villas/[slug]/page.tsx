import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import VillaTabs from "@/app/components/villas/VillaTabs";
import type { Metadata } from "next";

export const revalidate = 60;

const VILLA_BY_SLUG = `*[_type=="villas" && slug.current==$slug][0]{
  "slug": slug.current,
  title,
  tagline,
  heroImage,
  stats,
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
  features[]{title, desc, image},
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
    previewImage,
    tourUrl
  },
  mapEmbedUrl
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const villa = await client.fetch(
    `*[_type=="villas" && slug.current==$slug][0]{
      metatitle,
      metadescription,
      heroImage,
      "slug": slug.current
    }`,
    { slug }
  );

  if (!villa) {
    return {
      title: "Villa Not Found",
    };
  }

  const image = villa.heroImage
    ? urlFor(villa.heroImage).width(1200).height(630).url()
    : "/og-image.jpg";

  const url = `https://sceneryvillassrilanka.com/villas/${villa.slug}`;

  return {
    title: villa.metatitle || villa.title,
    description:
      villa.metadescription ||
      "Luxury private villa in Bentota Sri Lanka with private pool and tropical surroundings.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: villa.title,
      description: villa.tagline,
      url,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: villa.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: villa.title,
      description: villa.tagline,
      images: [image],
    },
  };
}

export default async function VillaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const villa = await client.fetch(VILLA_BY_SLUG, { slug });

  if (!villa) return notFound();

  return <VillaTabs villa={villa} />;
}