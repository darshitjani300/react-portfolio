import { profile } from "../data/site";
import { IconArrowUp } from "../ui/icons";
import scrollToSection from "../helper/Scroller";
import WrapperContainer from "../utils/WrapperContainer";

const Footer = () => (
  <footer className="border-t border-line pb-28 pt-10 lg:pb-10">
    <WrapperContainer
      isSection={false}
      classes="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"
    >
      <p className="font-mono text-[0.8rem] uppercase tracking-[0.14em] text-subtle">
        © {new Date().getFullYear()} {profile.name}
      </p>

      <p className="font-mono text-[0.8rem] uppercase tracking-[0.14em] text-subtle">
        Built with React, Tailwind &amp; a stubborn cat
      </p>

      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className="group inline-flex items-center gap-2 font-mono text-[0.8rem] uppercase tracking-[0.14em] text-subtle transition-colors duration-300 hover:text-fg"
      >
        Back to top
        <IconArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </WrapperContainer>
  </footer>
);

export default Footer;
