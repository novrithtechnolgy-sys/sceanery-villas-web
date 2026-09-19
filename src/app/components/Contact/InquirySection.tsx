"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Phone,
  MapPin,
  Mail,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import Button from "../Button";
import DateInput from "../dateInput";

/* =========================================================
   TYPES
========================================================= */

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

type VillaOption = {
  title: string;
  slug: string;
};

/* =========================================================
   INITIAL FORM
========================================================= */

const initialForm: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  villa: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  message: "",
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function InquirySection() {
  const [form, setForm] =
    useState<FormState>(initialForm);

  const [villas, setVillas] =
    useState<VillaOption[]>([]);

  const [loadingVillas, setLoadingVillas] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const router = useRouter();

  /* =======================================================
     CHANGE
  ======================================================= */

  function onChange<K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  /* =======================================================
     VALIDATION
  ======================================================= */

  function validateForm() {
    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.whatsapp.trim() ||
      !form.villa.trim() ||
      !form.checkIn.trim() ||
      !form.checkOut.trim() ||
      !form.guests.trim() ||
      !form.message.trim()
    ) {
      return "Please fill in all required fields.";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email address.";
    }

    if (
      new Date(form.checkOut) <=
      new Date(form.checkIn)
    ) {
      return "Check-out date must be after check-in date.";
    }

    return "";
  }

  /* =======================================================
     FETCH VILLAS
  ======================================================= */

  useEffect(() => {
    const fetchVillas = async () => {
      try {
        setLoadingVillas(true);

        const res = await fetch(
          "/api/villas",
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error(
            "Failed to load villas"
          );
        }

        const data = await res.json();

        setVillas(
          Array.isArray(data)
            ? data
            : []
        );
      } catch (error) {
        console.error(
          "Failed to fetch villas:",
          error
        );

        setVillas([]);
      } finally {
        setLoadingVillas(false);
      }
    };

    fetchVillas();
  }, []);

  /* =======================================================
     SUBMIT
  ======================================================= */

  async function onSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    const validationError =
      validateForm();

    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });

      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "/api/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.message ||
          "Something went wrong."
        );
      }

      router.push("/thankyou");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send inquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }


  return (
    <section className="bg-white py-[32px] md:py-[64px]">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">

          {/* LEFT TEXT */}

          <div className="lg:col-span-5 xl:col-span-5">
            <h2 className="font-heading text-[22px] md:text-[32px] xl:text-[38px] font-bold md:leading-[42px] xl:leading-[48px] tracking-[-0.5px] text-gray-900 text-center md:text-left" >
              Here to Help,
              <br />
              Whenever You Need Us
            </h2>
            <p className="mt-4 font-body font-regular text-[14px] leading-[26px] text-gray-700 md:mt-8 md:text-[16px] lg:leading-[30px] text-center md:text-left">
              Contact our team for villa recommendations, booking support, or any questions about your stay.
            </p>

            <div className="mt-12 space-y-10 md:mt-16 md:space-y-12 justify-center md:justify-start flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start">
                <Phone
                  className="h-8 w-8 text-[#FF751F] md:h-9 md:w-9"
                  strokeWidth={1.8}
                />

                <h3 className="mt-4 font-body md:text-[20px] font-semibold text-gray-900">
                  Talk to Us
                </h3>

                <p
                  className="mt-4 font-body text-[14px] text-gray-800">
                  +94 77 908 2515
                  {/* <span className="mx-2">
                    /
                  </span>
                  +94 77 123 4567 */}
                </p>
              </div>

              {/* Visit Us */}

              <div className="flex flex-col items-center md:items-start">
                <MapPin strokeWidth={1.8} className="h-8 w-8 text-[#FF751F] md:h-9 md:w-9" />

                <h3 className="mt-4 font-body text-[18px] md:text-[20px] font-semibold text-gray-900">
                  Visit Us
                </h3>

                <p
                  className="mt-4 font-body text-[14px] text-gray-800"
                >
                  122/2, Bentota,
                  Sri Lanka
                </p>
              </div>

              {/* Email Us */}

              <div className="flex flex-col items-center md:items-start">
                <Mail
                  className="h-8 w-8 text-[#FF751F] md:h-9 md:w-9"
                  strokeWidth={1.8}
                />

                <h3
                  className="mt-4 font-body text-[18px] md:text-[20px] font-semibold text-gray-900"
                >
                  Email Us
                </h3>

                <p
                  className="mt-4 font-body text-[14px] text-gray-800"
                >
                  hello@sceneryvillassrilanka.com
                </p>
              </div>

            </div>
          </div>

          {/* =================================================
              RIGHT FORM
          ================================================= */}

          <div
            className="lg:col-span-7 xl:col-span-7"
          >
            <div
              className="rounded-[26px] bg-[#F5F5F5] px-6 py-8 md:px-10 md:py-10 xl:px-12 xl:py-12"
            >

              <form
                onSubmit={onSubmit}
              >

                {/* Form Heading */}

                <h2
                  className="font-heading font-medium text-[22px] md:text-[32px] xl:text-[38px] font-bold md:leading-[42px] xl:leading-[48px] tracking-[-0.5px] text-gray-900 text-center md:text-left"
                >
                  <span className="">
                    Send an{" "}
                  </span>

                  <span className="font-semibold text-[#FF751F]">
                    Inquiry
                  </span>
                </h2>

                {/* Form Description */}

                <p
                  className="mt-4 font-body font-regular text-[14px] leading-[26px] text-gray-700 md:mt-8 md:text-[16px] lg:leading-[30px] text-center md:text-left "
                >
                  Please fill out the details
                  below, and our reservations
                  team will get back to you
                  within 24 hours with
                  availability and a custom
                  quote.
                </p>

                {/* Status */}

                {status.message && (
                  <div
                    className={`
                      mt-6
                      rounded-xl
                      border
                      px-4
                      py-3
                      font-body
                      text-[14px]

                      ${status.type ===
                        "success"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                      }
                    `}
                  >
                    {status.message}
                  </div>
                )}

                {/* Fields */}

                <div
                  className="
                    mt-8
                    space-y-7
                    md:mt-10
                    md:space-y-8
                  "
                >

                  {/* Full Name */}

                  <Field
                    label="Full Name*"
                    htmlFor="fullName"
                  >
                    <UnderlineInput
                      id="fullName"
                      value={
                        form.fullName
                      }
                      onChange={(e) =>
                        onChange(
                          "fullName",
                          e.target.value
                        )
                      }
                    />
                  </Field>

                  {/* Email + WhatsApp */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-7

                      md:grid-cols-2
                      md:gap-6
                    "
                  >
                    <Field
                      label="Email Address*"
                      htmlFor="email"
                    >
                      <UnderlineInput
                        id="email"
                        type="email"
                        value={
                          form.email
                        }
                        onChange={(e) =>
                          onChange(
                            "email",
                            e.target.value
                          )
                        }
                      />
                    </Field>

                    <Field
                      label="WhatsApp Number*"
                      htmlFor="whatsapp"
                    >
                      <UnderlineInput
                        id="whatsapp"
                        value={
                          form.whatsapp
                        }
                        onChange={(e) =>
                          onChange(
                            "whatsapp",
                            e.target.value
                          )
                        }
                      />
                    </Field>
                  </div>

                  {/* Villa */}

                  <Field
                    label="Select a Villa*"
                    htmlFor="villa"
                  >
                    <VillaSelect
                      id="villa"
                      villas={villas}
                      value={form.villa}
                      loading={loadingVillas}
                      onChange={(value) =>
                        onChange("villa", value)
                      }
                    />
                  </Field>

                  {/* Dates */}

                  <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-6">

                    <Field
                      label="Check in Date*"
                      htmlFor="checkIn"
                    >
                        <DateInput
                          id="checkIn"
                          value={form.checkIn}
                          onChange={(value) =>
                            onChange("checkIn", value)
                          }
                          minDate={new Date()}
                        />
                    </Field>

                    <Field
                      label="Check out Date*"
                      htmlFor="checkOut"
                    >
                        <DateInput
                          id="checkOut"
                          value={form.checkIn}
                          onChange={(value) =>
                            onChange("checkOut", value)
                          }
                          minDate={new Date()}
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
                      type="number"
                      min="1"
                      value={
                        form.guests
                      }
                      onChange={(e) =>
                        onChange(
                          "guests",
                          e.target.value
                        )
                      }
                    />
                  </Field>

                  {/* Message */}

                  <Field
                    label="Message or Special Requests*"
                    htmlFor="message"
                  >
                    <textarea
                      id="message"
                      value={
                        form.message
                      }
                      onChange={(e) =>
                        onChange(
                          "message",
                          e.target.value
                        )
                      }
                      rows={3}
                      className={`${fieldControlClass} resize-none`}
                    />
                  </Field>

                  {/* Submit */}

                  <div className="pt-1">
                    <Button
                      type="submit"
                      disabled={loading}
                    >
                      {loading
                        ? "Sending..."
                        : "Send a Message"}
                    </Button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FIELD
========================================================= */

const fieldLineClass = "border-gray-400";
const fieldTextClass = "font-body text-[14px] text-gray-900";
const fieldControlClass = `w-full appearance-none bg-transparent border-0 border-b ${fieldLineClass} pb-3 ${fieldTextClass} outline-none`;

function VillaSelect({
  id,
  villas,
  value,
  loading,
  onChange,
}: {
  id: string;
  villas: VillaOption[];
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <button
        id={id}
        type="button"
        disabled={loading}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between bg-transparent border-0 border-b ${fieldLineClass} pb-3 ${fieldTextClass} outline-none disabled:opacity-60`}
      >
        <span>{loading ? "Loading villas..." : value || "\u00A0"}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-900 transition-transform ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-2 max-h-72 overflow-auto rounded-xl border border-gray-400 bg-white px-1 py-2 shadow-lg"
        >
          {villas.map((villa) => {
            const selected = villa.title === value;

            return (
              <li key={villa.slug} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`w-full rounded-lg px-3 py-2 text-left ${fieldTextClass} hover:bg-black/5 ${selected ? "font-semibold" : ""
                    }`}
                  onClick={() => {
                    onChange(villa.title);
                    setOpen(false);
                  }}
                >
                  {villa.title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

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
        className="
          block
          font-body
          text-[14px]
          font-regular
          text-black
          
        "
      >
        {label}
      </label>

      <div className="mt-3">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   UNDERLINE INPUT
========================================================= */

function UnderlineInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={fieldControlClass}
    />
  );
}

/* =========================================================
   DATE INPUT
========================================================= */

