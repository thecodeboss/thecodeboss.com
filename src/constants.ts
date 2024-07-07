import { type ProjectProps } from "@/components/Project";

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
    link: "https://docs.kojo.tech/docs/",
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
    link: "https://www.flaticon.com/free-icons/ocr",
    text: "OCR icon by Freepik",
  },
  {
    link: "https://www.flaticon.com/free-icons/authentication",
    text: "Authentication icon by Pixelmeetup",
  },
  {
    link: "https://www.flaticon.com/free-icons/lock",
    text: "Lock icon by Pixel perfect",
  },
  {
    link: "https://www.flaticon.com/free-icons/shield",
    text: "Shield icon by Freepik",
  },
  {
    link: "https://www.flaticon.com/free-icons/market",
    text: "Market icon by mynamepong",
  },
  {
    link: "https://www.flaticon.com/free-icons/single-sign-on",
    text: "SSO icons by Smashicons",
  },
];
