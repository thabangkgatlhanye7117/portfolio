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
    <section className="rounded-[32px] bg-zinc-900 p-10 text-white">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Workspace
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            {greeting},
            <br />
            Visitor.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Welcome to my workspace where data,
            design and engineering come together.
          </p>

        </div>

        <div className="text-right">

          <p className="text-5xl font-light">
            {time}
          </p>

          <p className="mt-2 text-zinc-500">
            {date}
          </p>

          <div className="mt-8 flex items-center justify-end gap-2">

            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-sm text-zinc-400">
              Workspace Online
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}