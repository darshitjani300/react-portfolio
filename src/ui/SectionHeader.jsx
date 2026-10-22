import Reveal from "./Reveal";

export default function SectionHeader({ index, label, title, aside, large = false }) {
  return (
    <div className="border-t border-line pt-5 md:pt-6">
      <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-14">
        <div className={large ? "max-w-4xl" : "max-w-2xl"}>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent">{index}</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>{label}</span>
          </p>
          <h2 className={`${large ? "display" : "display-sm"} mt-4 text-fg`}>
            {title}
          </h2>
        </div>
        {aside ? (
          <p className="max-w-sm text-[1.0125rem] leading-relaxed text-muted md:pb-2 md:text-right">
            {aside}
          </p>
        ) : null}
      </Reveal>
    </div>
  );
}
