import { useEffect, useState, useRef } from 'react';
import type { Essay } from '../data/writing';
import styles from './EssayReader.module.css';

interface EssayReaderProps {
  essay: Essay;
  onClose: () => void;
}

export const EssayReader = ({ essay, onClose }: EssayReaderProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and set up escape key listener
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Track reading scroll progress
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      return;
    }
    const currentProgress = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
    setScrollProgress(currentProgress);
  };

  const handleCopyLink = async () => {
    const url = `${window.location.origin}/#writing/${essay.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.readerOverlay}
      onScroll={handleScroll}
      role="dialog"
      aria-modal="true"
      aria-label={essay.title}
    >
      {/* Top Reading Progress Bar */}
      <div className={styles.progressBarContainer} aria-hidden="true">
        <div
          className={styles.progressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Reader Header */}
      <header className={styles.readerHeader}>
        <div className={`container ${styles.headerInner}`}>
          <button
            onClick={onClose}
            className={styles.backBtn}
            aria-label="Return to Systems Ledger"
          >
            ← Return to Ledger
          </button>

          <div className={styles.headerActions}>
            <button
              onClick={handleCopyLink}
              className={styles.shareBtn}
              aria-label="Copy essay share link"
            >
              {copied ? '✓ Link Copied' : 'Share Link'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className={styles.readerContent}>
        <article>
          <div className={styles.articleHeader}>
            <div className={styles.metaRow}>
              <span className={styles.categoryBadge}>{essay.category}</span>
              <span className={styles.metaDetail}>{essay.date}</span>
              <span className={styles.metaDetail}>•</span>
              <span className={styles.metaDetail}>{essay.readTime}</span>
            </div>

            <h1 className={styles.articleTitle}>{essay.title}</h1>
            <p className={styles.articleSubtitle}>{essay.subtitle}</p>
          </div>

          {/* Thesis Callout */}
          <div className={styles.thesisBanner}>
            <div className={styles.thesisLabel}>Architectural Thesis</div>
            <p className={styles.thesisText}>{essay.thesis}</p>
          </div>

          {/* Executive Takeaways */}
          <div className={styles.takeawaysCard}>
            <div className={styles.takeawaysTitle}>
              <span>Key Operational Takeaways</span>
            </div>
            <ul className={styles.takeawaysList}>
              {essay.takeaways.map((takeaway, idx) => (
                <li key={idx} className={styles.takeawayItem}>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>

          {/* Body Sections */}
          {essay.sections.map((section, sIdx) => (
            <section key={sIdx} className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className={styles.paragraph}>
                  {p}
                </p>
              ))}

              {section.callout && (
                <aside className={styles.calloutBox}>
                  {section.callout}
                </aside>
              )}
            </section>
          ))}

          {/* Author Footer */}
          <footer className={styles.authorFooter}>
            <div className={styles.authorBio}>
              <div className={styles.authorName}>Anjesh Dubey</div>
              <div className={styles.authorTitle}>
                Senior Director, Software Engineering — Salesforce Flow &amp; Agentforce
              </div>
            </div>

            <button onClick={onClose} className="btn btn-secondary">
              Back to Systems Ledger ↑
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
};
