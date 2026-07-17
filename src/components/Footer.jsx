import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, PhoneIcon, Mail, MapPin, Send } from 'lucide-react';

const TikTokIcon = ({ color = "#000000", size = 24 }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={size}
      height={size}
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const TelegramIcon = ({ color = "#000000", size = 24 }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={size}
      height={size}
    >
      <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
    </svg>
  );
};

const Footer = ({ isAmharic }) => {
  const resources = [
    { title: isAmharic ? 'የጉዞ ምክሮች' : 'Travel Tips', link: '/travel-tips' },
    { title: isAmharic ? 'የጉዞ መመሪያ' : 'Travel Guide', link: '/travel-guide' },
    { title: isAmharic ? 'ብዙ የሚጠየቁ ጥያቄዎች' : 'FAQs', link: '/faqs' },
    { title: isAmharic ? 'ማህደር' : 'Gallery', link: '/gallery' },
  ];

  return (
    <footer className="bg-[#1a2e3a] text-slate-300 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e0cd95]/40 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Roha Logo" className="w-12 h-12 rounded-full object-contain" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                {isAmharic ? "ሮሃ ጉዞና ቱሪዝም" : "Roha Travels"}
              </h3>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              {isAmharic
                ? "የእርስዎ የተሟላ የጉዞ አጋር። ከአየር መንገድ ትኬቶች እስከ ሆቴል ቦታ ማስያዣዎች እና ልዩ ጉዞዎች።"
                : "Your complete premium travel partner. Crafting exceptional flight, hotel, and photographic tours since 2021."}
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.facebook.com/ROHAPLC?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/roha_travels?igsh=anFkN2dsc3Z6cWg%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@rohatravel?_t=8qCSUzJ98fm&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <TikTokIcon color="currentColor" size={18} />
              </a>
              <a
                href="https://t.me/+aKIXqUC1B9FmNzNk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <TelegramIcon color="currentColor" size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white tracking-tight">
              {isAmharic ? "ያግኙን" : "Contact Us"}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e0cd95]" />
                <a href="mailto:info@roha-travels.com" className="hover:text-white transition-colors">
                  info@roha-travels.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="w-4 h-4 text-[#e0cd95] mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+251911611111" className="block hover:text-white transition-colors">+251-91-161-1111</a>
                  <a href="tel:+251911888666" className="block hover:text-white transition-colors">+251-91-188-8666</a>
                  <a href="tel:+251913118414" className="block hover:text-white transition-colors">+251-91-311-8414</a>
                  <a href="tel:+251978231313" className="block hover:text-white transition-colors">+251-97-823-1313</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white tracking-tight">
              {isAmharic ? "ሀብቶች" : "Resources"}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-light">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link to={resource.link} className="hover:text-[#e0cd95] transition-colors flex items-center gap-1 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#e0cd95] transition-all" />
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white tracking-tight">
              {isAmharic ? "ዜና መጽሔት" : "Newsletter"}
            </h4>
            <p className="text-sm text-slate-400 font-light">
              {isAmharic ? "የጉዞ መረጃዎችንና ቅናሾችን ለማግኘት ይመዝገቡ።" : "Subscribe to get our latest travel guides and exclusive package offers."}
            </p>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder={isAmharic ? "ኢሜይል" : "Your email address"}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e0cd95] transition-all pr-10"
              />
              <button className="absolute right-2 text-slate-400 hover:text-[#e0cd95] transition-colors p-1.5">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Roha Tour and Travel.{" "}
            {isAmharic ? "መብቱ በህግ የተጠበቀ ነው።" : "All rights reserved."}
          </p>
          <p>
            {isAmharic ? "የተገነባው በ" : "Designed & Developed by "}{" "}
            <a
              href="https://t.me/keneanalemayhu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors underline"
            >
              Kenean Alemayhu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;