import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckIcon } from "lucide-react";
import { format, isBefore, startOfToday } from "date-fns";
import { toast } from 'sonner';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const BookingForm = ({ isAmharic }) => {
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInternational, setIsInternational] = useState(true);

  const destinations = {
    International: {
      Africa: ["Nairobi, Kenya", "Zanzibar, Tanzania", "Seychelles"],
      Europe: ["Rome, Italy", "Frankfurt, Germany", "Amsterdam, Netherlands", "Paris, France", "London, UK"],
      Asia: ["Dubai, UAE", "Bangkok, Thailand", "Istanbul, Turkey"],
      "Middle East": ["Jerusalem, Israel"]
    },
    Ethiopia: ["Addis Ababa", "Lalibela", "Axum", "Gondar", "Bahir Dar", "Harar", "Arba Minch", "Jimma"]
  };

  const content = {
    name: isAmharic ? 'ሙሉ ስም' : 'Full Name',
    email: isAmharic ? 'ኢሜይል' : 'Email',
    phone: isAmharic ? 'ስልክ ቁጥር' : 'Phone Number',
    destination: isAmharic ? 'መዳረሻ' : 'Destination',
    travelDate: isAmharic ? 'የጉዞ ቀን' : 'Travel Date',
    numberOfTravelers: isAmharic ? 'የጎብኚዎች ብዛት' : 'Number of Travelers',
    additionalInfo: isAmharic ? 'ተጨማሪ መረጃ' : 'Additional Information',
    submit: isAmharic ? 'ቦታ ይያዙ' : 'Book Now',
    selectDate: isAmharic ? 'ቀን ይምረጡ' : 'Select date',
    local: isAmharic ? 'የአገር ውስጥ' : 'Local',
    international: isAmharic ? 'ዓለም አቀፍ' : 'International',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    if (travelDate) {
      formData.set('travelDate', format(travelDate, 'PP'));
    }
    
    try {
      const response = await fetch('/send-booking.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();

      if (result.includes('Booking Confirmation')) {
        toast.success('Booking request submitted successfully!');
        event.target.reset();
        setDestination("");
        setTravelDate(undefined);
        // Display the HTML response in a new window
        const newWindow = window.open('', '_blank');
        newWindow.document.write(result);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const disabledDays = { before: startOfToday() };

  const filteredDestinations = isInternational ? destinations.International : { Ethiopia: destinations.Ethiopia };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Label
              htmlFor="destination-type"
              className={`${!isInternational ? "font-bold" : ""} text-black`}
            >
              {content.local}
            </Label>
            <Switch
              id="destination-type"
              checked={isInternational}
              onCheckedChange={setIsInternational}
              className="data-[state=checked]:bg-[#294050]"
            />
            <Label
              htmlFor="destination-type"
              className={`${isInternational ? "font-bold" : ""} text-black`}
            >
              {content.international}
            </Label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              name="name"
              placeholder={content.name}
              className="bg-white border-gray-300 text-black p-3"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder={content.email}
              className="bg-white border-gray-300 text-black p-3"
              required
            />
          </div>

          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              +251
            </span>
            <Input
              type="tel"
              name="phone"
              placeholder={content.phone}
              className="bg-white border-gray-300 text-black p-3 rounded-l-none flex-1"
              required
            />
          </div>

          <Select
            name="destination"
            onValueChange={setDestination}
            value={destination}
            required
          >
            <SelectTrigger className="bg-white border-gray-300 text-black p-3">
              <SelectValue placeholder={content.destination} />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(filteredDestinations).map(
                ([continent, cities]) => (
                  <React.Fragment key={continent}>
                    <SelectItem
                      value={continent}
                      disabled
                      className="font-bold text-lg text-black border-b border-gray-300 pb-2 mb-2"
                    >
                      <span className="text-xl font-extrabold text-black">
                        {continent}
                      </span>
                    </SelectItem>
                    {cities.map((city, index) => (
                      <SelectItem key={index} value={city} className="pl-6">
                        <div className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4" />
                          <span>{city}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </React.Fragment>
                )
              )}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`w-full justify-start text-left font-normal ${
                  !travelDate && "text-muted-foreground"
                }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {travelDate ? format(travelDate, "PPP") : content.selectDate}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={travelDate}
                onSelect={setTravelDate}
                disabled={disabledDays}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Input
            type="hidden"
            name="travelDate"
            value={travelDate ? format(travelDate, "PP") : ""}
          />

          <Input
            type="number"
            name="numberOfTravelers"
            placeholder={content.numberOfTravelers}
            className="bg-white border-gray-300 text-black p-3"
            min="1"
            required
          />

          <textarea
            name="additionalInfo"
            placeholder={content.additionalInfo}
            className="w-full bg-white border-gray-300 text-black p-3 rounded-md"
            rows="4"
          ></textarea>

          <Button
            type="submit"
            className="w-full bg-[#294050] text-[#C8DDD8] hover:bg-[#294050] p-3"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? isAmharic
                ? "በመላክ ላይ..."
                : "Submitting..."
              : content.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
