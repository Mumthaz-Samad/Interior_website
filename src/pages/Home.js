import React from 'react';

import Card from '../components/Card';
import livingRoomImage from '../assets/images/living-room.jpg';
import kitchenImage from '../assets/images/kitchen.jpg';
import bedroomImage from '../assets/images/bedroom.jpg';
import officeSpaceImage from '../assets/images/office-room.jpg';
import diningSpaceImage from '../assets/images/dining-room.jpg';
import studySpaceImage from '../assets/images/study-room.jpg';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Our New Collection</h2>
        <p className="text-gray-600 mb-8">Modern and aesthetic designs to redefine your space.</p>
        <button className="px-6 py-2 bg-rose-400 text-white rounded-lg hover:bg-pink-500 transition">
          Shop Now
        </button>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Living Room" image={livingRoomImage} />
        <Card title="Bedroom" image={bedroomImage} />
        <Card title="Office Space" image={officeSpaceImage} />
        <Card title="Dining Space" image={diningSpaceImage} />
        <Card title="Kitchen" image={kitchenImage} />
        <Card title="Study Space" image={studySpaceImage} />
      </section>
    </div>
    
    
  );
};

export default Home;
