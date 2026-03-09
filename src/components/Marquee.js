import React from 'react';

const Marquee = () => {
    const items = ["Business", "IT Solution", "Work Process", "Technology"];

    return (
        <div className="marquee-wrapper">
            <div className="marqee-list">
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <div className="marquee-item d-flex align-items-center" key={index}>
                        <span>{item}</span>
                        <img
                            src="https://gramentheme.com/wp/infotek/wp-content/uploads/2024/04/star.svg"
                            alt="star"
                            className="mx-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
