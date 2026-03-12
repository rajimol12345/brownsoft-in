import './ContactInfo.css';

const ContactInfo = () => {
    const infoData = [
        {
            id: 'phone',
            icon: 'fas fa-phone-alt',
            title: 'Phone Number',
            lines: ['(678) 345-3456', '(678) 345-3457'],
            link: 'tel:+16783453456',
        },
        {
            id: 'address',
            icon: 'fas fa-map-marker-alt',
            title: 'Our Address',
            lines: ['380 Albert St, Melbourne,', 'Australia'],
            link: null,
        },
        {
            id: 'email',
            icon: 'fas fa-envelope',
            title: 'Email Address',
            lines: ['contact@brownsofts.com', 'info@brownsofts.com'],
            link: 'mailto:contact@brownsofts.com',
        },
    ];

    return (
        <section className="contact-info-section" id="contact-info">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Our Details</span>
                    <h2 className="section-heading">Multiple Ways to<br />Reach Us</h2>
                </div>
                <div className="info-cards-grid">
                    {infoData.map((info) => (
                        <div className="info-card" id={`info-card-${info.id}`} key={info.id}>
                            <div className="icon-wrap">
                                <i className={info.icon}></i>
                            </div>
                            <h3 className="info-card-title">{info.title}</h3>
                            {info.lines.map((line, idx) => (
                                <p className="info-card-text" key={idx}>
                                    {info.link ? <a href={info.link}>{line}</a> : line}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
