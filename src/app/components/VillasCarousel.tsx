"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import ArrowButton from "./ArrowButton";

type Villa = {
  _id: string;
  badge?: string;
  title: string;
  description?: string;
  image: any;
  bedrooms?: number;
  sleeps?: number;
  feature?: string;
  cta?: string;
  slug?: string;
};

function IconBed({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10h18v8H3v-8Z" />
      <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      <path d="M4 18v2M20 18v2" />
    </svg>
  );
}

function IconUsers({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 11a4 4 0 1 0-8 0" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  );
}

function IconLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 4c-8 0-14 6-14 14 8 0 14-6 14-14Z" />
      <path d="M6 18c2-4 6-7 10-8" />
    </svg>
  );
}

function VillaCard({ villa }: { villa: Villa }) {
  const imgUrl = villa.image ? urlFor(villa.image).width(1600).quality(80).url() : "";
  const href = villa.slug ? `/villas/${villa.slug}` : "#";

  return (
    <div className="shrink-0 w-[300px] md:w-[430px] xl:w-[560px]">
      <div className="relative rounded-[28px] overflow-hidden bg-white border border-gray-300">
        <div className="relative h-[250px]">
          {imgUrl && <Image src={imgUrl} alt={villa.title} fill className="object-cover" />}
          {!!villa.badge && (
            <div className="absolute top-5 left-5">
              <span className="inline-flex font-[helvetica] items-center px-4 py-2 rounded-full bg-white/95 text-gray-900 text-[14px] md:text-[16px] font-medium shadow">
                {villa.badge}
              </span>
            </div>
          )}
        </div>

        <div className="relative -mt-10">
          <div className="rounded-t-[26px] bg-white px-4 lg:px-8 pt-8 pb-8">
            <h3 className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-semibold text-gray-900">
              {villa.title}
            </h3>

            {villa.description && (
              <p className="mt-2 font-[helvetica] text-[14px] md:text-[16px] leading-7 text-gray-700 line-clamp-4 md:line-clamp-3">
                {villa.description}
              </p>
            )}

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 xl:gap-14 text-[14px] md:text-[16px] text-gray-900">
              <div className="flex items-center gap-2">
                <IconBed className="h-5 w-5" />
                <span>{villa.bedrooms ?? 0} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <IconUsers className="h-5 w-5" />
                <span>Sleeps {villa.sleeps ?? 0}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconLeaf className="h-5 w-5" />
                <span>{villa.feature ?? ""}</span>
              </div>
            </div>

            <div className="flex justify-center text-[14px] text-gray-900">
              {villa.slug ? (
                <Link href={href} className="mt-8 inline-block">
                  <Button variant="primary">
                    {villa.cta ?? "Explore"}
                  </Button>
                </Link>
              ) : (
                <Link href={href} className="mt-8 inline-block">
                <Button variant="primary" className="" >
                  {villa.cta ?? "Explore"}
                </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileCTA({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const className = [
    "w-60 rounded-full bg-black text-white",
    "py-2 text-[14px] font-semibold text-center block",
    "shadow-[0_12px_28px_rgba(0,0,0,0.18)]",
    "active:scale-[0.99] transition",
  ].join(" ");

  if (!href) {
    return (
      <button
        className={`${className} cursor-not-allowed`}
        type="button"
        disabled
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function VillaCardMobile({ villa }: { villa: Villa }) {
  const imgUrl = villa.image ? urlFor(villa.image).width(1400).quality(80).url() : "";
  const href = villa.slug ? `/villas/${villa.slug}` : undefined;

  return (
    <div className="w-full shrink-0 px-4">
      <div className="relative overflow-hidden rounded-[28px] bg-white">
        <div className="relative h-[240px]">
          {imgUrl && (
            <Image
              src={imgUrl}
              alt={villa.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 640px"
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/0" />

          {!!villa.badge && (
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center rounded-full bg-white/95 px-4 py-2 text-[13px] font-medium text-gray-900 shadow">
                {villa.badge}
              </span>
            </div>
          )}
        </div>

        <div className="relative -mt-10 pb-4">
          <div className="rounded-[26px] bg-white px-4 pt-6 pb-5 border border-gray-300">
            <h3 className="font-[helvetica] text-[16px] font-semibold text-gray-900">
              {villa.title}
            </h3>

            {villa.description && (
              <p className="font-[helvetica] mt-2 text-[14px] text-gray-700 leading-relaxed">
                {villa.description}
              </p>
            )}

            <div className="mt-4 grid grid-cols-3 gap-3 text-[14px] text-gray-900">
              <div className="flex items-center gap-2">
                <IconBed className="h-5 w-5" />
                <span className="truncate">{villa.bedrooms ?? 0} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <IconUsers className="h-5 w-5" />
                <span className="truncate">Sleeps {villa.sleeps ?? 0}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconLeaf className="h-5 w-5" />
                <span className="truncate">{villa.feature ?? "Private Pool"}</span>
              </div>
            </div>

            <div className="mt-5 flex justify-center">
              <MobileCTA href={href}>
                {villa.cta ?? `Explore ${villa.title}`}
              </MobileCTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VillasCarousel() {
  const [villas, setVillas] = useState<Villa[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [mIndex, setMIndex] = useState(0);

  const startX = useRef<number | null>(null);
  const lastX = useRef<number | null>(null);
  const dragging = useRef(false);

  const CARD_W = 560;
  const GAP = 36;

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/villas_carosal", { cache: "no-store" });
        const data = await res.json();
        if (!mounted) return;

        const arr = Array.isArray(data) ? data : [];
        setVillas(arr);
        setIndex(0);
        setMIndex(0);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const total = villas.length;

  useEffect(() => {
    if (!total) return;
    setIndex((i) => Math.min(Math.max(i, 0), total - 1));
    setMIndex((i) => Math.min(Math.max(i, 0), total - 1));
  }, [total]);

  const canPrev = index > 0;
  const canNext = index < total - 1;

  const mCanPrev = mIndex > 0;
  const mCanNext = mIndex < total - 1;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    lastX.current = e.clientX;
  };

  const onPointerUp = () => {
    if (!dragging.current || startX.current == null || lastX.current == null) return;
    dragging.current = false;

    const dx = lastX.current - startX.current;
    startX.current = null;
    lastX.current = null;

    const TH = 50;
    if (dx > TH && mCanPrev) setMIndex((v) => Math.max(0, v - 1));
    if (dx < -TH && mCanNext) setMIndex((v) => Math.min(total - 1, v + 1));
  };

  const onPointerCancel = () => {
    dragging.current = false;
    startX.current = null;
    lastX.current = null;
  };

  if (loading) return <div className="py-20 text-center text-gray-500">Loading villas...</div>;
  if (!total) return <div className="py-20 text-center text-gray-500">No villas found in Sanity.</div>;

  return (
    <>
      <section className="block sm:hidden bg-white py-10">
        <div className="px-4 text-center">
          <div className="text-[18px] font-semibold text-black">
            <span className="italic font-serif text-black/80">Explore</span>{" "}
            <span className="text-black">Our Villas</span>
          </div>
        </div>

        <div className="mt-6 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform touch-pan-y"
            style={{ transform: `translateX(-${mIndex * 100}%)`, touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            role="region"
            aria-label="Villas carousel mobile"
          >
            {villas.map((villa) => (
              <VillaCardMobile key={villa._id} villa={villa} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center px-4 gap-6">
          <ArrowButton
            direction="left"
            disabled={!mCanPrev}
            onClick={() => setMIndex((v) => Math.max(0, v - 1))}
          />

          <div className="text-center text-[12px] text-black tabular-nums">
            {mIndex + 1}/{total}
          </div>

          <ArrowButton
            direction="right"
            disabled={!mCanNext}
            onClick={() => setMIndex((v) => Math.min(total - 1, v + 1))}
          />
        </div>
      </section>

      <section className="hidden sm:block py-20 bg-white">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-28">
          <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
            <span className="italic font-serif text-gray-900">Explore</span>{" "}
            <span className="font-semibold text-gray-900">Our Villas</span>
          </h2>

          <div className="flex items-center gap-8 text-gray-900">
            <ArrowButton
              direction="left"
              disabled={!canPrev}
              onClick={() => canPrev && setIndex((v) => v - 1)}
            />

            <div className="text-[14px] text-gray-800 tabular-nums">
              {index + 1} / {total}
            </div>

            <ArrowButton
              direction="right"
              disabled={!canNext}
              onClick={() => canNext && setIndex((v) => v + 1)}
            />
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="sm:pl-4 md:pl-8 lg:pl-12 xl:pl-28 pr-20">
            <div className="pr-[220px]">
              <div
                className="flex gap-4 md:gap-10 transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${index * (CARD_W + GAP)}px)` }}
              >
                {villas.map((villa) => (
                  <VillaCard key={villa._id} villa={villa} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}