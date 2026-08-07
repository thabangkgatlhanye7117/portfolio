import Widget from "./Widget";

export default function FeaturedProjectWidget() {
  return (
    <Widget
      title="Featured Project"
      subtitle="Case Study"

    >
      <div className="grid gap-8 md:grid-cols-2">

        <div className="aspect-video rounded-2xl bg-zinc-800"></div>

        <div>

          <h3 className="text-4xl font-semibold">
            HAUS
          </h3>

          <p className="mt-4 text-zinc-400">
            A modern ecommerce experience
            inspired by editorial design,
            motion and immersive interaction.
          </p>

          <button className="mt-8 rounded-full border border-white px-6 py-3">
            View Case Study
          </button>

        </div>

      </div>
    </Widget>
  );
}