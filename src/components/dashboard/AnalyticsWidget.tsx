import Widget from "./Widget";

type Props = {
  activeContinent: string;
};

const researchData: Record<
  string,
  {
    insights: number;
    datasets: number;
    topics: string[];
    latest: string;
  }
> = {
  Africa: {
    insights: 12,
    datasets: 8,
    topics: ["Payments", "Retail", "AI"],
    latest: "Digital Payments in South Africa",
  },

  Europe: {
    insights: 5,
    datasets: 4,
    topics: ["AI", "Cloud", "Open Source"],
    latest: "Open Source AI Trends",
  },

  Asia: {
    insights: 4,
    datasets: 3,
    topics: ["AI", "Technology", "Ecommerce"],
    latest: "AI Adoption in Asia",
  },

  "North America": {
    insights: 8,
    datasets: 5,
    topics: ["Cloud", "AI", "Frontend"],
    latest: "The Growth of AI Engineering",
  },

  "South America": {
    insights: 3,
    datasets: 2,
    topics: ["Ecommerce", "Payments"],
    latest: "Ecommerce Growth",
  },

  Oceania: {
    insights: 2,
    datasets: 2,
    topics: ["Cloud", "Data"],
    latest: "Cloud Infrastructure Trends",
  },
};

export default function AnalyticsWidget({
  activeContinent,
}: Props) {
  const data =
    researchData[activeContinent] ?? researchData.Africa;

  return (
    <Widget
      title="Research Snapshot"
      subtitle={activeContinent}
    >
      <div className="grid grid-cols-2 gap-6">

        {/* Insights */}
        <div>
          <p className="text-zinc-500">
            Insights
          </p>

          <h3 className="mt-2 text-4xl">
            {data.insights}
          </h3>
        </div>

        {/* Datasets */}
        <div>
          <p className="text-zinc-500">
            Datasets
          </p>

          <h3 className="mt-2 text-4xl">
            {data.datasets}
          </h3>
        </div>

        {/* Topics */}
        <div>
          <p className="text-zinc-500">
            Topics
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {data.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Latest */}
        <div>
          <p className="text-zinc-500">
            Latest Insight
          </p>

          <h3 className="mt-2 text-lg font-medium leading-snug">
            {data.latest}
          </h3>
        </div>

      </div>
    </Widget>
  );
}