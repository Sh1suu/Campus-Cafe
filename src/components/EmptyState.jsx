import content from '../data/content';
import Button from './Button';
import { CartIcon } from './Icons';

export default function EmptyState() {
  return (
    <div className="mt-7 flex flex-col items-center gap-4 rounded-3xl border border-cafe-line bg-white px-6 py-16 text-center">
      <span className="grid size-[72px] place-items-center rounded-full bg-cafe-l200 text-cafe-dark">
        <CartIcon className="size-9" />
      </span>
      <p className="text-lg font-semibold text-cafe-text">{content.cart.emptyMessage}</p>
      <Button to="/">{content.cart.emptyCta}</Button>
    </div>
  );
}
