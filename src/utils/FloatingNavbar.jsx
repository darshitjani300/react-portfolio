import { motion } from "framer-motion";
import { navLinks } from "../data/site";
import useActiveSection from "../hooks/useActiveSection";
import scrollToSection from "../helper/Scroller";
import { IconGrid, IconHome, IconLayers, IconMail, IconUser } from "../ui/icons";

const ICONS = {
  home: IconHome,
  about: IconUser,
  work: IconGrid,
  services: IconLayers,
  contact: IconMail,
};

const SECTION_IDS = navLinks.map((link) => link.id);

const FloatingNavbar = () => {
  const active = useActiveSection(SECTION_IDS);

  return (
    <div className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-6 lg:hidden">
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
