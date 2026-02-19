import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PlaneIcon, HotelIcon, CameraIcon, GlobeIcon } from 'lucide-react';

const OurServices = ({ isAmharic }) => {
  const content = {
    services: [
      {
        icon: <PlaneIcon className="h-6 w-6" />,
        title: isAmharic ? "የአየር ጉዞ" : "Flights",
      },
      {
        icon: <HotelIcon className="h-6 w-6" />,
        title: isAmharic ? "ሆቴሎች" : "Hotels",
      },
      {
        icon: <CameraIcon className="h-6 w-6" />,
        title: isAmharic ? "የፎቶግራፍ ጉዞዎች" : "Photography Tours",
      },
      {
        icon: <GlobeIcon className="h-6 w-6" />,
        title: isAmharic ? "ጉዞዎች" : "Tours",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#28424F]">
        {isAmharic ? "የእኛ አገልግሎቶች" : "Our Services"}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {content.services.map((service, index) => (
          <Card key={index} className="text-center bg-white">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                {React.cloneElement(service.icon, {
                  className: "h-12 w-12 text-[#28424F]",
                })}
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurServices;