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
                <Routes>
                  {navItems.map(({ to, page }) => (
                    <Route
                      key={to}
                      path={to}
                      element={React.cloneElement(page, { isAmharic })}
                    />
                  ))}
                  <Route
                    path="/destinations"
                    element={<Destinations isAmharic={isAmharic} />}
                  />
                  <Route
                    path="/booking"
                    element={<Booking isAmharic={isAmharic} />}
                  />
                  <Route
                    path="/travel-tips"
                    element={<TravelTips isAmharic={isAmharic} />}
                  />
                  <Route
                    path="/travel-guide"
                    element={<TravelGuide isAmharic={isAmharic} />}
                  />
                  <Route
                    path="/faqs"
                    element={<FAQs isAmharic={isAmharic} />}
                  />
                  <Route
                    path="/gallery"
                    element={<Gallery isAmharic={isAmharic} />}
                  />
                  <Route
                    path="*"
                    element={<Navigate to="/destinations" />}
                  />
                </Routes>
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
