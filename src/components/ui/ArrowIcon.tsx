type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className = "" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
