type Props = {
  project: any;
};

export default function ProjectCard({
  project,
}: Props) {
  return (
    <article className="rounded-[28px] border border-zinc-300 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-semibold">
          {project.title}
        </h2>

        <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm">
          {project.status}
        </span>

      </div>

      <p className="text-zinc-500">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}

      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">

          <span>Progress</span>

          <span>{project.progress}%</span>

        </div>

        <div className="h-2 rounded-full bg-zinc-200">

          <div
            className="h-full rounded-full bg-black"
            style={{
              width: `${project.progress}%`,
            }}
          />

        </div>

      </div>

    </article>
  );
}