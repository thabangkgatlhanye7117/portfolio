import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4">
        This page doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 rounded border px-6 py-3"
      >
        Go Home
      </Link>
    </main>
  );
}