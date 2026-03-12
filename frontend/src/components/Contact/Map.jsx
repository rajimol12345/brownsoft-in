import './Map.css';

const Map = () => {
    return (
        <section className="map-section" id="map-section">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.504286134707!2d77.1706689!3d8.3101689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05a766c6691c9b%3A0xc3c9424e6b5d0124!2sKaliakkavilai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709730000000!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BrownSofts Office Location"
                id="google-map"
            ></iframe>
        </section>
    );
};

export default Map;
