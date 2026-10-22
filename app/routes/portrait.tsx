import type { MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import ContactIcons from "~/components/contactIcons";
import Section from "~/components/section";

export const meta: MetaFunction = () => [
  { title: "Portrait | Hannes Schaletzky" },
];

const values = ["focus on impact", "take ownership", "open by default"];

const beliefs = [
  "honest communication is the best motivation",
  "written async project/company updates are underrated",
];

const licenses = [
  {
    title: "beach volleyball coach",
    detail: "B-license",
  },
  {
    title: "ski instructor",
    detail: "Landeslehrer 1",
  },
];

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <u>{children}</u>
    </a>
  );
}

export default function Portrait() {
  return (
    <div className="flex flex-col items-center gap-10 p-6 text-center max-w-2xl mx-auto">
      {/* intro */}
      <div className="flex flex-col items-center gap-1 mt-8">
        <div className="my-4 w-32 h-32">
          <img
            className="rounded-full w-full h-full object-cover"
            src="/hannes.jpg"
            alt="Hannes Schaletzky"
          />
        </div>
        <div>{"/ / "}Hannes Schaletzky</div>
        <div>
          <mark>freelance</mark> software engineer in Berlin since 2024
        </div>
        <div>B.Sc. business informatics, University of Augsburg</div>
        <div>speaks German (native), English (fluent), French (basic)</div>
      </div>

      {/* values */}
      <Section
        title={
          <>
            core <mark>values</mark>
          </>
        }
      >
        {values.map((value) => (
          <div key={value}>
            {"> "}
            {value}
          </div>
        ))}
      </Section>

      {/* beliefs */}
      <Section
        title={
          <>
            guiding <mark>beliefs</mark>
          </>
        }
      >
        {beliefs.map((belief) => (
          <div key={belief}>&quot;{belief}&quot;</div>
        ))}
      </Section>

      {/* licenses */}
      <Section
        title={
          <>
            <mark>coaching</mark> & licenses
          </>
        }
      >
        {licenses.map((license) => (
          <div key={license.title}>
            {"> "}
            {license.title} ({license.detail})
          </div>
        ))}
      </Section>

      {/* social work */}
      <Section
        title={
          <>
            <mark>social</mark> work
          </>
        }
      >
        <div>
          {"> "}website support for the{" "}
          <ExternalLink href="https://freundeskreis-peutinger.de/">
            Freundeskreis Peutinger-Gymnasium Augsburg e. V.
          </ExternalLink>
        </div>
        <div>
          {"> "}founding chairman of the student initiative{" "}
          <ExternalLink href="https://winitiative-augsburg.de/">
            WINitiative
          </ExternalLink>
        </div>
        <div>
          {"> "}
          <ExternalLink href="https://www.erasmusplus.de/">
            Erasmus
          </ExternalLink>{" "}
          tutor for a US student
        </div>
        <div>
          {"> "}
          <ExternalLink href="https://www.joblinge.de/">
            Joblinge
          </ExternalLink>{" "}
          mentor in Berlin
        </div>
      </Section>

      {/* leisure */}
      <Section
        title={
          <>
            leisure <mark>interests</mark>
          </>
        }
      >
        <div>{"> "}beach volleyball, weight training, cycling, skiing</div>
        <div>{"> "}sustainability, self-development, nutrition</div>
        <div>{"> "}private (coding) projects, YouTube 😇</div>
      </Section>

      <div className="flex flex-col items-center gap-2">
        <ContactIcons />
        <a
          href="/"
          className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Back
        </a>
      </div>
    </div>
  );
}
