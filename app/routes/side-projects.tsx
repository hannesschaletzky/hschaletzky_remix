import type { MetaFunction } from "@remix-run/node";
import ContactIcons from "~/components/contactIcons";
import highlightWords from "~/components/highlightWords";
import privateProjects from "~/projects/unpaid.json";
import { calculateMonthsDifference } from "~/utils";

export const meta: MetaFunction = () => [
  { title: "Side Projects | Hannes Schaletzky" },
];

const projects = privateProjects.map((project) => ({
  ...project,
  stack: project.stack.filter((item) => item !== ""),
  duration: calculateMonthsDifference(project.from, project.until),
}));

const firstScreenId = "firstScreen";
const lastScreenId = "lastScreen";

function scrollIntoView(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function ProjectsPage() {
  return (
    <div className="container">
      {/* intro screen */}
      <div
        id={firstScreenId}
        className="tiktok p-6 flex flex-col gap-8 justify-center items-start"
      >
        <div>
          <mark>Swipe</mark> through my <mark>side</mark> projects in a
          TikTok-like feed 📺
        </div>
        <div>{"> "}side projects, built for friends, clubs & myself</div>
        <div className="flex gap-4">
          <button
            className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={() => scrollIntoView("project0")}
          >
            Start ⬇️
          </button>
          <a
            href="/"
            className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Back
          </a>
        </div>
      </div>
      {/* projects */}
      {projects.map((project, i) => (
        <div
          id={`project${i}`}
          className="tiktok p-6 pt-16 flex flex-col gap-4"
          key={project.title}
        >
          <div>
            {"> "}
            {highlightWords(project.title, project.highlight)}
          </div>
          <div>
            @{project.employer}
            <br />
            {project.from} - {project.until}
          </div>
          <div>
            <b>
              {project.duration} {project.duration == 1 ? "month" : "months"}
            </b>
            {" of:"}
            {project.stack.map((item, j) => (
              <div key={`${j}-${item}`}>{item}</div>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            {project.url !== "" && (
              <div>
                {"/ "}
                <u>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    hosted here
                  </a>
                </u>
              </div>
            )}
            {project.repo !== "" && (
              <div>
                {"/ "}
                <u>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    repository
                  </a>
                </u>
              </div>
            )}
          </div>
          {/* navigation */}
          <div className="mt-auto mr-auto text-xl lg:text-2xl">
            <button
              className="py-1 px-2 mr-2"
              onClick={() =>
                scrollIntoView(i == 0 ? firstScreenId : `project${i - 1}`)
              }
            >
              ⬆️
            </button>
            <button
              className="py-1 px-2 mr-2"
              onClick={() =>
                scrollIntoView(
                  i == projects.length - 1 ? lastScreenId : `project${i + 1}`
                )
              }
            >
              ⬇️
            </button>
            <button
              className="py-1 px-2 mr-2"
              onClick={() => scrollIntoView(firstScreenId)}
            >
              Top
            </button>
            {i + 1}/{projects.length}
          </div>
        </div>
      ))}
      {/* last screen */}
      <div
        id={lastScreenId}
        className="tiktok flex flex-col gap-2 justify-center items-center"
      >
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
