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
    <div className="fixed inset-0 z-50 flex flex-col bg-black">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-bold">THABANG</h2>

        <button
          onClick={onClose}
          className="text-3xl"
        >
          ✕
        </button>
      </div>

      <nav className="flex flex-1 flex-col items-center justify-center gap-10">
        {navigation.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            onClick={onClose}
            className="text-4xl font-semibold"
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}