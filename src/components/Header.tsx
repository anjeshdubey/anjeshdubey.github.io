export const Header = () => {
  return (
    <header style={{ padding: '2rem 0', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10, 10, 12, 0.8)', backdropFilter: 'blur(10px)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
          Anjesh<span className="text-gradient">.ai</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" style={{ fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
          <a href="#experience" style={{ fontWeight: 500 }}>Experience</a>
        </nav>
      </div>
    </header>
  );
};
