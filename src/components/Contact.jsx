import { useCallback, useEffect, useState } from "react";
import { profile, socials } from "../data/site";
import useLocalTime from "../hooks/useLocalTime";
import { IconArrowUpRight, IconCheck, IconCopy, IconPin } from "../ui/icons";
import Magnetic from "../ui/Magnetic";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import WrapperContainer from "../utils/WrapperContainer";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const time = useLocalTime(profile.timezone);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }, []);

  return (
    <WrapperContainer
      id="contact"
      classes="section-y section-end relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 translate-y-1/3 rounded-full bg-accent/10 blur-[160px]" />
      </div>

      <SectionHeader
        index="04"
        label="Contact"
        large
        title={
          <>
            Have an idea?{" "}
            <span className="serif-accent text-accent">Let's build it.</span>
          </>
        }
      />

      <Reveal delay={0.1} className="header-gap max-w-xl">
        <p className="text-[1.0425rem] leading-relaxed text-muted">
          I'm available for freelance projects and full-time roles. Tell me what
          you're working on — I usually reply within a day.
        </p>
      </Reveal>

      <Reveal delay={0.16} className="mt-7 flex flex-wrap items-center gap-3">
        <Magnetic className="inline-block">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-fg px-5 py-3.5 text-[0.9425rem] font-medium text-bg sm:px-6 sm:text-[0.9825rem]"
          >
            <span className="truncate">{profile.email}</span>
            <IconArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Magnetic>

        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3.5 text-[0.9425rem] font-medium text-fg transition-colors duration-300 hover:bg-accent-soft"
        >
          {copied ? (
            <IconCheck className="h-4 w-4 text-accent" />
          ) : (
            <IconCopy className="h-4 w-4" />
          )}
          {copied ? "Copied" : "Copy email"}
        </button>
      </Reveal>

      <Reveal
        delay={0.22}
        className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        <div className="bg-bg px-5 py-5">
          <p className="eyebrow flex items-center gap-2">
            <IconPin className="h-3.5 w-3.5" />
            Location
          </p>
          <p className="mt-2.5 text-[0.9625rem] font-medium text-fg">
            {profile.location}
          </p>
          <p className="mt-1 font-mono text-[0.85rem] text-subtle">
            {time} local
          </p>
        </div>

        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group bg-bg px-5 py-5 transition-colors duration-300 hover:bg-elev"
          >
            <p className="eyebrow flex items-center justify-between">
              {social.label}
              <IconArrowUpRight className="h-3.5 w-3.5 text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </p>
            <p className="mt-2.5 text-[0.9625rem] font-medium text-fg">
              @{social.handle}
            </p>
          </a>
        ))}
      </Reveal>
    </WrapperContainer>
  );
};

export default Contact;
