import "./App.css";
import Collapse from "./components/Collapse";

// TODO: Procedural generation of background
// Public contributions to open source

// For each skill, include a star rating of proficiency, and a brief description of how it's been used

// Probably need an entire section on AWS technologies alone

// List Skills, Tools, Frameworks, Standards, AI, etc. in a table
// Under each category, sort skills by proficiency DESC
// Ex:
// Skills
// Kubernetes 5/5 - Used to deploy and manage microservices
// TypeScript/JavaScript 5/5 - Used to write frontend and backend code
// Tools
// Datadog 5/5 - Used to monitor and alert on application performance
// ...

// Windows, Linux, Mac

// Some Android/iOS/React Native experience

function App() {
  const collapseText = `
    Okay so I need to write a whole bunch of text to see how well this thing wraps.
    I'm not sure how it's going to look, but I'm hoping it looks pretty good.
    Okay this is probably enough text to see how it's going to wrap.
  `;
  return (
    <>
      <div className="header">
        <h3>thecodeboss</h3>
        <a>about</a>
        <a>projects</a>
        <a>contact</a>
      </div>
      <p>Welcome! I'm Michael Oliver.</p>
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
    </>
  );
}

export default App;
