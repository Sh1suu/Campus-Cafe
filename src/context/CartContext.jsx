import { useCallback, useMemo, useRef, useState } from 'react';
import Cart from '../models/Cart';
import content from '../data/content';
import CartContext from './CartStore';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => new Cart());
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState({ message: '', visible: false });
  const timer = useRef(null);

  const showToast = useCallback((message) => {
    clearTimeout(timer.current);
    setToast({ message, visible: true });
    timer.current = setTimeout(
      () => setToast((current) => ({ ...current, visible: false })),
      content.toast.duration
    );
  }, []);

  const addToCart = useCallback(
    (product, quantity = 1) => {
      setCart((current) => current.addItem(product, quantity));
      showToast(content.toast.added(product.name));
    },
    [showToast]
  );

  const removeFromCart = useCallback(
    (productId) => setCart((current) => current.removeItem(productId)),
    []
  );

  const updateQty = useCallback(
    (productId, quantity) => setCart((current) => current.updateQuantity(productId, quantity)),
    []
  );

  const clearCart = useCallback(() => setCart((current) => current.clear()), []);

  const value = useMemo(
    () => ({
      cart,
      searchQuery,
      setSearchQuery,
      toast,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
    }),
    [cart, searchQuery, toast, addToCart, removeFromCart, updateQty, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
