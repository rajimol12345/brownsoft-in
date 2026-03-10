import React from 'react';
import './VideoIntro.css';

const VideoIntro = () => {
    return (
        <section className="video-intro-section">
            <div className="container">
                <div className="video-intro-content">
                    <h2 className="intro-title">
                        A Well-Designed Video Is The <br />
                        <span>First Step To Attracting Your Target Audience</span>
                    </h2>
                    <p className="intro-description">
                        In today's digital landscape, video is the most powerful tool for storytelling.
                        We don't just edit footage; we craft emotional experiences that resonate with
                        your viewers and drive measurable engagement. From corporate brand films to
                        dynamic social media content, our professional editing and animation services
                        ensure your message is heard loud and clear.
                    </p>
                    <p className="intro-description">
                        Our team combines technical precision with creative vision to deliver
                        high-performing visual assets. We utilize industry-leading tools and
                        proven post-production workflows to transform raw concepts into
                        cinematic masterpieces that help your business achieve its full potential.
                    </p>
                    <button className="btn-primary-glow">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default VideoIntro;
