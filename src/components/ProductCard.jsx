import { Link } from 'react-router-dom';
import useCart from '../context/useCart';
import content from '../data/content';
import formatPrice from '../utils/formatPrice';
import Button from './Button';
import { CoffeeIcon } from './Icons';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="flex flex-col gap-3 rounded-[20px] border border-cafe-line bg-white p-4">
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col gap-3 rounded-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cafe-primary"
      >
        <div className={`grid h-[170px] place-items-center rounded-[14px] ${product.tint}`}>
          <CoffeeIcon className="size-16 text-cafe-primary" strokeWidth={1.5} />
        </div>
        <span className="w-fit rounded-lg bg-cafe-l200 px-2.5 py-1 text-xs font-medium text-cafe-dark">
          {product.category}
        </span>
        <h2 className="text-lg font-semibold text-cafe-text">{product.name}</h2>
      </Link>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-cafe-dark">{formatPrice(product.price)}</span>
        <Button onClick={() => addToCart(product)}>{content.card.addToCart}</Button>
      </div>
    </article>
  );
}
