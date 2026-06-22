export const nav = [
  {
    symbol: "[h]",
    title: "home",
    url: "/",
  },
  {
    symbol: "[p]",
    title: "projects",
    url: "/projects",
  },
  {
    symbol: "[b]",
    title: "blogs",
    url: "/blogs",
  },
  {
    symbol: "[d]",
    title: "docs",
    url: "/docs",
  },
];

export const profile = {
  name: "edwin jim olivares",
  location: "los angeles, ca",
  current: "software engineer",
  desc: "usually just working on some personal projects to learn about the new technologies that are coming out. reformed javaScript hater. bad habit of looking for green checkmark on stackoverflow.",
};

export const work = [
  {
    company: "iac training",
    job: [
      {
        position: "full stack developer",
        time: "mar 2025 - dec 2025",
        desc: "rebuilt a cargo freight certification enrollment system with automated registration, payments, and tracking, replacing a manual legacy workflow.",
      },
    ],
  },
  {
    company: "secure tech solutions",
    job: [
      {
        position: "full stack developer",
        time: "oct 2023 - present",
        desc: "built and maintained a customizable phishing simulation platform with analytics, reporting, and client-specific training workflows.",
      },
      {
        position: "system integration engineer",
        time: "nov 2024 - feb 2025",
        desc: "redesigned company site and branding while setting up infrastructure to support managed service operations.",
      },
    ],
  },
  {
    company: "raytheon",
    job: [
      {
        position: "software engineer 1",
        time: "jan 2023 - jun 2023",
        desc: "led development of a log filtering and search system for internal radar tools, improving query speed across classified programs.",
      },
      {
        position: "software engineer intern",
        time: "jun 2022 - jan 2023",
        desc: "documented test procedures, checked project requirements in DOORs, and supported software efforts across radar programs.",
      },
    ],
  },
];

export const projects = [
  {
    name: "ns-cli",
    visible: true,
    featured: true,
    role: "creator & maintainer",
    desc: "command-line tool for syncing local markdown notes with a notion database, including project mapping, upload/download workflows, and shell completion.",
    url: "https://github.com/thedwncmpy/notion-cli.git",
    displaydate: "",
    date: "",
    points: [
      "built bidirectional markdown and notion sync flows around a single `ns` command",
      "designed directory mapping and config management for scoped project sync",
      "documented command behavior, setup, and sync rules for day-to-day usage",
    ],
  },
  {
    name: "aremes fermentis",
    visible: true,
    featured: true,
    role: "developer & designer",
    desc: "transfer legacy system to shopify, and redesign site according to brand identity. integrate shop with 3rd party vendors like macy's",
    url: "https://aremesfermentis.com",
    displaydate: "",
    date: "",
    points: [
      "customize shopify liquid to further match brand identity",
      "customize company emails",
      "setup mailchimp for client newsletter signup",
    ],
  },
  {
    name: "drive clone",
    visible: true,
    featured: false,
    role: "developer & creator",
    desc: "simple google drive clone with user management(clerk), rate limits, analytics(posthog), site health analytics(sentry), and file/image upload (uploadthing)",
    url: "https://drive-klone.netlify.app",
    displaydate: "",
    date: "",
    points: [
      "successfully implement core google drive functionality",
      "implement modern data fetching techniques (ex. data access layer)",
      "learned how to set permissions and handle authorization/authentication",
    ],
  },
  {
    name: "so plumbing inc",
    visible: true,
    featured: false,
    role: "site creator & designer",
    desc: "in the process of remaking company site to something more modern, which displays company information(licenses and contact info)first and foremost",
    url: "https://so-plumbing-inc.vercel.app",
    displaydate: "",
    date: "",
    points: [
      "modernize company website to comprehensively display company information",
      "add job/invoice request functionality",
    ],
  },
  {
    name: "personal site v3",
    visible: false,
    featured: false,
    role: "developer & designer",
    desc: "learning how to use tools like aceturnity for flashy animations, and shadcn for nicely styled components",
    url: "https://personal-animated-personal-site-team.vercel.app",
    displaydate: "",
    date: "",
    points: [
      "learned how to implement schadcn components w/ aceternity",
      "understand fundmentals of component tree w/ use of server/client components",
    ],
  },
  {
    name: "biovizit",
    visible: true,
    featured: false,
    role: "prototyper",
    desc: "create prototype company looking to move their online tool from free to use to closed. setup user registration, payment capture, and auth",
    url: "https://biovizit.webflow.io",
    displaydate: "",
    date: "",
    points: [
      "understand the process of creating a proof of concept",
      "integrate with 3rd party tools like clerk and stripe",
    ],
  },
];

export const urls = [
  {
    title: "email",
    url: "mailto:mail@edwinolivares.com",
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/ejo-3914811a1/",
  },
  {
    title: "github",
    url: "https://github.com/edolivar",
  },
];

// commend
export const blogs = [
  {
    id: "1",
    name: "how using neovim made me a vscode user",
    displaydate: "jul 01 2025",
    date: "2025-07-01",
    url: "/blogs/1",
    content: "",
  },
  {
    id: "2",
    name: "ios notes < notion",
    displaydate: "mar 27 2026",
    date: "2026-03-27",
    url: "/blogs/2",
    content: "",
  },
  {
    id: "3",
    name: "ipad as dev",
    displaydate: "mar 30 2026",
    date: "2026-03-30",
    url: "/blogs/3",
    content: "",
  },
];

export const documents = [
  {
    id: "1",
    name: "ns-cli user guide",
    displaydate: "jun 18 2026",
    date: "2026-06-18",
    url: "/docs/1",
    content: "",
  },
];
