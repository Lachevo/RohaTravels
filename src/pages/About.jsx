import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GlobeIcon, UsersIcon, HeartIcon, AwardIcon, ShieldIcon, LeafIcon, BookOpenIcon, ZapIcon } from 'lucide-react';

const About = ({ isAmharic }) => {
  const content = {
    title: isAmharic ? 'ስለ ሮሃ ጉዞዎች' : 'About Roha Travels',
    description: isAmharic
      ? 'ሮሃ ጉዞዎች በ2016 ዓ.ም. የተመሰረተ የኢትዮጵያ ጉዞ ኤጀንሲ ነው። ከተመሰረትን ጀምሮ፣ ለደንበኞቻችን ልዩ የጉዞ ልምዶችን በመስጠት ላይ ነን። የእኛ ቡድን በጉዞ ኢንዱስትሪው ውስጥ ረጅም ልምድ ያለው ሲሆን ለእያንዳንዱ ደንበኛ ልዩ አገልግሎት ለመስጠት ቁርጠኛ ነው።'
      : 'Roha Travels is an Ethiopian travel agency founded in 2024. Since our inception, we have been providing exceptional travel experiences to our clients. Our team has extensive experience in the travel industry and is dedicated to offering personalized service to each customer.',
    mission: {
      title: isAmharic ? 'ተልእኮአችን' : 'Our Mission',
      text: isAmharic
        ? 'ተልእኮአችን ለደንበኞቻችን ጥራት ያለው፣ ተመጣጣኝ ዋጋ ያለው እና አስተማማኝ የጉዞ አገልግሎቶችን በመስጠት የጉዞ ህልማቸውን እውን ማድረግ ነው።'
        : 'Our mission is to make travel dreams come true by providing high-quality, affordable, and reliable travel services to our clients.',
    },
    values: [
      { icon: <GlobeIcon />, title: isAmharic ? 'ዓለም አቀፋዊነት' : 'Global Perspective', description: isAmharic ? 'የዓለምን ባህሎች እና አካባቢዎች እናከብራለን' : 'We embrace global cultures and destinations' },
      { icon: <UsersIcon />, title: isAmharic ? 'ደንበኛ ተኮር' : 'Customer-Centric', description: isAmharic ? 'ደንበኞቻችን በሁሉም ነገር ቅድሚያ ይሰጣቸዋል' : 'Our clients are at the heart of everything we do' },
      { icon: <HeartIcon />, title: isAmharic ? 'ታማኝነት' : 'Integrity', description: isAmharic ? 'በሁሉም ግንኙነቶቻችን ውስጥ ታማኝነትን እንለማመዳለን' : 'We practice honesty in all our dealings' },
      { icon: <AwardIcon />, title: isAmharic ? 'ጥራት' : 'Excellence', description: isAmharic ? 'በሁሉም አገልግሎቶቻችን ላይ ከፍተኛ ጥራትን እናረጋግጣለን' : 'We ensure the highest quality in all our services' },
      { icon: <ShieldIcon />, title: isAmharic ? 'ደህንነት' : 'Safety', description: isAmharic ? 'የደንበኞቻችን ደህንነት ቅድሚያ የምንሰጠው ጉዳይ ነው' : 'The safety of our clients is our top priority' },
      { icon: <LeafIcon />, title: isAmharic ? 'ዘላቂነት' : 'Sustainability', description: isAmharic ? 'ለአካባቢ ጥበቃ ተገቢውን ጥንቃቄ እናደርጋለን' : 'We are committed to environmental responsibility' },
      { icon: <BookOpenIcon />, title: isAmharic ? 'ትምህርታዊነት' : 'Educational', description: isAmharic ? 'ጉዞዎቻችን አስተማሪና አዝናኝ እንዲሆኑ እናደርጋለን' : 'We make our trips both informative and entertaining' },
      { icon: <ZapIcon />, title: isAmharic ? 'ፈጠራ' : 'Innovation', description: isAmharic ? 'ሁልጊዜ አዳዲስ የጉዞ ልምዶችን እንፈጥራለን' : 'We constantly create new travel experiences' },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-8">{content.title}</h1>

      <div className="mb-12">
        <p className="text-lg text-center max-w-3xl mx-auto">
          {content.description}
        </p>
      </div>

      <div className="bg-[#C8DDD8] p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {content.mission.title}
        </h2>
        <p className="text-center">{content.mission.text}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-center">
        {isAmharic ? "እሴቶቻችን" : "Our Values"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.values.map((value, index) => (
          <Card key={index} className="bg-[#C8DDD8] border border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {React.cloneElement(value.icon, {
                  className: "h-12 w-12 text-[#294050]",
                })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
