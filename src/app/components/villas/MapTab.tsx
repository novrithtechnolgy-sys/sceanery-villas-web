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
    <section className="py-14 md:py-20">
      <Container>

        <h2 className="text-center font-[timesTen] text-[20px] md:text-[36px] xl:text-[46px]  leading-tight mb-10 md:mb-14">
          <span className="italic">Map By </span>
          <span className="font-semibold">{villaName}</span>
        </h2>

        <div className="rounded-[28px] md:rounded-[34px] overflow-hidden bg-white shadow-sm">
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