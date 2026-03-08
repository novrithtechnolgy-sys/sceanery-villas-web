import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const query = groq`
  *[_type=="villacarosal"] | order(order asc) {
    _id,
    badge,
    title,
    description,
    bedrooms,
    sleeps,
    feature,
    cta,
    image,
     "slug": slug.current
  }
`;

export async function GET() {
  const villacarosal = await client.fetch(query);
  return NextResponse.json(villacarosal);
}