import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = ({ isAmharic }) => {
  const faqs = [
    {
      question: isAmharic ? 'መቼ ነው ቦታ ማስያዝ ያለብኝ?' : 'When should I book my trip?',
      answer: isAmharic
        ? 'ለተሻለ ዋጋ እና ምርጫ ቢያንስ ከሁለት ወር በፊት ቦታ ማስያዝ እንመክራለን።'
        : 'We recommend booking at least two months in advance for better rates and options.'
    },
    {
      question: isAmharic ? 'የጉዞ መድህን ያስፈልገኛል?' : 'Do I need travel insurance?',
      answer: isAmharic
        ? 'አዎ፣ የጉዞ መድህን በጣም ይመከራል። ለድንገተኛ ሁኔታዎች እና ለጉዞ መሰረዝ ይሸፍናል።'
        : 'Yes, travel insurance is highly recommended. It covers emergencies and trip cancellations.'
    },
    {
      question: isAmharic ? 'ቪዛ ያስፈልገኛል?' : 'Do I need a visa?',
      answer: isAmharic
        ? 'የሚጓዙበት አገር ላይ ይወሰናል። የቪዛ መስፈርቶችን እንመክራለን እና እናግዛለን።'
        : 'It depends on your destination country. We can advise and assist with visa requirements.'
    },
    {
      question: isAmharic ? 'ክፍያዎችን እንዴት ነው የምፈጽመው?' : 'How do I make payments?',
      answer: isAmharic
        ? 'በባንክ ዝውውር፣ በቴሌብር፣ እና በሌሎች የክፍያ ዘዴዎች ክፍያዎችን መፈጸም ይችላሉ። ለዝርዝር መረጃ እባክዎን ያግኙን።'
        : 'You can make payments via bank transfer, TeleBirr, and other payment methods. Please contact us for detailed information.'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {isAmharic ? 'ብዙ የሚጠየቁ ጥያቄዎች' : 'Frequently Asked Questions'}
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
