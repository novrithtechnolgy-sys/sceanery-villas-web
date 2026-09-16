// components/Container.tsx
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto px-4 md:px-8 lg:px-12 xl:mx-auto xl:px-12 max-w-[1430px]">
      {children}
    </div>
  );
}