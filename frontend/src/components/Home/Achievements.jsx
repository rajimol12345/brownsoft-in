import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

// Import local assets
import icon1 from '../../assets/01.svg';
import icon2 from '../../assets/02.svg';
import icon3 from '../../assets/03.svg';
import icon4 from '../../assets/04.svg';

const Achievements = () => {
    const stats = [
        { count: 6561, label: "Satisfied Clients", icon: icon1 },
        { count: 600, label: "Finished Projects", icon: icon2 },
        { count: 250, label: "Skilled Experts", icon: icon3 },
        { count: 1001, label: "Media Posts", icon: icon4 }
    ];

    return (
        <section className="section-padding" style={{ background: '#f8f9fa', marginTop:'-30px'}}>
            <Container>
                <div className="achievement-box" style={{ 
                    background: '#2b47ff', // Bright blue as shown in image
                    color: '#fff',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '80px 60px',
                    borderRadius: '0px'
                }}>
                    {/* Decorative Dot Patterns */}
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 2px, transparent 2px)',
                        backgroundSize: '15px 15px',
                        opacity: 0.6
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 2px, transparent 2px)',
                        backgroundSize: '15px 15px',
                        opacity: 0.6
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div className="section-title mb-5 text-center text-md-start achievement-title">
                            <span className="text-white fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>ACHIEVEMENT</span>
                            <h2 className="text-white fw-bold mt-2 mx-auto mx-md-0" style={{ fontSize: '2.8rem', maxWidth: '450px', lineHeight: '1.2' }}>
                                We Are Increasing Business Success
                            </h2>
                        </div>

                        <Row className="text-center align-items-center">
                            {stats.map((stat, index) => (
                                <Col lg={3} md={6} key={index} className="mb-4 position-relative">
                                    <div className="achieve-item py-2">
                                        <div className="icon mb-3 mx-auto">
                                            <img
                                                src={stat.icon}
                                                alt={stat.label}
                                                style={{ height: '55px', filter: 'brightness(0) invert(1)' }}
                                            />
                                        </div>
                                        <div className="counter-text">
                                            <h2 className="fw-bold mb-1" style={{ fontSize: '2.8rem', letterSpacing: '-1px', color: 'white' }}>
                                                <CountUp
                                                    end={stat.count}
                                                    duration={3}
                                                    enableScrollSpy={true}
                                                    scrollSpyOnce={true}
                                                    formattingFn={(value) => value.toLocaleString()}
                                                />+
                                            </h2>
                                            <p className="mb-0 text-white fw-normal" style={{ fontSize: '1rem', opacity: 0.9 }}>{stat.label}</p>
                                        </div>
                                    </div>
                                    {/* Vertical Separator for Large Screens */}
                                    {index !== stats.length - 1 && (
                                        <div className="d-none d-lg-block" style={{
                                            position: 'absolute',
                                            right: 0,
                                            top: '20%',
                                            height: '60%',
                                            width: '1px',
                                            background: 'rgba(255,255,255,0.2)'
                                        }}></div>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>

            <style>{`
                @media (max-width: 767px) {
                    .achievement-title h2 {
                        font-size: 2rem !important;
                        max-width: 100% !important;
                    }
                    .achievement-box {
                        padding: 50px 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Achievements;
