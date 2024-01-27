import { useState } from "react";
import ContactIcons from "~/components/contactIcons";
import paidProjectsImport from "~/projects/paid.json";
import unpaidProjectsImport from "~/projects/unpaid.json";
import { calculateMonthsDifference } from "~/utils";

export default function ProjectsPage() {
  const [selectedOption, setSelectedOption] = useState<
    "professional" | "private"
  >("professional");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  function highlightWords(title: string, list: string) {
    const splittedList = list.split(",").map((word: string) => word.trim());
    const highlightedString = title.split(" ").map((word) => {
      return splittedList.includes(word) ? `<mark>${word}</mark>` : word;
    });
    return <div>{highlightedString.join(" ")}</div>;
  }

  const projects = (
    selectedOption == "professional" ? paidProjectsImport : unpaidProjectsImport
  ).map((project) => {
    return {
      ...project,
      duration: calculateMonthsDifference(project.from, project.until),
      titleWithHighlights: highlightWords(project.title, project.highlight),
    };
  });

  return (
    <div className="container">
      {/* first screen */}
      <div className="tiktok p-6 flex flex-col gap-8 justify-center items-start">
        <div>
          Swipe up to see my past <mark>projects</mark>, they are sorted by
          recency in a TikTok-like feed 📺
        </div>
        <div>
          {"> "}But, unlike TikTok, here you can <mark>choose</mark> what you
          want to see
        </div>
        <div className="flex items-center justify-center">
          <input
            type="radio"
            value="professional"
            name="default-radio"
            className="w-4 h-4 accent-[#ffe100]"
            id="default-radio-1"
            checked={selectedOption === "professional"}
            onChange={handleRadioChange}
          />
          <label htmlFor="default-radio-1" className="ms-2">
            Professional projects
          </label>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <input
            type="radio"
            value="private"
            name="default-radio"
            className="w-4 h-4 accent-[#ffe100]"
            id="default-radio-2"
            checked={selectedOption === "private"}
            onChange={handleRadioChange}
          />
          <label htmlFor="default-radio-2" className="ms-2">
            Private projects
          </label>
        </div>
      </div>
      {/* projects */}
      {projects.map((project, i) => (
        <div className="tiktok p-6 flex flex-col gap-4" key={project.title}>
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
                <span>not hosted 😔</span>
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
                <span>not open source 😔</span>
              )}
            </div>
          </div>
          {/* page number */}
          <div className="mt-auto ml-auto text-sm">
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
