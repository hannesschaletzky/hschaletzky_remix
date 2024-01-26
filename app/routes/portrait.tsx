import ContactIcons from "~/components/contactIcons";
import { calculateAge } from "~/utils";

export default function Portrait() {
  const age = calculateAge();

  const stack = {
    frequently: [
      "Node",
      "TypeScript",
      "JavaScript",
      "Remix",
      "React",
      "Tailwind",
      "PostgreSQL",
      "Playwright",
      "JEST",
      "Vercel",
      "DO Droplets",
      "GH Actions",
      "Git",
      "Terminal",
      "VS Code",
      "My Macbook",
      "Shortcuts 😉",
    ],
    sometimes: [
      "Kubernetes",
      "Pipelines",
      "Kotlin",
      "Java",
      "SpringBoot",
      "Redis",
      "NextJS",
      "Ruby",
      "C#.NET",
      "VBA",
      "Prometheus",
    ],
    rarely: [
      "GO",
      "Heroku",
      "AWS",
      "Ruby on Rails",
      "Strapi",
      "Wordpress",
      "SQL Server",
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:text-center p-6">
      {/* key points */}
      <div className="w-full">{"/ / "}Hannes Schaletzky</div>
      <div className="w-full">
        {"> "}B.Sc. Business Informatics <mark>university</mark> graduate 2018
      </div>
      <div className="w-full">
        {"> "}German, {age} years old
      </div>
      <div className="w-full">
        {"> "}Former coding camp <mark>teacher</mark>
      </div>
      {/* image */}
      <div className="mt-8 mb-8 w-44 h-44">
        <img
          className="rounded-full w-full h-full object-cover"
          src="/hannes.png"
          alt="hannes"
        />
      </div>

      <div>Things I use...</div>
      {/* frequently */}
      <div className="flex justify-center items-start gap-4 flex-wrap lg:flex-nowrap w-full">
        <div className="mt-6 flex flex-col justify-start items-center gap-1 w-full">
          <div className="mb-2">{"> "}frequently</div>
          {stack.frequently.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        {/* sometimes */}
        <div className="mt-6 flex flex-col justify-start items-center gap-1 w-full">
          <div className="mb-2">{"> "}sometimes</div>
          {stack.sometimes.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        {/* rarely */}
        <div className="mt-6 flex flex-col justify-start items-center gap-1 w-full">
          <div className="mb-2">{"> "}rarely</div>
          {stack.rarely.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>

      <ContactIcons />
      <a
        href="/"
        className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Return
      </a>
    </div>
  );
}
