import { useState } from "react";
import Continents from "./Continents";
import { visitors } from "../../data/visitors";

export default function WorldMap() {
  const [activeContinent, setActiveContinent] =
    useState("Africa");

  return (
    <div className="flex h-full flex-col">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black">
            Visitor Distribution
          </h3>

          <p className="text-sm text-zinc-400">
            Last 30 days
          </p>
        </div>

        <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
          ● Live
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 lg:flex-row">

    

        {/* Visitors List */}
        <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-5 lg:w-64">

          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Active Regions
          </h4>

          <div className="space-y-4">

            {visitors.map((country) => (
              <div
                key={country.id}
                onMouseEnter={() =>
                  setActiveContinent(country.continent)
                }
                onMouseLeave={() =>
                  setActiveContinent("Africa")
                }
                className={`cursor-pointer rounded-xl border p-3 transition-all duration-300 ${
                  country.active
                    ? "border-white/20 bg-white/10"
                    : "border-transparent hover:border-zinc-700 hover:bg-zinc-900"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">

                  <span className="text-sm font-medium text-white">
                    {country.country}
                  </span>

                  <span className="text-xs text-zinc-400">
                    {country.visitors}
                  </span>

                </div>

                <div className="h-1.5 rounded-full bg-zinc-800">

                  <div
                    className="h-full rounded-full bg-white transition-all duration-500"
                    style={{
                      width: `${country.percentage}%`,
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

        </div>
         {/* Map */}
        <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6">

          <Continents activeContinent={activeContinent} />

        </div>

      </div>

    </div>
  );
}