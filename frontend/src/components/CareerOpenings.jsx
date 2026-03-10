import React from 'react';
import './CareerOpenings.css';

const CareerOpenings = () => {
    const openings = [
        { title: 'Software Developer', type: 'FULL TIME / PART TIME', description: 'Montes porta ultricies ullamcorper ornare maximus donec nisi sollicitudin porttitor penatibus finibus mus sit' },
        { title: 'Project Manager', type: 'FULL TIME / PART TIME', description: 'Montes porta ultricies ullamcorper ornare maximus donec nisi sollicitudin porttitor penatibus finibus mus sit' },
        { title: 'UI/UX Designer', type: 'FULL TIME / PART TIME', description: 'Montes porta ultricies ullamcorper ornare maximus donec nisi sollicitudin porttitor penatibus finibus mus sit' },
        { title: 'Quality Assurance', type: 'FULL TIME / PART TIME', description: 'Montes porta ultricies ullamcorper ornare maximus donec nisi sollicitudin porttitor penatibus finibus mus sit' }
    ];

    return (
        <section className="career-openings section-padding">
            <div className="container openings-container">
                {/* Left Content: Job Grid */}
                <div className="openings-left">
                    <div className="openings-header text-center">
                        <span className="sub-label">CURRENT OPENING</span>
                        <h2 className="section-title">Innovate, Grow, And Succeed Together</h2>
                    </div>
                    
                    <div className="jobs-grid">
                        {openings.map((job, index) => (
                            <div key={index} className="job-card">
                                <span className="job-type">{job.type}</span>
                                <h3 className="job-title">{job.title}</h3>
                                <p className="job-desc">{job.description}</p>
                                <button className="btn-apply">Apply now</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content: Sidebar Form */}
                <aside className="openings-sidebar">
                    <div className="application-form-box">
                        <h3 className="form-title">Your Journey Begins With Innovation</h3>
                        <form className="application-form">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Your Position</label>
                                <input type="text" placeholder="Your Position" />
                            </div>
                            <div className="form-group">
                                <label>Enter Your Message</label>
                                <textarea placeholder="Enter Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn-send-application">
                                <i className="far fa-envelope"></i> Send Application
                            </button>
                        </form>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default CareerOpenings;
