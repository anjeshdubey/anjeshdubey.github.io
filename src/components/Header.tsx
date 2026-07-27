export const Header = () => {
  return (
    <header style={{ padding: '1.25rem 0', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10, 10, 12, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#about" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', textDecoration: 'none' }}>
          Anjesh<span className="text-gradient">.ai</span>
        </a>
        <nav style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
          <a href="#about" style={{ fontWeight: 500, fontSize: '0.95rem' }}>About</a>
          <a href="#skills" style={{ fontWeight: 500, fontSize: '0.95rem' }}>Skills</a>
          <a href="#projects" style={{ fontWeight: 500, fontSize: '0.95rem' }}>Projects</a>
          <a href="#experience" style={{ fontWeight: 500, fontSize: '0.95rem' }}>Experience</a>
          <a href="#patents" style={{ fontWeight: 500, fontSize: '0.95rem' }}>Patents</a>
        </nav>
      </div>
    </header>
  );
};
