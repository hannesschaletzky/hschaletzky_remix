import ContactIcons from "~/components/contactIcons";

const stack = {
  frequently: [
    "Node",
    "TypeScript",
    "JavaScript",
    "Remix",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "PostgreSQL",
    "Playwright",
    "JEST",
    "Vercel",
    "DO Droplets",
    "GH Actions",
    "git",
    "terminal",
    "VSCode",
    "MacBook",
    "Shortcuts 🤗",
  ],
  sometimes: [
    "Kubernetes",
    "Prometheus",
    "Kotlin",
    "Java",
    "SpringBoot",
    "Redis",
    "NextJS",
    "Ruby",
    "C#.NET",
    "VBA",
    "SQL",
  ],
  rarely: ["GO", "Ruby on Rails", "Strapi", "Wordpress"],
};

export default function Stack() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:text-center p-6">
      {/* things */}
      <div className="w-full text-center">things I use...</div>
      {/* frequently */}
      <div className="flex justify-center items-start gap-4 flex-wrap lg:flex-nowrap w-full">
        <div className="lg:mt-6 mt-2 flex flex-col justify-start items-center gap-1 w-full">
          <div className="mb-2">
            {"> "}
            <mark>frequently</mark>
          </div>
          {stack.frequently.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        {/* sometimes */}
        <div className="lg:mt-6 mt-2 flex flex-col justify-start items-center gap-1 w-full">
          <div className="mb-2">
            {"> "}
            <mark>sometimes</mark>
          </div>
          {stack.sometimes.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        {/* rarely */}
        <div className="lg:mt-6 mt-2 flex flex-col justify-start items-center gap-1 w-full">
          <div className="mb-2">
            {"> "}
            <mark>rarely</mark>
          </div>
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
        Back
      </a>
    </div>
  );
}
