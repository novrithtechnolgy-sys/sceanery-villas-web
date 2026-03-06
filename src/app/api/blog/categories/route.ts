import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const CATEGORIES_QUERY = groq`
  *[_type=="category"] | order(order asc, title asc) {
    _id, title, slug, order
  }
`;

export async function GET() {
  const categories = await client.fetch(CATEGORIES_QUERY);
  return NextResponse.json(categories);
}