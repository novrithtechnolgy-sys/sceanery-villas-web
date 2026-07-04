"use client";

import Container from "../Container";

export default function TourTab({ villa }: { villa: any }) {
  const tour = villa?.virtualTour;

  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-20">
      <Container>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* LEFT TEXT */}
        <div className="">
          <h2 className="font-heading text-center md:text-left text-[24px] md:text-[36px] xl:text-[46px] leading-tight">
            <span className="italic">{tour.headingItalic}</span>{" "}
            <span className="font-semibold text-[#FF751F]">{tour.headingBold}</span>
          </h2>

          <p className="mt-4 md:mt-8 text-center md:text-left font-body text-[15px] md:text-[20px] text-gray-700 leading-[32px] md:leading-[44px]">
            {tour.description}
          </p>
        </div>

        {/* RIGHT 360 VIEW */}
        <div className="w-full h-[420px] md:h-[500px] rounded-[20px]">
          {tour?.tourUrl ? (
            <iframe
            src={tour.tourUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[20px]"
          />
          ):(
            <div className="font-body text-[16px] md:text-[20px] xl:text-[24px] text-gray-600 flex items-center justify-center h-full bg-gray-100 rounded-[20px]">
              360° tour coming soon
            </div>
          )}

        </div>

      </div>
      </Container>
    </section>
  );
}