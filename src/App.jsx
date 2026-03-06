import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
