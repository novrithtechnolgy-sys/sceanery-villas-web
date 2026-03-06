import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const query = groq`
*[_type == "gallerySection"] | order(order asc){
  _id,
  title,
  "photos": *[_type=="galleryPhoto" && references(^._id)] | order(order asc){
    _id,
    title,
    image
  }
}
`;

export async function GET() {
  const data = await client.fetch(query);
  return NextResponse.json(data);
}