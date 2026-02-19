import React from 'react';

const TravelTips = ({ isAmharic }) => {
  const tips = [
    {
      title: isAmharic ? 'ቅድሚያ ይቅደሙ' : 'Plan Ahead',
      content: isAmharic
        ? 'ጉዞዎን ቢያንስ ከሁለት ወር በፊት ያቅዱ። ይህ የተሻለ ዋጋ እና ምርጫዎችን ያገኙ ዕድል ይሰጥዎታል።'
        : 'Plan your trip at least two months in advance. This gives you a better chance of finding good deals and options.'
    },
    {
      title: isAmharic ? 'የጉዞ መድህን ይግዙ' : 'Get Travel Insurance',
      content: isAmharic
        ? 'ለማንኛውም ድንገተኛ ሁኔታ ዝግጁ ለመሆን የጉዞ መድህን ይግዙ።'
        : 'Purchase travel insurance to be prepared for any emergencies.'
    },
    {
      title: isAmharic ? 'የአካባቢውን ባህል ያክብሩ' : 'Respect Local Customs',
      content: isAmharic
        ? 'የሚጎበኙትን አገር ባህል እና ልማዶች ይወቁ እና ያክብሩ።'
        : "Learn about and respect the customs and traditions of the country you're visiting."
    },
    {
      title: isAmharic ? 'ቀላል ይጓዙ' : 'Pack Light',
      content: isAmharic
        ? 'አስፈላጊ ነገሮችን ብቻ ይያዙ። ቀላል መጓዝ ጉዞዎን ቀላል ያደርገዋል።'
        : 'Only pack essentials. Traveling light makes your journey easier.'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {isAmharic ? 'የጉዞ ምክሮች' : 'Travel Tips'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTips;
