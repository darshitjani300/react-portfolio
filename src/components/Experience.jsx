import { education, experience, profile } from "../data/site";
import { IconDownload } from "../ui/icons";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import WrapperContainer from "../utils/WrapperContainer";

const Experience = () => (
  <WrapperContainer id="experience" classes="section-y">
    <SectionHeader
      index="02"
      label="Experience"
      title={
        <>
          Where I've built{" "}
          <span className="serif-accent text-accent">and shipped</span>.
        </>
      }
      aside={`${profile.experience} of production work across three companies in Ahmedabad.`}
    />

    <ol className="header-gap">
      {experience.map((job, index) => (
        <Reveal
          as="li"
          key={job.company}
          delay={index * 0.06}
          className="grid gap-5 border-t border-line py-8 lg:grid-cols-12 lg:gap-12 lg:py-10"
        >
          <div className="lg:col-span-4">
            <p className="eyebrow">{job.period}</p>
            <h3 className="mt-3 text-[1.3rem] font-semibold leading-tight tracking-tight text-fg md:text-[1.45rem]">
              {job.role}
            </h3>
            <p className="mt-1.5 text-[0.9825rem] text-muted">{job.company}</p>
            <p className="mt-0.5 text-[0.9rem] text-subtle">{job.location}</p>
          </div>

          <ul className="flex flex-col gap-2.5 lg:col-span-8">
            {job.points.map((point) => (
              <li
                key={point}
                className="relative pl-5 text-[0.9825rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
              >
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>

    <Reveal className="border-t border-line pt-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="eyebrow">Education</p>
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-2 text-[0.9425rem] font-medium text-fg transition-colors duration-300 hover:text-accent"
        >
          <IconDownload className="h-4 w-4" />
          <span className="link-underline">Download resume (PDF)</span>
        </a>
      </div>

      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="bg-bg p-6 lg:p-7">
            <p className="eyebrow">{item.period}</p>
            <h3 className="mt-3 text-[1.1rem] font-semibold tracking-tight text-fg">
              {item.degree}
            </h3>
            <p className="mt-1 text-[0.9625rem] text-muted">{item.school}</p>
          </div>
        ))}
      </div>
    </Reveal>
  </WrapperContainer>
);

export default Experience;
