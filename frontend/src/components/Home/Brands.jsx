import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'aos/dist/aos.css';
import './Brands.css';
import bis from '../../assets/bis.png';
import dew from '../../assets/dew.png';
import dia from '../../assets/dia.png';
import dmv from '../../assets/dmv.png';
import xp from '../../assets/xp.png';

const Brands = () => {
    const brands = [bis, dew, dia, dmv, xp, bis, dew, dia, dmv, xp];

    return (
        <section className="brand-section py-5 position-relative overflow-hidden" style={{ background: '#f8faff' }} data-aos="fade-up">
            {/* Decorative Background Pattern */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                backgroundImage: 'radial-gradient(#2b47ff 0.5px, transparent 0.5px)',
                backgroundSize: '30px 30px',
                opacity: 0.08,
                pointerEvents: 'none'
            }}></div>

            <Container className="position-relative" style={{ zIndex: 1 }}>
                <div className="brand-wrapper">
                    {/* Modern Centered Heading */}
                    <div className="text-center mb-5">
                        <h6 className="text-primary fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }} data-aos="fade-up">
                            Our Trusted Partners
                        </h6>
                        <h2 className="brand-trust-text mb-0 fw-bold">
                            1k+ Global Brands Trust Us
                        </h2>
                    </div>

                    <div className="brand-slider-container bg-white p-4 shadow-sm rounded-4">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={40}
                            slidesPerView={2}
                            loop={true}
                            speed={1500}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                576: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                992: { slidesPerView: 5 },
                                1200: { slidesPerView: 6 },
                            }}
                        >
                            {brands.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="brand-item d-flex align-items-center justify-content-center">
                                        <img
                                            src={logo}
                                            alt={`Brand ${index + 1}`}
                                            className="brand-logo img-fluid"
                                            style={{
                                                maxHeight: '80px',
                                                filter: 'none', // Ensure original color
                                                opacity: 1, // Full color
                                                transition: 'all 0.4s ease',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Container>

            <style>{`
                .brand-trust-text {
                    font-size: 2.2rem;
                    color: #13111a;
                    white-space: normal !important;
                }
                @media (max-width: 768px) {
                    .brand-trust-text {
                        font-size: 24px !important;
                    }
                }
                .brand-item:hover .brand-logo {
                    transform: scale(1.15);
                }
                .brand-slider-container {
                    border: 1px solid rgba(43, 71, 255, 0.05);
                }
            `}</style>
        </section>
    );
};

export default Brands;
