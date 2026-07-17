import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = ({ isAmharic }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const items = [
      { type: 'image', title: isAmharic ? 'የስሜን ተራሮች' : 'Simien Mountains', src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'አባይ ፏፏቴ' : 'Blue Nile Falls', src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'ላሊበላ' : 'Lalibela Rock Church', src: 'https://images.unsplash.com/photo-1564501049351-923e0457986c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'የሰንፔር የውቅያኖስ እይታ' : 'Sapphire Ocean View', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'የዳናኪል መደብ' : 'Danakil Depression', src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'የዱር አራዊት' : 'African Wildlife', src: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'የጣና ሐይቅ' : 'Lake Tana Monasteries', src: 'https://images.unsplash.com/photo-1500595046891-ef6a9a8c4eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'የባህል ዳንስ' : 'Traditional Tribes', src: 'https://images.unsplash.com/photo-1488479671046-b282c2b3e753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'የቀይ ባህር ዳርቻ' : 'Red Sea Shoreline', src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'ጎንደር ፋሲለደስ' : 'Fasil Ghebbi, Gondar', src: 'https://images.unsplash.com/photo-1590083948608-525d75ee5edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'ደቡብ ኦሞ' : 'Omo Valley Tribe', src: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
      { type: 'image', title: isAmharic ? 'የአዋሽ ብሔራዊ ፓርክ' : 'Awash National Park', src: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
    ];

    setGalleryItems(items);
  }, [isAmharic]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="section-badge">{isAmharic ? "ፎቶዎች" : "Visual Journeys"}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2e3a] tracking-tight leading-tight">
            {isAmharic ? 'የጉዞ ማህደር' : 'Our Travel Gallery'}
          </h1>
          <p className="text-slate-500 font-light text-sm">
            {isAmharic
              ? "የእኛ ተጓዦች ያገኟቸውን አስደናቂ ተሞክሮዎች በምስል ይመልከቱ።"
              : "A snapshot of the beautiful moments, scenic routes, and authentic heritage experienced by Roha travelers."}
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-3xl group shadow-sm border border-slate-100 bg-white"
              whileHover={{ y: -4 }}
              onClick={() => handleItemClick(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              
              <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex justify-between items-center text-white">
                <span className="font-bold text-sm text-shadow">{item.title}</span>
                <div className="w-8 h-8 rounded-full bg-[#e0cd95] text-[#1a2e3a] flex items-center justify-center shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[200] p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm transition-colors"
                onClick={handleClose}
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-5xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6 text-center text-white">
                  <h4 className="text-lg font-bold">{selectedItem.title}</h4>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
