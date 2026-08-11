import { Link } from "react-router-dom";
import Widget from "./Widget";
import { projects } from "../../data/projects";

export default function FeaturedProjectWidget() {
  const featuredProject = projects.find(
    (project) => project.id === "haus"
  );

  if (!featuredProject) {
    return null;
  }

  return (
    <Widget
      title="Featured Project"
      subtitle="Case Study"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {/* Project Preview */}
        <div className="flex aspect-video items-center justify-center rounded-2xl bg-zinc-800">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            {featuredProject.category}
          </span>
        </div>

        {/* Project Information */}
        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-4xl font-semibold">
              {featuredProject.title}
            </h3>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400">
              {featuredProject.status}
            </span>
          </div>

          <p className="mt-4 text-zinc-400">
            {featuredProject.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {featuredProject.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs text-zinc-500">
              <span>Progress</span>
              <span>{featuredProject.progress}%</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: `${featuredProject.progress}%`,
                }}
              />
            </div>
          </div>

          {/* Link */}
          <Link
            to={`/projects/${featuredProject.id}`}
            className="mt-8 inline-flex rounded-full border border-white px-6 py-3 text-sm transition hover:bg-white hover:text-black"
          >
            View Case Study →
          </Link>
        </div>
      </div>
    </Widget>
  );
}