import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const PopularTours = ({ isAmharic }) => {
  const [showMore, setShowMore] = useState(false);

  const content = {
    popularTours: isAmharic ? "ታዋቂ ጉዞዎች" : "Popular Tours",
    moreButton: isAmharic ? "ተጨማሪ" : "More",
    lessButton: isAmharic ? "ያነሰ" : "Less",
    bookButton: isAmharic ? "ቦታ ይያዙ" : "Book",
    popularToursList: [
      {
        name: isAmharic ? "የታሪካዊ ጉዞ" : "Historical Tour",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        duration: "8 days",
      },
      {
        name: isAmharic ? "የተፈጥሮ ጉዞ" : "Nature Tour",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
        duration: "7 days",
      },
      {
        name: isAmharic ? "የባህል ጉዞ" : "Cultural Tour",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        duration: "10 days",
      },
      {
        name: isAmharic ? "የሕክምና ጉዞ" : "Medical Tour",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        duration: "5 days",
      },
      {
        name: isAmharic ? "የኮዝሜቶሎጂ ጉዞ" : "Cosmetology Tour",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        duration: "6 days",
      },
    ],
  };

  const visibleTours = showMore ? content.popularToursList : content.popularToursList.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#28424F]">
        {content.popularTours}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleTours.map((tour, index) => (
          <Card key={index} className="overflow-hidden">
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
              <p className="mb-4">{tour.duration}</p>
              <Link to="/booking">
                <Button className="w-full bg-[#294050] text-[#C8DDD8] hover:bg-[#C8DDD8] hover:text-[#294050]">
                  {content.bookButton}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      {content.popularToursList.length > 3 && (
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowMore(!showMore)}
            className="bg-[#294050] text-[#C8DDD8] hover:bg-[#C8DDD8] hover:text-[#294050]"
          >
            {showMore ? content.lessButton : content.moreButton}
          </Button>
        </div>
      )}
    </div>
  );
};

export default PopularTours;