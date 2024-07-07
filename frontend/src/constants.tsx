import { type ProjectProps } from "@/components/Project";
import { type ExperienceItemProps } from "@/components/ExperienceItem";

export const openSourceProjects: (ProjectProps & { key: string })[] = [
  {
    description: "This website! Built with React and TypeScript.",
    key: "thecodeboss.com",
    image: {
      alt: "Picture of me",
      round: true,
      url: "/project-icons/me.webp",
    },
    title: "thecodeboss.com",
    link: "https://github.com/thecodeboss/thecodeboss.com",
    year: 2024,
  },
  {
    description: "A Nintendo Entertainment System emulator written in C++.",
    key: "nes-emulator",
    image: {
      alt: "Nintendo Entertainment System",
      url: "/project-icons/nes.webp",
    },
    link: "https://github.com/thecodeboss/NESEmu",
    title: "NES Emulator",
    year: 2014,
  },
  {
    description:
      "A Minecraft server implementation written in Elixir, with biome/chunk generation in C.",
    key: "minecraft-server",
    image: {
      alt: "Minecraft block",
      url: "/project-icons/minecraft.webp",
    },
    link: "https://github.com/thecodeboss/minecraft",
    title: "Minecraft Server",
    year: 2018,
  },
  {
    description:
      "A physically-based 3D renderer with realistic lighting written in C++.",
    key: "raytracer",
    image: {
      alt: "3D rendered scene",
      round: true,
      url: "/project-icons/raytracer.webp",
    },
    link: "https://github.com/thecodeboss/raytracer",
    title: "Raytracer",
    year: 2018,
  },
  {
    description:
      "Another raytracer written in C++, but uses your GPU to run in realtime.",
    key: "fantasi",
    image: {
      alt: "Icon showing a 3D blob object",
      round: true,
      url: "/project-icons/fantasi.webp",
    },
    link: "https://github.com/thecodeboss/Fantasi",
    title: "Fantasi",
    year: 2014,
  },
  {
    description:
      "Simulates sound propagation in a 3D room using numerical methods. Written in C++.",
    key: "acoustic-simulator",
    image: {
      alt: "Sound waves in a room",
      round: true,
      url: "/project-icons/sound-waves.webp",
    },
    link: "https://github.com/thecodeboss/AcousticSimulator",
    title: "Acoustic Simulator",
    year: 2016,
  },
];

export const workProjects: (ProjectProps & { key: string })[] = [
  {
    description: "Helped Kojo achieve SOC 2 compliance.",
    key: "soc2-compliance",
    image: {
      alt: "Lock icon",
      url: "/project-icons/lock.webp",
    },
    title: "SOC 2 Compliance",
    year: 2024,
  },
  {
    description:
      "At Kojo, I automated launching a full-stack environment of services for every pull request opened.",
    key: "kubernetes-preview-environments",
    image: {
      alt: "Kubernetes icon",
      url: "/project-icons/kubernetes.webp",
    },
    title: "Kubernetes Preview Environments",
    year: 2024,
  },
  {
    description:
      "Kojo's internal service for mapping user input to products/pricing using AI.",
    key: "marketplace-service",
    image: {
      alt: "Market icon",
      url: "/project-icons/market.webp",
    },
    title: "Marketplace Service",
    year: 2024,
  },
  {
    description:
      "I built implementations of SCIM and SSO to automate user provisioning and authentication for Kojo.",
    key: "scim-sso",
    image: {
      alt: "SSO icon",
      url: "/project-icons/sso.webp",
    },
    link: "https://docs.kojo.tech/docs/scim/overview",
    title: "SCIM/SSO",
    year: 2023,
  },
  {
    description:
      "I added OAuth 2.0 authentication to the Kojo API using a client credentials flow.",
    key: "oauth",
    image: {
      alt: "Badge showing a person and a checkmark",
      url: "/project-icons/oauth.webp",
    },
    link: "https://docs.kojo.tech/docs/#oauth-20",
    title: "OAuth 2.0",
    year: 2023,
  },
  {
    description:
      "Used Azure Document Intelligence to build a custom OCR model to extract data from purchase orders.",
    key: "ocr-model",
    image: {
      alt: "OCR icon",
      url: "/project-icons/ocr.webp",
    },
    title: "OCR Model for Purchase Orders",
    year: 2023,
  },
  {
    description:
      "Kojo's public GraphQL/REST API. I built the service and documentation initially, and it's now a core part of the platform.",
    key: "kojo-api",
    image: {
      alt: "Kojo logo, a yellow square with the letter K in the middle",
      url: "/project-icons/kojo.webp",
    },
    link: "https://docs.kojo.tech/",
    title: "Kojo API",
    year: 2021,
  },
  {
    description: "A Python-based integration between Kojo and Spectrum.",
    key: "diglett",
    image: {
      alt: "Diglett Pokémon",
      url: "/project-icons/diglett.webp",
    },
    title: "Diglett",
    year: 2019,
  },
  {
    description:
      "Pinterest's realtime analytics and rules engine for fighting spam, written in Elixir.",
    key: "guardian",
    image: {
      alt: "Blue shield icon",
      url: "/project-icons/shield.webp",
    },
    title: "Guardian",
    link: "https://medium.com/pinterest-engineering/fighting-spam-with-guardian-a-real-time-analytics-and-rules-engine-938e7e61fa27",
    year: 2018,
  },
];

