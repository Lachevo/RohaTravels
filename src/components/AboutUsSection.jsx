import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutUsSection = ({ isAmharic }) => {
  const content = {
    aboutUs: isAmharic ? "ስለ እኛ" : "About Us",
    aboutUsDescription: isAmharic
      ? "ሮሃ ጉዞና ቱሪዝም በ2016 ዓ.ም. የተመሰረተ የኢትዮጵያ ጉዞ ኤጀንሲ ነው። ከተመሰረትን ጀምሮ፣ ለደንበኞቻችን ልዩ የጉዞ ልምዶችን በመስጠት ላይ ነን። የእኛ ቡድን በጉዞ ኢንዱስትሪው ውስጥ ረጅም ልምድ ያለው ሲሆን ለእያንዳንዱ ደንበኛ ልዩ አገልግሎት ለመስጠት ቁርጠኛ ነው።"
      : "Roha Tour and Travel is an Ethiopian travel agency founded in 2024. Since our inception, we have been providing exceptional travel experiences to our clients. Our team has extensive experience in the travel industry and is dedicated to offering personalized service to each customer.",
    moreAboutUs: isAmharic ? "ተጨማሪ ስለ እኛ" : "More About Us",
  };

  return (
    <div className="bg-[#C6DAD9] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#28424F]">
          {content.aboutUs}
        </h2>
        <p className="text-lg text-center mb-8 text-[#28424F]">
          {content.aboutUsDescription}
        </p>
        <div className="text-center">
          <Link to="/about">
            <Button className="bg-[#28424F] text-white hover:bg-[#1D2F38]">
              {content.moreAboutUs}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;