import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import { toast } from 'sonner';

const Contact = ({ isAmharic }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    title: isAmharic ? 'ያግኙን' : 'Contact Us',
    name: isAmharic ? 'ስም' : 'Name',
    email: isAmharic ? 'ኢሜይል' : 'Email',
    message: isAmharic ? 'መልእክት' : 'Message',
    submit: isAmharic ? 'ላክ' : 'Submit',
    address: isAmharic ? 'አዲስ አበባ፣ ኢትዮጵያ' : 'Addis Ababa, Ethiopia',
    phone1: '+251-91-161-1111',
    phone2: '+251-91-188-8666',
    phone3: '+251-91-311-8414',
    phone4: '+251-97-823-1313',
    emailAddress: 'info@roha-travels.com',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.status === 'success') {
        toast.success(result.message);
        event.target.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        {content.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <Textarea
              name="message"
              placeholder={content.message}
              className="bg-white border-gray-300 text-black p-3"
              rows={5}
              required
            />
            <Button
              type="submit"
              className="w-full bg-[#294050] text-[#C8DDD8] hover:bg-[#C8DDD8] hover:text-[#294050] p-3"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? isAmharic
                  ? "በመላክ ላይ..."
                  : "Sending..."
                : content.submit}
            </Button>
          </form>
        </div>
        <div className="bg-[#f5f5f5] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            {isAmharic ? "የእኛ የመገኛ መረጃ" : "Our Contact Information"}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 mr-2 text-[#294050]" />
              <span>{content.address}</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 mr-2 text-[#294050]" />
              <a href={`tel:${content.phone1}`} className="hover:underline">
                {content.phone1}
              </a>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 mr-2 text-[#294050]" />
              <a href={`tel:${content.phone2}`} className="hover:underline">
                {content.phone2}
              </a>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 mr-2 text-[#294050]" />
              <a href={`tel:${content.phone3}`} className="hover:underline">
                {content.phone3}
              </a>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 mr-2 text-[#294050]" />
              <a href={`tel:${content.phone4}`} className="hover:underline">
                {content.phone4}
              </a>
            </div>
            <div className="flex items-center">
              <MailIcon className="h-6 w-6 mr-2 text-[#294050]" />
              <a
                href={`mailto:${content.emailAddress}`}
                className="hover:underline"
              >
                {content.emailAddress}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;