import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isAmharic, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { title: isAmharic ? 'መነሻ' : 'Home', path: '/' },
    { title: isAmharic ? 'ስለ እኛ' : 'About', path: '/about' },
    { title: isAmharic ? 'አገልግሎቶች' : 'Services', path: '/services' },
    { title: isAmharic ? 'መዳረሻዎች' : 'Destinations', path: '/destinations' },
    { title: isAmharic ? 'ማህደር' : 'Gallery', path: '/gallery' },
    { title: isAmharic ? 'ቦታ ይያዙ' : 'Book', path: '/booking' },
    { title: isAmharic ? 'ያግኙን' : 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative flex items-center">
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#C8DDD8]">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div
        className={`md:flex items-center space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#C8DDD8] text-[#294050] z-50 flex flex-col items-center justify-center">
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <X className="h-6 w-6" />
            </button>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-[#294050] hover:text-opacity-70 text-2xl mb-4 ${
                  location.pathname === item.path
                    ? "border-b-2 border-black"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="mt-8 px-4 py-2 rounded bg-black text-[#C8DDD8]"
            >
              {isAmharic ? "English" : "አማርኛ"}
            </button>
          </div>
        )}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-[#C8DDD8] hover:text-opacity-70 ${
                location.pathname === item.path
                  ? "border-b-2 border-[#C8DDD8]"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded bg-black text-[#C8DDD8]"
          >
            {isAmharic ? "English" : "አማርኛ"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;