import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Focus } from './components/Focus';
import { Writing } from './components/Writing';
import { EssayReader } from './components/EssayReader';
import { Experience } from './components/Experience';
import { Architectures } from './components/Architectures';
import { EnterpriseScale } from './components/EnterpriseScale';
import { Principles } from './components/Principles';
import { Contact } from './components/Contact';
import { essays, type Essay } from './data/writing';

function App() {
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  // Sync state with URL hash for deep linking (e.g., #writing/reasoning-vs-commitment)
  const syncWithHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#writing/')) {
      const slug = hash.replace('#writing/', '').trim();
      const matched = essays.find((e) => e.slug === slug);
      if (matched) {
        setSelectedEssay(matched);
        return;
      }
    }
    // If not on an essay hash, ensure reader is closed
    if (selectedEssay) {
      setSelectedEssay(null);
    }
  }, [selectedEssay]);

  useEffect(() => {
    syncWithHash();
    window.addEventListener('hashchange', syncWithHash);
    return () => window.removeEventListener('hashchange', syncWithHash);
  }, [syncWithHash]);

  const handleSelectEssay = (essay: Essay) => {
    setSelectedEssay(essay);
    window.location.hash = `#writing/${essay.slug}`;
  };

  const handleCloseReader = () => {
    setSelectedEssay(null);
    // Restore hash to #writing without reloading
    if (window.location.hash.startsWith('#writing/')) {
      history.pushState(null, '', '#writing');
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Focus />
        <Architectures />
        <EnterpriseScale />
        <Principles />
        <Writing onSelectEssay={handleSelectEssay} />
        <Experience />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Anjesh Dubey. Built with the same care I expect from production systems.</p>
        </div>
      </footer>

      {/* Immersive Long-form Reader Overlay */}
      {selectedEssay && (
        <EssayReader essay={selectedEssay} onClose={handleCloseReader} />
      )}
    </>
  );
}

export default App;
