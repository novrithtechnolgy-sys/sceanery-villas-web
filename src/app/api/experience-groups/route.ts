import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";


const query = groq`
  *[_type == "experienceGroup"] | order(order asc) {
    _id,
    eyebrowItalic,
    titleBold,
    subtitle,
    cards[] | order(order asc) {
      _key,
      title,
      desc,
      image
    }
  }
`;

export async function GET() {
  const data = await client.fetch(query);
  return NextResponse.json(data);
}