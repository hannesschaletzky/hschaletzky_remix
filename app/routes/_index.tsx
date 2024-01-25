import type { MetaFunction } from "@remix-run/node";
import ContactIcons from "~/components/contactIcons";

export const meta: MetaFunction = () => {
  return [
    { title: "Hannes Schaletzky Software Engineer" },
    {
      name: "Hannes Schaletzky Software Engineer",
      content: "Welcome to my website",
    },
  ];
};

export default function Index() {
  const experience = new Date().getFullYear() - 2019;

  return (
    <div className="flex flex-col gap-1 justify-center items-center text-center lg:h-screen">
      <div>I am Hannes</div>
      <div>
        I do <b>software</b> engineering in
      </div>
      <br />
      <div className="">
        ...full stack <br />
        ...backend <br />
        ...frontend <br />
        ...databases <br />
        ...infrastructure <br />
        ...process automation <br />
        ...data analytics <br />
      </div>
      <br />
      <div>
        I am a <b>generalist</b>
      </div>
      <div>...with +{experience} years of experience</div>
      <div>...and open to freelance opportunities</div>
      <br />

      <u>
        <a href="/projects">past projects</a>
      </u>
      <u>
        <a href="/portrait">portrait & stack</a>
      </u>
      <ContactIcons />
    </div>
  );
}
