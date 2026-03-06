"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { urlFor } from "@/sanity/lib/image";
import Container from "../Container";

type BlogPost = {
  _id: string;
  title: string;
  excerpt?: string;
  mainImage?: any;
  categoryTitle?: string;
  content?: string;
};

export default function BlogReadPage() {
  const params = useParams();

  const raw = params?.slug;
  const slug = Array.isArray(raw) ? raw[0] : raw;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!slug) return;

    (async () => {
      try {
        setLoading(true);
        setErr("");

        const res = await fetch(
          `/api/blog/post?slug=${encodeURIComponent(slug)}`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error(`Post API failed: ${res.status}`);

        const data = await res.json();
        if (!data?._id) throw new Error("Post not found");

        setPost(data);
      } catch (e: any) {
        setErr(e?.message || "Failed to load post");
        setPost(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  const img =
    post?.mainImage ? urlFor(post.mainImage).width(1600).quality(90).url() : "";

  return (
    <>
      <Navbar />

      <main className="bg-white py-10">
        <Container>
          {!slug && (
            <p className="text-center text-red-600">Invalid URL (no slug)</p>
          )}

          {loading && !err && (
            <p className="text-center text-gray-600">Loading...</p>
          )}

          {err && <p className="text-center text-red-600">{err}</p>}

          {!loading && !err && post && (
            <>
              {post.categoryTitle && (
                <div className="mb-6">
                  <span className="px-4 py-2 rounded-full bg-gray-100 text-[13px] font-medium">
                    {post.categoryTitle}
                  </span>
              
                </div>
              )}

              <h1 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] font-semibold leading-tight">
                {post.title}
              </h1>

              {img && (
                <div className="mt-10 relative h-[620px] w-full rounded-[28px] overflow-hidden">
                  <Image src={img} alt={post.title} fill className="object-cover" />
                </div>
              )}

              <div className="mt-12 text-[17px] leading-8 text-gray-700 space-y-6">
                {(post.content || "").split("\n").filter(Boolean).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </>
          )}
        </Container>
      </main>
    </>
  );
}