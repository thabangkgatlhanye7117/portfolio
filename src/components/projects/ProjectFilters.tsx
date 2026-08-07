const filters = [
  "All",
  "Frontend",
  "Data Science",
  "CRM",
  "Marketing",
];

export default function ProjectsFilters() {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter) => (
        <button
          key={filter}
          className="rounded-full border border-zinc-300 px-5 py-2 transition hover:bg-black hover:text-white"
        >
          {filter}
        </button>
      ))}

    </div>
  );
}