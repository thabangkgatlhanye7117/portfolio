export default function BackgroundGrid() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `
          linear-gradient(#e5e5e5 1px, transparent 1px),
          linear-gradient(90deg, #e5e5e5 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        opacity: 0.5,
      }}
    />
  );
}