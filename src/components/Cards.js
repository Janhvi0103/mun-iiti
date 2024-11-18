import React from 'react';
import '../css/Cards.css';
import image1 from '../assets/about/1.jpg';
import image6 from '../assets/about/6.jpg';
import imageCal from '../assets/about/cal.jpg';
import imageEligibility from '../assets/about/Eligibility.jpg';

// Image mapping object
const imageMap = {
  "1": image1,
  "6": image6,
  "cal": imageCal,
  "Eligibility": imageEligibility,
  "default-image": image1, // Fallback image
};

function Cards({ config }) {
  return (
    <div className="row" style={{ marginTop: '2%', marginLeft: '10%', marginRight: '10%' }}>
      {config.map((eachCard, index) => (
        <div key={index} className="col-md-3" style={{ marginBottom: '4%' }}>
          <div className="custom-card" style={{ width: 'auto', height: '350px' }}>
            <img
              style={{ height: '200px', width: '100%', objectFit: 'fill' }}
              src={imageMap[eachCard.img] || imageMap["default-image"]} // Use imageMap here
              alt={eachCard.title || 'Image'}
              loading="lazy" // Enable lazy loading for better performance
            />
            <div className="custom-card-body" style={{ padding: '10px' }}>
              {eachCard.title && <h5 className="custom-card-title">{eachCard.title}</h5>}
              <p className="custom-card-text" style={{ height: '150px' }}>
                {eachCard.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards; 