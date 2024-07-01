import { Link } from "react-router-dom";

import Project, { type ProjectProps } from "@/components/Project";
import "./Projects.css";

const openSourceProjects: (ProjectProps & { key: string })[] = [
  {
    description: "This website! Built with React and TypeScript.",
    key: "thecodeboss.com",
    title: "thecodeboss.com",
    link: "https://github.com/thecodeboss/thecodeboss.com",
    year: 2024,
  },
  {
    description: "A Nintendo Entertainment System emulator written in C++.",
    key: "nes-emulator",
    link: "https://github.com/thecodeboss/NESEmu",
    title: "NES Emulator",
    year: 2014,
  },
  {
    description:
      "A Minecraft server implementation written in Elixir, with biome/chunk generation in C.",
    key: "minecraft-server",
    link: "https://github.com/thecodeboss/minecraft",
    title: "Minecraft Server",
    year: 2018,
  },
  {
    description:
      "A physically-based 3D renderer with realistic lighting written in C++.",
    key: "raytracer",
    link: "https://github.com/thecodeboss/raytracer",
    title: "Raytracer",
    year: 2018,
  },
  {
    description:
      "Another raytracer written in C++, but uses your GPU to run in realtime.",
    key: "fantasi",
    link: "https://github.com/thecodeboss/Fantasi",
    title: "Fantasi",
    year: 2014,
  },
  {
    description:
      "Simulates sound propagation in a 3D room using numerical methods. Written in C++.",
    key: "acoustic-simulator",
    link: "https://github.com/thecodeboss/AcousticSimulator",
    title: "Acoustic Simulator",
    year: 2016,
  },
];

const workProjects: (ProjectProps & { key: string })[] = [
  {
    description: "Helped Kojo achieve SOC 2 compliance.",
    key: "soc2-compliance",
    title: "SOC 2 Compliance",
    year: 2024,
  },
  {
    description:
      "At Kojo, I automated launching a full-stack environment of services for every pull request opened.",
    key: "kubernetes-preview-environments",
    title: "Kubernetes Preview Environments",
    year: 2024,
  },
  {
    description:
      "Kojo's internal service for mapping user input to products/pricing using AI.",
    key: "marketplace-service",
    title: "Marketplace Service",
    year: 2024,
  },
  {
    description:
      "I built implementations of SCIM and SSO to automate user provisioning and authentication for Kojo.",
    key: "scim-sso",
    link: "https://docs.kojo.tech/docs/scim/overview",
    title: "SCIM/SSO",
    year: 2023,
  },
  {
    description:
      "I added OAuth 2.0 authentication to the Kojo API using a client credentials flow.",
    key: "oauth",
    link: "https://docs.kojo.tech/docs/",
    title: "OAuth 2.0",
    year: 2023,
  },
  {
    description:
      "Used Azure's Document Intelligence to build a custom OCR model to extract data from purchase orders.",
    key: "ocr-model",
    title: "OCR Model for Purchase Orders",
    year: 2023,
  },
  {
    description:
      "Kojo's public GraphQL/REST API. I built the service and documentation initially, and it's now a core part of the platform.",
    key: "kojo-api",
    link: "https://docs.kojo.tech/",
    title: "Kojo API",
    year: 2021,
  },
  {
    description: "A Python-based integration between Kojo and Spectrum.",
    key: "diglett",
    title: "Diglett",
    year: 2019,
  },
  {
    description:
      "Pinterest's realtime analytics and rules engine for fighting spam, written in Elixir.",
    key: "guardian",
    title: "Guardian",
    link: "https://medium.com/pinterest-engineering/fighting-spam-with-guardian-a-real-time-analytics-and-rules-engine-938e7e61fa27",
    year: 2018,
  },
];

export default function Projects() {
  return (
    <main>
      <h2>Open-Source Projects</h2>
      <p>
        Below is a selection of open-source projects I've written. I've
        contributed to many more that aren't listed here, but you can find them
        on my{" "}
        <Link className="underline" to="https://github.com/thecodeboss">
          GitHub
        </Link>
        .
      </p>
      <div className="project-container">
        {openSourceProjects.map((project) => (
          <Project {...project} />
        ))}
      </div>
      <h2 className="mt-1">Work Projects</h2>
      <p>
        Below is a sample of meaningful projects I've worked on, some
        open-source and others private to their respective companies. If you're
        interested in more details about these projects or others not mentioned
        here, feel free to reach out.
      </p>
      <div className="project-container">
        {workProjects.map((project) => (
          <Project {...project} />
        ))}
      </div>
      <h2>Skills</h2>
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
        Kubernetes, Helm, Pulumi, Docker, AWS, TypeScript/JavaScript, C/C++,
        Python, Rust, Elixir, React, GraphQL, Elasticsearch, Redis, PostgreSQL,
        HTML/CSS, CI/CD React, Next.js, Express, Lodash, Zod, Ant Design,
        Prisma, Moment.js, Styled Components, Webpack, Storybook, Cypress, SWC,
        Jest, Husky, Datadog, Sentry, PagerDuty, Sendgrid, Apache Superset,
        LaunchDarkly, CircleCI, GitHub, Depot, Figma, Retool, Spinnaker, Apache
        Thrift, Azure Document Intelligence, Windows/Linux/Mac
      </p>
      <h2>AWS</h2>
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
      <p>Standards</p>
      <p>OAuth 2.0, SCIM, JWT</p>
      <p>Random</p>
      <p>https://projecteuler.net/progress=michael.oliver</p>
    </main>
  );
}
