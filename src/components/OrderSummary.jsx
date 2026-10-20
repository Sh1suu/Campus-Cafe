import content from '../data/content';
import formatPrice from '../utils/formatPrice';

export default function OrderSummary({ lines, total, children }) {
  return (
    <aside className="flex w-full flex-col gap-4 rounded-3xl border border-cafe-line bg-white p-6 lg:w-[380px] lg:shrink-0">
      <h2 className="text-xl font-bold text-cafe-text">{content.summary.title}</h2>
      {lines.map(([label, value]) => (
        <div key={label} className="flex items-center justify-between text-sm">
          <span className="text-cafe-muted">{label}</span>
          <span className="font-semibold text-cafe-text">{value}</span>
        </div>
      ))}
      <hr className="border-cafe-line" />
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-cafe-text">{content.summary.total}</span>
        <span className="text-[26px] font-bold text-cafe-dark">{formatPrice(total)}</span>
      </div>
      {children}
    </aside>
  );
}
