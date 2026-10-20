const content = {
  currency: '₱',
  brand: 'Campus Café',
  nav: { menu: 'Menu', cart: 'Cart', cartLabel: 'View cart' },
  search: { placeholder: 'Search products by name…', label: 'Search products' },
  card: { addToCart: 'Add to Cart' },
  qty: {
    decrease: '−',
    increase: '+',
    decreaseLabel: 'Decrease quantity',
    increaseLabel: 'Increase quantity',
  },
  toast: {
    duration: 2500,
    added: (name) => `${name} added to cart`,
    viewCart: 'View Cart',
  },
  catalog: {
    title: 'Our Menu',
    subtitle: 'Freshly brewed picks for every student',
    allLabel: 'All',
    categories: ['Hot Coffee', 'Iced Coffee', 'Pastries'],
    sortOptions: [
      { value: 'asc', label: 'Sort: Price, low to high' },
      { value: 'desc', label: 'Sort: Price, high to low' },
    ],
    sortLabel: 'Sort products',
    noResults: 'No products match your search.',
  },
  details: {
    back: 'Back to Menu',
    quantity: 'Quantity',
    addToCart: 'Add to Cart',
    notFound: 'Product not found.',
  },
  cart: {
    title: 'Your Cart',
    itemCount: (n) => `${n} ${n === 1 ? 'item' : 'items'} in your cart`,
    each: 'each',
    remove: 'Remove',
    emptyMessage: 'Your cart is empty',
    emptyCta: 'Browse the Menu',
    checkout: 'Proceed to Checkout',
    continueShopping: 'Continue Shopping',
  },
  summary: {
    title: 'Order Summary',
    subtotal: (n) => `Subtotal (${n} ${n === 1 ? 'item' : 'items'})`,
    pickupFee: 'Pickup fee',
    free: 'Free',
    total: 'Total',
    line: (qty, name) => `${qty} × ${name}`,
  },
  checkout: {
    title: 'Checkout',
    subtitle: 'Just a few details and your order is on its way',
    formTitle: 'Customer Details',
    name: 'Full name',
    namePlaceholder: 'Juan Dela Cruz',
    contact: 'Contact number',
    contactPlaceholder: '09XX XXX XXXX',
    orderType: 'Order type',
    orderTypes: [
      { value: 'pickup', label: 'Pickup' },
      { value: 'dine-in', label: 'Dine-in' },
    ],
    placeOrder: 'Place Order',
  },
  confirmation: {
    title: 'Order placed!',
    message: (name) =>
      `Thank you, ${name}! Your order is being prepared and will be ready for pickup shortly.`,
    fallbackName: 'friend',
    cta: 'Back to Menu',
  },
};

export default content;
