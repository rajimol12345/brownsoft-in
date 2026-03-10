import React, { useEffect } from 'react';
import HomePage from './HomePage';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <HomePage />

    </div>
  );
}

export default App;
