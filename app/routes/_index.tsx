import type { MetaFunction } from "@remix-run/node";
import ContactIcons from "~/components/contactIcons";

export const meta: MetaFunction = () => {
  return [
    { title: "Hannes Schaletzky | Integration & Cloud Engineer" },
    {
      name: "description",
      content:
        "Berlin-based freelance integration & cloud engineer with 7+ years of experience – backend and integration solutions with Node.js/TypeScript, AWS and on-prem.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://hschaletzky.com" },
    {
      property: "og:title",
      content: "Hannes Schaletzky | Integration & Cloud Engineer",
    },
    {
      property: "og:description",
      content:
        "Berlin-based freelance integration & cloud engineer – backend and integration solutions with Node.js/TypeScript and AWS.",
    },
    { property: "og:image", content: "https://hschaletzky.com/hannes.jpg" },
    { name: "twitter:card", content: "summary" },
  ];
};

export default function Index() {
  const experience = new Date().getFullYear() - 2019;

  return (
    <div className="flex flex-col gap-1 justify-center items-center text-center p-6">
      {/* image */}
      <div className="my-4 w-32 h-32">
        <img
          className="rounded-full w-full h-full object-cover"
          src="/hannes.jpg"
          alt="Hannes Schaletzky"
        />
      </div>

      {/* hero */}
      <div>👋 I am Hannes</div>
      <div>
        freelance <mark>integration & cloud</mark> engineer
      </div>
      <div>Berlin 🇩🇪 · {experience}+ years of experience</div>
      <br />
      <div>backend & integration solutions</div>
      <div>Node.js/TypeScript · AWS · on-prem</div>
      <div>reliable software, from idea to production</div>
      <br />

      {/* proof */}
      <div>{"> "}built a data integration platform for 7 customers</div>
      <div>{"> "}migrated a web platform from Vercel to AWS</div>
      <div>{"> "}built a test suite for a security-critical system</div>
      <div>{"> "}formerly at DigitalService des Bundes & KPMG</div>
      <div>
        {"> "}more client work on{" "}
        <a
          href="https://linkedin.com/in/hannesschaletzky/"
          target="_blank"
          rel="noreferrer"
        >
          <u>LinkedIn</u>
        </a>
      </div>
      <br />

      {/* navigation */}
      <div className="flex flex-wrap justify-center gap-x-2">
        <a href="/portrait">
          <u>portrait</u>
        </a>
        ·
        <a href="/stack">
          <u>stack</u>
        </a>
        ·
        <a href="/side-projects">
          <u>side projects</u>
        </a>
        ·
        <a href="/contact">
          <u>contact</u>
        </a>
      </div>
      <ContactIcons />
      <a
        href="/Impressum_HannesSchaletzky.pdf"
        rel="noopener noreferrer"
        target="_blank"
        className="text-sm"
      >
        <div>Imprint</div>
      </a>
      <a
        href="/DataPrivacy_HannesSchaletzky.pdf"
        rel="noopener noreferrer"
        target="_blank"
        className="text-sm"
      >
        <div>Data Privacy Policy</div>
      </a>
    </div>
  );
}
