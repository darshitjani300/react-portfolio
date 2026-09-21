import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { navLinks, profile } from "../data/site";
import useActiveSection from "../hooks/useActiveSection";
import scrollToSection from "../helper/Scroller";
import SoundToggle from "../ui/SoundToggle";
import ThemeToggle from "../ui/ThemeToggle";

const SECTION_IDS = navLinks.map((link) => link.id);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { scrollY, scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 12));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="h-px origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-6 md:h-16 md:px-10 lg:px-16 xl:px-24">
          {/* A monogram, not a status dot — the pulsing dot that used to sit
              here borrowed the hero badge's "available for work" idiom and
              read as a stray notification.

              The accessible name is built from the visible text rather than
              an aria-label, because a label that omits the visible
              "Darshit.dev" breaks voice control (WCAG 2.5.3, Label in Name):
              "click Darshit dev" would match nothing. The monogram is hidden
              as decoration and the purpose is appended for screen readers. */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2.5"
          >
            <span
              aria-hidden="true"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] border border-line bg-elev font-mono text-[0.8rem] font-medium leading-none text-fg transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg"
            >
              DJ
            </span>
            <span className="text-[1.0125rem] font-semibold tracking-tight text-fg">
              {profile.handle}
            </span>
            <span className="sr-only"> — back to top</span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className={`relative rounded-full px-4 py-2 text-[0.9125rem] font-medium transition-colors duration-300 ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-accent-soft"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <SoundToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="hidden rounded-full bg-fg px-4 py-2 text-[0.8625rem] font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5 lg:block"
            >
              Let's talk
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
