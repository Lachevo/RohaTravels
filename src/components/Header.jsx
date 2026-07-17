import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isAmharic, toggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      
      const sections = ['home', 'about', 'services', 'destinations', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl rounded-full ${
        scrolled
          ? 'top-4 bg-[#1a2e3a]/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/10 py-3 px-6'
          : 'top-6 bg-transparent py-4 px-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#e0cd95]/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
            <img
              src="/logo.png"
              alt="Roha Logo"
              className="relative w-11 h-11 rounded-full object-contain"
            />
          </div>
          <span className="text-xl font-bold text-white hidden sm:inline tracking-tight">
            {isAmharic ? 'ሮሃ ጉዞና ቱሪዝም' : (
              <>
                <span className="text-white">Roha</span>
                <span className="text-[#e0cd95]"> Travels</span>
              </>
            )}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavLinks isAmharic={isAmharic} toggleLanguage={toggleLanguage} activeSection={activeSection} scrollToSection={scrollToSection} />

        {/* Mobile Menu */}
        <MobileMenu isAmharic={isAmharic} toggleLanguage={toggleLanguage} activeSection={activeSection} scrollToSection={scrollToSection} />
      </div>
    </header>
  );
};

const navItems = (isAmharic) => [
  { title: isAmharic ? 'መነሻ' : 'Home', path: 'home' },
  { title: isAmharic ? 'ስለ እኛ' : 'About', path: 'about' },
  { title: isAmharic ? 'አገልግሎቶች' : 'Services', path: 'services' },
  { title: isAmharic ? 'መዳረሻዎች' : 'Destinations', path: 'destinations' },
  { title: isAmharic ? 'ማህደር' : 'Gallery', path: 'gallery' },
  { title: isAmharic ? 'ያግኙን' : 'Contact', path: 'contact' },
];

const NavLinks = ({ isAmharic, toggleLanguage, activeSection, scrollToSection }) => {
  const items = navItems(isAmharic);

  return (
    <nav className="hidden md:flex items-center gap-2">
      {items.map((item) => (
        <button
          key={item.path}
          onClick={() => scrollToSection(item.path)}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
            activeSection === item.path
              ? 'text-[#1a2e3a] bg-[#e0cd95] shadow-sm'
              : 'text-white/90 hover:text-white hover:bg-white/10'
          }`}
        >
          {item.title}
        </button>
      ))}

      {/* Book CTA */}
      <button onClick={() => scrollToSection('booking')} className="ml-3 btn-gold text-sm px-4 py-2 rounded-lg">
        {isAmharic ? 'ቦታ ይያዙ' : 'Book Now'}
      </button>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="ml-2 px-3 py-2 rounded-lg text-xs font-semibold border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-200"
      >
        {isAmharic ? 'EN' : 'አማ'}
      </button>
    </nav>
  );
};

const MobileMenu = ({ isAmharic, toggleLanguage, activeSection, scrollToSection }) => {
  const [open, setOpen] = useState(false);
  const items = navItems(isAmharic);

  return (
    <div className="md:hidden">
      <button
        id="mobile-menu-btn"
        onClick={() => setOpen(true)}
        className="p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: 'rgba(26, 46, 58, 0.98)', backdropFilter: 'blur(20px)' }}>
          {/* Close */}
          <div className="flex justify-between items-center p-5">
            <span className="text-xl font-bold text-[#e0cd95]">Roha Travels</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mx-5" />

          {/* Links */}
          <nav className="flex flex-col gap-1 p-5 mt-4">
            {items.map((item, i) => (
              <button
                key={item.path}
                onClick={() => {
                  scrollToSection(item.path);
                  setOpen(false);
                }}
                className={`px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 text-left ${
                  activeSection === item.path
                    ? 'bg-[#e0cd95]/15 text-[#e0cd95]'
                    : 'text-white/80 hover:bg-white/8 hover:text-white'
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="mt-auto p-5 flex flex-col gap-3">
            <button onClick={() => { scrollToSection('booking'); setOpen(false); }} className="w-full">
              <div className="btn-gold w-full justify-center py-3 rounded-xl">
                {isAmharic ? 'ቦታ ይያዙ' : 'Book Now'}
              </div>
            </button>
            <button
              onClick={() => { toggleLanguage(); setOpen(false); }}
              className="w-full py-3 rounded-xl border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-all"
            >
              {isAmharic ? 'Switch to English' : 'ወደ አማርኛ ቀይር'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;