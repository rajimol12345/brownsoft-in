import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import '../style/Services.css';
import 'aos/dist/aos.css';

// Import local assets
import icon1 from '../../assets/01-1.svg';
import icon2 from '../../assets/02-1.svg';
import icon3 from '../../assets/s-icon-4.svg';
import icon4 from '../../assets/04-1.svg';
import icon5 from '../../assets/s-icon-3.svg';

const Services = () => {
    const services = [
    {
        "title": "Video Editing",
        "icon": icon1,
        "desc": "Crafting compelling visual stories through expert cutting, color grading, and motion graphics to captivate your audience.",
        "link": "#!"
    },
    {
        "title": "Graphic Design",
        "icon": icon2,
        "desc": "Creating impactful visual identities and marketing materials that resonate with your brand and leave a lasting impression.",
        "link": "#!"
    },
    {
        "title": "Web Development",
        "icon": icon3,
        "desc": "Building responsive, high-performance websites and applications tailored to provide a user experience across all devices.",
        "link": "#!"
    },
    {
        "title": "Civil Design",
        "icon": icon4,
        "desc": "Delivering precise structural plans and infrastructure drafting, ensuring technical accuracy and compliance for every project.",
        "link": "#!"
    },
    {
        "title": "Admin Support",
        "icon": icon5,
        "desc": "Streamlining your daily operations with professional data management and executive assistance to boost productivity.",
        "link": "#!"
    }
]
    return (
        <section className="section-padding bg-light position-relative overflow-hidden" id="services">
            <Container>
                {/* Realigned Header matching the image position */}
                <div className="section-title-area d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end mb-5 text-center text-md-start gap-4 gap-md-0">
                    <div className="section-title mb-0">
                        <span className="text-primary fw-bold text-uppercase" style={{ fontSize: '13px', letterSpacing: '1px' }} data-aos="fade-up">
                            IT SERVICES
                        </span>
                        <h2 className="display-6 fw-bold mt-2" data-aos="fade-right">
                            We Solve IT Problems<br />With Technology
                        </h2>
                    </div>
                    <div className="service-nav-btns d-flex gap-3 mb-2">
                        <button className="service-prev custom-nav-btn">
                            <FiArrowLeft />
                        </button>
                        <button className="service-next custom-nav-btn active">
                            <FiArrowRight />
                        </button>
                    </div>
                </div>

                <div className="position-relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.service-next',
                            prevEl: '.service-prev',
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        className="service-slider"
                    >
                        {services.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="service-icon-wrapper" >
                                    <div className="service-icon-box">
                                        <img src={item.icon} alt={item.title} className="service-main-icon" />
                                    </div>
                                </div>
                                <div className="service-card text-center bg-white">
                                    <div className="service-card-bg-overlay">
                                        <div className="overlay-circle"></div>
                                    </div>
                                    <div className="service-card-inner">
                                        <div className="service-card-body">
                                            <h4 className="service-title fw-bold mb-3">{item.title}</h4>
                                            <div className="title-divider mx-auto mb-4"></div>
                                            <p className="service-desc mb-0 text-muted lh-lg">{item.desc}</p>
                                            <a href={item.link} className="read-more-btn">
                                                Learn More <FiArrowRight className="ms-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>


        </section >
    );
};

export default Services;
