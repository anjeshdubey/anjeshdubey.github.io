export interface LabeledLink {
  label: string;
  href: string;
}

// In-page anchors stay in the tab; everything else opens a new one.
export const anchorProps = (href: string) =>
  href.startsWith('#') ? { href } : { href, target: '_blank', rel: 'noopener noreferrer' };
