import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import {
  capabilities,
  education,
  experience,
  profile,
  sideProjects,
  site,
  skills,
  socials,
  stack,
  work,
} from "./src/data/site.js";

const abs = (path) => new URL(path, site.url).href;
const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/**
 * The page is client-rendered, so a crawler that does not run JavaScript —
 * which includes most AI answer-engine crawlers — would otherwise receive an
 * empty <div id="root">. These two blocks put the same facts in the static
 * HTML: a schema.org graph for machines, and a plain-HTML fallback that a
 * person with JavaScript disabled can actually read.
 */
function buildGraph() {
  const personId = `${site.url}/#person`;
  const siteId = `${site.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: ["Darshit", profile.handle],
        givenName: "Darshit",
        familyName: "Jani",
        jobTitle: profile.role,
        description: profile.description,
        url: site.url,
        image: abs(site.ogImage),
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: profile.locality,
          addressRegion: profile.region,
          addressCountry: profile.country,
        },
        homeLocation: {
          "@type": "Place",
          name: profile.location,
          geo: {
            "@type": "GeoCoordinates",
            latitude: profile.geo.lat,
            longitude: profile.geo.lng,
          },
        },
        worksFor: { "@type": "Organization", name: experience[0].company },
        alumniOf: education.map((item) => ({
          "@type": "CollegeOrUniversity",
          name: item.school,
        })),
        hasOccupation: {
          "@type": "Occupation",
          name: profile.role,
          occupationLocation: { "@type": "City", name: profile.locality },
          skills: stack.join(", "),
        },
        knowsAbout: [
          ...stack,
          "Full Stack Development",
          "MERN stack",
          "Real-time applications",
          "Multi-tenant architecture",
          "LLM integration",
        ],
        makesOffer: capabilities.map((capability) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: capability.title,
            description: capability.body,
            provider: { "@id": personId },
            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "Place", name: "Remote, worldwide" },
            ],
          },
        })),
        sameAs: socials.map((social) => social.href),
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: site.url,
        name: `${profile.name} — ${profile.role}`,
        description: profile.intro,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: `${profile.name} — ${profile.role} in ${profile.location}`,
        isPartOf: { "@id": siteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: abs(site.ogImage),
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/#work`,
        name: `Projects by ${profile.name}`,
        itemListElement: [...work, ...sideProjects].map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            description: project.description,
            author: { "@id": personId },
            ...(project.company
              ? { producer: { "@type": "Organization", name: project.company } }
              : {}),
            ...(project.link ? { url: project.link } : {}),
            ...(project.image ? { image: abs(project.image) } : {}),
            keywords: project.tech.join(", "),
          },
        })),
      },
    ],
  };
}

function buildFallback() {
  const list = (items) =>
    items.map((item) => `<li>${esc(item)}</li>`).join("");

  return `
<div style="max-width:52rem;margin:0 auto;padding:2rem 1.25rem;font-family:system-ui,sans-serif;line-height:1.6">
  <h1>${esc(profile.name)} — ${esc(profile.role)}</h1>
  <p>${esc(profile.headline)}</p>
  <p>${esc(profile.description)}</p>
  <p>${esc(profile.bio[0])}</p>
  <p>${esc(profile.bio[1])}</p>
  <p><a href="${esc(profile.resume)}">Download resume (PDF)</a></p>

  <h2>Experience</h2>
  ${experience
    .map(
      (job) =>
        `<h3>${esc(job.role)}, ${esc(job.company)}, ${esc(job.location)} · ${esc(job.period)}</h3><ul>${list(job.points)}</ul>`
    )
    .join("")}

  <h2>Services</h2>
  <dl>
    ${capabilities
      .map(
        (capability) =>
          `<dt><strong>${esc(capability.title)}</strong></dt><dd>${esc(capability.body)}</dd>`
      )
      .join("")}
  </dl>

  <h2>Selected work</h2>
  <ul>
    ${work
      .map(
        (project) =>
          `<li>${project.link ? `<a href="${esc(project.link)}">${esc(project.title)}</a>` : esc(project.title)} (built at ${esc(project.company)}) — ${esc(project.description)} ${esc(project.points.join(" "))}</li>`
      )
      .join("")}
  </ul>

  <h2>Side projects</h2>
  <ul>
    ${sideProjects
      .map(
        (project) =>
          `<li><a href="${esc(project.link)}">${esc(project.title)}</a> (${esc(project.period)}) — ${esc(project.description)} Built with ${esc(project.tech.join(", "))}.</li>`
      )
      .join("")}
  </ul>

  <h2>Skills</h2>
  <ul>
    ${skills
      .map(
        (skill) =>
          `<li><strong>${esc(skill.group)}:</strong> ${esc(skill.items.join(", "))}${skill.learning ? `; learning ${esc(skill.learning)}` : ""}</li>`
      )
      .join("")}
  </ul>

  <h2>Education</h2>
  <ul>
    ${education
      .map(
        (item) =>
          `<li>${esc(item.degree)}, ${esc(item.school)} · ${esc(item.period)}</li>`
      )
      .join("")}
  </ul>

  <h2>Contact</h2>
  <p>Email: <a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a><br />
     Location: ${esc(profile.location)}<br />
     ${esc(profile.availability)}.</p>
  <ul>
    ${socials
      .map(
        (social) =>
          `<li><a href="${esc(social.href)}" rel="me">${esc(social.label)}: @${esc(social.handle)}</a></li>`
      )
      .join("")}
  </ul>
</div>`.trim();
}


/**
 * The whole stylesheet is ~8 KB gzipped, and as a separate <link> it was the
 * last render-blocking request on the page — a full round trip before the
 * first paint. At this size it is cheaper to inline it into the HTML than to
 * fetch it, so this drops the <link> and folds the CSS into a <style> tag.
 *
 * If the stylesheet ever grows past ~20 KB gzipped, go back to the external
 * file (it is cacheable across navigations; inlined CSS is not).
 */
function inlineCss() {
  return {
    name: "inline-css",
    apply: "build",
    enforce: "post",
    generateBundle(_options, bundle) {
      const entry = Object.values(bundle).find(
        (chunk) => chunk.type === "asset" && chunk.fileName.endsWith(".html")
      );
      if (!entry) return;

      let html = entry.source;

      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type !== "asset" || !fileName.endsWith(".css")) continue;

        const link = new RegExp(
          `<link[^>]+href="[^"]*${fileName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`
        );
        if (!link.test(html)) continue;

        html = html.replace(link, `<style>${asset.source}</style>`);
        delete bundle[fileName];
      }

      entry.source = html;
    },
  };
}

function seo() {
  return {
    name: "inject-seo",
    transformIndexHtml() {
      return [
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          // Escaping "<" keeps a stray "</script>" in any future copy from
          // terminating the block early.
          children: JSON.stringify(buildGraph()).replace(/</g, "\\u003c"),
          injectTo: "head",
        },
        { tag: "noscript", children: buildFallback(), injectTo: "body" },
      ];
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seo(), inlineCss()],
});
