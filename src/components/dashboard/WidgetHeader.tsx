type WidgetHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function WidgetHeader({
  title,
  subtitle,
}: WidgetHeaderProps) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        {subtitle}
      </p>

      <h2 className="mt-2 text-2xl font-semibold">
        {title}
      </h2>
    </>
  );
}