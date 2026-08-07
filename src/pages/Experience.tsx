import ExperienceHero from "../components/experience/ExperienceHero";
import Timeline from "../components/experience/Timeline";
import CurrentFocus from "../components/experience/CurrentFocus";
import SkillsGrowth from "../components/experience/SkillsGrowth";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] px-5 py-24 md:px-10">

      <div className="mx-auto max-w-7xl space-y-8">

        <ExperienceHero />

        <section className="grid gap-6 lg:grid-cols-2">

          <Timeline />

          <CurrentFocus />

        </section>

        <SkillsGrowth />

      </div>

    </main>
  );
}