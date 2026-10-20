import CartItem from './CartItem';

export default class Cart {
  constructor(items = []) {
    this.items = items;
  }

  addItem(product, quantity = 1) {
    const found = this.items.find((item) => item.product.id === product.id);
    const items = found
      ? this.items.map((item) =>
          item === found ? new CartItem(item.product, item.quantity + quantity) : item
        )
      : [...this.items, new CartItem(product, quantity)];
    return new Cart(items);
  }

  removeItem(productId) {
    return new Cart(this.items.filter((item) => item.product.id !== productId));
  }

  updateQuantity(productId, quantity) {
    if (quantity < 1) return this.removeItem(productId);
    return new Cart(
      this.items.map((item) =>
        item.product.id === productId ? new CartItem(item.product, quantity) : item
      )
    );
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.getSubtotal(), 0);
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    return new Cart();
  }
}
