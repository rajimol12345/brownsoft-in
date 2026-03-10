import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const teamData = [
        {
            id: 1,
            name: 'David Bell',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
            socials: { twitter: '#', linkedin: '#', facebook: '#' }
        },
        {
            id: 2,
            name: 'Kevin Woods',
            role: 'Project Manager',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
            socials: { twitter: '#', linkedin: '#', facebook: '#' }
        },
        {
            id: 3,
            name: 'Georgia James',
            role: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
            socials: { twitter: '#', linkedin: '#', facebook: '#' }
        },
        {
            id: 4,
            name: 'Alina James',
            role: 'UX Designer',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
            socials: { twitter: '#', linkedin: '#', facebook: '#' }
        },
    ];

    return (
        <section className="team-section">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle-wrapper">
                        <span className="line"></span>
                        <span className="section-subtitle">Our Team</span>
                    </div>
                    <h2 className="section-title">Meet The Team Of <br /> Innovations!</h2>
                </div>

                <div className="team-grid">
                    {teamData.map((member) => (
                        <div key={member.id} className="team-card">
                            <div className="team-image-wrapper">
                                <div className="team-border-offset"></div>
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="social-overlay">
                                        <div className="social-links">
                                            <a href={member.socials.facebook} className="social-link"><i className="fab fa-facebook-f"></i></a>
                                            <a href={member.socials.twitter} className="social-link"><i className="fab fa-twitter"></i></a>
                                            <a href={member.socials.linkedin} className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
