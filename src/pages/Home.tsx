import BackgroundGrid from "../components/landing/BackgroundGrid";
import LandingHero from "../components/landing/LandingHero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F5F5F3]">
      <BackgroundGrid />
      <LandingHero />
    </main>
  );
}