import { useMemo, useState } from 'react';
import useCart from '../context/useCart';
import products from '../data/products';
import content from '../data/content';
import Page from '../components/Page';
import PageHeading from '../components/PageHeading';
import ProductCard from '../components/ProductCard';
import { ChevronDownIcon } from '../components/Icons';

const categoryOptions = [
  { value: 'all', label: content.catalog.allLabel },
  ...content.catalog.categories.map((category) => ({ value: category, label: category })),
];

export default function CatalogPage() {
  const { searchQuery } = useCart();
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState(content.catalog.sortOptions[0].value);

  const visibleProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products
      .filter(
        (product) =>
          (category === 'all' || product.category === category) &&
          product.name.toLowerCase().includes(query)
      )
      .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  }, [searchQuery, category, sortOrder]);

  return (
    <Page>
      <PageHeading title={content.catalog.title} subtitle={content.catalog.subtitle} />
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2.5">
          {categoryOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={category === option.value}
              onClick={() => setCategory(option.value)}
              className={`rounded-full px-[18px] py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cafe-primary ${
                category === option.value
                  ? 'bg-cafe-primary text-white'
                  : 'border border-cafe-l300 bg-white text-cafe-dark hover:bg-cafe-l100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            aria-label={content.catalog.sortLabel}
            className="appearance-none rounded-xl border border-cafe-l300 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-cafe-text focus:outline-none focus:ring-2 focus:ring-cafe-primary"
          >
            {content.catalog.sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-cafe-dark" />
        </div>
      </div>
      <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="col-span-full py-16 text-center text-cafe-muted">
            {content.catalog.noResults}
          </p>
        )}
      </div>
    </Page>
  );
}
