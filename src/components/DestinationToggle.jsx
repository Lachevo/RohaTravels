import React from 'react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DestinationToggle = ({ isAmharic, isLocal, setIsLocal }) => {
  const handleToggle = () => {
    if (setIsLocal) {
      setIsLocal(!isLocal);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <Label
        htmlFor="destination-type"
        className={`${isLocal ? "font-bold" : ""} text-black`}
      >
        {isAmharic ? "የአገር ውስጥ" : "Local"}
      </Label>
      <Switch
        id="destination-type"
        checked={!isLocal}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-[#294050]"
      />
      <Label
        htmlFor="destination-type"
        className={`${!isLocal ? "font-bold" : ""} text-black`}
      >
        {isAmharic ? "ዓለም አቀፍ" : "International"}
      </Label>
    </div>
  );
};

export default DestinationToggle;
