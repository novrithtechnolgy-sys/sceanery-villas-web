"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";
import Container from "./Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F10] text-white py-10">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-10 font-[helvetica] text-[14px] md:text-[16px]">

          {/* Left Column */}
          <div className="lg:col-span-6">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772968765/c8f928687ebf28425689475c060719bf31a8df8f2_pzxi4y.png"
              alt="Scenery Villas Logo"
              width={140}
              height={40}
              className="object-contain w-[260px] h-[60px]"
            />
          </Link>

            <p className="mt-8 text-gray-300  leading-8 max-w-[420px]">
              Curating exceptional stays on the southern coast of Sri Lanka.
            </p>

            <div className="mt-8 space-y-3 text-gray-300">
              <p>hello@sceneryvillassrilanka.com</p>
              <p>+94 77 908 2515</p>
              <p>Dhargatown, Sri Lanka</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              <SocialIcon><FaLinkedinIn /></SocialIcon>
              <SocialIcon><FaYoutube /></SocialIcon>
              <SocialIcon><FaTiktok /></SocialIcon>
            </div>
          </div>

          {/* Right Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-10 font-[helvetica] text-[14px] md:text-[16px]" >

            {/* Collection */}
            <div>
              <h4 className="text-lg font-semibold mb-6">The Collection</h4>
              <ul className="space-y-4 text-gray-300">
                <FooterLink href="#">Villa Mandalay</FooterLink>
                <FooterLink href="#">Tara Garden</FooterLink>
                <FooterLink href="#">Treetop Resort</FooterLink>
                <FooterLink href="#">Villa Desire</FooterLink>
                <FooterLink href="#">Monara Villa</FooterLink>
                <FooterLink href="#">Lucky Palace</FooterLink>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-300">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/experiences">Experiences</FooterLink>
                <FooterLink href="/gallery">Gallery</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm">

          <p>
            © 2026 Scenery Villas. Designed by Digital Escapes. Developed by Novrith Technologies
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </Container>
    </footer>
  );
}


/* ---------- Small Components ---------- */

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-white transition duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer text-white">
      {children}
    </div>
  );
}