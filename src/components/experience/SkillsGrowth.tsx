const skillGroups = [
  {
    title: "Data & AI",
    skills: [
      "Python",
      "SQL",
      "Data Analysis",
      "Statistics",
      "Machine Learning",
      "Power BI",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "Git",
      "AWS",
    ],
  },
  {
    title: "Product & Growth",
    skills: [
      "Digital Marketing",
      "Ecommerce",
      "CRM",
      "Research",
      "Analytics",
      "Social Listening",
    ],
  },
];

export default function SkillsGrowth() {
  return (
    <section className="rounded-[32px] bg-zinc-900 p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Capabilities
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Skills & Capabilities
        </h2>
      </div>

      {/* Skill Groups */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-medium text-zinc-400">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 px-3 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}