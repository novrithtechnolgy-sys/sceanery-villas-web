export default function ArrowButton({
  onClick,
  disabled,
  direction,
}: {
  onClick: () => void;
  disabled: boolean;
  direction: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        "h-14 w-14 rounded-full bg-white sm:border sm:border-gray-200",
        "sm:shadow-[0_8px_20px_rgba(0,0,0,0.10)]",
        "flex items-center justify-center",
        "hover:shadow-[0_10px_26px_rgba(0,0,0,0.12)] transition",
        disabled ? "opacity-40 cursor-not-allowed" : "",
      ].join(" ")}
      aria-label={direction === "left" ? "Previous" : "Next"}
      type="button"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="black" strokeWidth="2.2">
        {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}