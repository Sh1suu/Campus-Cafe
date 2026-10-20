import useCart from '../context/useCart';
import content from '../data/content';
import formatPrice from '../utils/formatPrice';
import Button from './Button';
import QtyStepper from './QtyStepper';
import { CoffeeIcon } from './Icons';

export default function CartItemRow({ item }) {
  const { updateQty, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <li className="flex flex-wrap items-center gap-5 rounded-[20px] border border-cafe-line bg-white p-4">
      <div className={`grid size-[88px] shrink-0 place-items-center rounded-[14px] ${product.tint}`}>
        <CoffeeIcon className="size-9 text-cafe-primary" strokeWidth={1.75} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h2 className="text-base font-semibold text-cafe-text">{product.name}</h2>
        <p className="text-[13px] text-cafe-muted">{product.category}</p>
        <p className="text-sm font-medium text-cafe-dark">
          {formatPrice(product.price)} {content.cart.each}
        </p>
      </div>
      <QtyStepper value={quantity} onChange={(next) => updateQty(product.id, next)} />
      <p className="w-[76px] text-right text-[17px] font-bold text-cafe-text">
        {formatPrice(item.getSubtotal())}
      </p>
      <Button variant="secondary" onClick={() => removeFromCart(product.id)}>
        {content.cart.remove}
      </Button>
    </li>
  );
}
