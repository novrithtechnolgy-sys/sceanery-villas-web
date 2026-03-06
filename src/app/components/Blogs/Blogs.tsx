"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import Container from "@/app/components/Container";

type Category = { _id: string; title: string; slug: { current: string } };

type PostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  categoryTitle: string;
  categorySlug: string;
};

export default function BlogPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<PostCard[]>([]);
  const [active, setActive] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        setErr("");
        const res = await fetch("/api/blog/categories", { cache: "no-store" });
        if (!res.ok) throw new Error(`Categories API failed: ${res.status}`);
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (e: any) {
        setErr(e?.message || "Failed to load categories");
        setCategories([]);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErr("");

        const url =
          active === "all"
            ? "/api/blog/posts"
            : `/api/blog/posts?cat=${encodeURIComponent(active)}`;

        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`Posts API failed: ${res.status}`);

        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (e: any) {
        setErr(e?.message || "Failed to load posts");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [active]);

  return (
    <section className="py-20">
      <Container>
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-10 text-[14px] md:text-[16px] font-[helvetica] text-gray-700">
          <button
            onClick={() => setActive("all")}
            className={
              active === "all"
                ? "font-semibold text-gray-900 underline"
                : "hover:text-gray-900"
            }
          >
            All Stories
          </button>

          {categories.map((c) => (
            <button
              key={c._id}
              onClick={() => setActive(c.slug.current)}
              className={
                active === c.slug.current
                  ? "font-semibold text-gray-900 underline"
                  : "hover:text-gray-900"
              }
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Error */}
        {err && (
          <div className="mt-10 text-center text-red-600 text-sm">{err}</div>
        )}

        {/* Loading */}
        {loading && !err && (
          <div className="mt-10 text-center text-gray-600 text-sm">
            Loading...
          </div>
        )}

        {/* Grid */}
        {!loading && !err && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((p) => {
              const img = p.mainImage
                ? urlFor(p.mainImage).width(1200).quality(80).url()
                : "";

              return (
                <article
                  key={p._id}
                  className="rounded-[24px] border border-gray-200 overflow-hidden shadow"
                >
                  <div className="relative h-[220px]">
                    {img && (
                      <Image
                        src={img}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    )}

                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-white/95 font-[helvetica] text-[14px] md:text-[16px] leading-7 text-gray-700 shadow">
                        {p.categoryTitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">
                      {p.title}
                    </h3>

                    <p className="mt-4 font-[helvetica] text-[14px] md:text-[16px] leading-7 text-gray-700">
                      {p.excerpt || "—"}
                    </p>

                    <Link
                      href={`/blogs/${p.slug.current}`}
                      className="mt-8 inline-flex w-full justify-center rounded-full bg-gray-900 text-white py-3 text-[13px] font-semibold"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {!loading && !err && posts.length === 0 && (
          <div className="mt-10 text-center text-gray-600 text-sm">
            No posts found.
          </div>
        )}
      </Container>
    </section>
  );
}