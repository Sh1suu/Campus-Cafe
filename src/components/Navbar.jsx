import { Link } from 'react-router-dom';
import content from '../data/content';
import SearchBar from './SearchBar';
import CartBadge from './CartBadge';
import { CoffeeIcon } from './Icons';

export default function Navbar() {
  return (
    <header className="border-b border-cafe-line bg-white">
      <nav className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 py-4 md:h-[76px] md:px-12 md:py-0">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-[38px] place-items-center rounded-xl bg-cafe-primary text-white">
            <CoffeeIcon className="size-5" />
          </span>
          <span className="text-xl font-bold text-cafe-dark">{content.brand}</span>
        </Link>
        <SearchBar />
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-[15px] font-medium text-cafe-dark hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cafe-primary"
          >
            {content.nav.menu}
          </Link>
          <CartBadge />
        </div>
      </nav>
    </header>
  );
}
