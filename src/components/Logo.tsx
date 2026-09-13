interface LogoProps {
  className?: string;
}

export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="4" y="18" width="5" height="10" rx="1.5" fill="#1E2430" />
      <rect x="13.5" y="12" width="5" height="16" rx="1.5" fill="#1E2430" />
      <rect x="23" y="6" width="5" height="22" rx="1.5" fill="#4F9DFF" />
      <path
        d="M3 20L13 13.5L22.5 9L29 4"
        stroke="#4F9DFF"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="4" r="2.25" fill="#4F9DFF" />
    </svg>
  );
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="h-6 w-6 shrink-0" />
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        BetAnalitics
      </span>
    </div>
  );
}
