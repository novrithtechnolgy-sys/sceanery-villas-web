"use client";

import React, { useMemo, useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQSection() {
  const faqs: FAQItem[] = useMemo(
    () => [
      {
        q: "What time is Check in and Check out?",
        a: "Standard Check in is at 2:00 PM and Check out is at 11:00 AM. Early check in or late check out can be arranged subject to availability.",
      },
      {
        q: "Do you provide airport transfers?",
        a: "Yes. Private airport transfers can be arranged on request. Please share your flight details and arrival time, and we’ll confirm availability and rates.",
      },
      {
        q: "Is breakfast included?",
        a: "Breakfast inclusion depends on your package. If it’s not included, you can add breakfast (and other meal plans) during booking or via our team.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-20">
        {/* Title */}
        <h2 className="text-center font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px] leading-tight text-gray-900">
          <span className="italic font-medium">Frequently Asked</span>{" "}
          <span className="font-semibold">Questions</span>
        </h2>

        {/* Items */}
        <div className="mx-auto mt-4 md:mt-8 max-w-4xl">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={item.q} className="border-b border-gray-900/80">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-900">
                    {item.q}
                  </span>

                  <Chevron
                    className={[
                      "h-5 w-5 shrink-0 text-gray-900 transition-transform duration-200",
                      isOpen ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                  />
                </button>

                {/* Answer */}
                <div
                  className={[
                    "grid transition-all duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr] pb-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] md:text-[16px] leading-7 text-gray-700 pr-2">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------- Icon -------- */
function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 14l6-6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}