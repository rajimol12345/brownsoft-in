import React, { useState, useEffect, useRef } from 'react';
import './CounterSection.css';

const CounterItem = ({ start, end, suffix, label, icon }) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(start);
    const observerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 50;
        const increment = (end - start) / steps;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            countRef.current += increment;
            if (countRef.current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(countRef.current));
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, [isVisible, start, end]);

    return (
        <div className="counter-item-premium" ref={observerRef}>
            <div className="counter-icon-wrap-premium">
                <i className={icon}></i>
            </div>
            <div className="counter-text-wrap-premium">
                <h2 className="counter-val-premium">
                    {count}{suffix}
                </h2>
                <p className="counter-desc-premium">{label}</p>
            </div>
        </div>
    );
};

const CounterSection = () => {
    const countersData = [
        { start: 0, end: 105, suffix: '+', label: 'Team members', icon: 'fas fa-user-friends' },
        { start: 0, end: 15, suffix: '+', label: 'Winning awards', icon: 'fas fa-award' },
        { start: 0, end: 10, suffix: 'k+', label: 'Completed project', icon: 'fas fa-check-circle' },
        { start: 0, end: 850, suffix: '+', label: 'Client\'s reviews', icon: 'fas fa-comment-alt' },
    ];

    return (
        <section className="counter-section-premium">
            <div className="counter-overlay-premium"></div>

            {/* Geometric Accents */}
            <div className="counter-accent-premium top-left"></div>
            <div className="counter-accent-premium bottom-right"></div>

            <div className="container">
                <div className="counter-grid-premium">
                    {countersData.map((counter, index) => (
                        <CounterItem
                            key={index}
                            start={counter.start}
                            end={counter.end}
                            suffix={counter.suffix}
                            label={counter.label}
                            icon={counter.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CounterSection;
