type Props = {
  title: string;
  region: string;
  topic: string;
  summary: string;
  onExplore: () => void;
};

export default function InsightCard({
  title,
  region,
  topic,
  summary,
  onExplore,
}: Props) {
  return (
    <article className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-7 transition hover:border-zinc-600">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.2em] text-cyan-400">
          {region}
        </span>

        <span className="text-xs text-zinc-500">
          {topic}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-400">
        {summary}
      </p>

      <button
        onClick={onExplore}
        className="mt-7 rounded-full border border-zinc-700 px-5 py-2.5 text-sm text-white transition hover:border-white"
      >
        Explore insight →
      </button>
    </article>
  );
}