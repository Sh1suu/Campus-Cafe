import content from '../data/content';

export default function formatPrice(amount) {
  return `${content.currency}${amount}`;
}
