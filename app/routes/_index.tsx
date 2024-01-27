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
    <div className="flex flex-col gap-1 justify-center items-center text-center lg:h-screen p-6">
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
        <a href="/portrait">portrait & stack</a>
      </u>
      <u>
        <a href="/projects">projects</a>
      </u>
      <br />
      <ContactIcons />
    </div>
  );
}
