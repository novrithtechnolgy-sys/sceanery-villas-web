"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBed, FaUsers } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import BookingBar from "../BookingBar";
import Container from "../Container";

type Villa = {
  id: string | number;
  title: string;
  slug?: string;
  description?: string;
  image?: string;
  bedrooms?: number;
  sleeps?: number;
  feature?: string;
  price?: number;
};

export default function AvailableVillasClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = searchParams.get("guests") || "";

  const [loading, setLoading] = useState(true);
  const [villas, setVillas] = useState<Villa[]>([]);
  const [error, setError] = useState("");

  const fetchVillas = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `/api/available-villas?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`,
        { cache: "no-store" }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch villas");
      }

      const data = await res.json();
      const arr = Array.isArray(data) ? data : data?.villas || [];

      if (!arr.length) {
        setVillas([]);
        setError("Please retry to get available villas.");
      } else {
        setVillas(arr);
      }
    } catch (err) {
      setVillas([]);
      setError("Please retry to get available villas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!checkIn || !checkOut) {
      setLoading(false);
      setError("Please choose dates first.");
      return;
    }

    fetchVillas();
  }, [checkIn, checkOut, guests]);

  const handleBookNow = (villa: Villa) => {
    if (!checkIn || !checkOut) {
      router.push("/booking?message=Please check availability first.");
      return;
    }

    const params = new URLSearchParams({
      villaId: String(villa.id),
      title: villa.title,
      checkIn,
      checkOut,
      guests,
    });

    router.push(`/booking?${params.toString()}`);
  };

  return (
    <section className="min-h-screen pb-20">
      
        <div className="relative -mt-14 z-10">
        <BookingBar />
        </div>
      <Container>
      <div className="mt-12 space-y-10">
        {loading && (
          <div className="text-center text-gray-500 py-20">
            Loading available villas...
          </div>
        )}

        {!loading && error && (
          <div className="bg-white text-center flex flex-col h-full items-center justify-center py-20">
            <p className="text-red-600 text-[16px]">{error}</p>
          </div>
        )}

        {!loading &&
          !error &&
          villas.map((villa) => (
            <div
              key={villa.id}
              className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[22px] overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="relative min-h-[280px] md:min-h-[360px]">
                <Image
                  src={villa.image || "/images/villa-fallback.jpg"}
                  alt={villa.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-[28px] font-semibold text-gray-900">
                    {villa.title}
                  </h2>

                  <p className="mt-4 text-[16px] leading-8 text-gray-700">
                    {villa.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-6 text-[15px] text-gray-800">
                    <div className="flex items-center gap-2">
                      <FaBed />
                      <span>{villa.bedrooms ?? 0} Bedrooms</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaUsers />
                      <span>Sleeps {villa.sleeps ?? 0}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MdPool />
                      <span>{villa.feature ?? "Private Pool"}</span>
                    </div>
                  </div>

                  <Link
                    href={villa.slug ? `/villas/${villa.slug}` : "#"}
                    className="inline-block mt-6 underline text-[15px] text-gray-700"
                  >
                    View More
                  </Link>
                </div>

                <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="text-[20px] md:text-[22px] font-semibold text-gray-900">
                    LKR {villa.price?.toLocaleString() ?? "22,500.00"}{" "}
                    <span className="font-normal text-[18px]">/ Per Night</span>
                  </div>

                  <button
                    onClick={() => handleBookNow(villa)}
                    className="rounded-full bg-black text-white px-8 py-3 text-[14px] font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      </Container>
    </section>
  );
}