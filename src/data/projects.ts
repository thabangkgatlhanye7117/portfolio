export type ProjectCategory =
  | "Data Products"
  | "Data Science & AI"
  | "Research & Insights"
  | "Ecommerce"
  | "Engineering";

export type ProjectStatus =
  | "Completed"
  | "Building"
  | "Research"
  | "Planning";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  progress: number;
  description: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "customer-intelligence",
    title: "Customer Intelligence",
    category: "Data Products",
    status: "Planning",
    progress: 0,
    description:
      "A data product exploring customer behaviour, segmentation and the translation of behavioural data into actionable insights.",
    technologies: [
      "Python",
      "SQL",
      "Statistics",
      "React",
    ],
  },

  {
    id: "digital-payments",
    title: "Digital Payments Analysis",
    category: "Data Science & AI",
    status: "Planning",
    progress: 0,
    description:
      "An analysis of digital payment adoption, consumer behaviour and the transition from cash to digital commerce.",
    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "Data Analysis",
    ],
  },

  {
    id: "ecommerce-intelligence",
    title: "Ecommerce Intelligence",
    category: "Data Products",
    status: "Planning",
    progress: 0,
    description:
      "An ecommerce analytics product exploring sales, customer behaviour, product performance and business decision-making.",
    technologies: [
      "Python",
      "SQL",
      "Analytics",
      "React",
    ],
  },

  {
    id: "research-insights",
    title: "Insights",
    category: "Research & Insights",
    status: "Building",
    progress: 10,
    description:
      "A personal research platform for collecting datasets, analysing patterns and turning findings into structured insights.",
    technologies: [
      "Python",
      "SQL",
      "Data Analysis",
      "React",
    ],
  },

  {
    id: "data-visualisation",
    title: "Data Visualisation Lab",
    category: "Data Science & AI",
    status: "Planning",
    progress: 0,
    description:
      "A collection of data visualisation experiments focused on communicating complex datasets through clear interactive experiences.",
    technologies: [
      "Python",
      "Pandas",
      "Power BI",
      "React",
    ],
  },

  {
    id: "haus",
    title: "HAUS",
    category: "Ecommerce",
    status: "Planning",
    progress: 0,
    description:
      "An ecommerce concept exploring how data, merchandising and digital experiences can improve the online shopping journey.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Ecommerce",
      "Analytics",
    ],
  },

  {
    id: "frontend-lab",
    title: "Frontend Lab",
    category: "Engineering",
    status: "Planning",
    progress: 0,
    description:
      "A collection of frontend experiments exploring interfaces, interactions, animation and data-driven experiences.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
  },
];