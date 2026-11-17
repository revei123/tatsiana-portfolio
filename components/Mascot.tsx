type Pose = "sit" | "wave" | "peek" | "lost";

type MascotProps = {
  className?: string;
  title?: string;
  pose?: Pose;
};

/** Same illustrated Tatiana in every pose: dark shoulder-length hair, friendly face. */
export default function Mascot({
  className = "h-44 w-auto",
  title = "Татьяна, рисунок",
  pose = "sit",
}: MascotProps) {
  const peek = pose === "peek";
  const waving = pose === "wave";
  const lost = pose === "lost";

  return (
    <svg
      viewBox={peek ? "18 70 200 150" : "0 0 240 320"}
      className={`mascot mascot-${pose} ${className}`}
      role="img"
      aria-label={title}
    >
      {!peek && <ellipse cx="122" cy="306" rx="48" ry="8" fill="#16140f" opacity="0.12" />}

      {!peek && (
        <path
          d="M62 210c0-18 18-32 58-32s60 14 60 32v62c0 22-22 34-60 34s-58-12-58-34z"
          fill="#ffe14a"
          stroke="#16140f"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      )}
      {!peek && (
        <path
          d="M110 196c6 14 14 18 10 28"
          fill="none"
          stroke="#16140f"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}

      {waving && (
        <g className="arm-wave">
          <path
            d="M156 188c22-8 38-34 34-52-2-8-12-6-12 4 0 12-8 28-18 34"
            fill="none"
            stroke="#16140f"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M156 188c22-8 38-34 34-52-2-8-12-6-12 4 0 12-8 28-18 34"
            fill="none"
            stroke="#ffe14a"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="188" cy="132" r="11" fill="#f6cbb8" stroke="#16140f" strokeWidth="3" />
        </g>
      )}

      <ellipse cx="120" cy="132" rx="74" ry="78" fill="#2b211c" stroke="#16140f" strokeWidth="4" />
      <ellipse cx="122" cy="136" rx="48" ry="52" fill="#f6cbb8" stroke="#16140f" strokeWidth="4" />
      <path
        d="M74 128c8-46 36-62 58-58 24 4 42 28 40 52-16-22-36-28-54-22-16 6-32 12-44 28z"
        fill="#2b211c"
        stroke="#16140f"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M74 140c-8 20-6 48 4 62 6 8 14 2 12-8-4-16-2-34 2-46 2-6-8-12-18-8z"
        fill="#2b211c"
        stroke="#16140f"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M170 136c10 18 12 46 2 64-6 10-16 4-12-8 4-18 2-38-2-50-2-8 6-12 12-6z"
        fill="#2b211c"
        stroke="#16140f"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <g className="eye-lid">
        <ellipse cx="104" cy="142" rx="9" ry="10" fill="#fffaf1" stroke="#16140f" strokeWidth="3" />
        <ellipse cx="148" cy="142" rx="9" ry="10" fill="#fffaf1" stroke="#16140f" strokeWidth="3" />
        <circle cx="106" cy="144" r="3.6" fill="#16140f" />
        <circle cx="150" cy="144" r="3.6" fill="#16140f" />
        <circle cx="107.4" cy="142.2" r="1.4" fill="#fffaf1" />
        <circle cx="151.4" cy="142.2" r="1.4" fill="#fffaf1" />
      </g>
      <path d="M92 128c8-7 16-6 20 0" fill="none" stroke="#16140f" strokeWidth="3" strokeLinecap="round" />
      <path d="M136 126c8-8 18-6 22 1" fill="none" stroke="#16140f" strokeWidth="3" strokeLinecap="round" />
      <path d="M120 156c2 5 7 6 9 3" fill="none" stroke="#16140f" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M108 170c8 9 22 9 32 0" fill="none" stroke="#16140f" strokeWidth="3.4" strokeLinecap="round" />
      <ellipse cx="90" cy="162" rx="8" ry="5" fill="#e8897a" opacity="0.45" />
      <ellipse cx="160" cy="162" rx="8" ry="5" fill="#e8897a" opacity="0.45" />

      {!peek && !waving && (
        <g transform="translate(148 228) rotate(-8)">
          <rect width="58" height="42" rx="7" fill="#fffaf1" stroke="#16140f" strokeWidth="3.5" />
          <path d="M0 12h58" stroke="#16140f" strokeWidth="3.5" />
          <circle cx="9" cy="6" r="2.2" fill={lost ? "#c2410c" : "#2f9e44"} />
          <path d="M10 22h28" stroke="#16140f" strokeWidth="3" strokeLinecap="round" />
          <path
            d={lost ? "M10 31h8M22 31h10" : "M10 31h18"}
            stroke="#16140f"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  );
}
