import React, { useState, useEffect, useRef } from 'react';
import './CompanyHistory.css';

const CompanyHistory = () => {
    const milestones = [
        { 
            year: '2010', 
            title: 'Started business', 
            desc: 'We partner with you to enable your technology so you focus on your mission leverage our talent.', 
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=300', 
            color: '#00ccff' 
        },
        { 
            year: '2012', 
            title: 'Survival during wartime', 
            desc: 'A People Ops leader who is committed to the growth and development of leaders.', 
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300', 
            color: '#3399ff' 
        },
        { 
            year: '2016', 
            title: 'Crisis and opportunity', 
            desc: 'Our support works around the clock to ensure your work is secure and monitored safely.', 
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300', 
            color: '#0066ff' 
        },
        { 
            year: '2017', 
            title: '50+ Branches', 
            desc: 'We cross industries and provide services to almost every business supplemental asset.', 
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300', 
            color: '#0033cc' 
        },
        { 
            year: '2019', 
            title: 'Global expansion', 
            desc: 'Extended our services to over 10 countries with permanent local office support.', 
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300', 
            color: '#0022aa' 
        },
        { 
            year: '2022', 
            title: 'Digital Innovation', 
            desc: 'Launched our AI research labs to drive next-generation digital products.', 
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=300', 
            color: '#001188' 
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const touchStart = useRef(null);
    const touchEnd = useRef(null);

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width < 768) setVisibleCount(1);
            else if (width < 1024) setVisibleCount(2);
            else if (width < 1280) setVisibleCount(3);
            else setVisibleCount(4);
        };
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const maxIndex = milestones.length - visibleCount;

    const handleNext = () => currentIndex < maxIndex && setCurrentIndex(currentIndex + 1);
    const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);

    const handleTouchStart = (e) => touchStart.current = e.targetTouches[0].clientX;
    const handleTouchMove = (e) => touchEnd.current = e.targetTouches[0].clientX;
    const handleTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        if (distance > 50) handleNext();
        else if (distance < -50) handlePrev();
        touchStart.current = null;
        touchEnd.current = null;
    };

    return (
        <section className="horizontal-history-section section-padding">
            <div className="container">
                <div className="history-carousel-wrapper">

                    <button 
                        className={`nav-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} 
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div 
                        className="carousel-window"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div 
                            className="carousel-track"
                            style={{ 
                                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                                width: `${(milestones.length / visibleCount) * 100}%`
                            }}
                        >
                            {milestones.map((item, index) => (
                                <div key={index} className="milestone-item" style={{ width: `${100 / milestones.length}%` }}>
                                    <div className="milestone-image-wrap">
                                        <div className="milestone-img-circle">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="milestone-pointer"></div>
                                    </div>

                                    <div className="milestone-chevron-year" style={{ backgroundColor: item.color }}>
                                        <span>{item.year}</span>
                                    </div>

                                    <div className="milestone-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        className={`nav-btn next ${currentIndex >= maxIndex ? 'disabled' : ''}`} 
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CompanyHistory;
