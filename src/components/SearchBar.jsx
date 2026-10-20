import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../context/useCart';
import content from '../data/content';
import { SearchIcon } from './Icons';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useCart();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if (pathname !== '/') navigate('/');
  };

  return (
    <div
      role="search"
      className="order-last flex h-11 w-full items-center gap-2.5 rounded-full bg-cafe-l100 px-[18px] focus-within:ring-2 focus-within:ring-cafe-primary md:order-none md:w-[380px]"
    >
      <SearchIcon className="size-[18px] shrink-0 text-cafe-muted" />
      <input
        type="search"
        value={searchQuery}
        onChange={handleChange}
        placeholder={content.search.placeholder}
        aria-label={content.search.label}
        className="w-full bg-transparent text-sm text-cafe-text placeholder:text-cafe-muted focus:outline-none"
      />
    </div>
  );
}
