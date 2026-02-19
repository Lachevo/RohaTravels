import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaneIcon, HotelIcon, GlobeIcon, UmbrellaIcon, MapIcon, CameraIcon } from 'lucide-react';

const Services = ({ isAmharic }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <PlaneIcon className="h-6 w-6" />,
      title: isAmharic ? 'የአየር ጉዞ ቦታ ማስያዣ' : 'Flight Bookings',
      shortDescription: isAmharic
        ? 'ዓለም አቀፍ እና የአገር ውስጥ በረራዎችን በተመጣጣኝ ዋጋ እናቀርባለን።'
        : "We offer competitive prices for international and domestic flights.",
      longDescription: isAmharic
        ? 'ዓለም አቀፍ እና የአገር ውስጥ በረራዎችን በተመጣጣኝ ዋጋ እናቀርባለን። የተለያዩ አየር መንገዶችን እና የበረራ አማራጮችን እናቀርባለን። ከአየር መንገዶች ጋር ያለን ጠንካራ ግንኙነት የተሻለ ዋጋ እና አገልግሎት እንድናገኝ ያስችለናል። ከቅናሽ ዋጋዎች እስከ ምቹ መርሃግብሮች፣ የእርስዎን የበረራ ፍላጎቶች ለማሟላት እንሰራለን።'
        : "We offer competitive prices for both international and domestic flights. Our wide range of airlines and flight options ensures you find the perfect match for your travel needs. Our strong relationships with airlines allow us to secure the best rates and services for our clients. From discounted fares to convenient schedules, we work to meet your flight requirements.",
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    },
    {
      icon: <HotelIcon className="h-6 w-6" />,
      title: isAmharic ? 'የሆቴል ቦታ ማስያዣ' : 'Hotel Reservations',
      shortDescription: isAmharic
        ? 'ከቅንጦት ሆቴሎች እስከ ተመጣጣኝ ዋጋ ያላቸው መስተንግዶዎች ድረስ ያሉ ምርጫዎችን እናቀርባለን።'
        : "We provide options from luxury hotels to budget-friendly accommodations.",
      longDescription: isAmharic
        ? 'ከቅንጦት ሆቴሎች እስከ ተመጣጣኝ ዋጋ ያላቸው መስተንግዶዎች ድረስ ያሉ ምርጫዎችን እናቀርባለን። ለእርስዎ ፍላጎት የሚስማማ ምርጥ ቦታ እናገኛለን። የእኛ ቡድን በየቦታው ያሉ ሆቴሎችን በሚገባ ያውቃል፣ ስለዚህ ለእርስዎ ፍላጎት የሚስማማውን ምክር ሊሰጥዎት ይችላል። ከምቹ አልጋዎች እስከ ጣፋጭ ምግቦች፣ የእርስዎን ምርጫ የሚያሟላ ሆቴል እናገኛለን።'
        : "We provide options ranging from luxury hotels to budget-friendly accommodations. Our team has extensive knowledge of hotels in various locations, so we can advise you on the best fit for your preferences. From comfortable beds to delicious meals, we'll find a hotel that meets your criteria. Whether you're looking for a city-center location or a peaceful retreat, we have the perfect option for you.",
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <CameraIcon className="h-6 w-6" />,
      title: isAmharic ? 'የፎቶግራፍ ጉዞዎች' : 'Photography Tours',
      shortDescription: isAmharic
        ? 'ለፎቶግራፍ ፍላጎት ያላቸው ጎብኚዎች የተዘጋጁ ልዩ የጉዞ ፓኬጆችን እናቀርባለን።'
        : "We offer specialized tour packages for photography enthusiasts.",
      longDescription: isAmharic
        ? 'ለፎቶግራፍ ፍላጎት ያላቸው ጎብኚዎች የተዘጋጁ ልዩ የጉዞ ፓኬጆችን እናቀርባለን። በልዩ ቦታዎች የፎቶግራፍ እድሎችን ይጎናጸፉ። የሙያተኛ ፎቶግራፈሮች መመሪያ እና ምክር ይኖርዎታል፣ እንዲሁም የአካባቢውን እውቀት ያላቸው መምሪያዎች ይኖሩዎታል። ከምድር ወለል እስከ አየር ላይ ድሮን ፎቶግራፍ፣ የእርስዎን የፎቶግራፍ ክህሎቶች ለማሻሻል እና አስደናቂ ምስሎችን ለመያዝ እንረዳዎታለን።'
        : "We offer specialized tour packages for photography enthusiasts. Capture unique photo opportunities in special locations. You'll have guidance and tips from professional photographers, as well as local guides with insider knowledge. From ground-level shots to aerial drone photography, we'll help you improve your photography skills and capture stunning images. Our tours are designed to take you to the most photogenic spots at the best times of day.",
      image: 'https://images.unsplash.com/photo-1452796907770-ad6cd374b12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    },
    {
      icon: <GlobeIcon className="h-6 w-6" />,
      title: isAmharic ? 'የጉዞ ፓኬጆች' : 'Tour Packages',
      shortDescription: isAmharic
        ? 'የተለያዩ መዳረሻዎችን የሚያካትቱ ቅድመ ዝግጁ እና ግላዊ የጉዞ ፓኬጆችን እናቀርባለን።'
        : "We offer pre-designed and customized tour packages covering various destinations.",
      longDescription: isAmharic
        ? 'የተለያዩ መዳረሻዎችን የሚያካትቱ ቅድመ ዝግጁ እና ግላዊ የጉዞ ፓኬጆችን እናቀርባለን። እያንዳንዱን ጉዞ ልዩ እና አስታዋሽ እናደርገዋለን። ከባህላዊ ጉብኝቶች እስከ ጀብዱ ጉዞዎች ድረስ፣ ለሁሉም ዓይነት ጎብኚዎች የሚስማማ ነገር አለን። የእርስዎን ፍላጎቶች እና ዝንባሌዎች ለማሟላት የተዘጋጁ ልዩ ጉዞዎችን እናዘጋጃለን። ከታሪካዊ ቦታዎች እስከ ተፈጥሮ ውበቶች፣ አስደናቂ ተሞክሮዎችን እናቀርባለን።'
        : "We offer both pre-designed and customized tour packages covering various destinations. We make each trip unique and memorable. From cultural tours to adventure trips, we have something for all types of travelers. We create specialized itineraries tailored to your interests and preferences. Whether you're interested in historical sites or natural wonders, we provide unforgettable experiences. Our expert guides ensure you get the most out of every destination.",
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
    },
    {
      icon: <UmbrellaIcon className="h-6 w-6" />,
      title: isAmharic ? 'የጉዞ መድህን' : 'Travel Insurance',
      shortDescription: isAmharic
        ? 'ለእርስዎ ጉዞ ሁሉንም የሚሸፍን የጉዞ መድህን እናቀርባለን።'
        : "We provide comprehensive travel insurance for your peace of mind.",
      longDescription: isAmharic
        ? 'ለእርስዎ ጉዞ ሁሉንም የሚሸፍን የጉዞ መድህን እናቀርባለን። በጉዞዎ ላይ ሙሉ መተማመን ይኖርዎት። የህክምና ወጪዎችን፣ የጉዞ መሰረዝን፣ የጉዞ መዘግየትን እና ሌሎች ብዙ ነገሮችን የሚሸፍኑ የተለያዩ የመድህን እቅዶችን እናቀርባለን። ለእርስዎ ፍላጎቶች የሚስማማ የመድህን እቅድ እንዲያገኙ እንረዳዎታለን። በጉዞዎ ላይ ሊያጋጥሙ የሚችሉ ማናቸውንም ችግሮች ለመቋቋም ዝግጁ ይሆናሉ።'
        : "We provide comprehensive travel insurance for your peace of mind. Travel with full confidence. We offer various insurance plans covering medical expenses, trip cancellations, travel delays, and much more. We'll help you find an insurance plan that suits your needs. Our insurance options ensure you're prepared for any unforeseen circumstances during your travels. From lost luggage to medical emergencies, we've got you covered.",
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <MapIcon className="h-6 w-6" />,
      title: isAmharic ? 'የጉዞ ምክር' : 'Travel Consultation',
      shortDescription: isAmharic
        ? 'የእኛ ልምድ ያላቸው ባለሙያዎች ለእርስዎ የጉዞ እቅዶች ምክር ይሰጣሉ።'
        : "Our experienced professionals offer advice for your travel plans.",
      longDescription: isAmharic
        ? 'የእኛ ልምድ ያላቸው ባለሙያዎች ለእርስዎ የጉዞ እቅዶች ምክር ይሰጣሉ። ጉዞዎን ቀላል እና ደስታ የተሞላ እናደርገዋለን። ከቪዛ መረጃ እስከ የአካባቢ ባህል እና ልማዶች፣ እንዲሁም የጉዞ ምክሮች እና ጥቆማዎች፣ እርስዎን ለጉዞዎ በሚገባ እናዘጋጃለን። የእርስዎን ፍላጎቶች እና በጀት ግምት ውስጥ በማስገባት ግላዊ የሆነ የጉዞ እቅድ እናዘጋጃለን። ከመነሻ እስከ መድረሻ፣ በእያንዳንዱ ደረጃ ላይ እንረዳዎታለን።'
        : "Our experienced professionals offer advice for your travel plans. We make your journey easy and enjoyable. From visa information to local customs and traditions, as well as travel tips and recommendations, we'll prepare you thoroughly for your trip. We create personalized itineraries taking into account your interests and budget. Our team provides support at every stage, from planning to your return home. We're here to answer all your travel-related questions and ensure you have a smooth, enjoyable trip.",
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        {isAmharic ? 'የእኛ አገልግሎቶች' : 'Our Services'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className={`bg-white border border-gray-200 transition-shadow duration-300 hover:shadow-lg cursor-pointer ${selectedService === index ? 'col-span-3' : ''}`}
            onClick={() => setSelectedService(selectedService === index ? null : index)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black">
                {service.icon}
                <span>{service.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">{service.shortDescription}</p>
              {selectedService === index && (
                <div className="grid md:grid-cols-2 gap-4">
                  <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded" />
                  <p className="text-black">{service.longDescription}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
