import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import StarBackground from './components/ui/StarBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import bgImg from './assets/bg.jpg';

function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative">
      {/* Global Background */}
      <div className="fixed inset-0 z-0">
        <img
          src={bgImg}
          alt=""
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white dark:from-transparent dark:to-[#0a0a0a]"></div>
      </div>

      {/* Global Stars */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarBackground />
      </div>

      {/* Global Blobs (Decorative Background) */}
      <div className="fixed top-20 right-0 z-0 opacity-20 dark:opacity-10 pointer-events-none overflow-hidden inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl filter mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl filter mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
