import Widget from "./Widget";
import { researchData } from "../../data/researchData";

type Props = {
  activeContinent: string;
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