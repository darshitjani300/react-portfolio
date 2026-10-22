/**
 * Circular "full stack developer" seal with an arrow in the middle.
 *
 * The root takes its position from `className` — the two layers stack in a
 * single grid cell rather than via absolute positioning, so the caller is free
 * to make this absolute without the arrow escaping.
 */
export default function RotatingBadge({ className = "" }) {
  return (
    <div
      className={`grid h-[120px] w-[120px] place-items-center rounded-full border border-line bg-elev/80 backdrop-blur-sm ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="spin-slow col-start-1 row-start-1 h-full w-full"
      >
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            fill="none"
          />
        </defs>
        <text className="fill-muted text-[9.4px] font-medium" fontFamily="var(--font-mono)">
          {/* textLength pins the label to the circle's own length (2πr ≈ 226 in
              viewBox units), so it tiles exactly once at any font size instead
              of over-running the path and clipping mid-word. */}
          <textPath
            href="#badge-circle"
            startOffset="0"
            textLength="226"
            lengthAdjust="spacing"
          >
            FULL STACK DEVELOPER · FREELANCE ·
          </textPath>
        </text>
      </svg>

      <svg
        viewBox="0 0 24 24"
        className="col-start-1 row-start-1 h-6 w-6 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </div>
  );
}
