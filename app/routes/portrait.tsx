import ContactIcons from "~/components/contactIcons";
import { calculateAge } from "~/utils";

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

export default function Portrait() {
  const age = calculateAge();

  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:text-center p-6">
      {/* key points */}
      <div className="w-full">{"/ / "}Hannes Schaletzky</div>
      <div className="w-full">
        {"> "}2018 B.Sc. business informatics <mark>university</mark> graduate
      </div>
      <div className="w-full">
        {"> "}German, {age} years old
      </div>
      <div className="w-full">
        {"> "}former coding camp <mark>teacher</mark>
      </div>
      {/* image */}
      <div className="mt-8 mb-8 w-44 h-44">
        <img
          className="rounded-full w-full h-full object-cover"
          src="/hannes.png"
          alt="hannes"
        />
      </div>
      {/* values */}
      <div className="w-full text-center">
        core <mark>values</mark>
      </div>
      <div>{"> "}focus on impact</div>
      <div>{"> "}take ownership</div>
      <div>{"> "}open by default</div>
      <br />
      {/* believes */}
      <div className="w-full text-center">
        guiding <mark>beliefs</mark>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <div>&quot;honest communication is the best motivation&quot;</div>
        <div>
          &quot;regularly switching contexts heavily decreases
          productivity&quot;
        </div>
        <div>&quot;ad-hoc meetings are the most effective ones&quot;</div>
        <div>
          &quot;project stagnation will not be resolved by following the agile
          approach more strictly&quot;
        </div>
        <div>
          &quot;written async project/company updates are underrated&quot;
        </div>
      </div>
      <br />
      {/* things */}
      <div className="w-full text-center">
        <mark>things</mark> I use...
      </div>
      {/* frequently */}
      <div className="flex justify-center items-start gap-4 flex-wrap lg:flex-nowrap w-full">
        <div className="lg:mt-6 mt-2 flex flex-col justify-start items-center gap-1 w-full">
          <div className="mb-2">{"> "}frequently</div>
          {stack.frequently.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        {/* sometimes */}
        <div className="lg:mt-6 mt-2 flex flex-col justify-start items-center gap-1 w-full">
          <div className="mb-2">{"> "}sometimes</div>
          {stack.sometimes.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        {/* rarely */}
        <div className="lg:mt-6 mt-2 flex flex-col justify-start items-center gap-1 w-full">
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
        Back
      </a>
    </div>
  );
}
