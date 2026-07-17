import React from 'react';
import BookingForm from '../components/BookingForm';
import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon, CalendarIcon, UsersIcon, GlobeIcon, ShieldIcon, HeadphonesIcon } from 'lucide-react';

const Booking = ({ isAmharic }) => {
  const content = {
    title: isAmharic ? "ጉዞዎን ይቁጠሩ" : "Plan Your Next Adventure",
    subtitle: isAmharic
      ? "ቦታ ለማስያዝ ከታች ያለውን ቅጽ ይሙሉ"
      : "Complete the fields below to verify and finalize your custom booking itinerary.",
    features: [
      {
        icon: <MapPinIcon className="h-6 w-6 text-[#294050]" />,
        title: isAmharic ? "ልዩ መዳረሻዎች" : "Unique Destinations",
        description: isAmharic
          ? "ልዩ እና አስደናቂ ቦታዎችን ይጎብኙ"
          : "Discover spectacular, hidden gems and historical monuments.",
      },
      {
        icon: <CalendarIcon className="h-6 w-6 text-[#294050]" />,
        title: isAmharic ? "ተለዋጭ ቀናት" : "Flexible Schedules",
        description: isAmharic
          ? "ለእርስዎ የሚመች ጊዜ ይምረጡ"
          : "Book customizable itineraries tailored perfectly around your timeline.",
      },
      {
        icon: <UsersIcon className="h-6 w-6 text-[#294050]" />,
        title: isAmharic ? "ግላዊ አገልግሎት" : "Personalized Service",
        description: isAmharic
          ? "የእርስዎን ፍላጎት የሚያሟላ አገልግሎት"
          : "Receive one-on-one professional guidance and custom recommendations.",
      },
      {
        icon: <GlobeIcon className="h-6 w-6 text-[#294050]" />,
        title: isAmharic ? "ዓለም አቀፍ ጉዞዎች" : "International Travel",
        description: isAmharic
          ? "የዓለምን ድንቅ ቦታዎች ይመልከቱ"
          : "Seamlessly navigate top destinations with zero hassle.",
      },
      {
        icon: <ShieldIcon className="h-6 w-6 text-[#294050]" />,
        title: isAmharic ? "ደህንነት እና ጥንቃቄ" : "Safety & Protection",
        description: isAmharic
          ? "የደንበኞቻችን ደህንነት ቅድሚያ የምንሰጠው ጉዳይ ነው"
          : "Travel with complete peace of mind with our secure bookings.",
      },
      {
        icon: <HeadphonesIcon className="h-6 w-6 text-[#294050]" />,
        title: isAmharic ? "24/7 ድጋፍ" : "24/7 Support",
        description: isAmharic
          ? "ሁልጊዜ እርስዎን ለመርዳት ዝግጁ ነን"
          : "Our dedicated representatives are active and reachable at any hour.",
      },
    ],
  };

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="section-badge">{isAmharic ? "ቦታ ማስያዣ" : "Secure Reservation"}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2e3a] tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-slate-500 font-light text-sm">
            {content.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature, index) => (
            <Card key={index} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm card-hover flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#294050]/10 flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#1a2e3a] tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 font-light text-xs leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
          <BookingForm isAmharic={isAmharic} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
