import { HomeIcon, InfoIcon, PackageIcon, PhoneIcon, ImageIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <PackageIcon className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <ImageIcon className="h-4 w-4" />,
    page: <Gallery />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];
