"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type DateInputProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  minDate?: Date;

  // Optional
  placeholder?: string;

  // DateInput variants
  variant?: "default" | "booking";
};

export default function DateInput({
  id,
  value,
  onChange,
  minDate,
  placeholder = "Select date",
  variant = "default",
}: DateInputProps) {
  const [open, setOpen] = useState(false);

  const wrapRef =
    useRef<HTMLDivElement>(null);

  const today = new Date();

  /* =========================================================
     INITIAL MONTH
  ========================================================= */

  const getInitialMonth = () => {
    if (value) {
      const parts = value.split("-");

      if (parts.length === 3) {
        const y = Number(parts[0]);
        const m = Number(parts[1]);

        if (
          !Number.isNaN(y) &&
          !Number.isNaN(m)
        ) {
          return new Date(
            y,
            m - 1,
            1
          );
        }
      }
    }

    return new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
  };

  const [currentMonth, setCurrentMonth] =
    useState<Date>(getInitialMonth);

  /* =========================================================
     OUTSIDE CLICK + ESCAPE
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent
    ) => {
      if (
        wrapRef.current &&
        !wrapRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =========================================================
     MONTHS
  ========================================================= */

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /* =========================================================
     WEEK DAYS
  ========================================================= */

  const weekDays = [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
  ];

  /* =========================================================
     CURRENT MONTH
  ========================================================= */

  const year =
    currentMonth.getFullYear();

  const month =
    currentMonth.getMonth();

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const days: Array<number | null> = [];

  for (
    let i = 0;
    i < firstDay;
    i++
  ) {
    days.push(null);
  }

  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {
    days.push(day);
  }

  /* =========================================================
     FORMAT DATE
  ========================================================= */

  const formatDate = (
    y: number,
    m: number,
    d: number
  ) => {
    return `${y}-${String(
      m + 1
    ).padStart(2, "0")}-${String(
      d
    ).padStart(2, "0")}`;
  };

  /* =========================================================
     TODAY
  ========================================================= */

  const todayString = formatDate(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  /* =========================================================
     DISABLED DATE
  ========================================================= */

  const isDisabled = (
    day: number
  ) => {
    if (!minDate) {
      return false;
    }

    const selectedDate = new Date(
      year,
      month,
      day
    );

    const minimumDate = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate()
    );

    return (
      selectedDate < minimumDate
    );
  };

  /* =========================================================
     SELECT DATE
  ========================================================= */

  const selectDate = (
    day: number
  ) => {
    if (isDisabled(day)) {
      return;
    }

    const selectedDate =
      formatDate(
        year,
        month,
        day
      );

    onChange(selectedDate);

    setOpen(false);
  };

  /* =========================================================
     PREVIOUS MONTH
  ========================================================= */

  const previousMonth = () => {
    setCurrentMonth(
      new Date(
        year,
        month - 1,
        1
      )
    );
  };

  /* =========================================================
     NEXT MONTH
  ========================================================= */

  const nextMonth = () => {
    setCurrentMonth(
      new Date(
        year,
        month + 1,
        1
      )
    );
  };

  /* =========================================================
     OPEN CALENDAR
  ========================================================= */

  const openCalendar = () => {
    if (value) {
      const parts =
        value.split("-");

      if (parts.length === 3) {
        const y = Number(parts[0]);
        const m = Number(parts[1]);

        if (
          !Number.isNaN(y) &&
          !Number.isNaN(m)
        ) {
          setCurrentMonth(
            new Date(
              y,
              m - 1,
              1
            )
          );
        }
      }
    }

    setOpen(
      (prev) => !prev
    );
  };

  /* =========================================================
     DISPLAY DATE
  ========================================================= */

  const displayDate = (() => {
    if (!value) {
      return "";
    }

    const parts =
      value.split("-");

    if (parts.length !== 3) {
      return "";
    }

    const date = new Date(
      Number(parts[0]),
      Number(parts[1]) - 1,
      Number(parts[2])
    );

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return "";
    }

    return date.toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  })();

  /* =========================================================
     BOOKING VARIANT
  ========================================================= */

  const isBooking =
    variant === "booking";

  return (
    <div
      ref={wrapRef}
      className="relative w-full"
    >

      {/* =====================================================
          INPUT BUTTON
      ===================================================== */}

      <button
        id={id}
        type="button"
        onClick={openCalendar}
        className={
          isBooking
            ? `
              flex
              w-full
              items-center
              justify-center
              gap-2
              bg-transparent
              font-body
              text-[14px]
              text-gray-500
              outline-none
            `
            : `
              flex
              w-full
              items-center
              justify-between
              border-0
              border-b
              border-gray-500/70
              bg-transparent
              pb-3
              font-body
              text-[14px]
              text-gray-900
              outline-none
            `
        }
      >
        <span
          className={
            value
              ? isBooking
                ? "whitespace-nowrap text-gray-600"
                : "text-gray-900"
              : isBooking
                ? "whitespace-nowrap text-gray-400"
                : "text-gray-400"
          }
        >
          {displayDate ||
            placeholder}
        </span>

        <CalendarDays
          className={
            isBooking
              ? `
                hidden
              `
              : `
                h-5
                w-5
                shrink-0
                text-gray-900
              `
          }
          strokeWidth={
            isBooking ? 1.8 : 1.8
          }
        />
      </button>

      {/* =====================================================
          CALENDAR
      ===================================================== */}

      {open && (
        <div
          className={
            isBooking
              ? `
                absolute
                left-1/2
                bottom-14
                z-50
                mt-3
                w-[280px]
                -translate-x-1/2
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-4
                shadow-xl
              `
              : `
                absolute
                left-0
                right-0
                top-full
                z-50
                mt-2
                rounded-xl
                border
                border-gray-300
                bg-white
                p-4
                shadow-lg
              `
          }
        >

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="flex items-center justify-between">

            <button
              type="button"
              onClick={
                previousMonth
              }
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-gray-600
                transition
                hover:bg-gray-100
              "
            >
              <ChevronLeft
                className="h-4 w-4"
              />
            </button>

            <div className="text-center">
              <p
                className="
                  font-body
                  text-[15px]
                  font-semibold
                  text-gray-900
                "
              >
                {months[month]}
              </p>

              <p
                className="
                  font-body
                  text-[12px]
                  text-gray-500
                "
              >
                {year}
              </p>
            </div>

            <button
              type="button"
              onClick={
                nextMonth
              }
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-gray-600
                transition
                hover:bg-gray-100
              "
            >
              <ChevronRight
                className="h-4 w-4"
              />
            </button>

          </div>

          {/* =================================================
              WEEK DAYS
          ================================================= */}

          <div className="mt-4 grid grid-cols-7">
            {weekDays.map(
              (day) => (
                <div
                  key={day}
                  className="
                    flex
                    h-8
                    items-center
                    justify-center
                    font-body
                    text-[11px]
                    font-medium
                    text-gray-400
                  "
                >
                  {day}
                </div>
              )
            )}
          </div>

          {/* =================================================
              DAYS
          ================================================= */}

          <div className="grid grid-cols-7 gap-y-1">
            {days.map(
              (
                day,
                index
              ) => {

                if (
                  day === null
                ) {
                  return (
                    <div
                      key={`empty-${index}`}
                      className="h-9"
                    />
                  );
                }

                const dateString =
                  formatDate(
                    year,
                    month,
                    day
                  );

                const disabled =
                  isDisabled(day);

                const selected =
                  value ===
                  dateString;

                const isToday =
                  todayString ===
                  dateString;

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={
                      disabled
                    }
                    onClick={() =>
                      selectDate(
                        day
                      )
                    }
                    className={`
                      flex
                      h-9
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      font-body
                      text-[13px]
                      transition

                      ${
                        disabled
                          ? "cursor-not-allowed text-gray-300"
                          : "text-gray-700 hover:bg-[#FF751F]/10 hover:text-[#FF751F]"
                      }

                      ${
                        selected
                          ? "bg-[#FF751F] font-semibold text-white hover:bg-[#FF751F] hover:text-white"
                          : ""
                      }

                      ${
                        isToday &&
                        !selected &&
                        !disabled
                          ? "font-semibold text-[#FF751F]"
                          : ""
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              }
            )}
          </div>

        </div>
      )}
    </div>
  );
}