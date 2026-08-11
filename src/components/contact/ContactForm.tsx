import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <section className="rounded-[32px] bg-zinc-900 p-8 text-white">
        <div className="py-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Message Sent
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Thanks for reaching out.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            Your message has been received. I'll get back to you as soon as
            possible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-[32px] bg-zinc-900 p-8 text-white">
      <h2 className="mb-8 text-2xl font-semibold">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-2xl border border-zinc-800 bg-transparent p-4 outline-none transition focus:border-white"
          />

          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="mt-2 text-sm text-red-400"
          />
        </div>

        {/* Email */}
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full rounded-2xl border border-zinc-800 bg-transparent p-4 outline-none transition focus:border-white"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-400"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell me about your project..."
            required
            className="w-full resize-none rounded-2xl border border-zinc-800 bg-transparent p-4 outline-none transition focus:border-white"
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-sm text-red-400"
          />
        </div>

        {/* Form-level error */}
        {state.errors && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

      </form>
    </section>
  );
}