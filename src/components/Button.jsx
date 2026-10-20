import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-[22px] py-3 text-[15px] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cafe-primary focus-visible:ring-offset-2 active:scale-[0.98]';

const variants = {
  primary: 'bg-cafe-primary text-white hover:bg-cafe-dark',
  secondary: 'bg-cafe-l100 text-cafe-dark hover:bg-cafe-l200',
};

export default function Button({ variant = 'primary', to, className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
