import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiArrowUpRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Projects.css';

// Import images from assets
import projImg1 from '../assets/work1.jpg';
import projImg2 from '../assets/work2.jpg';
import projImg3 from '../assets/work3.jpg';
import projImg4 from '../assets/work4.jpg';
import projImg5 from '../assets/work5.jpg';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const projectList = [
        { cat: "Security", title: "Story Infographic Video Editing", img: projImg1 },
        { cat: "Solution", title: "Weddings and Events Videos", img: projImg2 },
        { cat: "Management", title: "Social Media Banners Design", img: projImg3 },
        { cat: "Technology", title: "Custom Website Design", img: projImg4 },
        { cat: "Cloud", title: "Civil Design", img: projImg5 }
    ];

    return (
        <section className="section-padding overflow-hidden position-relative" id="projects" style={{ background: '#fff' }}>
        
            <Container>
                <div className="section-title text-center mb-5">
                    <span className="text-primary fw-bold text-uppercase" data-aos="fade-right">LATEST PROJECTS</span>
                    <h2 className="display-6 fw-bold mt-2 text-dark" data-aos="fade-left">Our Creative Works</h2>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={25}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        className="project-slider"
                    >
                        {projectList.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="project-card position-relative overflow-hidden" style={{ height: '420px' }}>
                                    <div className="project-img h-100 w-100">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="h-100 w-100"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    
                                    {/* Floating White Box Content */}
                                    <div className="project-content-box position-absolute" style={{ 
                                        bottom: '25px', 
                                        left: '15px', 
                                        right: '15px',
                                        zIndex: 2
                                    }}>
                                        <div className="bg-white p-4 position-relative" 
                                             style={{ borderLeft: '5px solid #2b47ff' }}>
                                            <div className="mb-1">
                                                <p className="text-primary mb-1 small fw-medium" style={{ fontSize: '0.85rem' }}>{project.cat}</p>
                                                <h5 className="text-dark fw-bold mb-0" style={{ fontSize: '1.2rem', lineHeight: '1.3' }}>{project.title}</h5>
                                            </div>
                                            <div className="arrow-icon position-absolute" style={{
                                                bottom: '15px',
                                                right: '15px',
                                                color: '#2b47ff',
                                                fontSize: '1.2rem',
                                                opacity: 0.6
                                            }}>
                                                <FiArrowUpRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Pagination */}
                <div className="d-flex justify-content-center mt-5">
                    <div className="custom-pagination-outer" style={{
                        padding: '10px 25px',
                        border: '1px dotted #2b47ff',
                        borderRadius: '30px',
                        display: 'inline-block'
                    }}>
                        <div className="custom-pagination"></div>
                    </div>
                </div>
            </Container>

            <style>{`
                .project-card .project-img::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3) 100%);
                    pointer-events: none;
                }
                .custom-pagination {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    align-items: center;
                }
                .custom-pagination .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: transparent;
                    border: 1px solid #2b47ff;
                    opacity: 1;
                    margin: 0 !important;
                    transition: all 0.3s ease;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background: #2b47ff !important;
                    transform: scale(1.2);
                }
                .project-card:hover .arrow-icon {
                    opacity: 1 !important;
                    transform: translate(2px, -2px);
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default Projects;
