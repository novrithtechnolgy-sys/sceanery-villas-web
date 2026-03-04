"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        // 🔥 Fixed size system
        "px-8 rounded-full py-1 md:py-3 text-[14px] font-semibold",
        "flex items-center justify-center gap-2",
        "transition-all duration-200",
         "w-60  lg:w-[400px]",

        // Variants
        variant === "primary" &&
          "bg-gray-900 text-white hover:bg-black",

        variant === "outline" &&
          "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",

        variant === "light" &&
          "bg-white/10 border border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-gray-900",

        disabled && "opacity-50 cursor-not-allowed",

        className
      )}
    >
      {children}
    </button>
  );
}