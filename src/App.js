import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
// import SplashCursor from './components/SplashCursor';
import WebGLSplashCursor from './components/WebGLSplashCursor';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import './App.css';


function App() {
  useEffect(() => {
    // Load Bootstrap JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* WebGL Splash Cursor overlay (non-blocking, blends with content) */}
        <WebGLSplashCursor
          options={{
            TRIGGER: 'hover',
            IMMEDIATE: true,
            AUTO: false,
            SIM_RESOLUTION: 128,
            DYE_RESOLUTION: 768,
            DENSITY_DISSIPATION: 0.98,
            VELOCITY_DISSIPATION: 0.26,
            PRESSURE: 0.8,
            PRESSURE_ITERATIONS: 16,
            CURL: 25,
            SPLAT_RADIUS: 0.30,
            SPLAT_FORCE: 6400,
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 10,
            TRANSPARENT: true,
            BLOOM: true,
            BLOOM_ITERATIONS: 6,
            BLOOM_RESOLUTION: 196,
            BLOOM_INTENSITY: 0.62,
            BLOOM_THRESHOLD: 0.58,
            BLOOM_SOFT_KNEE: 0.7,
            SUNRAYS: false,
          }}
          allowPointerEvents={false}
          zIndex={0}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;