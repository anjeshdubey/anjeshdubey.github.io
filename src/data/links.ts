export const anchorProps = (href: string) =>
  href.startsWith('#') ? { href } : { href, target: '_blank', rel: 'noopener noreferrer' };
