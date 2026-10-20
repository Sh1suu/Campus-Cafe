import Product from '../models/Product';

const tints = ['bg-cafe-l100', 'bg-cafe-pink', 'bg-cafe-blue', 'bg-cafe-lilac'];

const rawProducts = [
  {
    id: 1,
    name: 'Caramel Latte',
    price: 120,
    category: 'Hot Coffee',
    description:
      'A smooth espresso blended with steamed milk and a rich caramel drizzle. Served hot and made to power you through early morning classes.',
  },
  {
    id: 2,
    name: 'Americano',
    price: 95,
    category: 'Hot Coffee',
    description:
      'Bold espresso topped with hot water for a clean, classic cup that keeps you focused through long study sessions.',
  },
  {
    id: 3,
    name: 'Cappuccino',
    price: 115,
    category: 'Hot Coffee',
    description:
      'Equal parts espresso, steamed milk and velvety foam, finished with a light dusting of cocoa.',
  },
  {
    id: 4,
    name: 'Iced Spanish Latte',
    price: 140,
    category: 'Iced Coffee',
    description:
      'Espresso poured over ice with creamy milk and sweetened condensed milk for a rich, chilled treat.',
  },
  {
    id: 5,
    name: 'Cold Brew',
    price: 125,
    category: 'Iced Coffee',
    description:
      'Coffee steeped slowly for twelve hours, resulting in a super smooth, low-acid brew served over ice.',
  },
  {
    id: 6,
    name: 'Iced Matcha Latte',
    price: 135,
    category: 'Iced Coffee',
    description:
      'Ceremonial-grade matcha whisked with cold milk and ice for a refreshing, earthy sip.',
  },
  {
    id: 7,
    name: 'Butter Croissant',
    price: 85,
    category: 'Pastries',
    description:
      'Flaky, golden layers baked fresh every morning. Perfect on its own or paired with your favorite coffee.',
  },
  {
    id: 8,
    name: 'Blueberry Muffin',
    price: 90,
    category: 'Pastries',
    description:
      'A soft, buttery muffin bursting with blueberries and finished with a crunchy sugar top.',
  },
];

const products = rawProducts.map(
  (product, index) => new Product({ ...product, tint: tints[index % tints.length] })
);

export const getProductById = (id) => products.find((product) => String(product.id) === String(id));

export default products;
