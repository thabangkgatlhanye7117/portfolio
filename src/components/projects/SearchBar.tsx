export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      className="w-full rounded-2xl border border-zinc-800 bg-white p-4 outline-none transition focus:border-black"
    />
  );
}