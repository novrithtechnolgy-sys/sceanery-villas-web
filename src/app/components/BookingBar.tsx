"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import DateInput from "../components/dateInput";

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



  const today = new Date()
    .toISOString()
    .split("T")[0];



  const initialTotalGuests = parseInt(
    initialGuests || "0"
  );


  const [checkIn, setCheckIn] = useState(
    initialCheckIn || ""
  );

  const [checkOut, setCheckOut] = useState(
    initialCheckOut || ""
  );

  const [adults, setAdults] = useState(
    initialTotalGuests > 0
      ? initialTotalGuests
      : 1
  );

  const [children, setChildren] =
    useState(0);

  const [guestOpen, setGuestOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const guests =
    adults + children;

  /* =========================================================
     CHECKOUT MIN DATE
     
     Checkout must be AFTER check-in.
     
     Example:
     Check-in 25 Sep
     Checkout minimum 26 Sep
  ========================================================= */

  const getCheckoutMinDate = () => {
    if (!checkIn) {
      return new Date();
    }

    const date = new Date(
      `${checkIn}T00:00:00`
    );

    date.setDate(
      date.getDate() + 1
    );

    return date;
  };

  /* =========================================================
     CHECK-IN CHANGE
  ========================================================= */

  const handleCheckInChange = (
    value: string
  ) => {
    setCheckIn(value);

    /*
     * Do NOT automatically set checkout.
     *
     * If existing checkout becomes
     * invalid, clear it.
     */

    if (
      value &&
      checkOut &&
      checkOut <= value
    ) {
      setCheckOut("");
    }
  };

  /* =========================================================
     SEARCH
  ========================================================= */

  const handleSearch = () => {
    if (!checkIn) {
      alert(
        "Please select a check-in date."
      );
      return;
    }

    if (!checkOut) {
      alert(
        "Please select a check-out date."
      );
      return;
    }

    if (checkOut <= checkIn) {
      alert(
        "Check-out date must be after check-in date."
      );
      return;
    }

    setLoading(true);

    const params =
      new URLSearchParams({
        checkIn,
        checkOut,
        guests: guests.toString(),
      });

    const url =
      `/available-villas?${params.toString()}`;

    if (
      pathname ===
      "/available-villas"
    ) {
      router.replace(url);
    } else {
      router.push(url);
    }

    setLoading(false);
  };

  return (
    <div className="relative z-30 flex w-full justify-center">

      {/* =====================================================
          BOOKING BAR
      ===================================================== */}

      <div
        className="
          flex
          w-full
          max-w-[490px]
          items-center
          rounded-full
          bg-white
          px-3
          py-3
          shadow-lg
        "
      >

        {/* ===================================================
            CHECK IN
        =================================================== */}

        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            px-3
          "
        >
          <DateInput
            id="checkIn"
            value={checkIn}
            onChange={
              handleCheckInChange
            }
            minDate={
              new Date()
            }
            placeholder="Check-in Date"
            variant="booking"
          />
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div
          className="
            h-6
            w-px
            shrink-0
            bg-gray-400/70
          "
        />

        {/* ===================================================
            CHECK OUT
        =================================================== */}

        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            px-3
          "
        >
          <DateInput
            id="checkOut"
            value={checkOut}
            onChange={(value) =>
              setCheckOut(value)
            }
            minDate={
              getCheckoutMinDate()
            }
            placeholder="Check-out Date"
            variant="booking"
          />
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div
          className="
            h-6
            w-px
            shrink-0
            bg-gray-400/70
          "
        />

        {/* ===================================================
            GUESTS
        =================================================== */}

        <div
          className="
            relative
            flex
            h-full
            flex-1
            items-center
            px-3
          "
        >

          {/* Guest Button */}

          <button
            type="button"
            onClick={() =>
              setGuestOpen(
                (prev) => !prev
              )
            }
            className="
              flex
              w-full
              cursor-pointer
              items-center
              justify-center
              whitespace-nowrap
              text-[14px]
              text-gray-500
              outline-none
            "
          >
            {guests}{" "}
            {guests === 1
              ? "Guest"
              : "Guests"}
          </button>

          {/* =================================================
              GUEST DROPDOWN
          ================================================= */}

          {guestOpen && (
            <div
              className="
                absolute
                bottom-[65px]
                left-1/2
                z-50
                w-[230px]
                -translate-x-1/2
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-4
                shadow-xl
              "
            >

              {/* =================================================
                  ADULTS
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-gray-800
                    "
                  >
                    Adults
                  </p>

                  <p
                    className="
                      text-xs
                      text-gray-400
                    "
                  >
                    Age 13+
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  {/* Minus */}

                  <button
                    type="button"
                    onClick={() =>
                      setAdults(
                        Math.max(
                          1,
                          adults - 1
                        )
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

                  {/* Value */}

                  <span
                    className="
                      w-5
                      text-center
                      text-sm
                    "
                  >
                    {adults}
                  </span>

                  {/* Plus */}

                  <button
                    type="button"
                    onClick={() =>
                      setAdults(
                        adults + 1
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
                    +
                  </button>

                </div>
              </div>

              {/* =================================================
                  CHILDREN
              ================================================= */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-gray-800
                    "
                  >
                    Children
                  </p>

                  <p
                    className="
                      text-xs
                      text-gray-400
                    "
                  >
                    Age 0–12
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  {/* Minus */}

                  <button
                    type="button"
                    onClick={() =>
                      setChildren(
                        Math.max(
                          0,
                          children - 1
                        )
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

                  {/* Value */}

                  <span
                    className="
                      w-5
                      text-center
                      text-sm
                    "
                  >
                    {children}
                  </span>

                  {/* Plus */}

                  <button
                    type="button"
                    onClick={() =>
                      setChildren(
                        children + 1
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
                    +
                  </button>

                </div>
              </div>

              {/* =================================================
                  DONE
              ================================================= */}

              <button
                type="button"
                onClick={() =>
                  setGuestOpen(false)
                }
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

        {/* ===================================================
            SEARCH
        =================================================== */}

        <button
          type="button"
          onClick={handleSearch}
          disabled={loading}
          className="
            shrink-0
            rounded-full
            bg-[#FF641F]
            px-6
            py-2
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
          {loading
            ? "..."
            : "Search"}
        </button>

      </div>
    </div>
  );
}