import FloatingTech from "./FloatingTech";

export default function Avatar() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div className="absolute h-60 w-80 rounded-full bg-zinc-200 blur-3xl" />

      {/* Avatar */}
      <img
        src="/avatar.png"
        alt="Thabang Kgatlhanye"
        className="relative z-10 w-72 object-contain drop-shadow-2xl md:w-96"
      />

      <FloatingTech />

    </div>
  );
}