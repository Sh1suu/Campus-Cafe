export default function Page({ children, spacing = 'pb-16 pt-10' }) {
  return (
    <main className={`mx-auto w-full max-w-[1280px] px-4 md:px-12 ${spacing}`}>{children}</main>
  );
}
