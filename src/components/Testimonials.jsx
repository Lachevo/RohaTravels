import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from 'lucide-react';

const Testimonials = ({ isAmharic }) => {
  const content = {
    testimonials: isAmharic ? "የደንበኞች አስተያየቶች" : "Testimonials",
    testimonialsList: [
      {
        name: isAmharic ? "አበበ በቀለ" : "Abebe Bekele",
        comment: isAmharic
          ? "አስደናቂ አገልግሎት! በጣም እመክራለሁ።"
          : "Amazing service! Highly recommended.",
        rating: 5,
      },
      {
        name: isAmharic ? "ሰላም ታደሰ" : "Selam Tadesse",
        comment: isAmharic
          ? "ሮሃ ጉዞዎች ጉዞዬን ቀላል እና አስደሳች አድርጎታል።"
          : "Roha Travels made my trip easy and enjoyable.",
        rating: 4,
      },
      {
        name: isAmharic ? "ዳዊት መኮንን" : "Dawit Mekonnen",
        comment: isAmharic
          ? "ምርጥ የጉዞ ኤጀንሲ በኢትዮጵያ!"
          : "The best travel agency in Ethiopia!",
        rating: 5,
      },
    ],
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#28424F]">
        {content.testimonials}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.testimonialsList.map((testimonial, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-6">
              <p className="mb-4">{testimonial.comment}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{testimonial.name}</span>
                <div className="flex">{renderStars(testimonial.rating)}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;