import Collapse from "../components/Collapse";

export default function About() {
  const collapseText = `
    Okay so I need to write a whole bunch of text to see how well this thing wraps.
    I'm not sure how it's going to look, but I'm hoping it looks pretty good.
    Okay this is probably enough text to see how it's going to wrap.
  `;
  return (
    <div>
      <p>
        I'm Michael Oliver, a software engineer passionate about science,
        computing, and making a difference in the world. I've been at Kojo for
        5+ years where I've been making construction materials management
        faster, easier, and more sustainable by empowering our engineering
        teams. I focus primarily on our infrastucture, CI/CD pipelines, and
        developer experience, though I've been known to jump into frontend work,
        training AI models, security, or whatever else needs to be done.
      </p>
      <Collapse label="Kubernetes" children={collapseText} />
      <p>Skills</p>
      <p>
        Kubernetes, TypeScript/JavaScript, React, Docker, AWS, GraphQL,
        Elasticsearch, Redis, PostgreSQL, HTML/CSS, CI/CD
      </p>
      <p>
        Should include details for each skill - especially AWS, need to
        elaborate
      </p>
      <p>Frameworks</p>
      <p>
        React, Next.js, Express, Lodash, Zod, Ant Design, Prisma, Moment.js,
        Styled Components, Webpack, Storybook, Cypress, SWC, Jest, Husky
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
    </div>
  );
}
