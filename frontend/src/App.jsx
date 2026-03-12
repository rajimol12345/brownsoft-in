import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Contact from './pages/Contact'
import './App.css'

function App() {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('site-header');
            if (window.scrollY > 80) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Router>
            <div className="app-container">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<h1>Home Page</h1>} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

            </div>
        </Router>
    )
}

export default App