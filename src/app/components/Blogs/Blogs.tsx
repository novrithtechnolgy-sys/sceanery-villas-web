// components/Blog/BlogPage.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

import { urlFor } from "../../../sanity/lib/image";
import Container from "../Container";

type Category = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
};

type PostCard = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
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

  /* =========================================================
     LOAD CATEGORIES
  ========================================================= */

  useEffect(() => {
    async function loadCategories() {
      try {
        setErr("");

        const res = await fetch("/api/blog/categories", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(
            `Categories API failed: ${res.status}`
          );
        }

        const data = await res.json();

        setCategories(
          Array.isArray(data) ? data : []
        );
      } catch (error: any) {
        console.error(error);

        setErr(
          error?.message ||
            "Failed to load categories"
        );

        setCategories([]);
      }
    }

    loadCategories();
  }, []);

  /* =========================================================
     LOAD POSTS
  ========================================================= */

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setErr("");

        const url =
          active === "all"
            ? "/api/blog/posts"
            : `/api/blog/posts?cat=${encodeURIComponent(
                active
              )}`;

        const res = await fetch(url, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(
            `Posts API failed: ${res.status}`
          );
        }

        const data = await res.json();

        setPosts(
          Array.isArray(data) ? data : []
        );
      } catch (error: any) {
        console.error(error);

        setErr(
          error?.message ||
            "Failed to load posts"
        );

        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, [active]);

  /* =========================================================
     ACTIVE CATEGORY NAME
  ========================================================= */

  const activeCategory =
    active === "all"
      ? "All Stories"
      : categories.find(
          (category) =>
            category.slug.current === active
        )?.title || "All Stories";

  return (
    <section className="bg-white py-[32px] md:py-[64px]">
      <Container>
        {/* =====================================================
            TOP FILTER
        ===================================================== */}

        <div className="flex md:justify-end">
          <div className="relative w-[240px]">
            <select
              value={active}
              onChange={(e) =>
                setActive(e.target.value)
              }
              className="
                w-full
                appearance-none
                rounded-full
                border-0
                bg-[#F4F4F4]
                px-7
                py-3.5
                pr-12
                font-body
                text-[14px]
                text-gray-800
                outline-none
                cursor-pointer
              "
              aria-label="Filter stories"
            >
              <option value="all">
                All Stories
              </option>

              {categories.map((category) => (
                <option
                  key={category._id}
                  value={category.slug.current}
                >
                  {category.title}
                </option>
              ))}
            </select>

            <ChevronDown
              className="
                pointer-events-none
                absolute
                right-5
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-gray-900
              "
              strokeWidth={2}
            />
          </div>
        </div>

        {/* =====================================================
            ERROR
        ===================================================== */}

        {err && (
          <div className="mt-10 text-center text-sm text-red-600">
            {err}
          </div>
        )}

        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading && !err && (
          <div className="mt-16 text-center font-body text-sm text-gray-500">
            Loading...
          </div>
        )}

        {/* =====================================================
            BLOG GRID
        ===================================================== */}

        {!loading && !err && posts.length > 0 && (
          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-x-8
              gap-y-14

              sm:grid-cols-2

              md:mt-12

              lg:grid-cols-3
              lg:gap-x-7
              lg:gap-y-14
            "
          >
            {posts.map((post) => {
              const imageUrl = post.mainImage
                ? urlFor(post.mainImage)
                    .width(1400)
                    .quality(85)
                    .url()
                : "";

              return (
                <article
                  key={post._id}
                  className="w-full"
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <Link
                    href={post.slug.current}
                    className="block"
                  >
                    <div
                      className="
                        relative
                        h-[250px]
                        w-full
                        overflow-hidden
                        rounded-[22px]

                        sm:h-[260px]

                        lg:h-[285px]
                      "
                    >
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 1024px) 50vw,
                            33vw
                          "
                          className="
                            object-cover
                            transition-transform
                            duration-500
                            hover:scale-[1.03]
                          "
                        />
                      )}

                      {/* Category */}
                      <div
                        className="
                          absolute
                          left-4
                          top-4
                        "
                      >
                        <span
                          className="
                  inline-flex
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  font-body
                  text-[12px]
                  text-gray-900
                  shadow-sm
                          "
                        >
                          {post.categoryTitle}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="px-1 pt-7">
                    {/* Title */}
                    <Link
                      href={post.slug.current}
                      className="block"
                    >
                      <h2
                        className="
                          font-heading
                          text-[18px]
                          font-semibold
                          leading-tight
                          text-gray-900
                          transition-colors
                          hover:text-[#FF751F]
                          md:text-[20px]
                        "
                      >
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p
                      className="
                        mt-4
                        max-w-[390px]
                        font-body
                        text-[14px]
                        leading-[2]
                        text-gray-800
                        md:text-[14px]
                        lg:text-[14px]
                        line-clamp-4
                      "
                    >
                      {post.excerpt || "—"}
                    </p>

                    {/* Read More */}
                    <Link
                      href={post.slug.current}
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        font-body
                        text-[14px]
                        font-semibold
                        italic
                        text-gray-900
                        transition-colors
                        hover:text-[#FF751F]
                      "
                    >
                      <span>
                        Read More
                      </span>

                      <ArrowRight
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* =====================================================
            EMPTY
        ===================================================== */}

        {!loading &&
          !err &&
          posts.length === 0 && (
            <div className="mt-16 text-center font-body text-sm text-gray-600">
              No posts found.
            </div>
          )}
      </Container>
    </section>
  );
}