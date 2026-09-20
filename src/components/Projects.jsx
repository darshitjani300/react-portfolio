import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clientWork, projects } from "../data/site";
import { IconArrowUpRight, IconGithub } from "../ui/icons";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import WrapperContainer from "../utils/WrapperContainer";

const EASE = [0.16, 1, 0.3, 1];
const PREVIEW_COUNT = 2;

const ProjectRow = ({ project, index }) => {
  const flipped = index % 2 === 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group grid items-center gap-7 border-t border-line py-9 lg:grid-cols-12 lg:gap-12 lg:py-11"
    >
      <div
        className={`lg:col-span-7 ${
          flipped ? "lg:order-2 lg:col-start-6" : "lg:order-1"
        }`}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer noopener"
          className="relative block overflow-hidden rounded-2xl border border-line bg-elev shadow-soft"
          aria-label={`Open ${project.title} in a new tab`}
        >
          <img
            src={project.image}
            alt={`${project.title} — ${project.tagline}`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="pointer-events-none absolute bottom-5 right-5 flex translate-y-3 items-center gap-2 rounded-full bg-white/95 px-4 py-2 font-mono text-[0.8rem] uppercase tracking-[0.14em] text-black opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
            Visit site
            <IconArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>

      <div
        className={`lg:col-span-5 ${
          flipped ? "lg:order-1 lg:col-start-1 lg:row-start-1" : "lg:order-2"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[0.8rem] tracking-[0.16em] text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="eyebrow">{project.period}</span>
        </div>

        <h3 className="mt-5 text-[1.6rem] font-semibold leading-tight tracking-tight text-fg md:text-[1.8rem]">
          {project.title}
        </h3>
        <p className="mt-1 serif-accent text-[1.1125rem] text-muted">
          {project.tagline}
        </p>

        <p className="mt-4 text-[0.9825rem] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.8rem] uppercase tracking-[0.1em] text-subtle"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-6">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-[0.9425rem] font-medium text-fg transition-colors duration-300 hover:text-accent"
          >
            <span className="link-underline">Live demo</span>
            <IconArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-[0.9425rem] font-medium text-muted transition-colors duration-300 hover:text-fg"
          >
            <IconGithub className="h-4 w-4" />
            <span className="link-underline">Source</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, PREVIEW_COUNT);
  const hidden = projects.length - PREVIEW_COUNT;

  return (
    <WrapperContainer id="work" classes="section-y">
      <SectionHeader
        index="02"
        label="Selected work"
        title={
          <>
            Things I've designed, built{" "}
            <span className="serif-accent text-accent">and shipped</span>.
          </>
        }
        aside={`${projects.length} projects — each one built end to end, from interface to deployment.`}
      />

      <motion.div layout className="header-gap">
        <AnimatePresence initial={false}>
          {visible.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {hidden > 0 && (
        <Reveal className="flex justify-center border-t border-line pt-8">
          <button
            type="button"
            onClick={() => setShowAll((previous) => !previous)}
            className="group inline-flex items-center gap-3 rounded-full border border-line-strong px-5 py-3 text-[0.9125rem] font-medium text-fg transition-colors duration-300 hover:bg-accent-soft"
          >
            {showAll ? "Show less" : `Show all ${projects.length} projects`}
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 transition-transform duration-500 ${
                showAll ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="m5 12 7 7 7-7" />
            </svg>
          </button>
        </Reveal>
      )}

      <Reveal className="mt-12 border-t border-line pt-7">
        <p className="eyebrow">Client &amp; product work</p>
        <p className="mt-3 max-w-xl text-[1.0125rem] leading-relaxed text-muted">
          Built inside product teams, so there is no public repository — happy to
          walk through the architecture.
        </p>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {clientWork.map((item) => (
            <div key={item.title} className="bg-bg p-6 lg:p-7">
              <h3 className="text-[1.1rem] font-semibold tracking-tight text-fg">
                {item.title}
              </h3>
              <p className="mt-1 serif-accent text-[1.1125rem] text-muted">
                {item.tagline}
              </p>
              <p className="mt-3 text-[0.9625rem] leading-relaxed text-muted">
                {item.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {item.tech.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-[0.8rem] uppercase tracking-[0.12em] text-subtle"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </WrapperContainer>
  );
};

export default Projects;
