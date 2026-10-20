import { useLocation } from 'react-router-dom';
import content from '../data/content';
import Page from '../components/Page';
import Button from '../components/Button';
import { CheckIcon } from '../components/Icons';

export default function OrderConfirmationPage() {
  const { state } = useLocation();
  const name = state?.name || content.confirmation.fallbackName;

  return (
    <Page spacing="pb-[120px] pt-24">
      <section className="mx-auto flex w-full max-w-[520px] flex-col items-center gap-4 rounded-[28px] border border-cafe-line bg-white p-10 text-center">
        <span className="grid size-[72px] place-items-center rounded-full bg-cafe-l200 text-cafe-dark">
          <CheckIcon className="size-9" strokeWidth={2.5} />
        </span>
        <h1 className="text-3xl font-bold text-cafe-text">{content.confirmation.title}</h1>
        <p className="text-base text-cafe-muted">{content.confirmation.message(name)}</p>
        <Button to="/">{content.confirmation.cta}</Button>
      </section>
    </Page>
  );
}
