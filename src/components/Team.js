import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import local assets
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const teamMembers = [
        { name: "Cameron Williamson", role: "Scrum Master", img: team1 },
        { name: "Leslie Alexander", role: "Engineering", img: team2 },
        { name: "Ronald Richards", role: "UI/UX Designer", img: team3 },
        { name: "Darrell Steward", role: "Web Designer", img: team4 }
    ];

    return (
        <section className="section-padding" id="team" style={{ background: '#f8f9fa' }}>
            <Container>
                <div className="section-title-area d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end mb-5 text-center text-md-start gap-4 gap-md-0">
                    <div className="section-title mb-0" data-aos="fade-right">
                        <span className="text-primary fw-bold text-uppercase">EXPERT PEOPLE</span>
                        <h2 className="display-6 fw-bold mt-2">Dedicated Team Members</h2>
                    </div>
                    <div className="team-nav-btn" data-aos="fade-left">
                        <a href="#team" className="theme-btn py-3 px-4 rounded d-inline-flex align-items-center gap-2">
                            All Members <FiArrowRight />
                        </a>
                    </div>
                </div>
                <Row>
                    {teamMembers.map((member, index) => (
                        <Col lg={3} md={6} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="team-item-card bg-white rounded-3 overflow-hidden position-relative shadow-sm" style={{ transition: 'all 0.4s ease' }}>
                                <div className="team-img-box position-relative overflow-hidden" style={{ height: '350px' }}>
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="h-100 w-100"
                                        style={{ objectFit: 'cover', transition: 'all 0.4s ease' }}
                                    />
                                    <div className="team-social-overlay position-absolute w-100 d-flex justify-content-center gap-2"
                                        style={{
                                            bottom: '-60px',
                                            transition: 'all 0.4s ease'
                                        }}>
                                        <a href="#!" className="social-btn"><FiFacebook /></a>
                                        <a href="#!" className="social-btn"><FiTwitter /></a>
                                        <a href="#!" className="social-btn"><FiInstagram /></a>
                                        <a href="#!" className="social-btn"><FiLinkedin /></a>
                                    </div>
                                </div>
                                <div className="p-4 text-center team-info-box" style={{ transition: 'all 0.4s ease' }}>
                                    <h5 className="fw-bold mb-1">{member.name}</h5>
                                    <p className="text-muted small mb-0">{member.role}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>


        </section>
    );
};

export default Team;
