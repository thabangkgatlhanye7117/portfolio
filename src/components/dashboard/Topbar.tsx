import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";


export default function Topbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <NavLink
          to="/dashboard"
          className="text-xl sm:text-l font-bold tracking-widest"
        >
          THABANG KGATLHANYE
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-zinc-900"
                  : "text-zinc-500 hover:text-black transition"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden"
            >
          ☰
        </button>

      </div>
    </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
   </>
  );
}
