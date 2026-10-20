import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../context/useCart';
import content from '../data/content';
import formatPrice from '../utils/formatPrice';
import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
import OrderSummary from '../components/OrderSummary';
import EmptyState from '../components/EmptyState';
import Button from '../components/Button';

const inputClasses =
  'rounded-xl border border-cafe-l300 bg-white px-4 py-3.5 text-[15px] text-cafe-text placeholder:text-cafe-muted focus:outline-none focus:ring-2 focus:ring-cafe-primary';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [orderType, setOrderType] = useState(content.checkout.orderTypes[0].value);

  if (cart.isEmpty()) {
    return (
      <Page>
        <PageHeading title={content.checkout.title} />
        <EmptyState />
      </Page>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/confirmation', { state: { name: name.trim().split(' ')[0] } });
    clearCart();
  };

  return (
    <Page>
      <PageHeading title={content.checkout.title} subtitle={content.checkout.subtitle} />
      <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-start">
        <form
          id="checkout-form"
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-5 rounded-3xl border border-cafe-line bg-white p-7 lg:w-[760px] lg:shrink-0"
        >
          <h2 className="text-xl font-bold text-cafe-text">{content.checkout.formTitle}</h2>
          <label className="flex flex-col gap-2">
            <span className="text-[13px] font-medium text-cafe-muted">{content.checkout.name}</span>
            <input
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={content.checkout.namePlaceholder}
              className={inputClasses}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[13px] font-medium text-cafe-muted">
              {content.checkout.contact}
            </span>
            <input
              type="tel"
              required
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              placeholder={content.checkout.contactPlaceholder}
              className={inputClasses}
            />
          </label>
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 text-[13px] font-medium text-cafe-muted">
              {content.checkout.orderType}
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {content.checkout.orderTypes.map((option) => (
                <label key={option.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="orderType"
                    value={option.value}
                    checked={orderType === option.value}
                    onChange={() => setOrderType(option.value)}
                    className="peer sr-only"
                  />
                  <span className="flex items-center justify-center rounded-[14px] border border-cafe-l300 bg-white py-4 text-[15px] font-semibold text-cafe-muted transition hover:bg-cafe-l100 peer-checked:border-2 peer-checked:border-cafe-primary peer-checked:bg-cafe-l100 peer-checked:text-cafe-dark peer-focus-visible:ring-2 peer-focus-visible:ring-cafe-primary">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </form>
        <OrderSummary
          lines={cart.items.map((item) => [
            content.summary.line(item.quantity, item.product.name),
            formatPrice(item.getSubtotal()),
          ])}
          total={cart.getTotal()}
        >
          <Button type="submit" form="checkout-form" className="w-full">
            {content.checkout.placeOrder}
          </Button>
        </OrderSummary>
      </div>
    </Page>
  );
}
