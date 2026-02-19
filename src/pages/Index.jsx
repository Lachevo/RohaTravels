import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobeIcon, PlaneIcon, HotelIcon, CameraIcon, StarIcon, CheckCircleIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ImageCarousel from '../components/ImageCarousel';
import PopularTours from '../components/PopularTours';

const Index = ({ isAmharic }) => {
  const [location, setLocation] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [dateFrom, setDateFrom] = useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate();

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
      { icon: <PlaneIcon className="h-6 w-6" />, title: isAmharic ? 'የአየር ጉዞ' : 'Flights' },
      { icon: <HotelIcon className="h-6 w-6" />, title: isAmharic ? 'ሆቴሎች' : 'Hotels' },
      { icon: <CameraIcon className="h-6 w-6" />, title: isAmharic ? 'የፎቶግራፍ ጉዞዎች' : 'Photography Tours' },
      { icon: <GlobeIcon className="h-6 w-6" />, title: isAmharic ? 'ጉዞዎች' : 'Tours' },
    ],
    whyChooseUsList: [
      { title: isAmharic ? 'ልምድ ያለው ቡድን' : 'Experienced Team', description: isAmharic ? 'በጉዞ ኢንዱስትሪው ውስጥ ረጅም ልምድ ያለው ቡድን' : 'Team with extensive experience in the travel industry' },
      { title: isAmharic ? 'ግላዊ አገልግሎት' : 'Personalized Service', description: isAmharic ? 'ለእያንዳንዱ ደንበኛ ልዩ የሆነ አገልግሎት' : 'Tailored service for each customer' },
      { title: isAmharic ? 'ተመጣጣኝ ዋጋ' : 'Competitive Prices', description: isAmharic ? 'ለሁሉም በጀት ተስማሚ የሆኑ ዋጋዎች' : 'Prices suitable for all budgets' },
    ],
    testimonialsList: [
      { name: isAmharic ? 'አበበ በቀለ' : 'Abebe Bekele', comment: isAmharic ? 'አስደናቂ አገልግሎት! በጣም እመክራለሁ።' : 'Amazing service! Highly recommended.', rating: 5 },
      { name: isAmharic ? 'ሰላም ታደሰ' : 'Selam Tadesse', comment: isAmharic ? 'ሮሃ ጉዞዎች ጉዞዬን ቀላል እና አስደሳች አድርጎታል።' : 'Roha Travels made my trip easy and enjoyable.', rating: 4 },
      { name: isAmharic ? 'ዳዊት መኮንን' : 'Dawit Mekonnen', comment: isAmharic ? 'ምርጥ የጉዞ ኤጀንሲ በኢትዮጵያ!' : 'The best travel agency in Ethiopia!', rating: 5 },
    ],
  };

  const carouselImages = [
    '/images/travels/IMG_0513.JPG',
    '/images/travels/IMG_1079.JPG',
    '/images/travels/IMG_1080.JPG',
    '/images/travels/IMG_7489.JPG',
    '/images/travels/IMG_7619.JPG',
    '/images/travels/IMG_7828.JPG',
    '/images/travels/IMG_7846.JPG',
    '/images/travels/IMG_7858.JPG',
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
        className={`h-5 w-5 ${
          index < rating ? "text-[#294050]" : "text-gray-300"
        }`}
      />
    ));
  };

  const handleBook = () => {
    navigate('/booking');
  };

  return (
    <div className="bg-[#F2F2F2]">
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 text-white text-center">
          <img src="/logo.png" alt="Roha Logo" className="w-32 h-32 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{content.heroTitle}</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            {content.heroSubtitle}
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">{content.heroDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl mx-auto bg-white/80 p-4 rounded-lg">
            <Select onValueChange={setLocation} value={location}>
              <SelectTrigger className="w-full sm:w-1/4 text-black">
                <SelectValue placeholder={isAmharic ? "አካባቢዎች" : "Locations"} />
              </SelectTrigger>
              <SelectContent>
                {internationalDestinations.map((dest, index) => (
                  <SelectItem key={index} value={dest}>
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setBookingType} value={bookingType}>
              <SelectTrigger className="w-full sm:w-1/4 text-black">
                <SelectValue
                  placeholder={isAmharic ? "የቦታ ማስያዣ አይነት" : "Booking Type"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flight">Flight</SelectItem>
                <SelectItem value="hotel">Hotel</SelectItem>
                <SelectItem value="tour">Tour</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              placeholder={isAmharic ? "ቀን" : "Date from"}
              className="w-full sm:w-1/4 text-black bg-white border-gray-300"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
            <Button
              onClick={handleBook}
              className="w-full sm:w-1/4 bg-[#294050] text-[#C8DDD8] hover:bg-[#C8DDD8] hover:text-[#294050] hover:bg-opacity-90"
            >
              {content.book}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          {isAmharic ? "የጉዞ ፎቶዎች" : "Travel Photos"}
        </h2>
        <div className="mb-16">
          <ImageCarousel images={carouselImages} />
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-black">
              {content.aboutUs}
            </h2>
            <p className="text-gray-700 mb-6">{content.aboutUsDescription}</p>
            <Link to="/about">
              <Button className="bg-[#294050] text-[#C8DDD8] hover:bg-[#C8DDD8] hover:text-[#294050] hover:bg-opacity-90">
                {content.moreAboutUs}
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
              alt="About Us"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <PopularTours isAmharic={isAmharic} />

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          {content.whyChooseUs}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {content.whyChooseUsList.map((reason, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <CheckCircleIcon className="h-12 w-12 text-[#294050] mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          {content.testimonials}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {content.testimonialsList.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-black mb-4">"{testimonial.comment}"</p>
                <p className="text-black font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          {isAmharic ? "የእኛ አገልግሎቶች" : "Our Services"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content.services.map((service, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  {service.icon}
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link to="/booking">
                  <Button className="w-full bg-[#294050] text-[#C8DDD8] hover:bg-[#C8DDD8] hover:text-[#294050] hover:bg-opacity-90">
                    {isAmharic ? "ቦታ ይያዙ" : "Book Now"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
