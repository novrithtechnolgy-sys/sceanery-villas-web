"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Button from "./Button";

export default function BookingBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState("2");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const qCheckIn = searchParams.get("checkIn");
    const qCheckOut = searchParams.get("checkOut");
    const qGuests = searchParams.get("guests");

    if (qCheckIn) setCheckIn(qCheckIn);
    if (qCheckOut) setCheckOut(qCheckOut);
    if (qGuests) setGuests(qGuests);
  }, [searchParams]);

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
      guests,
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
    <div className="relative md:-mt-18 w-full mx-auto md:px-8 lg:px-12 xl:px-28">
      <div className="bg-white font-[helvetica] rounded-[22px] shadow-lg border border-gray-100 p-5 md:p-6">
        <div className="text-[16px] md:text-[18px] font-regular text-gray-900">
          Find Your Perfect Stay
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-3 w-full">
            <label className="block text-[16px] text-gray-600 mb-4">
              Check in Date
            </label>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded-full bg-gray-100 text-gray-600 border border-gray-200 px-4 py-2 md:py-3 text-[14px] outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          <div className="md:col-span-3 w-full">
            <label className="block text-[16px] text-gray-600 mb-4">
              Check out Date
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-full bg-gray-100 border border-gray-200 text-gray-600 px-4 py-2 md:py-3 text-[14px] outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          <div className="md:col-span-3 w-full">
            <label className="block text-[16px] text-gray-600 mb-4">
              Guests
            </label>
            <select
              className="w-full rounded-full bg-gray-100 text-gray-600 border border-gray-200 px-4 py-2 md:py-3 text-[14px] outline-none focus:ring-2 focus:ring-gray-900/10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1 Adult • 0 Children</option>
              <option value="2">2 Adults • 0 Children</option>
              <option value="3">2 Adults • 1 Child</option>
              <option value="4">2 Adults • 2 Children</option>
              <option value="5">3 Adults • 2 Children</option>
            </select>
          </div>

          <div className="md:col-span-3 flex justify-center md:justify-end mt-4">
            <Button variant="primary" onClick={handleSearch} disabled={loading}>
              {loading ? "Checking..." : "Check Availability"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}