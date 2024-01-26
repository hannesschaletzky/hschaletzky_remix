import ContactIcons from "~/components/contactIcons";
import projectsImport from "~/projects.json";
import { calculateMonthsDifference } from "~/utils";

export default function ProjectsPage() {
  const projects = projectsImport.map((project) => {
    return {
      ...project,
      duration: calculateMonthsDifference(project.from, project.until),
    };
  });
  return (
    <div className="container">
      {/* first screen */}
      <div className="tiktok p-6 flex flex-col gap-8 justify-center items-start">
        <div>Hey ✌️</div>
        <div>Swipe up to see my past projects, they are sorted by recency.</div>
        <div>{"> "}It&apos;s like TikTok 😉</div>
      </div>
      {/* projects */}
      {projects.map((project, i) => (
        <div className="tiktok p-6 flex flex-col gap-4" key={project.title}>
          <div>
            {"> "}
            {project.title}
          </div>
          <div>
            @{project.employer}
            <br />
            {project.from} - {project.until}
          </div>
          <div>
            {"> "}
            {project.duration} {project.duration == 1 ? "month" : "months"}
            {" of:"}
            {project.stack.map((item) => (
              <div className="" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            {/* url */}
            <div>
              {"> "}
              {project.url != "" ? (
                <u>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    url
                  </a>
                </u>
              ) : (
                <span>no url 😔</span>
              )}
            </div>
            {/* repository */}
            <div>
              {"> "}
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
          Return
        </a>
      </div>
    </div>
  );
}
