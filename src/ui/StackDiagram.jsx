const LAYERS = [
  {
    label: "Client",
    note: "Interfaces people actually touch",
    items: ["React", "Next.js", "React Native"],
  },
  {
    label: "API",
    note: "Auth, RBAC, real-time, scheduled jobs",
    items: ["Express", "TypeScript", "Socket.IO"],
  },
  {
    label: "Data",
    note: "Modelled around how the product gets used",
    items: ["PostgreSQL", "Prisma", "Redis"],
  },
];

/**
 * The three layers I work across, drawn as a flow rather than photographed —
 * it themes with the page and says something a stock photo can't.
 */
export default function StackDiagram() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-line bg-elev">
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
        <p className="eyebrow">Where a request goes</p>
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        </span>
      </div>

      <ul className="flex flex-col px-5 py-6">
        {LAYERS.map((layer, index) => {
          const isLast = index === LAYERS.length - 1;
          return (
            <li key={layer.label} className="flex gap-4">
              {/* Dot + connector share a centred column, so the spine lines up
                  on its own however tall each row grows. */}
              <div className="flex w-3 shrink-0 flex-col items-center pt-1">
                <span className="grid h-3 w-3 shrink-0 place-items-center rounded-full border border-line-strong bg-bg">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {!isLast && <span className="mt-1.5 w-px flex-1 bg-line" />}
              </div>

              <div className={isLast ? "" : "pb-6"}>
                <p className="text-[0.96rem] font-semibold tracking-tight text-fg">
                  {layer.label}
                </p>
                <p className="mt-1 text-[0.85rem] leading-relaxed text-subtle">
                  {layer.note}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line px-1.5 py-1 font-mono text-[0.8rem] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
