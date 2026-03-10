"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { urlFor } from "@/sanity/lib/image";
import Container from "../Container";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";

type BlogPost = {
  _id: string;
  title: string;
  excerpt?: string;
  mainImage?: any;
  categoryTitle?: string;
  content?: any[];
  publishedAt?: string;
};

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-6">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || "Blog Image"}
          width={800}
          height={500}
          quality={75}
          className="rounded-xl shadow-md object-cover"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="font-[poppins] text-[24px] md:text-[32px] font-bold text-black mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-[poppins] text-[20px] md:text-[28px] font-semibold text-black mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-[poppins] text-[18px] md:text-[24px] font-semibold text-black mt-6 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-[poppins] text-[16px] md:text-[20px] font-semibold text-black mt-6 mb-2">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-[poppins] text-[14px] md:text-[18px] font-semibold text-black mt-6 mb-2">
        {children}
      </h5>
    ),
    normal: ({ children }) => (
      <p className="font-[poppins] text-[12px] md:text-[16px] leading-relaxed text-justify text-gray-700 mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#1B3A57] pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#1B3A57]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-[#234C6C] italic">{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1B3A57] underline hover:text-[#0D2234]"
      >
        {children}
      </a>
    ),
  },
};

export default function BlogReadPage() {
  const params = useParams();

  const slug = useMemo(() => {
    const raw = params?.slug;
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params]);

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setErr("Invalid URL (no slug)");
      return;
    }

    const loadPost = async () => {
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
    };

    loadPost();
  }, [slug]);

  const img =
    post?.mainImage ? urlFor(post.mainImage).width(1600).quality(90).url() : "";

  return (
    <>
      <Navbar />

      <main className="bg-white py-10">
        <Container>
          <div className="">
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

                {post.publishedAt && (
                  <p className="mt-4 text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                )}

                {img && (
                  <div className="mt-10 relative h-[620px] w-full rounded-[28px] overflow-hidden">
                    <Image
                      src={img}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="mt-12">
                  {post.content && post.content.length > 0 ? (
                    <PortableText
                      value={post.content}
                      components={portableTextComponents}
                    />
                  ) : (
                    <p className="text-[17px] leading-8 text-gray-700">
                      No content available.
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </Container>
      </main>
    </>
  );
}