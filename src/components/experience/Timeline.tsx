import { experience } from "../../data/experience";

export default function Timeline() {
  return (
    <section className="rounded-[32px] bg-zinc-900 p-8 text-white">

      <h2 className="mb-8 text-2xl font-semibold">
        Career Timeline
      </h2>

      <div className="space-y-8">

        {experience.map((item) => (
          <div
            key={item.year}
            className="border-l-2 border-zinc-700 pl-6"
          >
            <p className="text-sm uppercase tracking-wider text-zinc-500">
              {item.year}
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}