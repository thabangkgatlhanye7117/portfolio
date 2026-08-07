import Widget from "./Widget";

export default function AnalyticsWidget() {
  return (
    <Widget
      title="Analytics"
      subtitle="Live"
      
    >
      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-zinc-500">
            Visitors
          </p>

          <h3 className="mt-2 text-4xl">
            124
          </h3>
        </div>

        <div>
          <p className="text-zinc-500">
            Avg Session
          </p>

          <h3 className="mt-2 text-4xl">
            4m 18s
          </h3>
        </div>

        <div>
          <p className="text-zinc-500">
            Bounce Rate
          </p>

          <h3 className="mt-2 text-4xl">
            23%
          </h3>
        </div>

        <div>
          <p className="text-zinc-500">
            Top Project
          </p>

          <h3 className="mt-2 text-2xl">
            HAUS
          </h3>
        </div>

      </div>
    </Widget>
  );
}