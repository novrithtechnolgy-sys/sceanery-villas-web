import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const data = await client.fetch(
      `*[_type=="post" && slug.current==$slug][0]{
        _id,
        title,
        excerpt,
        mainImage,
        publishedAt,
        "categoryTitle": category->title,
        content
      }`,
      { slug }
    );

    return NextResponse.json(data || null);
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to fetch post" },
      { status: 500 }
    );
  }
}