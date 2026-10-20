# Campus Café

Campus Café is a responsive campus coffee shop website where students can browse a menu of hot and iced coffee and pastries, search and sort products, manage a shopping cart, and place pickup or dine-in orders through a simple checkout flow. The interface uses a soft lavender color palette and Philippine peso pricing.

## Features

- Browse products by category and sort by price.
- Search the menu by product name.
- View product descriptions and choose quantities.
- Add products to the cart, change quantities, or remove them.
- Review an order summary and complete checkout.
- See an order confirmation after placing an order.

## Tech stack

- React
- Vite
- React Router
- Tailwind CSS

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Run the linter with:

```bash
npm run lint
```

## Application architecture

```mermaid
classDiagram
    direction TB

    class Product {
        +int id
        +string name
        +number price
        +string category
        +string description
        +string tint
    }

    class CartItem {
        +Product product
        +int quantity
        +getSubtotal() number
    }

    class Cart {
        +CartItem[] items
        +addItem(product, quantity) Cart
        +removeItem(productId) Cart
        +updateQuantity(productId, quantity) Cart
        +getTotal() number
        +getItemCount() int
        +isEmpty() boolean
        +clear() Cart
    }

    class CartContext {
        +Cart cart
        +string searchQuery
        +object toast
        +addToCart(product, quantity) void
        +removeFromCart(productId) void
        +updateQty(productId, quantity) void
        +clearCart() void
        +setSearchQuery(query) void
    }

    class CatalogPage {
        +string searchQuery
        +string category
        +string sortOrder
        +filterAndSortProducts() Product[]
    }

    class ProductDetailsPage {
        +Product product
        +int quantity
        +handleAddToCart() void
    }

    class CartPage {
        +CartItem[] items
    }

    class CheckoutPage {
        +string customerName
        +string contactNumber
        +string orderType
        +placeOrder() void
    }

    class Navbar {
        +navigation links
    }

    class SearchBar {
        +string query
        +onSearch(query) void
    }

    class CartBadge {
        +int itemCount
    }

    class Toast {
        +string message
        +boolean visible
    }

    class ProductCard {
        +Product product
        +handleAddToCart() void
    }

    CartItem "*" --> "1" Product : references
    Cart "1" *-- "*" CartItem : contains
    CartContext "1" o-- "1" Cart : manages

    Navbar *-- SearchBar : includes
    Navbar *-- CartBadge : includes
    CatalogPage *-- "*" ProductCard : renders
    ProductCard ..> Product : displays

    CatalogPage ..> CartContext : uses
    ProductDetailsPage ..> CartContext : uses
    CartPage ..> CartContext : uses
    CheckoutPage ..> CartContext : uses
    CartBadge ..> CartContext : reads item count
    Toast ..> CartContext : reads toast state
    SearchBar ..> CartContext : updates search query
```
