type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
  progress: number;
  technologies: string[];
  category?: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="rounded-[28px] border border-zinc-300 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">
            {project.title}
          </h2>

          {project.category && (
            <p className="mt-1 text-sm text-zinc-400">
              {project.category}
            </p>
          )}
        </div>

        <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-sm">
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-zinc-500">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-200">
          <div
            className="h-full rounded-full bg-black transition-all duration-500"
            style={{
              width: `${project.progress}%`,
            }}
          />
        </div>
      </div>

    </article>
  );
}