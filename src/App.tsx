import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Patents } from './components/Patents';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Patents />
      </main>
      <footer style={{ borderTop: '1px solid var(--border-light)', padding: '2.5rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Anjesh Dubey. Building high-velocity AI agent platforms.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
