import FloatingTech from "./FloatingTech";

type AvatarProps = {
  entering: boolean;
};

export default function Avatar({ entering }: AvatarProps) {
  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-700 ${
        entering
          ? "translate-y-10 scale-90 opacity-0"
          : "translate-y-0 scale-100 opacity-100"
      }`}
    >
      <div className="absolute h-60 w-60 rounded-full bg-zinc-200 blur-3xl" />

      <img
        src="/avatar.png"
        alt="Thabang Kgatlhanye"
        className="relative z-10 w-62 object-contain drop-shadow-2xl md:w-96"
      />

      <FloatingTech />
    </div>
  );
}