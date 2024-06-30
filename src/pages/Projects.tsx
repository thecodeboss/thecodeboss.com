import { Link } from "react-router-dom";

import Project, { type ProjectProps } from "@/components/Project";
import "./Projects.css";

const projects: (ProjectProps & { key: string })[] = [
  {
    description:
      "At Kojo, I automated launching a full-stack environment of services for every pull request opened.",
    key: "kubernetes-preview-environments",
    title: "Kubernetes Preview Environments",
  },
  {
    description: "A Nintendo Entertainment System emulator written in C++.",
    key: "nes-emulator",
    link: "https://github.com/thecodeboss/NESEmu",
    title: "NES Emulator",
  },
  {
    description:
      "A Minecraft server implementation written in Elixir, with biome/chunk generation in C.",
    key: "minecraft-server",
    link: "https://github.com/thecodeboss/minecraft",
    title: "Minecraft Server",
  },
  {
    description:
      "A physically-based 3D renderer with realistic lighting written in C++.",
    key: "raytracer",
    link: "https://github.com/thecodeboss/raytracer",
    title: "Raytracer",
  },
  {
    description:
      "Another raytracer written in C++, but uses the GPU to run in realtime.",
    key: "fantasi",
    link: "https://github.com/thecodeboss/Fantasi",
    title: "Fantasi",
  },
];

export default function Projects() {
  return (
    <main>
      <h3>Projects</h3>
      <div className="project-container">
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
      <h3>Skills</h3>
      <p>
        If you're looking for a more detailed list of my skills, here's a list.
        They aren't ordered by profiency, so if you have questions about
        specific projects/experience with these technologies,{" "}
        <Link className="underline" to="/contact">
          contact me
        </Link>
        .
      </p>
      <p>
        Kubernetes, TypeScript/JavaScript, React, Docker, AWS, GraphQL,
        Elasticsearch, Redis, PostgreSQL, HTML/CSS, CI/CD React, Next.js,
        Express, Lodash, Zod, Ant Design, Prisma, Moment.js, Styled Components,
        Webpack, Storybook, Cypress, SWC, Jest, Husky
      </p>
      <h3>AWS</h3>
      <p>
        Since AWS in particular is such a broad category, here are specific AWS
        products I've worked with:
      </p>
      <p>
        S3, EC2 (Instances, Load Balancers, Security Groups, EBS Volumes, Custom
        AMIs), RDS (Aurora, PostgreSQL), Lambda, API Gateway, CloudFront,
        CloudWatch, Route 53, IAM, Cognito, SES, SQS, DynamoDB, Elastic
        Beanstalk, ECR, EKS, ECS, Fargate, Secrets Manager, WAF, CloudTrail,
        Amplify, VPCs/Subnets, OpenSearch/Elasticsearch, ElastiCache (Redis),
        Glue, Athena, Redshift, Certificate Manager
      </p>
      <p>Projects</p>
      <p>
        Private NPM Registry, Kubernetes Preview Environments, Diglett,
        Docusaurus Docs, Integration API, Marketplace Service, Gears of War
      </p>
      <p>Open Source</p>
      <p>Minecraft Server, NES Emulator, Audio Simulator, Raytracer</p>
      <p>Tools</p>
      <p>
        Datadog, Sentry, PagerDuty, Sendgrid, Slack, Apache Superset,
        LaunchDarkly, CircleCI, GitHub, Depot, Figma, Jira, Retool, Spinnaker,
        Postman, Pulumi, Helm
      </p>
      <p>Standards</p>
      <p>OAuth 2.0, SCIM, JWT</p>
      <p>Older Skills</p>
      <p>Elixir, C/C++, Rust, Python, Assembly, Apache Thrift, Java</p>
      <p>AI</p>
      <p>Azure Document Intelligence, OpenAI API</p>
      <p>Random</p>
      <p>https://projecteuler.net/progress=michael.oliver</p>
    </main>
  );
}
