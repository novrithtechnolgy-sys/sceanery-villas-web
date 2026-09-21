import Container from "../Container";

export default function MapTab({ villa }: { villa: any }) {
  const lat = villa?.location?.lat;
  const lng = villa?.location?.lng;
  const villaName = villa?.title || "Villa Mandalay";

  const src =
    villa?.mapEmbedUrl ||
    (typeof lat === "number" && typeof lng === "number"
      ? `https://www.google.com/maps?q=${lat},${lng}&z=12&output=embed`
      : null);

  if (!src) {
    return (
      <div className="text-sm text-gray-600">
        Map coordinates not added yet.
      </div>
    );
  }

  return (
    <section className="py-[32px] md:py-[64px]">
      <Container>

        <h2 className="font-heading text-[22px] md:text-[32px] xl:text-[38px] font-bold md:leading-[42px] xl:leading-[48px] tracking-[-0.5px] text-gray-900 text-center">
          <span className="">Map by </span>
          <span className="text-[#FF751F]">{villaName}</span>
        </h2>

        <div className="rounded-[20px] overflow-hidden bg-white shadow-sm mt-8 md:mt-12">
          <iframe
            title={`${villaName} map`}
            src={src}
            className="w-full h-[420px] md:h-[460px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </Container>
    </section>
  );
}