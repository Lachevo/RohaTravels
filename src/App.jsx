import React, { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { navItems } from "./nav-items";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";
import TravelTips from "./pages/TravelTips";
import TravelGuide from "./pages/TravelGuide";
import FAQs from "./pages/FAQs";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => {
  const [isAmharic, setIsAmharic] = useState(false);

  const toggleLanguage = () => {
    setIsAmharic(!isAmharic);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header isAmharic={isAmharic} toggleLanguage={toggleLanguage} />
            <main className="flex-grow bg-white relative">
              <div className="relative z-10">
                <div className="flex flex-col">
                  {/* Home Section */}
                  <section id="home">
                    {React.cloneElement(navItems.find(item => item.to === '/').page, { isAmharic })}
                  </section>
                  
                  {/* About Section */}
                  <section id="about">
                    {React.cloneElement(navItems.find(item => item.to === '/about').page, { isAmharic })}
                  </section>
                  
                  {/* Services Section */}
                  <section id="services">
                    {React.cloneElement(navItems.find(item => item.to === '/services').page, { isAmharic })}
                  </section>

                  {/* Destinations Section */}
                  <section id="destinations">
                    <Destinations isAmharic={isAmharic} />
                  </section>

                  {/* Gallery Section */}
                  <section id="gallery">
                    {React.cloneElement(navItems.find(item => item.to === '/gallery').page, { isAmharic })}
                  </section>
                  
                  {/* Contact Section */}
                  <section id="contact">
                    {React.cloneElement(navItems.find(item => item.to === '/contact').page, { isAmharic })}
                  </section>

                  {/* Booking Section */}
                  <section id="booking">
                    <Booking isAmharic={isAmharic} />
                  </section>

                  {/* Other Sections (optional or at bottom) */}
                  <section id="travel-tips">
                    <TravelTips isAmharic={isAmharic} />
                  </section>
                  <section id="travel-guide">
                    <TravelGuide isAmharic={isAmharic} />
                  </section>
                  <section id="faqs">
                    <FAQs isAmharic={isAmharic} />
                  </section>
                </div>
              </div>
            </main>
            <Footer isAmharic={isAmharic} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
