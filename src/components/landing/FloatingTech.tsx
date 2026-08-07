const tech = [
  { label: "React", top: "8%", left: "-10%" },
  { label: "Python", top: "30%", right: "-12%" },
  { label: "SQL", bottom: "25%", left: "-12%" },
  { label: "AWS", bottom: "8%", right: "-8%" },
  { label: "AI", top: "60%", right: "-18%" },
  { label: "CRM", bottom: "-2%", left: "20%" },
];

export default function FloatingTech() {
  return (
    <>
      {tech.map((item) => (
        <div
          key={item.label}
          className="absolute rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm z-20 font-medium text-zinc-700 shadow-lg"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
        >
          {item.label}
        </div>
      ))}
    </>
  );
}