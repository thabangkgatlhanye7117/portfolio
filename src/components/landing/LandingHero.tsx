import { useNavigate } from "react-router-dom";

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <h1 className="text-center text-6xl font-bold tracking-tight md:text-8xl">
        THABANG
        <br />
        KGATLHANYE
      </h1>

      <p className="mt-6 text-center text-lg text-zinc-400 md:text-xl">
        Data Scientist × Front-End Developer
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-12 rounded-full border border-zinc-700 px-8 py-4 transition hover:border-white hover:bg-white hover:text-black"
      >
        Enter Workspace
      </button>
    </section>
  );
}