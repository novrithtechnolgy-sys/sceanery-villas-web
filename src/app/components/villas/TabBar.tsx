"use client";

type Tab = { key: string; label: string };

export default function TabBar({
  tabs,
  value,
  onChange,
}: {
  tabs: Tab[];
  value: string;
  onChange: (k: any) => void;
}) {
  return (
    <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="flex gap-2 py-4 overflow-x-auto">
        {tabs.map((t) => {
          const active = value === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onChange(t.key)}
              className={[
                "px-4 py-2 rounded-full text-sm whitespace-nowrap border transition",
                active
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}