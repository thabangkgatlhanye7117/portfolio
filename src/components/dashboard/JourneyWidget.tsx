import Widget from "./Widget";

export default function JourneyWidget() {
  const journey = [
    {
      year: "2024",
      title: "Frontend Development",
      hours: 720,
    },
    {
      year: "2025",
      title: "Digital Marketing",
      hours: 940,
    },
    {
      year: "2026",
      title: "Data Science & AI",
      hours: 1180,
    },
  ];

  return (
    <Widget
      title="Journey"
      subtitle="Timeline"
      
    >
      <div className="space-y-6">
        {journey.map((item) => (
          <div key={item.year}>
            <div className="flex justify-between">
              <span>{item.year}</span>
              <span>{item.hours} hrs</span>
            </div>

            <p className="mt-2 text-zinc-400">
              {item.title}
            </p>

            <div className="mt-3 h-2 rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: `${item.hours / 12}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Widget>
  );
}