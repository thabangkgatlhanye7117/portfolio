import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Widget from "./Widget";

type Props = {
  setActiveTrack: Dispatch<SetStateAction<string>>;
};

export default function JourneyWidget({
  setActiveTrack,
}: Props) {
  const journey = [
    {
      year: "2024",
      title: "Frontend Development",
      description: "Building digital experiences and interfaces.",
      technologies: "React · TypeScript · WordPress",
      track: "frontend",
    },
    {
      year: "2025",
      title: "Digital Marketing",
      description: "Connecting products, people and growth.",
      technologies: "Ecommerce · SEO · CRM",
      track: "marketing",
    },
    {
      year: "2026",
      title: "Data Science & AI",
      description: "Turning data into insights and intelligent systems.",
      technologies: "Python · SQL · AI",
      track: "data",
    },
  ];

  return (
    <Widget title="Journey" subtitle="Timeline">
      <div className="relative space-y-2">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-4 bottom-4 w-px bg-zinc-800" />

        {journey.map((item, index) => (
          <motion.div
            key={item.year}
            onHoverStart={() => setActiveTrack(item.track)}
            onHoverEnd={() => setActiveTrack("")}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="relative cursor-pointer rounded-2xl p-3 pl-8"
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-zinc-900 bg-zinc-700"
              whileHover={{
                scale: 1.35,
                backgroundColor: "#3b82f6",
                boxShadow: "0 0 18px rgba(59,130,246,0.6)",
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Year */}
            <p className="text-sm font-medium text-zinc-500">
              {item.year}
            </p>

            {/* Title */}
            <motion.h3
              className="mt-1 text-lg font-medium text-zinc-300"
              whileHover={{
                color: "#ffffff",
              }}
            >
              {item.title}
            </motion.h3>

            {/* Description */}
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500">
              {item.description}
            </p>

            {/* Technologies / focus */}
            <p className="mt-3 text-xs tracking-wide text-zinc-600">
              {item.technologies}
            </p>
          </motion.div>
        ))}
      </div>
    </Widget>
  );
}