import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-pink-50 shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold text-black tracking-wide  ">
          IOS INTERIORS
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="text-black font-bold hover:text-pink-500 hover:underline transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-black font-bold hover:text-pink-500 hover:underline transition-colors duration-300">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
