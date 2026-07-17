import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GlobeIcon, UsersIcon, HeartIcon, AwardIcon, ShieldIcon, LeafIcon, BookOpenIcon, ZapIcon, Target, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const About = ({ isAmharic }) => {
  const content = {
    title: isAmharic ? 'ስለ ሮሃ ጉዞዎች' : 'About Roha Travels',
    description: isAmharic
      ? 'ሮሃ ጉዞዎች በ2016 ዓ.ም. የተመሰረተ የኢትዮጵያ ጉዞ ኤጀንሲ ነው። ከተመሰረትን ጀምሮ፣ ለደንበኞቻችን ልዩ የጉዞ ልምዶችን በመስጠት ላይ ነን። የእኛ ቡድን በጉዞ ኢንዱስትሪው ውስጥ ረጅም ልምድ ያለው ሲሆን ለእያንዳንዱ ደንበኛ ልዩ አገልግሎት ለመስጠት ቁርጠኛ ነው።'
      : 'Roha Travels is a premium Ethiopian travel agency founded in 2021. Since our inception, we have been providing exceptional, personalized travel experiences to our clients worldwide. Our team consists of industry veterans dedicated to crafting memorable, stress-free journeys for every single traveler.',
    mission: {
      title: isAmharic ? 'ተልእኮአችን' : 'Our Mission',
      text: isAmharic
        ? 'ተልእኮአችን ለደንበኞቻችን ጥራት ያለው፣ ተመጣጣኝ ዋጋ ያለው እና አስተማማኝ የጉዞ አገልግሎቶችን በመስጠት የጉዞ ህልማቸውን እውን ማድረግ ነው።'
        : 'To transform travel dreams into seamless, authentic realities by offering elite-class customer support, top-tier accommodations, and sustainable cultural itineraries at the most competitive value.',
    },
    values: [
      { icon: <GlobeIcon />, title: isAmharic ? 'ዓለም አቀፋዊነት' : 'Global Perspective', description: isAmharic ? 'የዓለምን ባህሎች እና አካባቢዎች እናከብራለን' : 'We embrace global cultures and diverse international destinations.' },
      { icon: <UsersIcon />, title: isAmharic ? 'ደንበኛ ተኮር' : 'Customer-Centric', description: isAmharic ? 'ደንበኞቻችን በሁሉም ነገር ቅድሚያ ይሰጣቸዋል' : 'Our clients are at the absolute heart of every itinerary we build.' },
      { icon: <HeartIcon />, title: isAmharic ? 'ታማኝነት' : 'Integrity & Trust', description: isAmharic ? 'በሁሉም ግንኙነቶቻችን ውስጥ ታማኝነትን እንለማመዳለን' : 'We practice transparency, honesty, and professional ethics.' },
      { icon: <AwardIcon />, title: isAmharic ? 'ጥራት' : 'Excellence', description: isAmharic ? 'በሁሉም አገልግሎቶቻችን ላይ ከፍተኛ ጥራትን እናረጋግጣለን' : 'We ensure and maintain premium standards across all services.' },
      { icon: <ShieldIcon />, title: isAmharic ? 'ደህንነት' : 'Safety First', description: isAmharic ? 'የደንበኞቻችን ደህንነት ቅድሚያ የምንሰጠው ጉዳይ ነው' : 'Ensuring the highest safety protocols and secure travel journeys.' },
      { icon: <LeafIcon />, title: isAmharic ? 'ዘላቂነት' : 'Sustainability', description: isAmharic ? 'ለአካባቢ ጥበቃ ተገቢውን ጥንቃቄ እናደርጋለን' : 'Supporting local communities and respecting fragile ecosystems.' },
      { icon: <BookOpenIcon />, title: isAmharic ? 'ትምህርታዊነት' : 'Educational Tours', description: isAmharic ? 'ጉዞዎቻችን አስተማሪና አዝናኝ እንዲሆኑ እናደርጋለን' : 'Trips designed to challenge perspective and offer deep cultural insights.' },
      { icon: <ZapIcon />, title: isAmharic ? 'ፈጠራ' : 'Innovation', description: isAmharic ? 'ሁልጊዜ አዳዲስ የጉዞ ልምዶችን እንፈጥራለን' : 'Pioneering off-the-beaten-path destinations and unique packages.' },
    ],
  };

  return (
    <div className="bg-[#f8fafb] min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="section-badge">{isAmharic ? "ማንነታችን" : "Our Heritage"}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2e3a] tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed pt-2">
            {content.description}
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-[#294050] text-[#C8DDD8] border-none rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-40 h-40" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#e0cd95]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {content.mission.title}
              </h2>
              <p className="font-light text-sm leading-relaxed text-slate-200">
                {content.mission.text}
              </p>
            </div>
          </Card>

          <Card className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Compass className="w-40 h-40" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#294050]/10 flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#294050]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1a2e3a] tracking-tight">
                {isAmharic ? "ራዕያችን" : "Our Vision"}
              </h2>
              <p className="font-light text-sm leading-relaxed text-slate-500">
                {isAmharic
                  ? "የደንበኞቻችንን የጉዞ ልምድ በማበልጸግ እና ዘላቂ የቱሪዝም ልምዶችን በማስፋፋት በምስራቅ አፍሪካ ግንባር ቀደም እና ተመራጭ የጉዞ ኤጀንሲ መሆን።"
                  : "To become East Africa's most trusted, premier travel designer known for authenticity, seamless digital experiences, and outstanding customer dedication."}
              </p>
            </div>
          </Card>
        </div>

        {/* Values Block */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="section-badge">{isAmharic ? "መርሆዎቻችን" : "Core Foundations"}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2e3a] tracking-tight">
              {isAmharic ? "እሴቶቻችን" : "Our Core Values"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.map((value, index) => (
              <Card key={index} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm card-hover text-center space-y-4 flex flex-col justify-between">
                <CardContent className="p-0 space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-full bg-[#294050]/10 flex items-center justify-center text-[#294050]">
                    {React.cloneElement(value.icon, {
                      className: "h-6 w-6",
                    })}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2e3a] tracking-tight">{value.title}</h3>
                  <p className="text-slate-500 font-light text-xs leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
