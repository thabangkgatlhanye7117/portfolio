import ContactHero from "../components/contact/ContactHero";
import AvailabilityCard from "../components/contact/AvailabilityCard";
import SocialLinks from "../components/contact/SocialLinks";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] px-5 py-24 md:px-10">

      <div className="mx-auto max-w-7xl space-y-8">

        <ContactHero />

        <section className="grid gap-6 lg:grid-cols-2">

          <AvailabilityCard />

          <SocialLinks />

        </section>

        <ContactForm />

      </div>

    </main>
  );
}