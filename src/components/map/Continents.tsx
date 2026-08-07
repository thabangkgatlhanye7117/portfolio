import { motion } from "framer-motion";

type Props = {
  activeContinent: string;
};

const pins = {
  Africa: { left: "55%", top: "73%" },
  Europe: { left: "49%", top: "31%" },
  Asia: { left: "69%", top: "37%" },
  "North America": { left: "20%", top: "30%" },
  "South America": { left: "29%", top: "66%" },
  Oceania: { left: "85%", top: "72%" },
};

export default function Continents({
  activeContinent,
}: Props) {
  return (
    <div className="relative h-full w-full">

      <img
        src="/world.svg"
        alt="World Map"
        className="absolute inset-0 h-full w-full object-contain opacity-90"
      />

      {Object.entries(pins).map(([continent, pin]) => {
        const active =
          activeContinent === continent;

        return (
          <motion.div
            key={continent}
            className="absolute"
            style={{
              left: pin.left,
              top: pin.top,
            }}
            animate={{
              scale: active
                ? [1, 1.8, 1]
                : 1,

              opacity: active
                ? 1
                : 0.3,
            }}
            transition={{
              duration: 1.5,
              repeat: active
                ? Infinity
                : 0,
            }}
          >
            <div
              className={`h-3 w-3 rounded-full ${
                active
                  ? "bg-cyan-400 shadow-[0_0_25px_#22d3ee]"
                  : "bg-zinc-500"
              }`}

            />
          </motion.div>
        );
      })}
    </div>
  );
}