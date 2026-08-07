import Widget from "./Widget";

const skills = [
  "Python",
  "SQL",
  "React",
  "TypeScript",
  "Power BI",
  "AWS",
  "Docker",
  "Git",
];

export default function SkillsWidget() {
  return (
    <Widget
      title="Skills & Tools"
      subtitle="Stack"
      
    >
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-700 px-4 py-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </Widget>
  );
}