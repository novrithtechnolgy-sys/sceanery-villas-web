import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");

    const query = cat
      ? `*[_type=="post" && category->slug.current==$cat] | order(_createdAt desc){
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          "categoryTitle": category->title,
          "categorySlug": category->slug.current
        }`
      : `*[_type=="post"] | order(_createdAt desc){
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          "categoryTitle": category->title,
          "categorySlug": category->slug.current
        }`;

    const params = cat ? { cat } : {};
    const data = await client.fetch(query, params);

    return NextResponse.json(data || []);
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to fetch posts" },
      { status: 500 }
    );
  }
}