const skills = [
  {
    name: "React",
    level: 90,
  },
  {
    name: "Python",
    level: 75,
  },
  {
    name: "SQL",
    level: 80,
  },
  {
    name: "Power BI",
    level: 70,
  },
  {
    name: "AWS",
    level: 65,
  },
];

export default function SkillsGrowth() {
  return (
    <section className="rounded-[32px] bg-zinc-900 p-8 text-white">

      <h2 className="mb-8 text-2xl font-semibold">
        Skills Growth
      </h2>

      <div className="space-y-6">

        {skills.map((skill) => (
          <div key={skill.name}>

            <div className="mb-2 flex justify-between">

              <span>{skill.name}</span>

              <span>{skill.level}%</span>

            </div>

            <div className="h-2 rounded-full bg-zinc-800">

              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: `${skill.level}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}