export const iconAttributions = [
  {
    link: "https://www.flaticon.com/free-icon/ocr_5137239",
    text: "OCR icon by Freepik",
  },
  {
    link: "https://www.flaticon.com/free-icon/authentication_1791961",
    text: "Authentication icon by Pixelmeetup",
  },
  {
    link: "https://www.flaticon.com/free-icon/lock_891399",
    text: "Lock icon by Pixel perfect",
  },
  {
    link: "https://www.flaticon.com/free-icon/encrypted_2592317",
    text: "Shield icon by Freepik",
  },
  {
    link: "https://www.flaticon.com/free-icon/market_862819",
    text: "Market icon by mynamepong",
  },
  {
    link: "https://www.flaticon.com/free-icon/cloud_3262314",
    text: "SSO icon by Smashicons",
  },
];

export const workExperiences: ExperienceItemProps[] = [
  {
    company: "Kojo",
    description: (
      <>
        <p>
          As a founding software engineer at Kojo (later promoted to Staff
          Engineer), I built the initial version of the platform and have been
          instrumental in growing the team and product. I helped the company
          grow from a small team of 6 to over 100 employees, working on
          everything from core platform, APIs, infrastructure, CI/CD tooling,
          and developer tooling, to AI models, frontend, and more. In addition
          to direct engineering work, I&apos;ve also interviewed hundreds of
          candidates and mentored dozens of engineers.
        </p>
        <p>
          But don&apos;t just take it from me; here&apos;s a quote from one of
          my peers:
        </p>
        <blockquote>
          Michael is quickly able to find good solutions to problems, and often
          in areas he&apos;s not familiar with. I&apos;ve never worked with
          someone as adept as Michael about diving in somewhere new, and quickly
          providing insight in ways that others miss/overlook. He&apos;s a truly
          valuable asset in filling in gaps in our general triaging/incident
          response procedures, and I trust that the work he produces will be
          done thoughtfully and effectively.
        </blockquote>
      </>
    ),
    image: {
      alt: "Kojo logo",
      url: "/project-icons/kojo.webp",
    },
    location: "San Francisco, CA",
    role: "Staff Software Engineer",
    start: new Date("Jan 25 2019"),
  },
  {
    company: "Pinterest",
    description:
      "Developed and maintained real-time streaming pipelines, with an emphasis on spam/fraud/abuse detection & prevention. Built a rule-engine called Guardian to process 10k events per second using both hand-written rules and ML models, reducing infrastructure costs by close to 20x. Also wrote an in-memory storage engine for Guardian to allow for fast querying of real-time data to identify attack vectors and malicious actors quickly.",
    end: new Date("Jan 24 2019"),
    image: {
      alt: "Pinterest logo",
      url: "/company-logos/pinterest.webp",
    },
    location: "San Francisco, CA",
    role: "Software Engineer",
    start: new Date("Jan 9 2017"),
  },
  {
    company: "Facebook",
    description:
      "Wrote a caching layer for an infrastructure tool called Shard Manager, and rewrote a Zookeeper library to reduce lock contention and performance bottlenecks.",
    end: new Date("Dec 24 2015"),
    image: {
      alt: "Facebook logo",
      url: "/company-logos/facebook.webp",
    },
    location: "Seattle, WA",
    role: "Software Engineer Intern",
    start: new Date("Sep 7 2015"),
  },
  {
    company: "Pinterest",
    description:
      "Wrote an API layer to do filtering and data hydration (essentially built a GraphQL implementation prior to GraphQL becoming popular) for both the internal and external Pinterest APIs.",
    end: new Date("Sep 4 2015"),
    image: {
      alt: "Pinterest logo",
      url: "/company-logos/pinterest.webp",
    },
    location: "San Francisco, CA",
    role: "Software Engineer Intern",
    start: new Date("May 18 2015"),
  },
  {
    company: "LinkedIn",
    description:
      "Led an API migration on the Higher Education team, developed internal tooling for caching compiled code (reducing many hours of developer time spent compiling), and built a drag+drop graph creation tool for test user network creation.",
    end: new Date("Dec 12 2014"),
    image: {
      alt: "LinkedIn logo",
      url: "/company-logos/linkedin.webp",
    },
    location: "Mountain View, CA",
    role: "Software Engineer Intern",
    start: new Date("Aug 25 2014"),
  },
  {
    company: "The Coalition (Xbox Game Studios)",
    description:
      "Extended the Unreal Engine to support Xbox One's audio decompression hardware, and built tooling for sound designers to create and mix game audio. Worked as the main audio programmer on Gears of War Ultimate.",
    end: new Date("Apr 25 2014"),
    image: {
      alt: "The Coalition logo",
      url: "/company-logos/coalition.webp",
    },
    location: "Vancouver, BC, Canada",
    role: "Software Engineer Intern",
    start: new Date("Jan 6 2014"),
  },
  {
    company: "The Coalition (Xbox Game Studios)",
    description:
      "Built a variety of tools both in- and out-of-game for handling audio assets, Triton maps (sound simulation data files), and aiding sound designers to mix game audio.",
    end: new Date("Aug 23 2013"),
    image: {
      alt: "The Coalition logo",
      url: "/company-logos/coalition.webp",
    },
    location: "Vancouver, BC, Canada",
    role: "Software Engineer Intern",
    start: new Date("May 6 2013"),
  },
];

export const educationExperiences: ExperienceItemProps[] = [
  {
    company: "University of Waterloo",
    description:
      "Bachelor of Mathematics: Honours Computer Science, Joint Honours Applied Mathematics, With Distinction, Physics Minor",
    end: new Date("2016-08-30"),
    image: {
      alt: "University of Waterloo logo",
      url: "/company-logos/uw.webp",
    },
    location: "Waterloo, ON, Canada",
    start: new Date("2011-09-01"),
  },
];
