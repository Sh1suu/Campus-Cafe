import useCart from '../context/useCart';
import content from '../data/content';
import formatPrice from '../utils/formatPrice';
import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
import CartItemRow from '../components/CartItemRow';
import OrderSummary from '../components/OrderSummary';
import EmptyState from '../components/EmptyState';
import Button from '../components/Button';

export default function CartPage() {
  const { cart } = useCart();

  if (cart.isEmpty()) {
    return (
      <Page>
        <PageHeading title={content.cart.title} />
        <EmptyState />
      </Page>
    );
  }

  const count = cart.getItemCount();

  return (
    <Page>
      <PageHeading title={content.cart.title} subtitle={content.cart.itemCount(count)} />
      <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-start">
        <ul className="flex w-full flex-col gap-4 lg:w-[760px] lg:shrink-0">
          {cart.items.map((item) => (
            <CartItemRow key={item.product.id} item={item} />
          ))}
        </ul>
        <OrderSummary
          lines={[
            [content.summary.subtotal(count), formatPrice(cart.getTotal())],
            [content.summary.pickupFee, content.summary.free],
          ]}
          total={cart.getTotal()}
        >
          <Button to="/checkout" className="w-full">
            {content.cart.checkout}
          </Button>
          <Button to="/" variant="secondary" className="w-full">
            {content.cart.continueShopping}
          </Button>
        </OrderSummary>
      </div>
    </Page>
  );
}
