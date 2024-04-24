/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ContactIcons from "~/components/contactIcons";
import paidProjects from "~/projects/paid.json";
import unpaidProjects from "~/projects/unpaid.json";
import { calculateMonthsDifference } from "~/utils";

type Project = {
  title: string;
  highlight: string;
  titleWithHighlights: JSX.Element;
  duration: number;
  from: string;
  until: string;
  employer: string;
  url: string;
  repo: string;
  stack: string[];
};

function highlightWords(title: string, list: string) {
  const splittedList = list.split(",").map((word: string) => word.trim());
  const highlightedString = title.split(" ").map((word) => {
    return splittedList.includes(word) ? `<mark>${word}</mark>` : word;
  });
  return <div>{highlightedString.join(" ")}</div>;
}

const firstScreenId = "firstScreen";
const radioProfessionalId = "radio-professional";
const radioPrivateId = "radio-private";

export default function ProjectsPage() {
  const [selection, setSelection] = useState<
    "professional" | "private" | "none"
  >("none");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (selection == "none") return;

    document.getElementById(radioProfessionalId)?.blur();
    document.getElementById(radioPrivateId)?.blur();

    const projectsToUpdate = (
      selection === "professional" ? paidProjects : unpaidProjects
    ).map((project) => ({
      ...project,
      duration: calculateMonthsDifference(project.from, project.until),
      titleWithHighlights: highlightWords(project.title, project.highlight),
    }));

    setProjects(projectsToUpdate);
  }, [selection]);

  useEffect(() => {
    scrollIntoView("project0");
  }, [projects]);

  const handleReset = () => {
    setSelection("none");
    setProjects([]);
    scrollIntoView(firstScreenId);
  };

  const handleSwipeUp = (e: any) => {
    const i = parseInt(e.currentTarget.getAttribute("data-value"));
    if (i == 0) {
      scrollIntoView(firstScreenId);
    } else {
      scrollIntoView(`project${i - 1}`);
    }
  };

  const handleSwipeDown = (e: any) => {
    const i = parseInt(e.currentTarget.getAttribute("data-value"));
    if (i < projects.length - 1) {
      scrollIntoView(`project${i + 1}`);
    }
  };

  function scrollIntoView(id: string) {
    const screen = document.getElementById(id);
    if (screen) {
      screen.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="container">
      {/* selection screen */}
      <div
        id={firstScreenId}
        className="tiktok p-6 flex flex-col gap-8 justify-center items-start"
      >
        <div>
          <mark>Swipe</mark> through my <mark>projects</mark> in a TikTok-like
          feed 📺
        </div>
        <div>{"> "}Unlike TikTok, choose what you want to see here</div>
        <div className="flex items-center justify-center">
          <input
            type="radio"
            value="professional"
            className="w-4 h-4 accent-[#ffe100]"
            id={radioProfessionalId}
            checked={selection === "professional"}
            onChange={() => setSelection("professional")}
          />
          <label htmlFor={radioProfessionalId} className="ms-2">
            Professional projects
          </label>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <input
            type="radio"
            value="private"
            className="w-4 h-4 accent-[#ffe100]"
            id={radioPrivateId}
            checked={selection === "private"}
            onChange={() => setSelection("private")}
          />
          <label htmlFor={radioPrivateId} className="ms-2">
            Private projects
          </label>
        </div>
      </div>
      {/* projects */}
      {projects.map((project, i) => (
        <div
          id={`project${i}`}
          className="tiktok p-6 flex flex-col gap-4"
          key={project.title}
        >
          <div>
            {"> "}
            <span
              dangerouslySetInnerHTML={{
                __html: project.titleWithHighlights.props.children,
              }}
            />
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
            {project.stack.map((item, i) => (
              <div className="" key={`${i}-${item}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            {/* url */}
            <div>
              {"/ "}
              {project.url != "" ? (
                <u>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    hosted here
                  </a>
                </u>
              ) : (
                <span>not hosted...</span>
              )}
            </div>
            {/* repository */}
            <div>
              {"/ "}
              {project.repo != "" ? (
                <u>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    repository
                  </a>
                </u>
              ) : (
                <span>not open source...</span>
              )}
            </div>
          </div>
          {/* page number */}
          <div className="mt-auto ml-auto text-sm lg:text-xl">
            <button
              className="py-1 px-2 mr-2"
              data-value={i}
              onClick={handleSwipeUp}
            >
              ⬆️
            </button>
            <button
              className="py-1 px-2 mr-2"
              data-value={i}
              onClick={handleSwipeDown}
            >
              ⬇️
            </button>
            <button className="py-1 px-2 mr-2" onClick={handleReset}>
              Reset
            </button>
            {i + 1}/{projects.length}
          </div>
        </div>
      ))}
      {/* last screen */}
      <div className="tiktok flex flex-col gap-2 justify-center items-center">
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
