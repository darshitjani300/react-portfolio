import { motion, useReducedMotion } from "framer-motion";
import { profile, socials } from "../data/site";
import useLocalTime from "../hooks/useLocalTime";
import scrollToSection from "../helper/Scroller";
import Magnetic from "../ui/Magnetic";
import RotatingBadge from "../ui/RotatingBadge";
import WrapperContainer from "../utils/WrapperContainer";

const EASE = [0.16, 1, 0.3, 1];

const HEADLINE = [
  [{ text: "Building" }, { text: "digital" }],
  [{ text: "products" }, { text: "that" }, { text: "feel" }],
  [{ text: "effortless.", serif: true }],
];

const Hero = () => {
  const time = useLocalTime(profile.timezone);
  const reduceMotion = useReducedMotion();

  let wordIndex = -1;

  return (
    <WrapperContainer
      id="home"
      /* Height is capped so a tall display doesn't stretch the hero and dump
         the leftover under the content. No bottom padding either: the gap to
         About is About's own section-y, same as every other boundary. */
      classes="relative flex min-h-[min(100svh,52rem)] flex-col justify-center pt-24 md:pt-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-lines radial-fade absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 xl:col-span-7">
          <h1 className="sr-only">
            {profile.name} — {profile.role} in {profile.location}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-wrap items-center gap-3"
          >
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elev/60 px-3 py-1.5 font-mono text-[0.8rem] uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="pulse-ring absolute inset-0 rounded-full bg-emerald-500" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Available for work
              </span>
            )}
            <span className="eyebrow">
              {profile.currentRole}
              <span className="hidden sm:inline">
                <span className="px-2 text-line-strong">/</span>
                {profile.location} — {time}
              </span>
            </span>
          </motion.div>

          <p className="display mt-6 text-fg">
            {HEADLINE.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden pb-[0.08em]">
                {line.map((word) => {
                  wordIndex += 1;
                  return (
                    <motion.span
                      key={word.text}
                      className={`inline-block ${
                        word.serif ? "serif-accent text-accent pr-2" : "pr-[0.26em]"
                      }`}
                      initial={
                        reduceMotion ? { opacity: 0 } : { y: "110%", opacity: 0 }
                      }
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.1 + wordIndex * 0.06,
                        ease: EASE,
                      }}
                    >
                      {word.text}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="mt-6 max-w-xl text-[1.0425rem] leading-relaxed text-muted md:text-[1.1125rem]"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.68, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic className="inline-block">
              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className="group inline-flex items-center gap-2.5 rounded-full bg-fg px-5 py-3 text-[0.9425rem] font-medium text-bg transition-colors duration-300"
              >
                View work
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Magnetic>

            <Magnetic className="inline-block">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-[0.9425rem] font-medium text-fg transition-colors duration-300 hover:bg-accent-soft"
              >
                Start a project
              </button>
            </Magnetic>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2"
          >
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline font-mono text-[0.8rem] uppercase tracking-[0.16em] text-subtle transition-colors duration-300 hover:text-fg"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="relative mx-auto w-full max-w-[340px] lg:col-span-5 lg:ml-auto lg:mr-0 lg:max-w-[370px]"
        >
          <div className="group relative overflow-hidden rounded-[28px] border border-line bg-elev shadow-float">
            <img
              src="/photo.jpg"
              alt={`${profile.name}, full stack developer`}
              width="680"
              height="820"
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-center transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] md:grayscale md:group-hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-20">
              <div>
                <p className="font-mono text-[0.8rem] uppercase tracking-[0.18em] text-white/75">
                  {profile.role}
                </p>
                <p className="mt-1 text-[1.1125rem] font-semibold tracking-tight text-white">
                  {profile.name}
                </p>
              </div>
            </div>
          </div>

          <RotatingBadge className="absolute -right-7 -top-7 hidden md:grid" />
        </motion.div>
      </div>
    </WrapperContainer>
  );
};

export default Hero;
