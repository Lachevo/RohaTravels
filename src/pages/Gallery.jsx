import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = ({ isAmharic }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const items = [
      { type: 'image', src: '/images/travels/IMG_0513.JPG' },
      { type: 'image', src: '/images/travels/IMG_1079.JPG' },
      { type: 'image', src: '/images/travels/IMG_1080.JPG' },
      { type: 'image', src: '/images/travels/IMG_7489.JPG' },
      { type: 'image', src: '/images/travels/IMG_7619.JPG' },
      { type: 'image', src: '/images/travels/IMG_7828.JPG' },
      { type: 'image', src: '/images/travels/IMG_7846.JPG' },
      { type: 'image', src: '/images/travels/IMG_7858.JPG' },
      { type: 'image', src: '/images/travels/IMG_7860.JPG' },
      { type: 'image', src: '/images/travels/IMG_7861.JPG' },
      { type: 'image', src: '/images/travels/IMG_7926.JPG' },
      { type: 'image', src: '/images/travels/IMG_7927.JPG' },
      { type: 'image', src: '/images/travels/IMG_7929.JPG' },
      { type: 'image', src: '/images/travels/IMG_7934.JPG' },
      { type: 'image', src: '/images/travels/IMG_7967.JPG' },
      { type: 'image', src: '/images/travels/IMG_7973.JPG' },
      { type: 'image', src: '/images/travels/IMG_7999.JPG' },
      { type: 'image', src: '/images/travels/IMG_8014.JPG' },
      { type: 'image', src: '/images/travels/IMG_8007.JPG' },
      { type: 'image', src: '/images/travels/IMG_8290.JPG' },
      { type: 'image', src: '/images/travels/IMG_8216.JPG' },
      { type: 'image', src: '/images/travels/IMG_8162.JPG' },
      { type: 'image', src: '/images/travels/IMG_8252.JPG' },
      { type: 'video', src: '/images/travels/IMG_0517.MOV' },
      { type: 'video', src: '/images/travels/IMG_0518.MOV' },
      { type: 'video', src: '/images/travels/IMG_1096.MOV' },
      { type: 'video', src: '/images/travels/IMG_1102.MOV' },
      { type: 'video', src: '/images/travels/IMG_3356.MOV' },
    ];

    // Shuffle the array
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    setGalleryItems(items);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {isAmharic ? 'የጉዞ ማህደር' : 'Travel Gallery'}
      </h1>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleItemClick(item)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
              />
            )}
          </motion.div>
        ))}
      </motion.div>
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={handleClose}
          >
            <X size={24} />
          </button>
          {selectedItem.type === 'image' ? (
            <img
              src={selectedItem.src}
              alt="Selected item"
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <video
              src={selectedItem.src}
              className="max-w-full max-h-full"
              controls
              autoPlay
              loop
            />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
