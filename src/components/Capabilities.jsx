import { capabilities } from "../data/site";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import WrapperContainer from "../utils/WrapperContainer";

const Capabilities = () => (
  <WrapperContainer id="services" classes="section-y">
    <SectionHeader
      index="03"
      label="Services"
      title={
        <>
          From the interface down to{" "}
          <span className="serif-accent text-accent">the database</span>.
        </>
      }
    />

    <div className="header-gap grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
      {capabilities.map((item, index) => (
        <Reveal
          key={item.title}
          delay={index * 0.08}
          className="flex h-full flex-col justify-between gap-8 bg-bg p-7 transition-colors duration-500 hover:bg-elev lg:p-8"
        >
          <div>
            <span className="font-mono text-[0.8rem] tracking-[0.16em] text-accent">
              {item.index}
            </span>
            <h3 className="mt-5 text-[1.15rem] font-semibold tracking-tight text-fg">
              {item.title}
            </h3>
            <p className="mt-3 text-[0.9825rem] leading-relaxed text-muted">
              {item.body}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-3 gap-y-2 border-t border-line pt-5">
            {item.tools.map((tool) => (
              <li
                key={tool}
                className="font-mono text-[0.8rem] uppercase tracking-[0.12em] text-subtle"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </WrapperContainer>
);

export default Capabilities;
