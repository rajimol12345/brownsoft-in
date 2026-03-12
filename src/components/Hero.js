import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'aos/dist/aos.css';
import '../style/Hero.css';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

// Import local assets
import hero1 from '../assets/hero (1).jpg';
import hero2 from '../assets/hero (2).jpg';

const Hero = () => {
    const slides = [
        {
            subtitle: "Best IT Solutions",
            title: "Global Success in the Digital World",
            desc: "Empowering your business with cutting-edge technology and creative strategies that drive real growth and global visibility.",
            bg: hero2
        },
        {
            subtitle: "Innovation Technology",
            title: "Expert Strategy For Your Success",
            desc: "From high-end Graphics & Design to immersive Video & Animation, we craft digital experiences that captivate your audience.",
            bg: hero1
        }
    ];

    const slideVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="hero-section" id="home">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.hero-next',
                    prevEl: '.hero-prev',
                }}
                className="h-100"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div
                                className="hero-slider-item"
                            >
                                <div
                                    className={`hero-zoom-in position-absolute w-100 h-100 ${isActive ? 'active' : ''}`}
                                    style={{
                                        backgroundImage: `url("${slide.bg}")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        zIndex: '-1'
                                    }}
                                ></div>
                                <div className="hero-overlay"></div>
                               

                                <Container>
                                    <div className="hero-content">
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <>
                                                    <motion.div
                                                        variants={slideVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        transition={{ duration: 0.8, delay: 0.2 }}
                                                        className="hero-subtitle"
                                                    >
                                                        {slide.subtitle}
                                                    </motion.div>

                                                    <motion.h1
                                                        variants={slideVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        transition={{ duration: 0.8, delay: 0.4 }}
                                                        className="hero-title"
                                                    >
                                                        {slide.title}
                                                    </motion.h1>

                                                    <motion.p
                                                        variants={slideVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        transition={{ duration: 0.8, delay: 0.6 }}
                                                        className="hero-desc"
                                                    >
                                                        {slide.desc}
                                                    </motion.p>

                                                    <motion.div
                                                        variants={slideVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        transition={{ duration: 0.8, delay: 0.8 }}
                                                        className="hero-btns"
                                                    >
                                                        <a href="#!" className="hero-btn-solid">
                                                            Explore More <i className="fas fa-arrow-right"></i>
                                                        </a>
                                                        <a href="#!" className="hero-btn-outline">
                                                            Contact Us <i className="fas fa-arrow-right"></i>
                                                        </a>
                                                    </motion.div>
                                                </>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Container>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows on Right to match Image */}
            <div className="hero-navigation">
                <div className="hero-next hero-nav-btn">
                    <FiArrowRight />
                </div>
                <div className="hero-prev hero-nav-btn">
                    <FiArrowLeft />
                </div>
            </div>

            {/* Bottom Curve Shape */}
            <div className="hero-bottom-curve">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    <path 
                        d="M0 120L1440 120V46.6186C1381.18 20.3235 1256.45 2.14442 1104.75 4.31649C894.135 7.33159 780.443 83.1818 534.693 83.1818C288.943 83.1818 174.619 32.3392 0 46.6186V120Z" 
                        fill="white"
                        stroke="white"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            <style>{`
                .hero-bottom-curve {
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    height: 80px;
                    z-index: 10;
                    pointer-events: none;
                }
                @media (max-width: 991px) {
                    .hero-bottom-curve {
                        height: 60px;
                    }
                }
                @media (max-width: 767px) {
                    .hero-bottom-curve {
                        height: 40px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
