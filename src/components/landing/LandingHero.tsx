import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pt-10 lg:flex-row lg:justify-between">

      {/* Left */}
      <div className="max-w-2xl">

        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for opportunities
        </div>

        <h1 className="mt-8 text-4xl font-black leading-[0.9] tracking-tight text-zinc-950 sm:text-7xl lg:text-8xl">
          THABANG
          <br />
          KGATLHANYE
        </h1>

        <h2 className="mt-8 text-xl font-light text-zinc-700">
          Creative Technologist
        </h2>

        <p className="mt-6 max-w-xl text-m leading-8 text-zinc-500">
          Building digital products where data science,
          frontend engineering and creative thinking
          intersect.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="group mt-12 flex items-center gap-3 rounded-full bg-black px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105"
        >
          Enter Workspace

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>

      {/* Right */}
      <Avatar />

    </section>
  );
}