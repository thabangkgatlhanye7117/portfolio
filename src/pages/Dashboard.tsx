import GreetingWidget from "../components/dashboard/GreetingWidget";

export default function Dashboard() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-8">

      {/* Dashboard Grid */}
      <section className="grid gap-6 md:grid-cols-12">

        {/* Greeting Widget */}
        <div className="md:col-span-12">
            <GreetingWidget/>
        </div>

      </section>

    </main>
  );
}