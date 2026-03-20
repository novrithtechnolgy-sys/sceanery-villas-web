import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

const ALL_VILLAS = `*[_type=="villas" && defined(slug.current)]
  | order(priority asc, _createdAt desc){
  title,
  "slug": slug.current,
  priority
}`;

export async function GET() {
  try {
    const villas = await client.fetch(ALL_VILLAS);

    return NextResponse.json(villas);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch villas" },
      { status: 500 }
    );
  }
}