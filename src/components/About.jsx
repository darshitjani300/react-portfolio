import { profile, stack } from "../data/site";
import useLocalTime from "../hooks/useLocalTime";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import StackDiagram from "../ui/StackDiagram";
import WrapperContainer from "../utils/WrapperContainer";

const About = () => {
  const time = useLocalTime(profile.timezone);

  // With the experience section gone, this strip carries the whole career
  // signal a recruiter scans for — four cells, no scrolling.
  const facts = [
    { label: "Based in", value: profile.location, note: `${time} local` },
    { label: "Experience", value: profile.experience },
    { label: "Currently", value: profile.currentRole },
    { label: "Previously", value: profile.previously },
  ];

  return (
    <WrapperContainer id="about" classes="section-y">
      <SectionHeader
        index="01"
        label="About"
        title={
          <>
            A developer who cares about{" "}
            <span className="serif-accent text-accent">the details</span>.
          </>
        }
        aside="Open to freelance projects and full-time roles, remote or in Ahmedabad."
      />

      <div className="header-gap grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5" y={32}>
          <StackDiagram />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <p className="text-[1.1625rem] leading-snug tracking-tight text-fg md:text-[1.3125rem]">
              {profile.bio[0]}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 max-w-2xl text-[1.0125rem] leading-relaxed text-muted">
              {profile.bio[1]}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-7 border-t border-line pt-6">
            <p className="eyebrow">Toolkit</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-line px-3.5 py-1.5 text-[0.85rem] font-medium text-muted transition-colors duration-300 hover:border-line-strong hover:bg-accent-soft hover:text-fg"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Full-width strip: keeps the two columns balanced and puts the facts a
          recruiter scans for on one line. */}
      <Reveal
        as="dl"
        delay={0.1}
        className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {facts.map((fact) => (
          <div key={fact.label} className="bg-bg px-5 py-4">
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-1.5 text-[0.9625rem] font-medium leading-snug tracking-tight text-fg">
              {fact.value}
              {fact.note ? (
                <span className="mt-1 block font-mono text-[0.85rem] font-normal tracking-normal text-subtle">
                  {fact.note}
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </Reveal>
    </WrapperContainer>
  );
};

export default About;
