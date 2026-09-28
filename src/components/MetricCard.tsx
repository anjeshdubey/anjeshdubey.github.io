import styles from './Hero.module.css';

interface MetricCardProps {
  value: string;
  label: string;
}

export const MetricCard = ({ value, label }: MetricCardProps) => (
  <div className={`glass-panel ${styles.metricCard}`}>
    <div className={`text-gradient ${styles.metricValue}`}>{value}</div>
    <div className={styles.metricLabel}>{label}</div>
  </div>
);
