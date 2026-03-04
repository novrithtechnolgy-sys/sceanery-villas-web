"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Villas", href: "/villas" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <Container>
        <div className="h-16 flex items-center justify-between">

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
            {navLinks.map((link) => {
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
            <button className="rounded-full bg-gray-900 text-white px-5 py-2 text-[13px] font-semibold hover:bg-black transition">
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
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
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 bg-white border-t border-gray-100 space-y-4 text-[15px] text-gray-800">

          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block ${
                  active ? "text-black font-semibold" : ""
                }`}
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