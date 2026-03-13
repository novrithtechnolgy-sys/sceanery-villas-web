"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Button from "./Button";

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

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(initialCheckIn || today);
  const [checkOut, setCheckOut] = useState(initialCheckOut || tomorrow);
  const [adalts, setAdalts] = useState(initialGuests || "2");
  const [children, setChildren] = useState(initialGuests || "0");
  const [loading, setLoading] = useState(false);

  const guest = parseInt(adalts) + parseInt(children);
  const guests = guest.toString();

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

        <div className="mt-4 grid grid-cols-1 md:grid-cols-16 gap-4 items-end">
          <div className="md:col-span-4 w-full">
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

          <div className="md:col-span-4 w-full">
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

          <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-4 w-full gap-4" >

          <div className="col-span-1 md:col-span-2 w-full">
            <label className="block text-[16px] text-gray-600 mb-4">
              Adault
            </label>
            <input
              type="number"
              value={adalts}
              min="1"
              onChange={(e) => setAdalts(e.target.value)}
              className="w-full rounded-full bg-gray-100 border border-gray-200 text-gray-600 px-4 py-2 md:py-3 text-[14px] outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

            <div className="col-span-1 md:col-span-2 w-full">
            <label className="block text-[16px] text-gray-600 mb-4">
              Children
            </label>
            <input
              type="number"
              value={children}
              min="1"
              onChange={(e) => setChildren(e.target.value)}
              className="w-full rounded-full bg-gray-100 border border-gray-200 text-gray-600 px-4 py-2 md:py-3 text-[14px] outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          </div>


          <div className="md:col-span-4 flex justify-center md:justify-end mt-4">
            <Button variant="primary" onClick={handleSearch} disabled={loading}>
              {loading ? "Checking..." : "Check Availability"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}