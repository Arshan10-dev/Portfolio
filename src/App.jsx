// ─── App.jsx ─────────────────────────────────────────────────
// Root component — orchestrates all sections and global UI.
// Import order mirrors page top-to-bottom layout.

import Navbar      from "./sections/Navbar";
import Hero        from "./sections/Hero";
import About       from "./sections/About";
import Skills      from "./sections/Skills";
import Projects    from "./sections/Projects";
import Resume      from "./sections/Resume";
import Contact     from "./sections/Contact";
import Footer      from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* Sticky top navigation */}
      <Navbar />

      {/* Page sections — each has its own id for scroll targeting */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </>
  );
}

export default App;
