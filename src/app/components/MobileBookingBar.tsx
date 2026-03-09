"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";


export default function MobileBookingBar({
  price,
  title,
}: {
  price: number;
  title: string;
}) {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white rounded-t-[20px] shadow-xl border border-gray-200 p-4 py-8 flex items-center justify-between">
        
        {/* Price */}
        <div>
          <p className="text-lg font-bold text-gray-900">
            Rs.{price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">Per Night</p>
        </div>

        {/* Button */}
        <Button
          variant="primary"
          className="rounded-full px-6"
          onClick={() => router.push("#booking")}
        >
          Book {title}
        </Button>
      </div>
    </div>
  );
}