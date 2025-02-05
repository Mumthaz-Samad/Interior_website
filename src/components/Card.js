import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div className="bg-pink-50 shadow-lg shadow-rose-300 rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-rose-500 transition-transform duration-500 ease-in-out transform hover:scale-105">

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default Card;
