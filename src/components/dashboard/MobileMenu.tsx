import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
      />

      {/* Menu */}
      <div className="fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-[28px] bg-zinc-950 p-5 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-[0.2em]">
            THABANG
          </h2>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex flex-col gap-2">
          {navigation.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-2xl px-5 py-4 text-lg font-medium transition-all ${
                  isActive
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Small footer */}
        <div className="mt-6 border-t border-zinc-800 pt-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Data · Engineering · Creative Technology
          </p>
        </div>
      </div>
    </>
  );
}
