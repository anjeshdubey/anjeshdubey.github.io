import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>
      <footer style={{ borderTop: '1px solid var(--border-light)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Anjesh Dubey. Building the future of AI platforms.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
