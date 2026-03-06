"use client";

import Container from "../Container";

export default function TourTab({ villa }: { villa: any }) {
  const tour = villa?.virtualTour;

  if (!tour?.tourUrl) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-gray-600">
            No 360° tour link added yet.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <Container>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT */}
        <div className="">
          <h2 className="font-[timesTen] text-center md:text-left text-[20px] md:text-[36px] xl:text-[46px] leading-tight">
            <span className="italic">{tour.headingItalic}</span>{" "}
            <span className="font-semibold">{tour.headingBold}</span>
          </h2>

          <p className="mt-8 text-center md:text-left font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
            {tour.description}
          </p>
        </div>

        {/* RIGHT 360 VIEW */}
        <div className="w-full h-[420px] md:h-[500px] rounded-xl md:rounded-3xl">
          <iframe
            src={tour.tourUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl md:rounded-3xl"
          />
        </div>

      </div>
      </Container>
    </section>
  );
}