import type { MetaFunction } from "@remix-run/node";
import ContactIcons from "~/components/contactIcons";
import Section from "~/components/section";

export const meta: MetaFunction = () => [{ title: "Stack | Hannes Schaletzky" }];

type Group = {
  prefix?: string;
  highlight: string;
  suffix?: string;
  items: string[];
};

const groups: Group[] = [
  {
    prefix: "cloud & ",
    highlight: "AWS",
    items: [
      "ECS/Fargate",
      "ECR",
      "IAM",
      "VPC",
      "SQS",
      "S3",
      "DynamoDB",
      "Terraform",
    ],
  },
  {
    highlight: "backend",
    items: ["Node.js", "TypeScript", "REST APIs", "Drizzle ORM", "PostgreSQL"],
  },
  {
    prefix: "integration & ",
    highlight: "data",
    items: [
      "messaging/event-driven",
      "ETL",
      "MS SQL Server/T-SQL",
      "SAML",
      "MS Entra",
      "MS Exchange",
      "PowerShell",
    ],
  },
  {
    prefix: "delivery & ",
    highlight: "testing",
    items: ["Docker", "GitHub Actions", "Jest", "Playwright"],
  },
  {
    highlight: "operations",
    items: [
      "Grafana",
      "Prometheus",
      "Mezmo",
      "logging & alerting",
      "on-call",
    ],
  },
  {
    prefix: "web & ",
    highlight: "frontend",
    items: ["Next.js", "Remix", "React", "Tailwind"],
  },
  {
    prefix: "also ",
    highlight: "experienced",
    suffix: " with",
    items: [
      "Kotlin/Spring Boot",
      "C#/.NET",
      "Kubernetes",
      "Hetzner Cloud",
      "Azure DevOps",
      "SSAS",
      "VBA",
    ],
  },
  {
    prefix: "how I ",
    highlight: "work",
    items: [
      "domain-driven design",
      "clean code",
      "TDD",
      "infrastructure as code",
      "pair programming",
      "AI-assisted development",
    ],
  },
  {
    prefix: "daily ",
    highlight: "drivers",
    items: ["terminal", "git", "VSCode", "MacBook", "Shortcuts 🤗"],
  },
];

export default function Stack() {
  return (
    <div className="flex flex-col items-center gap-10 p-6 text-center max-w-2xl mx-auto">
      <div className="mt-10">things I work with...</div>

      {groups.map((group) => (
        <Section
          key={group.highlight}
          title={
            <>
              {group.prefix}
              <mark>{group.highlight}</mark>
              {group.suffix}
            </>
          }
        >
          <div>{group.items.join(" · ")}</div>
        </Section>
      ))}

      <div className="flex flex-col items-center gap-2">
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
