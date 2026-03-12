import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaStar, FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImg from '../../assets/hero (2).jpg';
import user1 from '../../assets/grid-testimonial-05.png';
import user2 from '../../assets/01-5.jpg';
import user3 from '../../assets/grid-testimonial-01.png';

const Testimonials = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const testimonials = [
        {
            name: "Sara",
            role: "Web Designer",
            img: user1,
            text: "We are impressed with Brownsofts LLC's web development service. They created a website that perfectly represents our brand and offers a seamless user experience.We're delighted with the results and highly recommend their services."
        },
        {
            name: "Xavier",
            role: "Web Designer",
            img: user2,
            text: "We entrusted Brownsofts LLC with our video editing needs, and they exceeded our expectations in every way. We're delighted with the results and highly recommend their services."
        },
        {
            name: "Emman",
            role: "CEO, Tech Solutions",
            img: user3,
            text: "Working with Brownsofts LLC has been an absolute pleasure. Their team's professionalism, attention to detail, and dedication to our project were outstanding. We're thrilled with the results they delivered and highly recommend their services."
        }
    ];

    return (
        <section className="testimonials-section position-relative" id="testimonials" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(56, 75, 255, 0.9), rgba(56, 75, 255, 0.9)), url("${heroImg}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '100px 0 150px'
            }}>
            <Container>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end mb-5 text-center text-md-start gap-4 gap-md-0">
                    <div className="section-title text-white" data-aos="fade-right">
                        <span className="text-uppercase fw-bold mb-2 d-block text-white" style={{ fontSize: '14px', letterSpacing: '2px' }}>TESTIMONIALS</span>
                        <h2 className="display-5 fw-bold mb-0 text-white">We Prominent Truly Trusted <br /> IT Business Solutions</h2>
                    </div>
                    <div className="testimonial-nav d-flex gap-3 mb-2" data-aos="fade-left">
                        <button 
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="testimonial-nav-btn outline"
                        >
                            <FaArrowLeft />
                        </button>
                        <button 
                            onClick={() => swiperRef.current?.slideNext()}
                            className="testimonial-nav-btn active"
                            style={{ backgroundColor: '#5691ff', borderColor: '#5691ff' }}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            }
                        }}
                        className="testimonial-slider"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="testimonial-card-v2 bg-white p-4 p-lg-5 shadow-sm position-relative h-100" style={{ borderRadius: '15px' }}>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="author-img">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="rounded-circle"
                                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className="author-info">
                                                <h5 className="mb-1 fw-bold text-dark">{item.name}</h5>
                                                <p className="mb-2 text-muted small">{item.role}</p>
                                                <div className="stars" style={{ color: '#384bff' }}>
                                                    <FaStar size={14} /> <FaStar size={14} /> <FaStar size={14} /> <FaStar size={14} /> <FaStar size={14} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quote-icon" style={{ color: '#384bff', opacity: 0.8 }}>
                                            <FaQuoteRight size={40} />
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                                            "{item.text}"
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
