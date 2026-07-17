import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaneIcon, HotelIcon, GlobeIcon, UmbrellaIcon, MapIcon, CameraIcon, StethoscopeIcon, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Services = ({ isAmharic }) => {
  const [selectedService, setSelectedService] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

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
    {
      icon: <StethoscopeIcon className="h-6 w-6" />,
      title: isAmharic ? 'የህክምና ጉዞ' : 'Medical Travel',
      shortDescription: isAmharic
        ? 'ለህክምና፣ ለምርመራ እና ለጤንነት አገልግሎቶች የሚደረጉ ጉዞዎችን እናመቻቻለን።'
        : "We facilitate travel for medical treatments, checkups, and wellness procedures.",
      longDescription: isAmharic
        ? 'በዓለም ዙሪያ ካሉ ከፍተኛ ጥራት ያላቸው ሆስፒታሎች እና የህክምና ባለሙያዎች ጋር በመተባበር የህክምና ጉዞን እናመቻቻለን። ከበረራ ቦታ ማስያዝ እና ምቹ መስተንግዶዎች ጀምሮ የህክምና ቪዛ ዝግጅቶችን እና የአካባቢ መጓጓዣዎችን ሁሉንም እናስተዳድራለን። የእኛ ቡድን ሙሉ በሙሉ በጤናዎ እና በማገገምዎ ላይ ማተኮር እንዲችሉ ከጭንቀት ነፃ የሆነ ተሞክሮ ያረጋግጣል።'
        : "We facilitate medical travel by partnering with top-tier hospitals and specialists worldwide. We manage everything from flight bookings and comfortable accommodations to medical visa arrangements and local transport. Our dedicated team ensures a stress-free experience so you can focus entirely on your health and recovery.",
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="section-badge">{isAmharic ? "አገልግሎቶቻችን" : "Our Services"}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2e3a] tracking-tight leading-tight">
            {isAmharic ? 'የእኛ አገልግሎቶች' : 'Travel Services We Offer'}
          </h1>
          <p className="text-slate-500 font-light text-sm">
            {isAmharic
              ? "ለእርስዎ ሙሉ የጉዞ ፍላጎት የተዘጋጁ ልዩ አገልግሎቶቻችንን እዚህ ያግኙ።"
              : "Explore our premium and custom-designed services built around your destination needs."}
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isOpen = selectedService === index;
            return (
              <motion.div
                layout
                key={index}
                className={`bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  isOpen ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
                onClick={() => setSelectedService(isOpen ? null : index)}
              >
                <div className={`p-8 ${isOpen ? 'lg:flex gap-8 items-center' : ''}`}>
                  {/* Left part */}
                  <div className={`flex-1 ${isOpen ? 'space-y-6' : 'space-y-4'}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#294050]/10 flex items-center justify-center text-[#294050]">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#1a2e3a] tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 font-light text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {!isOpen && (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#294050] hover:underline">
                        <span>{isAmharic ? "ዝርዝር አሳይ" : "Read Details"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Expanded block */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex-1 lg:flex gap-8 mt-6 lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8 space-y-6 lg:space-y-0"
                      >
                        <div className="flex-1">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-56 object-cover rounded-2xl shadow-sm"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between space-y-4">
                          <p className="text-slate-600 font-light text-sm leading-relaxed">
                            {service.longDescription}
                          </p>
                          <div className="flex gap-4">
                            <button onClick={() => scrollToSection('booking')} className="flex-1">
                              <Button className="w-full bg-[#294050] text-[#C8DDD8] hover:bg-[#1a2e3a] hover:text-white rounded-xl py-3 font-semibold shadow-md flex items-center justify-center gap-2 border-none">
                                {isAmharic ? "ቦታ ይያዙ" : "Book This Service"}
                                <ArrowRight className="w-4 h-4" />
                              </Button>
                            </button>
                            <Button
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedService(null);
                              }}
                              className="rounded-xl border-slate-200 text-slate-500 hover:bg-slate-50 font-semibold px-4"
                            >
                              {isAmharic ? "ዝጋ" : "Close"}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
