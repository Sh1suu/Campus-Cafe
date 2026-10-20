import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCart from '../context/useCart';
import { getProductById } from '../data/products';
import content from '../data/content';
import formatPrice from '../utils/formatPrice';
import Page from '../components/Page';
import Button from '../components/Button';
import QtyStepper from '../components/QtyStepper';
import { ArrowLeftIcon, CoffeeIcon } from '../components/Icons';

const backLink =
  'inline-flex items-center gap-2 rounded text-[15px] font-semibold text-cafe-dark hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cafe-primary';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = getProductById(id);

  if (!product) {
    return (
      <Page>
        <p className="mb-4 text-cafe-muted">{content.details.notFound}</p>
        <Link to="/" className={backLink}>
          <ArrowLeftIcon className="size-[18px]" />
          {content.details.back}
        </Link>
      </Page>
    );
  }

  return (
    <Page>
      <Link to="/" className={backLink}>
        <ArrowLeftIcon className="size-[18px]" />
        {content.details.back}
      </Link>
      <section className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
        <div
          className={`grid h-72 w-full place-items-center rounded-[28px] sm:h-96 lg:h-[520px] lg:w-[560px] lg:shrink-0 ${product.tint}`}
        >
          <CoffeeIcon className="size-40 text-cafe-primary" strokeWidth={1.25} />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <span className="w-fit rounded-[10px] bg-cafe-l200 px-3 py-1.5 text-[13px] font-medium text-cafe-dark">
            {product.category}
          </span>
          <h1 className="text-[40px] font-bold text-cafe-text">{product.name}</h1>
          <p className="text-3xl font-bold text-cafe-dark">{formatPrice(product.price)}</p>
          <p className="text-base text-cafe-muted">{product.description}</p>
          <hr className="border-cafe-line" />
          <div className="flex items-center gap-5">
            <span className="text-[15px] font-semibold text-cafe-text">
              {content.details.quantity}
            </span>
            <QtyStepper value={quantity} onChange={setQuantity} />
          </div>
          <Button className="w-full" onClick={() => addToCart(product, quantity)}>
            {content.details.addToCart}
          </Button>
        </div>
      </section>
    </Page>
  );
}
