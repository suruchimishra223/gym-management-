import React from 'react';
import '../App.css'; // We'll create this CSS file

const Gallery = () => {
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
        <h1>BETTER BEATS YOURSELF</h1> {/* Fixed typo from "BETEER" */}
        
        <div className="image-grid">
          {galleryImages.slice(0, 4).map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image} alt={`gallery ${index}`} />
              <div className="image-overlay">
                <span>View More</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="image-grid">
          {galleryImages.slice(5).map((image, index) => (
            <div className="image-item" key={index + 4}>
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
}

export default Gallery;