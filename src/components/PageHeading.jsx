export default function PageHeading({ title, subtitle }) {
  return (
    <header className="flex flex-col gap-1.5">
      <h1 className="text-4xl font-bold text-cafe-text">{title}</h1>
      {subtitle && <p className="text-base text-cafe-muted">{subtitle}</p>}
    </header>
  );
}
