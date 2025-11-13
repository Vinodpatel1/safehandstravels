import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-50 text-gray-700 relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Left Column - Company Information */}
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img 
                  src="https://safehandstravels.com/wp-content/uploads/2022/07/Safehands-Logo-e1713424039293.jpg" 
                  alt="Safehands Travels Logo" 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4">
                Safe Hands Travels: Explore Worry-Free. Unforgettable adventures await. Expert planning, personalized itineraries, 24/7 support. Craft your dream trip today!
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-8 h-8 bg-gray-200 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-gray-700 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-8 h-8 bg-gray-200 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-gray-700 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-8 h-8 bg-gray-200 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-gray-700 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Middle-Left Column - Support */}
            <div>
              <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#terms" className="text-gray-600 hover:text-orange-600 transition-colors text-xs sm:text-sm">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#shipping" className="text-gray-600 hover:text-orange-600 transition-colors text-xs sm:text-sm">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-gray-600 hover:text-orange-600 transition-colors text-xs sm:text-sm">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Middle-Right Column - About Us */}
            <div>
              <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors text-xs sm:text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-600 hover:text-orange-600 transition-colors text-xs sm:text-sm">
                    Guest Gallery
                  </a>
                </li>
                <li>
                  <a href="#partner" className="text-gray-600 hover:text-orange-600 transition-colors text-xs sm:text-sm">
                    Be Our Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaMapMarkerAlt className="text-orange-600 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    2nd Floor, KCB0040205, Tower C1, Klassic, Jaypee Greens Wishtown, Sector 134, Noida
                  </span>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <FaPhone className="text-orange-600 flex-shrink-0 text-sm sm:text-base" />
                  <a href="tel:+918448801998" className="text-gray-600 hover:text-orange-600 transition-colors text-xs sm:text-sm break-all">
                    +91 8448801998
                  </a>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <FaEnvelope className="text-orange-600 flex-shrink-0 text-sm sm:text-base" />
                  <a href="mailto:info@safehandstravels.com" className="text-gray-600 hover:text-orange-600 transition-colors text-xs sm:text-sm break-all">
                    info@safehandstravels.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 mt-6 sm:mt-8 pt-4 sm:pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
                © 2024 All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918448801998"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-50 transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-white text-xl sm:text-2xl" />
      </a>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-20 sm:bottom-6 sm:right-24 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center shadow-lg z-50 transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white text-lg sm:text-xl" />
        </button>
      )}
    </>
  );
};

export default Footer;

