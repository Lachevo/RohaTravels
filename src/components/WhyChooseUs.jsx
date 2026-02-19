import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = ({ isAmharic }) => {
  const content = {
    whyChooseUs: isAmharic ? "ለምን እኛን መምረጥ አለብዎት" : "Why Choose Us",
    whyChooseUsList: [
      {
        title: isAmharic ? "ልምድ ያለው ቡድን" : "Experienced Team",
        description: isAmharic
          ? "በጉዞ ኢንዱስትሪው ውስጥ ረጅም ልምድ ያለው ቡድን"
          : "Team with extensive experience in the travel industry",
      },
      {
        title: isAmharic ? "ግላዊ አገልግሎት" : "Personalized Service",
        description: isAmharic
          ? "ለእያንዳንዱ ደንበኛ ልዩ የሆነ አገልግሎት"
          : "Tailored service for each customer",
      },
      {
        title: isAmharic ? "ተመጣጣኝ ዋጋ" : "Competitive Prices",
        description: isAmharic
          ? "ለሁሉም በጀት ተስማሚ የሆኑ ዋጋዎች"
          : "Prices suitable for all budgets",
      },
    ],
  };

  return (
    <div className="bg-[#28424F] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {content.whyChooseUs}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.whyChooseUsList.map((item, index) => (
            <Card key={index} className="bg-[#1D2F38] text-white">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;