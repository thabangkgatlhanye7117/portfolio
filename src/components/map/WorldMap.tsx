import Continents from "./Continents";
import { analyses } from "../../data/analyses";

type Props = {
  activeContinent: string;
  setActiveContinent: (continent: string) => void;
};

export default function WorldMap({
  activeContinent,
  setActiveContinent,
}: Props) {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black">
            Research Coverage
          </h3>

          <p className="text-sm text-zinc-400">
            Insights by continent
          </p>
        </div>

        <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
          ● Live
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 lg:flex-row">

        {/* Continents List */}
        <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-5 lg:w-64">

          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Continents
          </h4>

          <div className="space-y-4">
            {analyses.map((continent) => {
              const isActive =
                activeContinent === continent.continent;

              return (
                <div
                  key={continent.id}
                  onMouseEnter={() =>
                    setActiveContinent(continent.continent)
                  }
                  onMouseLeave={() =>
                    setActiveContinent("Africa")
                  }
                  className={`cursor-pointer rounded-xl border p-3 transition-all duration-300 ${
                    isActive
                      ? "border-white/20 bg-white/10"
                      : "border-transparent hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm font-medium text-white">
                      {continent.continent}
                    </span>

                    <span className="text-xs text-zinc-400">
                      {continent.analyses}
                    </span>

                  </div>

                  <div className="h-1.5 rounded-full bg-zinc-800">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isActive
                          ? "bg-cyan-400"
                          : "bg-white"
                      }`}
                      style={{
                        width: `${continent.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map */}
        <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6">

          <Continents
            activeContinent={activeContinent}
          />

        </div>
      </div>
    </div>
  );
}