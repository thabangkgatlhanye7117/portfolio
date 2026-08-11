export type ResearchData = {
  insights: number;
  datasets: number;
  topics: string[];
  latest: string;
};

export const researchData: Record<string, ResearchData> = {
  Africa: {
    insights: 0,
    datasets: 0,
    topics: [
      "Payments",
      "Retail",
      "AI",
    ],
    latest: "No published research yet",
  },

  Europe: {
    insights: 0,
    datasets: 0,
    topics: [
      "AI",
      "Cloud",
      "Open Source",
    ],
    latest: "No published research yet",
  },

  Asia: {
    insights: 0,
    datasets: 0,
    topics: [
      "AI",
      "Technology",
      "Ecommerce",
    ],
    latest: "No published research yet",
  },

  "North America": {
    insights: 0,
    datasets: 0,
    topics: [
      "Cloud",
      "AI",
      "Frontend",
    ],
    latest: "No published research yet",
  },

  "South America": {
    insights: 0,
    datasets: 0,
    topics: [
      "Ecommerce",
      "Payments",
    ],
    latest: "No published research yet",
  },

  Oceania: {
    insights: 0,
    datasets: 0,
    topics: [
      "Cloud",
      "Data",
    ],
    latest: "No published research yet",
  },
};