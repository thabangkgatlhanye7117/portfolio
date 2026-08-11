import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-[32px] bg-zinc-900 p-8 text-white"
    >
      <p className="mb-3 uppercase tracking-[0.3em] text-zinc-500">
        Portfolio
      </p>

      <h1 className="text-5xl font-bold">
        Projects
      </h1>

      <p className="mt-5 max-w-2xl text-zinc-400">
        A collection of products, research,
        CRM experiences and intelligent systems
        built through design, development and data.
      </p>
    </motion.section>
  );
}