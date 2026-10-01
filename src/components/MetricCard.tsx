import { anchorProps } from '../data/links';
import styles from './Hero.module.css';

interface MetricCardProps {
  value: string;
  label: string;
  href?: string;
}

export const MetricCard = ({ value, label, href }: MetricCardProps) => {
  const className = `glass-panel ${styles.metricCard}`;
  const content = (
    <>
      <div className={`text-gradient ${styles.metricValue}`}>{value}</div>
      <div className={styles.metricLabel}>{label}</div>
    </>
  );

  return href ? (
    <a {...anchorProps(href)} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
};
