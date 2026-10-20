import { Link } from 'react-router-dom';
import useCart from '../context/useCart';
import content from '../data/content';
import { CartIcon } from './Icons';

export default function CartBadge() {
  const { cart } = useCart();

  return (
    <Link
      to="/cart"
      aria-label={content.nav.cartLabel}
      className="flex items-center gap-2 rounded-full bg-cafe-l100 py-2.5 pl-4 pr-3 text-[15px] font-semibold text-cafe-dark transition hover:bg-cafe-l200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cafe-primary"
    >
      <CartIcon className="size-5" />
      <span>{content.nav.cart}</span>
      <span className="grid size-6 place-items-center rounded-full bg-cafe-primary text-xs font-bold text-white">
        {cart.getItemCount()}
      </span>
    </Link>
  );
}
