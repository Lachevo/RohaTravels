import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlobeIcon, PlaneIcon, HotelIcon, CameraIcon, StarIcon, CheckCircleIcon, StethoscopeIcon, ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ImageCarousel from '../components/ImageCarousel';
import PopularTours from '../components/PopularTours';
import { motion } from 'framer-motion';

const Index = ({ isAmharic }) => {
  const [location, setLocation] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [dateFrom, setDateFrom] = useState(new Date().toISOString().split('T')[0]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleBook = () => {
    scrollToSection('booking');
  };

  const content = {
    heroTitle: isAmharic ? 'እንኳን ወደ ሮሃ ጉዞና ቱሪዝም በደህና መጡ' : 'Welcome to Roha Tour and Travel',
    heroSubtitle: isAmharic ? 'የእርስዎ የተሟላ የጉዞ አጋር' : 'Your Complete Travel Partner',
    heroDescription: isAmharic
      ? 'ሮሃ ጉዞና ቱሪዝም ለእርስዎ የጉዞ ፍላጎቶች ሁሉ አንድ ማቆሚያ ነው። ከአየር መንገድ ትኬቶች እስከ ሆቴል ቦታ ማስያዣዎች እና ከጉዞ ፓኬጆች እስከ የፎቶግራፍ ጉዞዎች፣ እኛ የእርስዎን ጉዞ ቀላል እና ደስታ እንዲሆን እናደርጋለን።'
      : 'Roha Tour and Travel is your one-stop solution for all your travel needs. From flight tickets to hotel bookings, and from tour packages to photography tours, we make your journey easy and enjoyable.',
    book: isAmharic ? 'ቦታ ይያዙ' : 'Book',
    whyChooseUs: isAmharic ? 'ለምን እኛን መምረጥ አለብዎት' : 'Why Choose Us',
    testimonials: isAmharic ? 'የደንበኞች አስተያየቶች' : 'Testimonials',
    aboutUs: isAmharic ? 'ስለ እኛ' : 'About Us',
    aboutUsDescription: isAmharic
      ? 'ሮሃ ጉዞና ቱሪዝም በ2013 ዓ.ም. የተመሰረተ የኢትዮጵያ ጉዞ ኤጀንሲ ነው። ከተመሰረትን ጀምሮ፣ ለደንበኞቻችን ልዩ የጉዞ ልምዶችን በመስጠት ላይ ነን። የእኛ ቡድን በጉዞ ኢንዱስትሪው ውስጥ ረጅም ልምድ ያለው ሲሆን ለእያንዳንዱ ደንበኛ ልዩ አገልግሎት ለመስጠት ቁርጠኛ ነው።'
      : 'Roha Tour and Travel is an Ethiopian travel agency founded in 2021. Since our inception, we have been providing exceptional travel experiences to our clients. Our team has extensive experience in the travel industry and is dedicated to offering personalized service to each customer.',
    moreAboutUs: isAmharic ? 'ተጨማሪ ስለ እኛ' : 'More About Us',
    services: [
      { icon: <PlaneIcon className="h-6 w-6" />, title: isAmharic ? 'የአየር ጉዞ' : 'Flights', desc: isAmharic ? 'ምርጥ የበረራ ቅናሾች' : 'Best flight ticket deals worldwide' },
      { icon: <HotelIcon className="h-6 w-6" />, title: isAmharic ? 'ሆቴሎች' : 'Hotels', desc: isAmharic ? 'ጥራት ያላቸው ሆቴሎች' : 'Handpicked luxury stays' },
      { icon: <CameraIcon className="h-6 w-6" />, title: isAmharic ? 'የፎቶግራፍ ጉዞዎች' : 'Photography Tours', desc: isAmharic ? 'ልዩ የፎቶግራፍ ጉዞዎች' : 'Picture-perfect excursions' },
      { icon: <GlobeIcon className="h-6 w-6" />, title: isAmharic ? 'ጉዞዎች' : 'Tours', desc: isAmharic ? 'የባህልና ታሪካዊ ጉዞዎች' : 'Curated historical experiences' },
      { icon: <StethoscopeIcon className="h-6 w-6" />, title: isAmharic ? 'የህክምና ጉዞ' : 'Medical Travel', desc: isAmharic ? 'የህክምና ጉዞ አመቻችነት' : 'Global healthcare travel solutions' },
    ],
    whyChooseUsList: [
      { title: isAmharic ? 'ልምድ ያለው ቡድን' : 'Experienced Team', description: isAmharic ? 'በጉዞ ኢንዱስትሪው ውስጥ ረጅም ልምድ ያለው ቡድን' : 'Years of industry-leading travel expertise and guidance.' },
      { title: isAmharic ? 'ግላዊ አገልግሎት' : 'Personalized Service', description: isAmharic ? 'ለእያንዳንዱ ደንበኛ ልዩ የሆነ አገልግሎት' : 'Tailor-made itineraries designed around your preferences.' },
      { title: isAmharic ? 'ተመጣጣኝ ዋጋ' : 'Competitive Prices', description: isAmharic ? 'ለሁሉም በጀት ተስማሚ የሆኑ ዋጋዎች' : 'Premium value with highly transparent, budget-friendly rates.' },
    ],
    testimonialsList: [
      { name: isAmharic ? 'አበበ በቀለ' : 'Abebe Bekele', comment: isAmharic ? 'አስደናቂ አገልግሎት! በጣም እመክራለሁ።' : 'Amazing service! Highly recommended.', rating: 5, role: 'Traveler' },
      { name: isAmharic ? 'ሰላም ታደሰ' : 'Selam Tadesse', comment: isAmharic ? 'ሮሃ ጉዞዎች ጉዞዬን ቀላል እና አስደሳች አድርጎታል።' : 'Roha Travels made my trip easy and enjoyable.', rating: 5, role: 'Explorer' },
      { name: isAmharic ? 'ዳዊት መኮንን' : 'Dawit Mekonnen', comment: isAmharic ? 'ምርጥ የጉዞ ኤጀንሲ በኢትዮጵያ!' : 'The best travel agency in Ethiopia!', rating: 5, role: 'Frequent Flyer' },
    ],
  };

  const carouselImages = [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1500595046891-ef6a9a8c4eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1488479671046-b282c2b3e753?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  ];

  const internationalDestinations = [
    "Rome, Italy",
    "Frankfurt, Germany",
    "Amsterdam, Netherlands",
    "Dubai, UAE",
    "Bangkok, Thailand",
    "Istanbul, Turkey",
    "Paris, France",
    "London, UK"
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-[#e0cd95] fill-[#e0cd95]" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-[#f8fafb] min-h-screen text-slate-800">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
            alt="Hero landscape"
            className="w-full h-full object-cover scale-105 animate-float"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e3a]/90 via-[#1a2e3a]/60 to-[#f8fafb]"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="section-badge bg-[#e0cd95]/20 text-[#e0cd95] border-[#e0cd95]/40 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
              {content.heroSubtitle}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight max-w-4xl mx-auto text-shadow"
          >
            {content.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 text-shadow-sm font-light"
          >
            {content.heroDescription}
          </motion.p>

          {/* Booking Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/20 grid grid-cols-1 sm:grid-cols-4 gap-4"
          >
            <div className="flex flex-col text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#294050]" />
                {isAmharic ? "አካባቢ" : "Destination"}
              </label>
              <Select onValueChange={setLocation} value={location}>
                <SelectTrigger className="w-full bg-slate-50 border-slate-200 text-slate-800 rounded-xl h-12 focus:ring-[#294050]">
                  <SelectValue placeholder={isAmharic ? "አካባቢዎችን ይምረጡ" : "Select location"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-slate-200">
                  {internationalDestinations.map((dest, index) => (
                    <SelectItem key={index} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#294050]" />
                {isAmharic ? "አይነት" : "Trip Type"}
              </label>
              <Select onValueChange={setBookingType} value={bookingType}>
                <SelectTrigger className="w-full bg-slate-50 border-slate-200 text-slate-800 rounded-xl h-12 focus:ring-[#294050]">
                  <SelectValue placeholder={isAmharic ? "የጉዞ አይነት" : "Booking type"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-slate-200">
                  <SelectItem value="flight">{isAmharic ? "በረራ" : "Flight"}</SelectItem>
                  <SelectItem value="hotel">{isAmharic ? "ሆቴል" : "Hotel"}</SelectItem>
                  <SelectItem value="tour">{isAmharic ? "ጉብኝት" : "Tour"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#294050]" />
                {isAmharic ? "ቀን" : "Departure"}
              </label>
              <Input
                type="date"
                className="w-full bg-slate-50 border-slate-200 text-slate-800 rounded-xl h-12 focus:ring-[#294050]"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>

            <div className="flex items-end">
              <Button
                onClick={handleBook}
                className="w-full bg-[#294050] text-[#C8DDD8] hover:bg-[#1a2e3a] hover:text-[#C8DDD8] h-12 rounded-xl font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                {content.book}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-6 py-20 space-y-32">
        {/* Popular Tours Section */}
        <section className="relative">
          <PopularTours isAmharic={isAmharic} />
        </section>

        {/* About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="section-badge">{isAmharic ? "ስለ እኛ" : "Who We Are"}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2e3a] tracking-tight leading-tight">
              {content.aboutUs}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              {content.aboutUsDescription}
            </p>
            <div className="pt-4">
              <button onClick={() => scrollToSection('about')}>
                <Button className="btn-primary">
                  {content.moreAboutUs}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[#e0cd95]/10 rounded-3xl transform rotate-3 scale-102 group-hover:rotate-0 transition-transform duration-500 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1635&q=80"
              alt="Beautiful Destination"
              className="w-full h-[400px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="text-center space-y-12">
          <div className="space-y-4">
            <span className="section-badge">{isAmharic ? "ምርጥ ምርጫ" : "The Roha Advantage"}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2e3a] tracking-tight">
              {content.whyChooseUs}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyChooseUsList.map((reason, index) => (
              <Card key={index} className="bg-white border border-slate-100 card-hover rounded-2xl p-4 shadow-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-full bg-[#C8DDD8]/40 flex items-center justify-center text-[#294050] font-bold text-xl">
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2e3a]">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Carousel / Travel Photos */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="section-badge">{isAmharic ? "ጋለሪ" : "Inspiration"}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2e3a] tracking-tight mt-2">
                {isAmharic ? "የጉዞ ፎቶዎች" : "Travel Captures"}
              </h2>
            </div>
            <button onClick={() => scrollToSection('gallery')} className="text-[#294050] font-semibold hover:underline flex items-center gap-1 text-sm">
              {isAmharic ? "ሙሉውን ማህደር ይመልከቱ" : "View Full Gallery"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900 py-4">
            <ImageCarousel images={carouselImages} />
          </div>
        </section>

        {/* Services Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <span className="section-badge">{isAmharic ? "አገልግሎቶች" : "What We Do"}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2e3a] tracking-tight">
              {isAmharic ? "የእኛ አገልግሎቶች" : "Our Services"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {content.services.map((service, index) => (
              <Card key={index} className="bg-white border border-slate-100 card-hover rounded-2xl shadow-sm flex flex-col justify-between">
                <CardContent className="p-6 space-y-4 flex-grow">
                  <div className="w-12 h-12 rounded-xl bg-[#294050]/10 flex items-center justify-center text-[#294050]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a2e3a] mb-1">{service.title}</h3>
                    <p className="text-slate-400 text-xs font-light">{service.desc}</p>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <button onClick={() => scrollToSection('booking')} className="w-full">
                    <Button className="w-full bg-[#294050]/5 hover:bg-[#294050] text-[#294050] hover:text-[#C8DDD8] font-semibold py-2 rounded-xl transition-all duration-300 border-none shadow-none text-xs">
                      {isAmharic ? "ቦታ ይያዙ" : "Book Now"}
                    </Button>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <span className="section-badge">{isAmharic ? "አስተያየቶች" : "Stories"}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2e3a] tracking-tight">
              {content.testimonials}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonialsList.map((item, index) => (
              <Card key={index} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 space-y-6 relative">
                <div className="flex items-center gap-1">
                  {renderStars(item.rating)}
                </div>
                <p className="text-slate-600 leading-relaxed font-light italic text-sm">
                  "{item.comment}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-[#294050]/10 flex items-center justify-center font-bold text-[#294050] text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a2e3a]">{item.name}</h4>
                    <p className="text-xs text-slate-400 font-light">{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
