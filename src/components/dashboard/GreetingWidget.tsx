import Widget from "./Widget";

export default function GreetingWidget() {
  const now = new Date();

  const hour = now.getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const date = now.toLocaleDateString("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-ZA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Widget
      title={`${greeting}.`}
      subtitle="Workspace"
      
    >
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">

        <div>
          <p className="max-w-xl text-lg text-zinc-400">
            Welcome to my workspace.<br/> Explore the projects, technologies
             and ideas shaping my journey as a Data Product Engineer.
          </p>
        </div>

        <div className="text-right">
          <p className="text-5xl font-light">
            {time}
          </p>

          <p className="mt-2 text-zinc-500">
            {date}
          </p>

          <div className="mt-6 flex justify-end gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

            <span className="text-zinc-400">
              Workspace Online
            </span>
          </div>
        </div>

      </div>
    </Widget>
  );
}