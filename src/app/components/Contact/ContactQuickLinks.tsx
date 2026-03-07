"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Container from "../Container";

type ContactItem = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value: string;
};

export default function ContactQuickLinks() {
  const items: ContactItem[] = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      subtitle: "For reservations and general inquiries.",
      value: "info@sceneryvillas.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Talk to Us",
      subtitle: "Call or WhatsApp us for immediate assistance.",
      value: "+94 00 000 0000 / +94 00 000 0000",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      subtitle: "Our Head Office.",
      value: "Bentota, Sri Lanka",
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className={[
                "flex flex-col items-center text-center py-4 md:py-10",
                idx !== 0 ? "md:border-l md:border-gray-200" : "",
              ].join(" ")}
            >
              <div className="text-gray-900">{it.icon}</div>

              <h3 className="mt-4 font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px]  font-semibold text-gray-900">
                {it.title}
              </h3>

              <p className="mt-2 font-[helvetica] text-[14px] md:text-[16px] leading-6 text-gray-500 max-w-[280px]">
                {it.subtitle}
              </p>

              <div className="mt-4 font-[helvetica] text-[14px] md:text-[16px] font-semibold text-gray-900">
                {it.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}