import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";

export default function LandingHero() {
  const navigate = useNavigate();
  const [entering, setEntering] = useState(false);

  const handleEnter = () => {
    setEntering(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 900);
  };

  return (
    <section
      className={`mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 transition-all duration-700 lg:flex-row lg:justify-between ${
        entering
          ? "scale-95 opacity-0 blur-sm"
          : "scale-100 opacity-100"
      }`}
    >
      {/* Left */}
      <div className="max-w-2xl ">

        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 mt-8  text-sm text-zinc-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for opportunities
        </div>

        <h1 className="mt-8 text-2xl font-black leading-[0.9] tracking-tight text-zinc-950 sm:text-7xl lg:text-8xl">
          THABANG
          <br />
          KGATLHANYE
        </h1>

        <h2 className="mt-8 text-l font-light text-zinc-700">
          Data Product Engineer
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-l text-zinc-500">
          Building intelligent digital products through data,
          software engineering and user-centered design.
        </p>

        <button
          onClick={handleEnter}
          className={`group mt-8 flex items-center gap-3 rounded-full bg-black px-8 py-4 font-medium text-white transition-all duration-500 ${
            entering
              ? "scale-90 opacity-0"
              : "hover:scale-105"
          }`}
        >
          Enter Workspace

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>

      {/* Right */}
      <Avatar entering={entering} />

    </section>
  );
}