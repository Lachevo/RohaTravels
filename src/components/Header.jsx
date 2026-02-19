import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({ isAmharic, toggleLanguage }) => {
  return (
    <header className="bg-[#294050] text-[#C8DDD8] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Roha Logo" className="w-12 h-12 mr-2" />
          <span className="text-2xl font-bold hidden sm:inline">
            {isAmharic ? "ሮሃ ጉዞና ቱሪዝም" : "Roha Tour and Travel"}
          </span>
        </Link>
        <Navbar isAmharic={isAmharic} toggleLanguage={toggleLanguage} />
      </div>
    </header>
  );
};

export default Header;