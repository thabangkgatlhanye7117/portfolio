import type { ReactNode } from "react";

type WidgetProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Widget({
  title,
  subtitle,
  children,
  className = "",
}: WidgetProps) {
  return (
    <section
      className={`rounded-[32px] border border-zinc-800 bg-zinc-900 p-8 text-white ${className}`}
    >
      <div className="mb-8">
        {subtitle && (
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            {subtitle}
          </p>
        )}

        <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
      </div>

      {children}
    </section>
  );
}