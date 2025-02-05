import React from 'react';

import backgroundImage from '../assets/images/background.jpg'; 

const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 py-10 bg-transparent rounded-lg shadow-lg">

        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About Us</h1>
        <p className="text-gray-700 leading-relaxed text-center mb-6">
          At IOS Interiors, we believe in creating spaces that reflect your personality and style.
          With over a decade of experience, our team of experts ensures that every detail is crafted with precision.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p>To bring innovative and modern interior designs to every home and office.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p>To be a global leader in the interior design industry, transforming spaces with creativity.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p>We prioritize integrity, creativity, and customer satisfaction in every project.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p>Dedicated to delivering quality designs that meet both aesthetic and functional needs.</p>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default AboutUs;
