import { useMemo, useState } from "react";

import ProjectsHero from "../components/projects/ProjectsHero";
import SearchBar from "../components/projects/SearchBar";
import ProjectsFilters from "../components/projects/ProjectFilters";
import ProjectCard from "../components/projects/ProjectCard";

import { projects } from "../data/projects";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search
      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.status.toLowerCase().includes(query) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(query)
        );

      // Category filter
      const matchesFilter =
        activeFilter === "All" ||
        project.category === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <main className="min-h-screen bg-[#F5F5F3] px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Hero */}
        <ProjectsHero />

        {/* Search */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Filters */}
        <ProjectsFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Project Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-500">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1
              ? "project"
              : "projects"}
          </p>

          {activeFilter !== "All" && (
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="text-sm text-zinc-500 underline underline-offset-4 hover:text-black"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Projects */}
        {filteredProjects.length > 0 ? (
          <section className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </section>
        ) : (
          <section className="rounded-[28px] border border-zinc-300 bg-white p-12 text-center">
            <h2 className="text-xl font-semibold text-black">
              No projects found
            </h2>

            <p className="mt-2 text-zinc-500">
              Try another search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="mt-6 rounded-full bg-black px-5 py-2 text-sm text-white transition hover:bg-zinc-800"
            >
              Show all projects
            </button>
          </section>
        )}

      </div>
    </main>
  );
}