import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, PhoneIcon } from 'lucide-react';

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
    <footer className="bg-[#294050] text-[#C8DDD8] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isAmharic ? "ሮሃ ጉዞና ቱሪዝም" : "Roha Tour and Travel"}
            </h3>
            <p>
              {isAmharic
                ? "የእርስዎ የተሟላ የጉዞ አጋር"
                : "Your Complete Travel Partner"}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {isAmharic ? "ያግኙን" : "Contact Us"}
            </h4>
            <p>
              <a
                href="mailto:info@roha-travels.com"
                className="hover:underline"
              >
                Email: info@roha-travels.com
              </a>
            </p>
            <p>
              <a href="tel:+251911611111" className="hover:underline">
                {isAmharic ? "ስልክ" : "Phone"}: +251-91-161-1111
              </a>
            </p>
            <p>
              <a href="tel:+251911888666" className="hover:underline">
                {isAmharic ? "ስልክ" : "Phone"}: +251-91-188-8666
              </a>
            </p>
            <p>
              <a href="tel:+251913118414" className="hover:underline">
                {isAmharic ? "ስልክ" : "Phone"}: +251-91-311-8414
              </a>
            </p>
            <p>
              <a href="tel:+251978231313" className="hover:underline">
                {isAmharic ? "ስልክ" : "Phone"}: +251-97-823-1313
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {isAmharic ? "ሀብቶች" : "Resources"}
            </h4>
            <ul>
              {resources.map((resource, index) => (
                <li key={index} className="mb-2">
                  <Link to={resource.link} className="hover:underline">
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {isAmharic ? "ተከተሉን" : "Follow Us"}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ROHAPLC?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="https://www.instagram.com/roha_travels?igsh=anFkN2dsc3Z6cWg%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@rohatravel?_t=8qCSUzJ98fm&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <TikTokIcon color="#C8DDD8" size={24} />
              </a>
              <a
                href="https://t.me/+aKIXqUC1B9FmNzNk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <TelegramIcon color="#C8DDD8" size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; 2024 Roha Tour and Travel.{" "}
            {isAmharic ? "መብቱ በህግ የተጠበቀ ነው።" : "All rights reserved."}
          </p>
          <p className="mt-2">
            <a
              href="https://t.me/keneanalemayhu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {isAmharic ? "ከነአን አለማየሁ" : "Kenean Alemayhu"}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;