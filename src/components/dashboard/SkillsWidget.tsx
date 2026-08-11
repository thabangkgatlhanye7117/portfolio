import Widget from "./Widget";
import { skills } from "../../data/skills";

type Props = {
  activeTrack: string;
};



export default function SkillsWidget({ activeTrack }: Props) {
  return (
    <Widget title="Skills & Tools" subtitle="Stack">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          const isActive =
            activeTrack !== "" &&
            skill.tracks.includes(activeTrack);

          const isDimmed =
            activeTrack !== "" && !isActive;

          return (
            <span
              key={skill.name}
              className={`
                rounded-full
                border
                px-4
                py-2
                transition-all
                duration-300
                ${
                  isActive
                    ? "border-blue-500 bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                    : isDimmed
                    ? "border-zinc-700 text-zinc-500 opacity-40"
                    : "border-zinc-700 text-white"
                }
              `}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </Widget>
  );
}