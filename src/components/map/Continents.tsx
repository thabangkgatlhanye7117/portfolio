import { motion } from "framer-motion";

type Props = {
  activeContinent: string;
};

export default function Continents({
  activeContinent,
}: Props) {
  const fill = (continent: string) =>
    activeContinent === continent
      ? "#ffffff"
      : "#3f3f46";

  return (
    <svg
      viewBox="0 0 900 500"
      className="h-full w-full"
    >
      <motion.ellipse
        cx="170"
        cy="130"
        rx="90"
        ry="60"
        fill={fill("North America")}
        animate={{ scale: activeContinent === "North America" ? 1.05 : 1 }}
      />

      <motion.ellipse
        cx="250"
        cy="320"
        rx="45"
        ry="80"
        fill={fill("South America")}
        animate={{ scale: activeContinent === "South America" ? 1.05 : 1 }}
      />

      <motion.ellipse
        cx="430"
        cy="120"
        rx="55"
        ry="35"
        fill={fill("Europe")}
        animate={{ scale: activeContinent === "Europe" ? 1.05 : 1 }}
      />

      <motion.ellipse
        cx="470"
        cy="260"
        rx="65"
        ry="90"
        fill={fill("Africa")}
        animate={{ scale: activeContinent === "Africa" ? 1.05 : 1 }}
      />

      <motion.ellipse
        cx="650"
        cy="180"
        rx="140"
        ry="80"
        fill={fill("Asia")}
        animate={{ scale: activeContinent === "Asia" ? 1.05 : 1 }}
      />

      <motion.ellipse
        cx="730"
        cy="360"
        rx="55"
        ry="35"
        fill={fill("Oceania")}
        animate={{ scale: activeContinent === "Oceania" ? 1.05 : 1 }}
      />
    </svg>
  );
}