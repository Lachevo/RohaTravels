import React from 'react';
import BookingForm from '../components/BookingForm';
import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon, CalendarIcon, UsersIcon, GlobeIcon, ShieldIcon, HeadphonesIcon } from 'lucide-react';

const Booking = ({ isAmharic }) => {
  const content = {
    title: isAmharic ? "ጉዞዎን ይቁጠሩ" : "Plan Your Journey",
    subtitle: isAmharic
      ? "ቦታ ለማስያዝ ከታች ያለውን ቅጽ ይሙሉ"
      : "Fill out the form below to book your trip",
    features: [
      {
        icon: <MapPinIcon className="h-8 w-8 text-[#294050]" />,
        title: isAmharic ? "ልዩ መዳረሻዎች" : "Unique Destinations",
        description: isAmharic
          ? "ልዩ እና አስደናቂ ቦታዎችን ይጎብኙ"
          : "Visit extraordinary and breathtaking places",
      },
      {
        icon: <CalendarIcon className="h-8 w-8 text-[#294050]" />,
        title: isAmharic ? "ተለዋጭ ቀናት" : "Flexible Dates",
        description: isAmharic
          ? "ለእርስዎ የሚመች ጊዜ ይምረጡ"
          : "Choose the time that suits you best",
      },
      {
        icon: <UsersIcon className="h-8 w-8 text-[#294050]" />,
        title: isAmharic ? "ግላዊ አገልግሎት" : "Personalized Service",
        description: isAmharic
          ? "የእርስዎን ፍላጎት የሚያሟላ አገልግሎት"
          : "Service tailored to your preferences",
      },
      {
        icon: <GlobeIcon className="h-8 w-8 text-[#294050]" />,
        title: isAmharic ? "ዓለም አቀፍ ጉዞዎች" : "International Travel",
        description: isAmharic
          ? "የዓለምን ድንቅ ቦታዎች ይመልከቱ"
          : "Explore wonders around the world",
      },
      {
        icon: <ShieldIcon className="h-8 w-8 text-[#294050]" />,
        title: isAmharic ? "ደህንነት እና ጥንቃቄ" : "Safety and Security",
        description: isAmharic
          ? "የደንበኞቻችን ደህንነት ቅድሚያ የምንሰጠው ጉዳይ ነው"
          : "Your safety is our top priority",
      },
      {
        icon: <HeadphonesIcon className="h-8 w-8 text-[#294050]" />,
        title: isAmharic ? "24/7 ድጋፍ" : "24/7 Support",
        description: isAmharic
          ? "ሁልጊዜ እርስዎን ለመርዳት ዝግጁ ነን"
          : "We're always ready to assist you",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-2 text-black">{content.title}</h1>
      <p className="text-xl text-center mb-12 text-gray-600">{content.subtitle}</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {content.features.map((feature, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center p-6">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-center">{feature.title}</h3>
              <p className="mt-2 text-center text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-8">
        <BookingForm isAmharic={isAmharic} />
      </div>
    </div>
  );
};

export default Booking;
