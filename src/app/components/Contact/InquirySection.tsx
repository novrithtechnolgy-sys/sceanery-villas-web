"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  villa: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
};

export default function InquirySection() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    whatsapp: "",
    villa: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });

  function onChange<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((p) => ({ ...p, [key]: val }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to your API
    console.log(form);
  }

  return (
    <section className="relative w-full bg-white py-10 md:py-60">
      {/* Background image with side-crop look */}
      <div className="hidden md:block relative h-[880px] md:h-[760px] lg:h-[720px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80" // ✅ change to your image path
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* subtle white overlay to match screenshot brightness */}
        <div className="absolute inset-0 bg-white/35" />
      </div>

      {/* Center Card */}
      <div className="relative md:absolute inset-0 flex items-center justify-center md:pl-84 md:py-10">
        <div className="w-full max-w-[820px] rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-gray-200 overflow-hidden">
          <form onSubmit={onSubmit} className="px-8 md:px-14 py-8 md:py-14">
            {/* Title */}
            <h2 className="font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-[1.05] text-gray-900">
              <span className="italic font-medium">Send an</span>{" "}
              <span className="font-semibold">Inquiry</span>
            </h2>

            {/* Sub */}
            <p className="mt-4 md:mt-8  font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] leading-7 text-gray-700">
              Please fill out the details below, and our reservations team will get
              back to you within 24 hours with availability and a custom quote.
            </p>

            <div className="mt-4 md:mt-8 space-y-4 md:space-y-8">
              {/* Full name */}
              <Field label="Full Name*" htmlFor="fullName">
                <UnderlineInput
                  id="fullName"
                  value={form.fullName}
                  onChange={(e) => onChange("fullName", e.target.value)}
                  placeholder=""
                />
              </Field>

              {/* Email + WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Field label="Email Address*" htmlFor="email">
                  <UnderlineInput
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => onChange("email", e.target.value)}
                  />
                </Field>

                <Field label="WhatsApp Number*" htmlFor="whatsapp">
                  <UnderlineInput
                    id="whatsapp"
                    value={form.whatsapp}
                    onChange={(e) => onChange("whatsapp", e.target.value)}
                  />
                </Field>
              </div>

              {/* Select villa */}
              <Field label="Select a Villa*" htmlFor="villa">
                <div className="relative">
                  <select
                    id="villa"
                    value={form.villa}
                    onChange={(e) => onChange("villa", e.target.value)}
                    className="w-full bg-transparent text-[16px] text-gray-900 outline-none appearance-none pb-3"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="ocean-villa">Ocean Villa</option>
                    <option value="garden-villa">Garden Villa</option>
                    <option value="family-villa">Family Villa</option>
                  </select>

                  {/* chevron */}
                  <svg
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="h-px w-full bg-gray-600/70" />
                </div>
              </Field>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Field label="Check in Date*" htmlFor="checkIn">
                  <UnderlineInput
                    id="checkIn"
                    type="date"
                    value={form.checkIn}
                    onChange={(e) => onChange("checkIn", e.target.value)}
                  />
                </Field>

                <Field label="Check out Date*" htmlFor="checkOut">
                  <UnderlineInput
                    id="checkOut"
                    type="date"
                    value={form.checkOut}
                    onChange={(e) => onChange("checkOut", e.target.value)}
                  />
                </Field>
              </div>

              {/* Guests */}
              <Field
                label="Number of Guests* (Adults and Children)"
                htmlFor="guests"
              >
                <UnderlineInput
                  id="guests"
                  value={form.guests}
                  onChange={(e) => onChange("guests", e.target.value)}
                />
              </Field>

              {/* Message */}
              <Field label="Message or Special Requests*" htmlFor="message">
                <div className="relative">
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    rows={3}
                    className="w-full resize-none bg-transparent text-[16px] text-gray-900 outline-none pb-3"
                  />
                  <div className="h-px w-full bg-gray-600/70" />
                </div>
              </Field>

              {/* Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small UI helpers ---------- */

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 md:mt-4">{children}</div>
    </div>
  );
}

function UnderlineInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <div>
      <input
        {...props}
        className={[
          "w-full bg-transparent text-[16px] text-gray-900 outline-none",
          "mb-1 md:pb-3",
        ].join(" ")}
      />
      <div className="h-px w-full bg-gray-600/70" />
    </div>
  );
}