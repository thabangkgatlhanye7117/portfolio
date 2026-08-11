import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-[#F5F5F3]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Identity */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              THABANG KGATLHANYE
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
              Data scientist and frontend developer building data products,
              digital experiences and ecommerce systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-400">
              Explore
            </p>

            <nav className="flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="text-zinc-600 transition hover:text-black"
              >
                Dashboard
              </Link>

              <Link
                to="/projects"
                className="text-zinc-600 transition hover:text-black"
              >
                Projects
              </Link>

              <Link
                to="/experience"
                className="text-zinc-600 transition hover:text-black"
              >
                Experience
              </Link>

              <Link
                to="/insights"
                className="text-zinc-600 transition hover:text-black"
              >
                Insights
              </Link>

              <Link
                to="/contact"
                className="text-zinc-600 transition hover:text-black"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-400">
              Connect
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/thabangkgatlhanye7117"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition hover:text-black"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition hover:text-black"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:thabangkgatlhanye7117@gmail.com"
                className="text-zinc-600 transition hover:text-black"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Thabang Kgatlhanye
          </p>

          <p>
            Data × Product × Engineering 
          </p>
        </div>
      </div>
    </footer>
  );
}