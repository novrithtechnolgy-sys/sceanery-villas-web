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
        q: "What are the check-in and check-out times?",
        a: "Check-in begins at 2:00 PM, and check-out is at 12:00 PM. A standard one-night booking includes a 22-hour stay.",
      },
      {
        q: "Can we request an extended stay or arrive late at night?",
        a: "Additional hours can be requested and granted based on availability for a fee of LKR 2,000 per hour. However, please note that for security and comfort, arrivals and departures are not permitted after 10:00 PM.",
      },
      {
        q: "Are chef services available for meals?",
        a: "Yes, a chef can prepare dinner on your check-in day and breakfast on your check-out day. Any extra meals requested will be charged an additional Rs5000.",
      },
      {
        q:"Are there any restrictions on noise or music?",
        a:"To ensure a peaceful environment for all guests, loud music or noise is strictly not permitted after 11:00 PM."
      },
      {
        q:"What is the cancellation and rescheduling policy?",
        a:"Advance payments are non-refundable. Guests are allowed to reschedule their stay within 30 days of the original booking, provided they give at least 14 days' notice. The number of rooms or villas booked is fixed and cannot be reduced, though you can increase them based on availability."
      },
      {
        q:"Can we bring extra guests beyond the booking capacity?",
        a:"The villa strictly allows no more than the mentioned guest count. Additional guests will only be accommodated with prior approval and if feasible."
      },
      {
        q:"Is smoking allowed on the property?",
        a:"Smoking is prohibited inside the villa. It is only allowed in designated outdoor areas."
      },
      {
        q:"How are property damages handled?",
        a:"Guests are fully responsible for any damages incurred during their stay, and these will be charged separately."
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-[32px] md:py-[64px]">
        {/* Title */}
        <h2 className="font-heading text-[22px] md:text-[32px] xl:text-[38px] font-bold md:leading-[42px] xl:leading-[48px] tracking-[-0.5px] text-gray-900 text-center">
          <span className="">Frequently Asked</span>{" "}
          <span className="text-[#FF751F]">Questions</span>
        </h2>

        {/* Items */}
        <div className="mx-auto mt-4 md:mt-8">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={item.q} className="border-b border-gray-900/80">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="font-body text-[16px] text-gray-900">
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
                    <p className="text-[14px] leading-7 text-gray-700 pr-2">
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