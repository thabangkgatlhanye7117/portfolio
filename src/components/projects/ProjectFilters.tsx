type Props = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

const filters = [
  "All",
  "Data Products",
  "Data Science & AI",
  "Research & Insights",
  "Ecommerce",
  "Engineering",
];

export default function ProjectsFilters({
  activeFilter,
  setActiveFilter,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
              isActive
                ? "border-black bg-black text-white"
                : "border-zinc-300 bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}