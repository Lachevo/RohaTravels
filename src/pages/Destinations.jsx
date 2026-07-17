import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DestinationToggle from '../components/DestinationToggle';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Destinations = ({ isAmharic }) => {
  const [isLocal, setIsLocal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const localDestinations = [
    { name: isAmharic ? 'አዲስ አበባ' : 'Addis Ababa', tag: isAmharic ? 'ዋና ከተማ' : 'Capital', image: 'https://images.unsplash.com/photo-1584782860282-a37e27c8deb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ላሊበላ' : 'Lalibela', tag: isAmharic ? 'ታሪክ' : 'History', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'አክሱም' : 'Axum', tag: isAmharic ? 'ቅርስ' : 'Heritage', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ጎንደር' : 'Gondar', tag: isAmharic ? 'ቤተመንግስት' : 'Castles', image: 'https://images.unsplash.com/photo-1590083948608-525d75ee5edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  ];

  const internationalDestinations = [
    { name: isAmharic ? 'ሮም፣ ጣሊያን' : 'Rome, Italy', tag: isAmharic ? 'ባህል' : 'Culture', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ፍራንክፈርት፣ ጀርመን' : 'Frankfurt, Germany', tag: isAmharic ? 'ከተማ' : 'City', image: 'https://images.unsplash.com/photo-1605186620429-1ece911f171c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'አምስተርዳም፣ ኔዘርላንድስ' : 'Amsterdam, Netherlands', tag: isAmharic ? 'እይታ' : 'Scenic', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ዱባይ፣ የተባበሩት አረብ ኤምሬትስ' : 'Dubai, UAE', tag: isAmharic ? 'ቅንጦት' : 'Luxury', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'እየሩሳሌም፣ እስራኤል' : 'Jerusalem, Israel', tag: isAmharic ? 'መንፈሳዊ' : 'Spiritual', image: 'https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ባንኮክ፣ ታይላንድ' : 'Bangkok, Thailand', tag: isAmharic ? 'ባህር ዳርቻ' : 'Exotic', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80' },
    { name: isAmharic ? 'ኢስታንቡል፣ ቱርክ' : 'Istanbul, Turkey', tag: isAmharic ? 'ታሪክ' : 'History', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' },
    { name: isAmharic ? 'ናይሮቢ፣ ኬንያ' : 'Nairobi, Kenya', tag: isAmharic ? 'ሳፋሪ' : 'Safari', image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ዛንዚባር፣ ታንዛኒያ' : 'Zanzibar, Tanzania', tag: isAmharic ? 'እረፍት' : 'Resort', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ሴሼልስ' : 'Seychelles', tag: isAmharic ? 'ደሴት' : 'Island', image: 'https://images.unsplash.com/photo-1589979481223-deb893043163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
  ];

  const moreLocalDestinations = [
    { name: isAmharic ? 'ባህር ዳር' : 'Bahir Dar', tag: isAmharic ? 'ሀይቅ' : 'Lake Side', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ሐረር' : 'Harar', tag: isAmharic ? 'ግንብ ከተማ' : 'Walled City', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'አርባ ምንጭ' : 'Arba Minch', tag: isAmharic ? 'ተፈጥሮ' : 'Nature', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ጅማ' : 'Jimma', tag: isAmharic ? 'ቡና' : 'Coffee Origin', image: 'https://images.unsplash.com/photo-1500595046891-ef6a9a8c4eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
  ];

  const initialDestinations = isLocal ? localDestinations : internationalDestinations.slice(0, 4);
  const additionalDestinations = isLocal ? moreLocalDestinations : internationalDestinations.slice(4);
  const allDestinations = showMore ? [...initialDestinations, ...additionalDestinations] : initialDestinations;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="section-badge">{isAmharic ? "አስደናቂ መዳረሻዎች" : "Explore The World"}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2e3a] tracking-tight leading-tight">
            {isAmharic ? "መዳረሻዎች" : "Our Destinations"}
          </h1>
          <p className="text-slate-500 font-light text-sm">
            {isAmharic 
              ? "ምርጥ የአገር ውስጥና የዓለም አቀፍ የጉዞ መዳረሻዎችን እዚህ ያግኙ።" 
              : "Discover handpicked, spectacular locations across Ethiopia and around the globe."}
          </p>
        </div>

        {/* Toggle Selector */}
        <div className="flex justify-center">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
            <DestinationToggle
              isAmharic={isAmharic}
              isLocal={isLocal}
              setIsLocal={(val) => {
                setIsLocal(val);
                setShowMore(false);
              }}
            />
          </div>
        </div>

        {/* Grid List */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {allDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md image-card group cursor-pointer relative h-[380px] flex flex-col justify-end"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e3a]/95 via-[#1a2e3a]/40 to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    {destination.tag}
                  </span>

                  <CardContent className="relative z-10 p-6 space-y-4">
                    <div className="flex items-center gap-1.5 text-white/80 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#e0cd95]" />
                      <span>{isLocal ? (isAmharic ? "ኢትዮጵያ" : "Ethiopia") : (isAmharic ? "ዓለም አቀፍ" : "Global")}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {destination.name}
                    </h3>
                    <Link to="/booking" className="block pt-2">
                      <Button className="w-full bg-[#e0cd95] hover:bg-[#c8a96e] text-[#1a2e3a] font-bold rounded-xl py-3 shadow-md flex items-center justify-center gap-2 border-none">
                        {isAmharic ? "አሁኑኑ ይያዙ" : "Book Journey"}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <Button
            onClick={toggleShowMore}
            className="bg-[#294050]/5 hover:bg-[#294050] text-[#294050] hover:text-white border border-[#294050]/20 hover:border-transparent px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            {showMore
              ? (isAmharic ? "ያነሰ አሳይ" : "Show Less Locations")
              : (isAmharic ? "ተጨማሪ አሳይ" : "Explore All Locations")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
