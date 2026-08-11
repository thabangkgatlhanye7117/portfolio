import { useState } from "react";
import { motion } from "framer-motion";

import { researchData } from "../data/researchData";
import { digitalPayments } from "../data/insights/digitalPayments";
import InsightCard from "../components/insights/InsightCard";

const continents = Object.keys(researchData);

export default function Insights() {
  const [activeContinent, setActiveContinent] =
    useState("Africa");

  const data = researchData[activeContinent];

  return (
    <main className="px-6 pb-20 pt-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Research & Analysis
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-black md:text-7xl">
            Insights
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Exploring data, technology and emerging patterns
            through research and analysis.
          </p>
        </motion.section>

        {/* Continent Navigation */}
        <section className="mt-10">
          <div className="flex flex-wrap gap-3">
            {continents.map((continent) => {
              const active =
                activeContinent === continent;

              return (
                <button
                  key={continent}
                  onClick={() =>
                    setActiveContinent(continent)
                  }
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                    active
                      ? "border-black bg-black text-white"
                      : "border-zinc-300 text-zinc-500 hover:border-zinc-500 hover:text-black"
                  }`}
                >
                  {continent}
                </button>
              );
            })}
          </div>
        </section>

        {/* Research Overview */}
        <motion.section
          key={activeContinent}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {/* Insights */}
          <div className="rounded-[28px] border border-zinc-200 bg-zinc-950 p-7">
            <p className="text-sm text-zinc-500">
              Insights
            </p>

            <h2 className="mt-3 text-5xl font-semibold text-white">
              {data.insights}
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              Research pieces
            </p>
          </div>

          {/* Datasets */}
          <div className="rounded-[28px] border border-zinc-200 bg-zinc-950 p-7">
            <p className="text-sm text-zinc-500">
              Datasets
            </p>

            <h2 className="mt-3 text-5xl font-semibold text-white">
              {data.datasets}
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              Data sources explored
            </p>
          </div>

          {/* Topics */}
          <div className="rounded-[28px] border border-zinc-200 bg-zinc-950 p-7">
            <p className="text-sm text-zinc-500">
              Topics
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {data.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Research */}
        <section className="mt-12">

          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Latest Research
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-black">
              Exploring {activeContinent}
            </h2>
          </div>

          {/* Insight Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Africa */}
            {activeContinent === "Africa" && (
              <InsightCard
                title={digitalPayments.title}
                region={digitalPayments.region}
                topic={digitalPayments.topic}
                summary={digitalPayments.summary}
                onExplore={() => {
                  console.log(
                    "Explore:",
                    digitalPayments.id
                  );
                }}
              />
            )}

          </div>
        </section>

      </div>
    </main>
  );
}