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
      hours: 720,
      track: "frontend",
    },
    {
      year: "2025",
      title: "Digital Marketing",
      hours: 940,
      track: "marketing",
    },
    {
      year: "2026",
      title: "Data Science & AI",
      hours: 1180,
      track: "data",
    },
  ];

  return (
    <Widget title="Journey" subtitle="Timeline">
      <div className="space-y-6">
        {journey.map((item) => (
          <motion.div
            key={item.year}
            onHoverStart={() => setActiveTrack(item.track)}
            onHoverEnd={() => setActiveTrack("")}
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.2,
            }}
            className="cursor-pointer rounded-xl p-3"
          >
            <div className="flex justify-between">
              <span className="text-zinc-400">
                {item.year}
              </span>

              <span className="text-zinc-500">
                {item.hours} hrs
              </span>
            </div>

            <motion.p
              className="mt-2 text-zinc-400"
              whileHover={{
                color: "#ffffff",
              }}
            >
              {item.title}
            </motion.p>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${item.hours / 12}%`,
                }}
                whileHover={{
                  backgroundColor: "#3b82f6",
                }}
                initial={{
                  backgroundColor: "#ffffff",
                }}
                transition={{
                  duration: 0.25,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Widget>
  );
}