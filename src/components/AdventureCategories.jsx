import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CompassIcon, TentIcon, MapIcon, MountainIcon } from 'lucide-react';

const AdventureCategories = ({ isAmharic }) => {
  const categories = [
    { icon: <CompassIcon className="h-6 w-6" />, title: isAmharic ? 'ጉዞ' : 'Adventure' },
    { icon: <TentIcon className="h-6 w-6" />, title: isAmharic ? 'ካምፒንግ' : 'Camping' },
    { icon: <MapIcon className="h-6 w-6" />, title: isAmharic ? 'ቱር' : 'Tours' },
    { icon: <MountainIcon className="h-6 w-6" />, title: isAmharic ? 'ተራራ መውጣት' : 'Hiking' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <Card key={index} className="bg-white border border-gray-200">
          <CardContent className="flex flex-col items-center justify-center p-6">
            {category.icon}
            <h3 className="mt-2 text-lg font-semibold text-center">{category.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdventureCategories;