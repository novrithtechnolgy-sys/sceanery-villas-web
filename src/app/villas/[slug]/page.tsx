import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import VillaTabs from "@/app/components/villas/VillaTabs";

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
  mapEmbedUrl,
}`;

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