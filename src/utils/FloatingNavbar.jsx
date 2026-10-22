import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "../data/site";
import useActiveSection from "../hooks/useActiveSection";
import scrollToSection from "../helper/Scroller";
import { IconBriefcase, IconGrid, IconHome, IconLayers, IconMail, IconUser } from "../ui/icons";

const ICONS = {
  home: IconHome,
  about: IconUser,
  experience: IconBriefcase,
  work: IconGrid,
  services: IconLayers,
  contact: IconMail,
};

const SECTION_IDS = navLinks.map((link) => link.id);

const FloatingNavbar = () => {
  const active = useActiveSection(SECTION_IDS);
  const [visible, setVisible] = useState(
    () => window.scrollY > window.innerHeight * 0.5
  );
  const { scrollY } = useScroll();

  /* Hidden on the first screen: on shorter phones the dock sat on top of the
     hero's "View work" button. Half a viewport of scroll is enough to carry
     that button clear of the dock on any phone taller than ~520px. */
  useMotionValueEvent(scrollY, "change", (value) =>
    setVisible(value > window.innerHeight * 0.5)
  );

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-5 z-50 flex justify-center px-6 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <nav className="flex items-center gap-0.5 rounded-full border border-line bg-bg/80 p-1.5 shadow-float backdrop-blur-xl">
        {navLinks.map((link) => {
          const Icon = ICONS[link.id];
          const isActive = active === link.id;

          return (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              aria-label={link.label}
              aria-current={isActive ? "true" : undefined}
              className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                isActive ? "text-accent-fg" : "text-muted"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="dock-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className="relative h-[19px] w-[19px]" />
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingNavbar;
