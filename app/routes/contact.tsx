import type { MetaFunction } from "@remix-run/node";
import ContactIcons from "~/components/contactIcons";
import Section from "~/components/section";

export const meta: MetaFunction = () => [
  { title: "Contact | Hannes Schaletzky" },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-10 p-6 text-center max-w-2xl mx-auto">
      <div className="mt-10">
        let&apos;s <mark>talk</mark>...
      </div>

      <Section title="mail">
        <a href="mailto:info@hschaletzky.com">
          <u>info@hschaletzky.com</u>
        </a>
      </Section>

      <Section title="phone">
        <a href="tel:+4917632267236">
          <u>+49 176 32267236</u>
        </a>
      </Section>

      <Section title="location">
        <div>Berlin · on-site & remote</div>
      </Section>

      <Section title="CV">
        <div>
          happy to send it on request – just{" "}
          <a href="mailto:info@hschaletzky.com?subject=CV%20request">
            <u>drop me a mail</u>
          </a>
        </div>
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
