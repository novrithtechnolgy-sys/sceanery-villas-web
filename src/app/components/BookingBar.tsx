"use client";

import { useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type BookingBarProps = {
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: string;
};

export default function BookingBar({
  initialCheckIn,
  initialCheckOut,
  initialGuests,
}: BookingBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const today = new Date().toISOString().split("T")[0];

  const tomorrow = new Date(
    Date.now() + 86400000
  )
    .toISOString()
    .split("T")[0];

  const initialTotalGuests = parseInt(initialGuests || "2");

  const [checkIn, setCheckIn] = useState(
    initialCheckIn || today
  );

  const [checkOut, setCheckOut] = useState(
    initialCheckOut || tomorrow
  );

  const [adults, setAdults] = useState(
    initialTotalGuests > 0 ? initialTotalGuests : 2
  );

  const [children, setChildren] = useState(0);

  const [guestOpen, setGuestOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const guests = adults + children;

  const formatDate = (date: string) => {
    if (!date) return "";

    const [year, month, day] = date.split("-");

    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    ).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const openDatePicker = (
    input: HTMLInputElement | null
  ) => {
    if (!input) return;

    try {
      input.showPicker();
    } catch {
      input.focus();
    }
  };

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    setLoading(true);

    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests: guests.toString(),
    });

    const url = `/available-villas?${params.toString()}`;

    if (pathname === "/available-villas") {
      router.replace(url);
    } else {
      router.push(url);
    }

    setLoading(false);
  };

  return (
    <div className="relative z-30 flex w-full justify-center">
      <div
        className="
          flex
          py-3
          w-full
          max-w-[490px]
          items-center
          rounded-full
          bg-white
          px-3
          shadow-lg
        "
      >
        {/* ================= CHECK IN ================= */}

        <button
          type="button"
          onClick={() =>
            openDatePicker(checkInRef.current)
          }
          className="
            relative
            flex
            h-full
            flex-1
            justify-center
            cursor-pointer
            items-center
            px-4
            text-left
          "
        >
          <span className="whitespace-nowrap text-[14px] text-gray-500">
            {checkIn
              ? formatDate(checkIn)
              : "Check-in"}
          </span>

          <input
            ref={checkInRef}
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => {
              setCheckIn(e.target.value);

              // Automatically make checkout at least next day
              if (e.target.value >= checkOut) {
                const nextDay = new Date(
                  `${e.target.value}T00:00:00`
                );

                nextDay.setDate(
                  nextDay.getDate() + 1
                );

                setCheckOut(
                  nextDay.toISOString().split("T")[0]
                );
              }
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              opacity-0
            "
          />
        </button>

        {/* Divider */}
        <div className="h-6 w-px shrink-0 bg-gray-400/70" />

        {/* ================= CHECK OUT ================= */}

        <button
          type="button"
          onClick={() =>
            openDatePicker(checkOutRef.current)
          }
          className="
            relative
            flex
            h-full
            flex-1
            justify-center
            cursor-pointer
            items-center
            px-4
            text-left
          "
        >
          <span className="whitespace-nowrap text-[14px] text-gray-500">
            {checkOut
              ? formatDate(checkOut)
              : "Check-out"}
          </span>

          <input
            ref={checkOutRef}
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) =>
              setCheckOut(e.target.value)
            }
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              opacity-0
            "
          />
        </button>

        {/* Divider */}
        <div className="h-6 w-px shrink-0 bg-gray-400/70" />

        {/* ================= GUESTS ================= */}

        <div className="relative flex h-full flex-1 items-center px-4">
          <button
            type="button"
            onClick={() =>
              setGuestOpen((prev) => !prev)
            }
            className="
              flex
              w-full
              cursor-pointer
              items-center
              whitespace-nowrap
              justify-center
              text-left
              text-[14px]
              text-gray-500
            "
          >
            {guests}{" "}
            {guests === 1 ? "Guest" : "Guests"}
          </button>

          {/* Guest Dropdown */}
          {guestOpen && (
            <div
              className="
                absolute
                left-1/2
                bottom-[65px]
                z-50
                w-[220px]
                -translate-x-1/2
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-4
              "
            >
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Adults
                  </p>

                  <p className="text-xs text-gray-400">
                    Age 13+
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setAdults(
                        Math.max(1, adults - 1)
                      )
                    }
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-300
                      text-lg
                      text-gray-700
                      transition
                      hover:bg-gray-100
                    "
                  >
                    −
                  </button>

                  <span className="w-5 text-center text-sm">
                    {adults}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setAdults(adults + 1)
                    }
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-300
                      text-lg
                      text-gray-700
                      transition
                      hover:bg-gray-100
                    "
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Children
                  </p>

                  <p className="text-xs text-gray-400">
                    Age 0–12
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setChildren(
                        Math.max(0, children - 1)
                      )
                    }
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-300
                      text-lg
                      text-gray-700
                      transition
                      hover:bg-gray-100
                    "
                  >
                    −
                  </button>

                  <span className="w-5 text-center text-sm">
                    {children}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setChildren(children + 1)
                    }
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-300
                      text-lg
                      text-gray-700
                      transition
                      hover:bg-gray-100
                    "
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Done */}
              <button
                type="button"
                onClick={() => setGuestOpen(false)}
                className="
                  mt-5
                  w-full
                  rounded-full
                  bg-gray-900
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-gray-800
                "
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* ================= SEARCH ================= */}

        <button
          type="button"
          onClick={handleSearch}
          disabled={loading}
          className="
            flex
            py-2
            px-4
            shrink-0
            rounded-full
            bg-[#FF641F]
            px-6
            font-body
            text-[14px]
            font-medium
            text-white
            transition-all
            duration-200
            hover:bg-[#f4510c]
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? "..." : "Search"}
        </button>
      </div>
    </div>
  );
}