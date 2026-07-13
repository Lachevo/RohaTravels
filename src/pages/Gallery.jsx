import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = ({ isAmharic }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const items = [
      { type: 'image', src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1564501049351-923e0457986c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1500595046891-ef6a9a8c4eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1488479671046-b282c2b3e753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1499716056541-b48237488b2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1552154349-163db0f708a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1500595046891-ef6a9a8c4eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1488479671046-b282c2b3e753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1445849185212-7ff77095beda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1502481851512-e9c2529bfb73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
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
