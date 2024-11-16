import React from 'react';
import './Cards.css';

function AboutCard({ config }) {
  return (
    <div className="row" style={{ marginTop: '2%', marginLeft: '10%', marginRight: '10%' }}>
      {config.map((eachCard, index) => (
        <div key={index} className="col-md-3" style={{ marginBottom: '4%' }}>
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
              <img
                src={require(`../assets/about/${eachCard.img || 'default-image'}.jpg`)}
                alt={eachCard.title || 'Image'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              {eachCard.title && (
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {eachCard.title}
                </h4>
              )}
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                {eachCard.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutCard;
