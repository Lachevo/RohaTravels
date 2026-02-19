import React from 'react';

const TravelGuide = ({ isAmharic }) => {
  const guides = [
    {
      title: isAmharic ? 'ኢትዮጵያ' : 'Ethiopia',
      content: isAmharic
        ? 'ታሪካዊ ቦታዎችን፣ ልዩ ባህልን እና አስደናቂ የተፈጥሮ ውበትን ለማየት ኢትዮጵያን ይጎብኙ። ላሊበላ፣ አክሱም እና ሲሜን ተራሮችን አይርሱ።'
        : 'Visit Ethiopia for historical sites, unique culture, and stunning natural beauty. Don\'t miss Lalibela, Axum, and the Simien Mountains.'
    },
    {
      title: isAmharic ? 'ጣሊያን' : 'Italy',
      content: isAmharic
        ? 'ሮም፣ ፍሎረንስ እና ቬኒስን ጨምሮ የጣሊያንን ታሪካዊ ከተሞች ይመልከቱ። ጣፋጭ ምግቦችን እና ወይኖችን ይቅመሱ።'
        : 'Explore Italy\'s historic cities including Rome, Florence, and Venice. Taste delicious cuisine and wines.'
    },
    {
      title: isAmharic ? 'ታይላንድ' : 'Thailand',
      content: isAmharic
        ? 'የባንኮክን ቡድሃ ቤተመቅደሶችን ይጎብኙ፣ በፑኬት ባሕር ዳርቻዎች ላይ ዕረፍት ይውሰዱ እና የታይ ምግቦችን ይቅመሱ።'
        : 'Visit Bangkok\'s Buddhist temples, relax on Phuket\'s beaches, and savor Thai cuisine.'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {isAmharic ? 'የጉዞ መመሪያ' : 'Travel Guide'}
      </h1>
      <div className="space-y-6">
        {guides.map((guide, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">{guide.title}</h2>
            <p>{guide.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelGuide;