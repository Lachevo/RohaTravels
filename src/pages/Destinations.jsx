import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DestinationToggle from '../components/DestinationToggle';
import { Link } from 'react-router-dom';

const Destinations = ({ isAmharic }) => {
  const [isLocal, setIsLocal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const localDestinations = [
    { name: isAmharic ? 'አዲስ አበባ' : 'Addis Ababa', image: '/images/addis.png' },
    { name: isAmharic ? 'ላሊበላ' : 'Lalibela', image: '/images/lalibela.png' },
    { name: isAmharic ? 'አክሱም' : 'Axum', image: '/images/axum.png' },
    { name: isAmharic ? 'ጎንደር' : 'Gondar', image: 'https://images.unsplash.com/photo-1590083948608-525d75ee5edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  ];

  const internationalDestinations = [
    { name: isAmharic ? 'ሮም፣ ጣሊያን' : 'Rome, Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ፍራንክፈርት፣ ጀርመን' : 'Frankfurt, Germany', image: 'https://images.unsplash.com/photo-1605186620429-1ece911f171c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'አምስተርዳም፣ ኔዘርላንድስ' : 'Amsterdam, Netherlands', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ዱባይ፣ የተባበሩት አረብ ኤምሬትስ' : 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'እየሩሳሌም፣ እስራኤል' : 'Jerusalem, Israel', image: 'https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ባንኮክ፣ ታይላንድ' : 'Bangkok, Thailand', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' },
    { name: isAmharic ? 'ኢስታንቡል፣ ቱርክ' : 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' },
    { name: isAmharic ? 'ናይሮቢ፣ ኬንያ' : 'Nairobi, Kenya', image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ዛንዚባር፣ ታንዛኒያ' : 'Zanzibar, Tanzania', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: isAmharic ? 'ሴሼልስ' : 'Seychelles', image: 'https://images.unsplash.com/photo-1589979481223-deb893043163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
  ];

  const moreLocalDestinations = [
    { name: isAmharic ? 'ባህር ዳር' : 'Bahir Dar', image: '/images/Bahirdar.png' },
    { name: isAmharic ? 'ሐረር' : 'Harar', image: '/images/harar.png' },
    { name: isAmharic ? 'አርባ ምንጭ' : 'Arba Minch', image: '/images/arbaminch.png' },
    { name: isAmharic ? 'ጅማ' : 'Jimma', image: '/images/jimma.png' },
  ];

  const initialDestinations = isLocal ? localDestinations : internationalDestinations.slice(0, 4);
  const additionalDestinations = isLocal ? moreLocalDestinations : internationalDestinations.slice(4);
  const allDestinations = showMore ? [...initialDestinations, ...additionalDestinations] : initialDestinations;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        {isAmharic ? "መዳረሻዎች" : "Destinations"}
      </h1>

      <div className="mb-8">
        <DestinationToggle
          isAmharic={isAmharic}
          isLocal={isLocal}
          setIsLocal={setIsLocal}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allDestinations.map((destination, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-white border border-gray-200"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-black mb-2">
                {destination.name}
              </h3>
              <Link to="/booking">
                <Button className="w-full bg-[#294050] text-[#C8DDD8] hover:bg-[#C8DDD8] hover:text-[#294050]">
                  {isAmharic ? "ቦታ ይያዙ" : "Book Now"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          onClick={toggleShowMore}
          className="bg-[#294050] text-[#C8DDD8] hover:bg-[#C8DDD8] hover:text-[#294050]"
        >
          {showMore
            ? isAmharic
              ? "ያነሰ አሳይ"
              : "Show Less"
            : isAmharic
            ? "ተጨማሪ አሳይ"
            : "Show More"}
        </Button>
      </div>
    </div>
  );
};

export default Destinations;
