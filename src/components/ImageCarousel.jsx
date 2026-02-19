import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 1;
        }
      }, 30);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="overflow-x-hidden whitespace-nowrap"
      style={{ scrollBehavior: 'smooth' }}
    >
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Carousel image ${index + 1}`}
          className="inline-block h-96 w-auto mx-2 rounded-lg object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
