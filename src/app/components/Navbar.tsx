"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type VillaNavItem = {
  title: string;
  slug: string;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [villaOpen, setVillaOpen] = useState(false);
  const [mobileVillaOpen, setMobileVillaOpen] = useState(false);
  const [villas, setVillas] = useState<VillaNavItem[]>([]);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Experiences", href: "/experiences" },
    // { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const loadVillas = async () => {
      try {
        const res = await fetch("/api/villas", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        setVillas(data || []);
      } catch (error) {
        console.error("Failed to load villas:", error);
      }
    };

    loadVillas();
  }, []);

  const isVillaPage =
    pathname === "/villas" || pathname.startsWith("/villas/");

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <Container>
        <div className="md:h-16 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772272865/Scenery_Villas_Logo__Black_1_1_xbvmbj.webp"
              alt="Scenery Villas Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex font-[helvetica] items-center gap-8 text-[16px] text-gray-700">
            {navLinks.slice(0, 2).map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 transition ${
                    active
                      ? "border-b-2 border-gray-900 text-black"
                      : "hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Our Villas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setVillaOpen(true)}
              onMouseLeave={() => setVillaOpen(false)}
            >
              <button
                className={`pb-1 transition flex items-center gap-1 ${
                  isVillaPage
                    ? "border-b-2 border-gray-900 text-black"
                    : "hover:text-black"
                }`}
              >
                <span>Our Villas</span>
                <ChevronDown size={16} className={`transition ${villaOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute left-0 top-full pt-4 transition-all duration-200 ${
                  villaOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                }`}
              >
                <div className="w-64 rounded-2xl border border-gray-100 bg-white shadow-xl p-3">

                  <div className="my-2 h-px bg-gray-100" />

                  {villas.length > 0 ? (
                    villas.map((villa) => {
                      const villaHref = `/villas/${villa.slug}`;
                      const active = pathname === villaHref;

                      return (
                        <Link
                          key={villa.slug}
                          href={villaHref}
                          className={`block rounded-xl px-4 py-3 text-sm transition ${
                            active
                              ? "bg-gray-100 text-black font-medium"
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          {villa.title}
                        </Link>
                      );
                    })
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500">
                      No villas found
                    </div>
                  )}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 transition ${
                    active
                      ? "border-b-2 border-gray-900 text-black"
                      : "hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className="rounded-full font-[helvetica] bg-gray-900 text-white px-5 py-2 text-[13px] font-semibold hover:bg-black transition">
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-black transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          open ? "max-h-[900px] opacity-100  z-50" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 bg-white font-[helvetica] border-t border-gray-100 space-y-4 text-[14px] text-gray-800">
          <Link
            href="/"
            className={`block ${pathname === "/" ? "text-black font-semibold" : ""}`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`block ${pathname === "/about" ? "text-black font-semibold" : ""}`}
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Villas */}
          <div>
            <button
              onClick={() => setMobileVillaOpen(!mobileVillaOpen)}
              className={`w-full flex items-center justify-between ${
                isVillaPage ? "text-black font-semibold" : ""
              }`}
            >
              <span>Our Villas</span>
              <ChevronDown
                size={18}
                className={`transition ${mobileVillaOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileVillaOpen ? "max-h-[500px] mt-3" : "max-h-0"
              }`}
            >
              <div className="ml-4 space-y-2 border-l border-gray-200 pl-4">
                {villas.map((villa) => {
                  const villaHref = `/villas/${villa.slug}`;
                  const active = pathname === villaHref;

                  return (
                    <Link
                      key={villa.slug}
                      href={villaHref}
                      className={`block ${
                        active ? "text-black font-semibold </div>" : "text-gray-700"
                      }`}
                      onClick={() => {
                        setOpen(false);
                        setMobileVillaOpen(false);
                      }}
                    >
                      {villa.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block ${active ? "text-black font-semibold" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          <button className="mt-4 w-full rounded-full bg-gray-900 text-white py-3 text-[14px] font-semibold">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}