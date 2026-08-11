type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}: Props) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      placeholder="Search projects..."
      className="w-full rounded-2xl border border-zinc-300 bg-white p-4 text-black outline-none transition focus:border-black"
    />
  );
}