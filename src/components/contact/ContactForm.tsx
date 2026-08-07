export default function ContactForm() {
  return (
    <section className="rounded-[32px] bg-zinc-900 p-8 text-white">

      <h2 className="mb-8 text-2xl font-semibold">
        Send a Message
      </h2>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-2xl border border-zinc-800 bg-transparent p-4 outline-none focus:border-white"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-zinc-800 bg-transparent p-4 outline-none focus:border-white"
        />

        <textarea
          rows={6}
          placeholder="Tell me about your project..."
          className="w-full rounded-2xl border border-zinc-800 bg-transparent p-4 outline-none focus:border-white"
        />

        <button
          type="submit"
          className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}