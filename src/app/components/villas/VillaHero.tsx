import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Container from "../Container";


export default function VillaHero({ villa }: { villa: any }) {
  const heroUrl = villa.heroImage
    ? urlFor(villa.heroImage).width(2200).quality(85).url()
    : "";

  const logoUrl = villa.logo
    ? urlFor(villa.logo).width(600).quality(100).url()
    : "";

    console.log("villa logo" + logoUrl)

  return (
    <section>
      <div className="relative overflow-hidden rounded-t-[28px] md:rounded-b-[28px] h-[420px] md:h-[520px] lg:h-[600px]">
        {heroUrl && (
          <Image
            src={heroUrl}
            alt={villa.title}
            fill
            priority
            quality={75}
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-2xl">
            <h1 className="font-heading text-[20px]  md:text-[36px] xl:text-[76px] tracking-wide text-white">
              {villa.title}
            </h1>

            {villa.tagline && (
              <p className="mt-4 md:mt-8 font-body max-w-5xl text-white text-[14px] md:text-[20px] leading-relaxed">
                {villa.tagline}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Logo */}
      {logoUrl && (
        <div className="relative pt-10 md:pt-20">
          <Container>
            <div className="flex justify-center">
              <div className="relative h-[120px] w-full md:h-[160px] lg:h-[220px] ">
                <Image
                  src={logoUrl}
                  alt={`${villa.title} Logo`}
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
          </Container>
        </div>
      )}`
    </section>
  );
}

