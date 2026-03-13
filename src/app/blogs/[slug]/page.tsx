import BlogReadPage from "@/app/components/Blogs/BlogReadPage";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug?: string }>;
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Blog",
      description: "Read the latest blog posts from Scenery Villas.",
    };
  }

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      mainImage
    }`,
    { slug }
  );

  const image = post?.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "https://sceneryvillassrilanka.com/og-image.jpg";

  return {
    title: post?.title || "Blog",
    description:
      post?.excerpt ||
      "Read travel guides and stories from Bentota by Scenery Villas.",
    openGraph: {
      title: post?.title || "Blog",
      description:
        post?.excerpt ||
        "Read travel guides and stories from Bentota by Scenery Villas.",
      images: [image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title || "Blog",
      description:
        post?.excerpt ||
        "Read travel guides and stories from Bentota by Scenery Villas.",
      images: [image],
    },
    alternates: {
      canonical: `https://sceneryvillassrilanka.com/blog/${slug}`,
    },
  };
}

export default function Page() {
  return <BlogReadPage />;
}