/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { MetaFunction } from "@remix-run/node";

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
    <div className="flex flex-col gap-1 w-screen h-screen justify-center items-center text-center font-roboto text-xl">
      <div>I am Hannes </div>
      <div>I do software engineering in</div>
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
      <div>I am a generalist</div>
      <div>...with +{experience} years of experience</div>
      <div>...and open to freelance opportunities</div>
      <br />

      <u>
        <a href="/projects">past projects</a>
      </u>

      <br />
      <div className="flex gap-4">
        <a
          href="https://github.com/hannesschaletzky"
          target="_blank"
          rel="noreferrer"
          title="Icon from https://www.flaticon.com/free-icons/github"
        >
          <img src="/github.png" alt="github" width={50} height={50} />
        </a>
        <a
          href="https://linkedin.com/in/hannesschaletzky/"
          target="_blank"
          rel="noreferrer"
          title="Icon from https://www.flaticon.com/free-icons/linkedin"
        >
          <img src="/linkedin.png" alt="linkedin" width={50} height={50} />
        </a>
      </div>
      {/* Background diagonal rectangle */}
      <div
        className="fixed
                  top-1/3
                  -left-32
                  w-14/7
                  h-1/4
                  transform
                  -rotate-30
                  bg-gray-200
                  opacity-30
                  -z-10"
      ></div>
    </div>
  );
}
