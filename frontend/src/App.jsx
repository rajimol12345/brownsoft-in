import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import VideoAnimation from './pages/VideoAnimation';
import WebDesign from './pages/WebDesign';
import GraphicsDesign from './pages/GraphicsDesign';
import SEOMarketing from './pages/SEOMarketing';
import AdminSupport from './pages/AdminSupport';
import CivilArchitectural from './pages/CivilArchitectural';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/video-animation" element={<VideoAnimation />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/graphics-design" element={<GraphicsDesign />} />
            <Route path="/services/seo-marketing" element={<SEOMarketing />} />
            <Route path="/services/admin-support" element={<AdminSupport />} />
            <Route path="/services/civil-architectural" element={<CivilArchitectural />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
