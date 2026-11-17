type MascotProps = {
  className?: string;
  title?: string;
};

/** Original drawn character. Hair and sweater nod to Tatiana's portrait; not a copy of any agency mascot. */
export default function Mascot({ className = "h-40 w-auto", title = "Рисованный персонаж" }: MascotProps) {
  return (
    <svg
      viewBox="0 0 180 210"
      className={`mascot ${className}`}
      role="img"
      aria-label={title}
    >
      <ellipse cx="90" cy="198" rx="36" ry="7" fill="#16140f" opacity="0.12" />
      <path
        d="M48 118c-8 18-6 46 10 58 8 6 18 8 32 8s26-3 34-10c14-12 16-40 8-58-6-4-16-6-42-6s-36 2-42 8z"
        fill="#ffe14a"
        stroke="#16140f"
        strokeWidth="3"
      />
      <path d="M62 132h56M70 146h40" stroke="#16140f" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
      <path
        d="M58 96c2-28 18-48 36-48 20 0 34 18 36 46 2 8-6 14-16 12-8-8-18-14-28-14s-18 6-24 14c-8 4-16-2-4-10z"
        fill="#f3c7b0"
        stroke="#16140f"
        strokeWidth="3"
      />
      <path
        d="M46 78c6-34 28-52 52-48 18 3 32 18 36 36 2 10-8 8-14 2-10-22-28-32-46-28-16 3-28 16-32 34-2 8-8 12 4 4z"
        fill="#3b2a24"
        stroke="#16140f"
        strokeWidth="3"
      />
      <path
        d="M42 96c8 10 6 28-2 36-4 4-10 2-10-4 0-14 4-26 8-32 2-4 2-4 4 0zM138 92c-2 12 0 26 8 36 4 4 10 2 10-4 0-16-6-28-12-34-3-3-6-2-6 2z"
        fill="#3b2a24"
        stroke="#16140f"
        strokeWidth="3"
      />
      <g className="eye-lid">
        <ellipse cx="74" cy="100" rx="6" ry="7" fill="#16140f" />
        <ellipse cx="108" cy="100" rx="6" ry="7" fill="#16140f" />
        <circle cx="76" cy="98" r="1.6" fill="#fffaf1" />
        <circle cx="110" cy="98" r="1.6" fill="#fffaf1" />
      </g>
      <path d="M80 116c6 6 16 6 22 0" fill="none" stroke="#16140f" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M118 140c16 2 28 12 30 24 1 6-6 8-8 3-4-12-14-18-26-18"
        fill="none"
        stroke="#16140f"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g transform="translate(128 146) rotate(8)">
        <rect x="0" y="0" width="42" height="32" rx="4" fill="#fffaf1" stroke="#16140f" strokeWidth="2.5" />
        <rect x="0" y="0" width="42" height="8" rx="3" fill="#ff5a36" />
        <path d="M6 16h22M6 22h14" stroke="#16140f" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
