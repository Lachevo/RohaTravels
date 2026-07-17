import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const PopularTours = ({ isAmharic }) => {
  const [showMore, setShowMore] = useState(false);

  const content = {
    popularTours: isAmharic ? "ታዋቂ ጉዞዎች" : "Popular Tours",
    moreButton: isAmharic ? "ተጨማሪ" : "Discover More Packages",
    lessButton: isAmharic ? "ያነሰ" : "Show Fewer Packages",
    bookButton: isAmharic ? "ቦታ ይያዙ" : "Book Adventure",
    popularToursList: [
      {
        name: isAmharic ? "የታሪካዊ ጉዞ" : "Historical & Cultural Tour",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "8 days",
        tag: isAmharic ? "ቅርስ" : "Heritage",
        price: "$899",
      },
      {
        name: isAmharic ? "የተፈጥሮ ጉዞ" : "Wild Nature & Wildlife Tour",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
        duration: "7 days",
        tag: isAmharic ? "ጀብዱ" : "Adventure",
        price: "$750",
      },
      {
        name: isAmharic ? "የባህል ጉዞ" : "Authentic Ethiopian Tribes Tour",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        duration: "10 days",
        tag: isAmharic ? "ባህል" : "Cultural",
        price: "$1,100",
      },
      {
        name: isAmharic ? "የሕክምና ጉዞ" : "Medical Consultation Tour",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        duration: "5 days",
        tag: isAmharic ? "ህክምና" : "Medical",
        price: "$450",
      },
      {
        name: isAmharic ? "የኮዝሜቶሎጂ ጉዞ" : "Advanced Cosmetology Tour",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        duration: "6 days",
        tag: isAmharic ? "ኮዝሜቶሎጂ" : "Cosmetology",
        price: "$599",
      },
    ],
  };

  const visibleTours = showMore ? content.popularToursList : content.popularToursList.slice(0, 3);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <span className="section-badge">{isAmharic ? "ታዋቂ መዳረሻዎች" : "Handcrafted Journeys"}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2e3a] tracking-tight">
          {content.popularTours}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleTours.map((tour, index) => (
          <Card key={index} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md image-card group cursor-pointer relative flex flex-col justify-between">
            <div className="relative overflow-hidden h-64">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-[#e0cd95] text-[#1a2e3a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {tour.tag}
              </span>
              <span className="absolute bottom-4 right-4 text-white text-xl font-bold">
                {tour.price}
              </span>
            </div>

            <CardContent className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{tour.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a2e3a] line-clamp-1">{tour.name}</h3>
              </div>

              <Link to="/booking">
                <Button className="w-full bg-[#294050] text-[#C8DDD8] hover:bg-[#1a2e3a] hover:text-white rounded-xl py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  {content.bookButton}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {content.popularToursList.length > 3 && (
        <div className="text-center">
          <Button
            onClick={() => setShowMore(!showMore)}
            className="bg-[#294050]/5 hover:bg-[#294050] text-[#294050] hover:text-white border border-[#294050]/20 hover:border-transparent px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            {showMore ? content.lessButton : content.moreButton}
          </Button>
        </div>
      )}
    </div>
  );
};

export default PopularTours;