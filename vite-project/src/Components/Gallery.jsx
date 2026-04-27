import React, { useEffect } from 'react';
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const galleryImages = [
    "/woman.jpeg",
    "/gym1.jpeg", 
    "/Gym2.jpeg",
    "/Gym.jpeg",
    "/gym3.jpeg",
    "/gym4.jpeg",
    "/gym5.jpeg"
  ];

  return (
    <section className='gallery'>
      <div className="gallery-container">

        {/* Title */}
        <h1 data-aos="fade-up">BETTER BEATS YOURSELF</h1>

        {/* First Row */}
        <div className="image-grid">
          {galleryImages.slice(0, 4).map((image, index) => (
            <div 
              className="image-item" 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={image} alt={`gallery ${index}`} />
              <div className="image-overlay">
                <span>View More</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="image-grid">
          {galleryImages.slice(4).map((image, index) => (
            <div 
              className="image-item" 
              key={index + 4}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <img src={image} alt={`gallery ${index + 4}`} />
              <div className="image-overlay">
                <span>View More</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;