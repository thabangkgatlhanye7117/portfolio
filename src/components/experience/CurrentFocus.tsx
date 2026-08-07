const focus = [
  "Data Science",
  "Machine Learning",
  "AWS",
  "React",
  "Creative Technology",
];

export default function CurrentFocus() {
  return (
    <section className="rounded-[32px] bg-zinc-900 p-8 text-white">

      <h2 className="mb-6 text-2xl font-semibold">
        Current Focus
      </h2>

      <div className="flex flex-wrap gap-3">

        {focus.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-800 px-4 py-2"
          >
            {item}
          </span>
        ))}

      </div>

    </section>
  );
}