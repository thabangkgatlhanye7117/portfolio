import ProjectsHero from "../components/projects/ProjectsHero";
import SearchBar from "../components/projects/SearchBar";
import ProjectsFilters from "../components/projects/ProjectFilters";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] px-5 py-24 md:px-10">

      <div className="mx-auto max-w-7xl space-y-8">

        <ProjectsHero />

        <SearchBar />

        <ProjectsFilters />

        <section className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </section>

      </div>

    </main>
  );
}