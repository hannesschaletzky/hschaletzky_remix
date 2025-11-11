import type { MetaFunction } from "@remix-run/node";
import ContactIcons from "~/components/contactIcons";

export const meta: MetaFunction = () => {
  return [
    { title: "Hannes Schaletzky Software Engineer" },
    {
      name: "Hannes Schaletzky Freelance Software Engineer",
      content: "Welcome to my website",
    },
  ];
};

export default function Index() {
  const experience = new Date().getFullYear() - 2019;

  return (
    <div className="flex flex-col gap-1 justify-center items-center text-center  p-6">
      {/* image */}
      <div className="my-4 w-32 h-32">
        <img
          rel="preload"
          className="rounded-full w-full h-full object-cover"
          src="/hannes2.png"
          alt="hannes"
        />
      </div>

      <div>👋 I am Hannes</div>
      <div>
        I do <mark>software</mark> engineering in
      </div>
      <br />
      <div className="">
        {"> "}full stack <br />
        {"> "}backend <br />
        {"> "}frontend <br />
        {"> "}databases <br />
        {"> "}infrastructure <br />
        {"> "}process automation <br />
        {"> "}data analytics <br />
      </div>
      <br />

      <div>
        I am a <mark>generalist</mark>
      </div>
      <div>...with +{experience} years of prof. experience</div>
      <div>
        ...open to <mark>freelance</mark> opportunities
      </div>
      <br />
      <u>
        <a href="/portrait">portrait</a>
      </u>
      <u>
        <a href="/stack">stack</a>
      </u>
      <u>
        <a href="/projects">projects</a>
      </u>
      <br />
      <ContactIcons />
      <a
        href="/Impressum_HannesSchaletzky.pdf"
        rel="noopener noreferrer"
        target="_blank"
        className="text-sm"
      >
        <div>Imprint</div>
      </a>
    </div>
  );
}
