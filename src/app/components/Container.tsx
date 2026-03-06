// components/Container.tsx
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto px-4 md:px-8 lg:px-12 xl:px-28">
      {children}
    </div>
  );
}