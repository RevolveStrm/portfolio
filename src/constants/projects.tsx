import { TechnologyName } from "./technologies";

export type Projects = ProjectsCategory[];

export type ProjectsItem = {
  title: string;
  src: string;
  innerSrc?: string;
  description: string;
  fullDescription?: string;
  technologies: TechnologyName[];
};

export type ProjectsCategory = {
  category: string;
  description: string;
  items: ProjectsItem[];
};

export const projects: Projects = [
  {
    category: "Full-Stack Web Applications & Websites",
    description:
      "Comprehensive platforms and web applications built with modern tools and technologies, catering to a wide range of industries and user needs.",
    items: [
      {
        title: "Next Pizza",
        description:
          "A modern web application for ordering pizzas with an intuitive interface and seamless payment integration.",
        fullDescription:
          "Next Pizza is a robust web application designed for pizza ordering. The platform offers a user-friendly interface, secure payment processing powered by Stripe, and personalized user sessions using JWT. It employs state management with Zustand, a scalable backend using Prisma and PostgreSQL, and a modern UI built with Next.js and Tailwind CSS.",
        src: "/assets/images/projects/next-pizza.png",
        technologies: [
          TechnologyName.NEXTJS,
          TechnologyName.TAILWIND_CSS,
          TechnologyName.TYPESCRIPT,
          TechnologyName.POSTGRESQL,
          TechnologyName.ZUSTAND,
          TechnologyName.PRISMA,
          TechnologyName.STRIPE,
          TechnologyName.RESEND,
          TechnologyName.NEXT_AUTH,
          TechnologyName.JWT,
        ],
      },
      {
        title: "ResumeGemm",
        description:
          "An AI-powered platform for creating professional resumes with ease.",
        fullDescription:
          "ResumeGemm leverages AI to help job seekers craft outstanding resumes. Users can choose from customizable templates and receive AI-driven suggestions to improve their resumes. The platform features PDF export, secure OAuth2-based authentication, and efficient backend support with Fastify, Knex, and AWS S3.",
        src: "/assets/images/projects/resume-gemm.png",
        innerSrc: "/assets/images/projects/resume-gemm.gif",
        technologies: [
          TechnologyName.REDUX,
          TechnologyName.TYPESCRIPT,
          TechnologyName.POSTGRESQL,
          TechnologyName.OAUTH2,
          TechnologyName.NODE_JS,
          TechnologyName.STRIPE,
          TechnologyName.KNEX,
          TechnologyName.OBJECTION,
          TechnologyName.REDUX_TOOLKIT,
          TechnologyName.AWS_S3,
          TechnologyName.FASTIFY,
          TechnologyName.OPENAI,
          TechnologyName.SASS,
          TechnologyName.PRETTIER,
          TechnologyName.ESLINT,
        ],
      },
      {
        title: "ZapTasks",
        description:
          "A productivity app for task management and collaboration.",
        fullDescription:
          "ZapTasks is an advanced task management application. It enables users to organize and prioritize tasks effectively, supporting team collaboration. It features Framer Motion animations, robust data handling with Prisma and PostgreSQL, and secure JWT-based authentication. The app is deployed on Digital Ocean for scalability.",
        src: "/assets/images/projects/zap-tasks.png",
        innerSrc: "/assets/images/projects/zap-tasks.gif",
        technologies: [
          TechnologyName.NEXTJS,
          TechnologyName.NESTJS,
          TechnologyName.TYPESCRIPT,
          TechnologyName.TANSTACK_QUERY,
          TechnologyName.TAILWIND_CSS,
          TechnologyName.PRISMA,
          TechnologyName.POSTGRESQL,
          TechnologyName.DIGITAL_OCEAN,
          TechnologyName.FRAMER_MOTION,
          TechnologyName.JWT,
          TechnologyName.NODE_JS,
          TechnologyName.SQL,
        ],
      },
      {
        title: "Cloudrage",
        description:
          "A powerful cloud storage application for seamless file management and secure saving.",
        fullDescription:
          "Cloudrage is a robust and modern cloud storage solution designed to simplify file management. It enables users to securely store, organize, and access their files anytime, anywhere. The app offers a clean and intuitive interface, ensuring an efficient user experience. Featuring a tech stack optimized for performance, scalability, and security, Cloudrage is ideal for both personal and professional use.",
        src: "/assets/images/projects/cloudrage.png",
        technologies: [
          TechnologyName.NEXTJS,
          TechnologyName.NESTJS,
          TechnologyName.TYPESCRIPT,
          TechnologyName.TAILWIND_CSS,
          TechnologyName.PRISMA,
          TechnologyName.POSTGRESQL,
          TechnologyName.JWT,
          TechnologyName.NODE_JS,
          TechnologyName.SQL,
          TechnologyName.ZUSTAND,
        ],
      },
      {
        title: "React Pizza",
        description: "A modern SPA for ordering delicious pizzas online.",
        fullDescription:
          "React Pizza is a single-page application designed for seamless online pizza ordering. Users can explore a customizable menu, select toppings, and place orders effortlessly. The project features a sleek design, responsive interface, and fast navigation without page reloads, ensuring a smooth and enjoyable user experience. Built with a modern tech stack, it offers reliable performance and scalability.",
        src: "/assets/images/projects/react-pizza.png",
        technologies: [
          TechnologyName.REACT,
          TechnologyName.TYPESCRIPT,
          TechnologyName.SASS,
          TechnologyName.NODE_JS,
        ],
      },
      {
        title: "RememberThat",
        description: "A responsive landing page for a task management app.",
        fullDescription:
          "RememberThat is a visually appealing and responsive landing page designed to showcase a task management platform. Built with semantic HTML, CSS, and JavaScript, it ensures excellent cross-browser compatibility and an engaging user experience.",
        src: "/assets/images/projects/remember-that.png",
        technologies: [
          TechnologyName.HTML,
          TechnologyName.JAVASCRIPT,
          TechnologyName.CSS,
          TechnologyName.SASS,
        ],
      },
      {
        title: "Abstract",
        description: "A help center website for the Abstract service.",
        fullDescription:
          "Abstract's help center website offers user-friendly support resources. It features a clean and accessible layout with smooth navigation, built with HTML, CSS, and JavaScript.",
        src: "/assets/images/projects/abstract.png",
        technologies: [
          TechnologyName.HTML,
          TechnologyName.JAVASCRIPT,
          TechnologyName.CSS,
        ],
      },
    ],
  },
  {
    category: "Algorithmic & Trading Bots",
    description:
      "Custom trading bots and algorithmic tools tailored for financial market operations and automation.",
    items: [
      {
        title: "Forex Trading Bot",
        description:
          "A trading bot integrated with MetaTrader 4, successfully passing FTMO challenges.",
        fullDescription:
          "This bot automates forex trading operations using the MetaTrader 4 platform. It includes advanced algorithms for trade execution, risk management, and account handling, ensuring high performance during FTMO challenges.",
        src: "/assets/images/projects/mock.svg",
        technologies: [
          TechnologyName.JAVASCRIPT,
          TechnologyName.GITHUB,
          TechnologyName.DOCKER,
          TechnologyName.NODE_JS,
          TechnologyName.ELECTRON,
          TechnologyName.REACT,
        ],
      },
      {
        title: "Steam Float Parser",
        description:
          "A tool for parsing the Steam marketplace to identify rare item floats and patterns.",
        fullDescription:
          "This software scans the Steam marketplace to find items based on custom database filters, including rare floats, unique patterns, and other valuable characteristics.",
        src: "/assets/images/projects/mock.svg",
        technologies: [
          TechnologyName.TYPESCRIPT,
          TechnologyName.GITHUB,
          TechnologyName.DOCKER,
          TechnologyName.NODE_JS,
        ],
      },
      {
        title: "Steam Reseller",
        description:
          "A system for automating the resale of game items on the Steam marketplace.",
        fullDescription:
          "Steam Reseller simplifies the process of buying and reselling game items. It utilizes user-defined criteria and automation to maximize efficiency and profit.",
        src: "/assets/images/projects/mock.svg",
        technologies: [
          TechnologyName.JAVASCRIPT,
          TechnologyName.GITHUB,
          TechnologyName.DOCKER,
          TechnologyName.NODE_JS,
        ],
      },
      {
        title: "Bitskins Websocket Parser",
        description:
          "A websocket-based parser for analyzing data and purchasing items automatically.",
        fullDescription:
          "This tool monitors Bitskins websocket streams to identify and purchase items matching specific user requirements. It is optimized for real-time processing and accuracy.",
        src: "/assets/images/projects/mock.svg",
        technologies: [
          TechnologyName.TYPESCRIPT,
          TechnologyName.GITHUB,
          TechnologyName.PRETTIER,
          TechnologyName.ESLINT,
          TechnologyName.NODE_JS,
          TechnologyName.VSCODE,
        ],
      },
    ],
  },
  {
    category: "Experimental & Other Projects",
    description:
      "Side projects and experiments exploring new technologies and ideas, showcasing creativity and technical versatility.",
    items: [
      {
        title: "Freedom Smoothies",
        description:
          "An NFT project supporting the Ukrainian Armed Forces during the full-scale invasion.",
        fullDescription:
          "Freedom Smoothies raised funds to support Ukrainian initiatives such as the Come Back Alive Foundation. My role as Tech Lead involved creating NFT generation software and a Telegram bot for client interaction.",
        src: "/assets/images/projects/freedom-smoothies.png",
        technologies: [
          TechnologyName.JAVASCRIPT,
          TechnologyName.NODE_JS,
          TechnologyName.BLOCKCHAIN,
          TechnologyName.NFT,
        ],
      },
      {
        title: "DMarket Parser",
        description:
          "A desktop app for monitoring and notifying users about specific items on DMarket.",
        fullDescription:
          "Developed for a bachelor's diploma, this application tracks DMarket for specific items and notifies users when they appear, using SQLite for local data storage.",
        src: "/assets/images/projects/mock.svg",
        technologies: [
          TechnologyName.TYPESCRIPT,
          TechnologyName.REACT,
          TechnologyName.ELECTRON,
          TechnologyName.SQLITE,
          TechnologyName.BLOCKCHAIN,
        ],
      },
    ],
  },
];
