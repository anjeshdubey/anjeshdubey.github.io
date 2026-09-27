import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Patents } from './components/Patents';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Patents />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Anjesh Dubey. Building high-velocity AI agent platforms.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
