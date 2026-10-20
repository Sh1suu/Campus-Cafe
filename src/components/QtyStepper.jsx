import content from '../data/content';

const stepButton =
  'grid size-9 place-items-center rounded-[10px] bg-cafe-l100 text-lg font-bold text-cafe-dark transition hover:bg-cafe-l200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cafe-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-cafe-l100';

export default function QtyStepper({ value, onChange, min = 1 }) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        className={stepButton}
        aria-label={content.qty.decreaseLabel}
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
      >
        {content.qty.decrease}
      </button>
      <span className="w-8 text-center text-base font-semibold text-cafe-text">{value}</span>
      <button
        type="button"
        className={stepButton}
        aria-label={content.qty.increaseLabel}
        onClick={() => onChange(value + 1)}
      >
        {content.qty.increase}
      </button>
    </div>
  );
}
