/** Breathing room between the fixed header and the section it scrolls to. */
const GAP = 20;

/**
 * Scrolls a section into view so its *content* sits just under the fixed
 * header.
 *
 * `scrollIntoView` aligns the element's box, but each section carries its own
 * top padding inside that box — so aligning the box leaves the padding stacked
 * beneath the header as dead space. Measure the header and that padding
 * instead of assuming either.
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const paddingTop = parseFloat(getComputedStyle(element).paddingTop) || 0;

  const contentTop =
    element.getBoundingClientRect().top + window.scrollY + paddingTop;
  const target = contentTop - headerHeight - GAP;

  // Near the top, go all the way — the hero's padding is deliberate space,
  // not something to scroll past.
  const top = target < 48 ? 0 : target;

  // An explicit behavior bypasses the stylesheet's reduced-motion override,
  // so honour the preference here too.
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
};

export default scrollToSection;
