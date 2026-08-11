export default function AvailabilityCard() {
  return (
    <section className="rounded-[32px] bg-zinc-900 p-8 text-white">

      <h2 className="mb-8 text-2xl font-semibold">
        Availability
      </h2>

      <div className="space-y-6">

        <div className="flex justify-between">
          <span className="text-zinc-400">Status</span>
          <span className="text-emerald-400">
            Available
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Location</span>
          <span>Johannesburg</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Response</span>
          <span>Within 48 Hours</span>
        </div>

      </div>

    </section>
  );
}