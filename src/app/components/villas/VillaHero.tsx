import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Container from "../Container";
import {
  FaBed,
  FaMountain,
  FaSwimmingPool,
  FaUsers,
  FaHome,
  FaConciergeBell,
  FaTree,
  FaStar,
} from "react-icons/fa";
import { IconType } from "react-icons";

export default function VillaHero({ villa }: { villa: any }) {
  const heroUrl = villa.heroImage
    ? urlFor(villa.heroImage).width(2200).quality(85).url()
    : "";

const getStatIcon = (text?: string): IconType => {
  const key = (text || "").toLowerCase();

  if (key.includes("bed") || key.includes("suite")) return FaBed;
  if (key.includes("sleep") || key.includes("guest")) return FaUsers;
  if (key.includes("pool")) return FaSwimmingPool;
  if (key.includes("view") || key.includes("mountain") || key.includes("ocean"))
    return FaMountain;
  if (key.includes("villa") || key.includes("hall") || key.includes("room")) return FaHome;
  if (key.includes("kitchen") || key.includes("chef")) return FaConciergeBell;
  if (key.includes("garden") || key.includes("forest")) return FaTree;
  if (key.includes("rooftop") || key.includes("terrace")) return FaHome;

  return FaStar;
};

  return (
    <section>
      <div className="relative overflow-hidden rounded-t-[28px] md:rounded-b-[28px] h-[420px] md:h-[520px] lg:h-[600px]">
        {heroUrl && (
          <Image
            src={heroUrl}
            alt={villa.title}
            fill
            priority
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-2xl">
            <h1 className="font-[timesTen] text-[20px] uppercase md:text-[36px] xl:text-[46px] tracking-wide text-white">
              {villa.title}
            </h1>

            {villa.tagline && (
              <p className="mt-4 md:mt-8 font-[helvetica] max-w-5xl text-white text-[14px] md:text-[20px] xl:text-[24px] leading-relaxed">
                {villa.tagline}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      {!!villa.stats?.length && (
        <div className="relative py-10 md:py-20 z-10 bg-[#f8f8f8] rounded-b-[22px]">
          <Container>
            <div className="rounded-[22px] max-w-5xl mx-auto p-4 md:p-6 z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                {villa.stats.map((stat: any, index: number) => {
                  const Icon = getStatIcon(`${stat.value} ${stat.label}`);

                  return (
                    <Stat
                      key={index}
                      icon={<Icon />}
                      label={stat.label}
                      value={stat.value}
                    />
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}

function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border-2 border-gray-200 bg-white p-2 md:p-4 text-center flex flex-row justify-center items-center gap-3">
      <div className="text-[16px] md:text-[20px] xl:text-[24px]">{icon}</div>

      <div className="font-[helvetica] text-[16px] md:text-[20px] xl:text-[24px] text-gray-700 leading-relaxed">
        <span className="font-semibold">{value}</span>{" "}
        <span>{label}</span>
      </div>
    </div>
  );
}