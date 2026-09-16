"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
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
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const loadVillas = async () => {
      try {
        const res = await fetch("/api/villas", {
          cache: "no-store",
        });

        if (!res.ok) return;

        const data = await res.json();
        setVillas(data || []);
      } catch (error) {
        console.error("Failed to load villas:", error);
      }
    };

    loadVillas();
  }, []);

  const handleBookStay = () => {
    router.push("/available-villas");
  };

  const isVillaPage =
    pathname === "/villas" || pathname.startsWith("/villas/");

    useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header className={`absolute sticky left-0 z-50 w-full mx-auto px-4 md:px-8 lg:px-12 xl:mx-auto xl:px-12 max-w-[1430px] transition-all
    duration-300 ${scrolled ? "top-[10px] " : "top-10 xl:top-12 px-8 md:px-0"}`}>
      {/* Desktop / Main Navbar */}
      <div className="mx-auto mt-[5px] ">
        <div
          className="
            relative
            flex
            h-[58px]
            md:h-[68px]
            items-center
            justify-between
            rounded-full
            border
            border-white/40
            bg-white/80
            px-5
            shadow-sm
            backdrop-blur-md
            md:px-6
            lg:px-5
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center"
          >
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1780120424/b8013f5882ce7783425e6b1f830b4c004ece59cb_kqzizo.png"
              alt="Scenery Villas Logo"
              width={895}
              height={855}
              priority
              className="h-auto w-[120px] object-contain md:w-[170px] xl:w-[190px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[26px] font-body text-[14px] xl:text-[16px] text-gray-800 xl:gap-[28px]">
            {/* Home + About */}
            {navLinks.slice(0, 2).map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    whitespace-nowrap
                    transition-colors
                    duration-200
                    hover:text-black
                    ${
                      active
                        ? "font-medium text-black"
                        : "text-gray-800"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Our Villas */}
            <div
              className="relative"
              onMouseEnter={() => setVillaOpen(true)}
              onMouseLeave={() => setVillaOpen(false)}
            >
              <button
                type="button"
                className={`
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  transition-colors
                  duration-200
                  hover:text-black
                  ${
                    isVillaPage
                      ? "font-medium text-black"
                      : "text-gray-800"
                  }
                `}
              >
                <span>Our Villas</span>

                <ChevronDown
                  size={15}
                  strokeWidth={1.8}
                  className={`
                    transition-transform
                    duration-200
                    ${villaOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`
                  absolute
                  left-1/2
                  top-full
                  -translate-x-1/2
                  pt-4
                  transition-all
                  duration-200
                  ${
                    villaOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }
                `}
              >
                <div className="w-64 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl">
                  {villas.length > 0 ? (
                    villas.map((villa) => {
                      const villaHref = `/villas/${villa.slug}`;
                      const active = pathname === villaHref;

                      return (
                        <Link
                          key={villa.slug}
                          href={villaHref}
                          className={`
                            block
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            transition-colors
                            ${
                              active
                                ? "bg-gray-100 font-medium text-black"
                                : "text-gray-700 hover:bg-gray-50 hover:text-black"
                            }
                          `}
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

            {/* Remaining Links */}
            {navLinks.slice(2).map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    whitespace-nowrap
                    transition-colors
                    duration-200
                    hover:text-black
                    ${
                      active
                        ? "font-medium text-black"
                        : "text-gray-800"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Book Now */}
          <button
            onClick={handleBookStay}
            className="
              hidden
              py-[10px]
              px-[22px]
              items-center
              justify-center
              rounded-full
              bg-[#FF641F]
              px-6
              font-body
              text-[14px] xl:text-[16px]
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-[#f4510c]
              hover:shadow-md
              lg:flex
            "
          >
            Book Now
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`
                h-[2px]
                w-6
                bg-gray-800
                transition-all
                duration-300
                ${
                  open
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                h-[2px]
                w-6
                bg-gray-800
                transition-all
                duration-300
                ${open ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                h-[2px]
                w-6
                bg-gray-800
                transition-all
                duration-300
                ${
                  open
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }
              `}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            absolute
            top-full
            ${scrolled ? "left-4 right-4 " : "left-8 right-8"}
            overflow-hidden
            transition-all
            duration-300
            lg:hidden
            ${
              open
                ? "mt-2 max-h-[800px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="rounded-3xl border border-white/50 bg-white/95 px-6 py-6 shadow-lg backdrop-blur-md">
            <div className="space-y-5 font-body text-[15px] text-gray-800">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`block ${
                  pathname === "/"
                    ? "font-semibold text-black"
                    : ""
                }`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={`block ${
                  pathname === "/about"
                    ? "font-semibold text-black"
                    : ""
                }`}
              >
                About Us
              </Link>

              {/* Mobile Villas */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setMobileVillaOpen(!mobileVillaOpen)
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    ${
                      isVillaPage
                        ? "font-semibold text-black"
                        : ""
                    }
                  `}
                >
                  <span>Our Villas</span>

                  <ChevronDown
                    size={17}
                    className={`
                      transition-transform
                      duration-200
                      ${
                        mobileVillaOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      mobileVillaOpen
                        ? "mt-3 max-h-[500px]"
                        : "max-h-0"
                    }
                  `}
                >
                  <div className="ml-2 space-y-3 border-l border-gray-200 pl-4">
                    {villas.map((villa) => {
                      const villaHref = `/villas/${villa.slug}`;
                      const active = pathname === villaHref;

                      return (
                        <Link
                          key={villa.slug}
                          href={villaHref}
                          onClick={() => {
                            setOpen(false);
                            setMobileVillaOpen(false);
                          }}
                          className={`
                            block
                            ${
                              active
                                ? "font-semibold text-black"
                                : "text-gray-600"
                            }
                          `}
                        >
                          {villa.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Remaining Links */}
              {navLinks.slice(2).map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`
                      block
                      ${
                        active
                          ? "font-semibold text-black"
                          : ""
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <button
                onClick={handleBookStay}
                className="
                  mt-2
                  w-full
                  rounded-full
                  bg-[#FF641F]
                  px-6
                  py-2
                  font-body
                  text-[14px]
                  font-medium
                  text-white
                  transition
                  hover:bg-[#f4510c]
                "
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}