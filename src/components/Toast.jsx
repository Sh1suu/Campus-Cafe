import { Link } from 'react-router-dom';
import useCart from '../context/useCart';
import content from '../data/content';
import { CheckIcon } from './Icons';

export default function Toast() {
  const { toast } = useCart();

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed right-4 top-24 z-50 flex items-center gap-3 rounded-2xl border border-cafe-l300 bg-white py-3.5 pl-4 pr-[22px] shadow-[0_8px_24px_rgba(107,79,184,0.2)] transition duration-300 md:right-12 ${
        toast.visible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
      }`}
    >
      <span className="grid size-7 place-items-center rounded-full bg-cafe-primary text-white">
        <CheckIcon className="size-4" strokeWidth={2.5} />
      </span>
      <span className="text-sm font-medium text-cafe-text">{toast.message}</span>
      <Link
        to="/cart"
        className="text-sm font-semibold text-cafe-primary hover:text-cafe-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-cafe-primary"
      >
        {content.toast.viewCart}
      </Link>
    </div>
  );
}
