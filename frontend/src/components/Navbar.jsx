import { useState } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left corner - Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#home" className="block transition-transform duration-300 hover:scale-105 active:scale-95">
              <img 
                src="https://safehandstravels.com/wp-content/uploads/2022/07/Safehands-Logo-e1713424039293.jpg" 
                alt="Safehands Travels Logo" 
                className="h-8 sm:h-10 md:h-12 w-auto object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* Middle - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <a 
              href="#home" 
              className="relative text-gray-700 px-2 xl:px-3 py-2 text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#tours" 
              className="relative text-gray-700 px-2 xl:px-3 py-2 text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300">
                Our Tours
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#car-booking" 
              className="relative text-gray-700 px-2 xl:px-3 py-2 text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300">
                Car Booking
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#blogs" 
              className="relative text-gray-700 px-2 xl:px-3 py-2 text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300">
                Blogs
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="relative text-gray-700 px-2 xl:px-3 py-2 text-sm font-medium transition-all duration-300 group"
            >
              <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300">
                Contact Us
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right corner - Login/Register (Desktop) */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 transition-all duration-300 hover:bg-orange-50 group cursor-pointer">
              <FaUser className="text-gray-600 text-base lg:text-lg transition-colors duration-300 group-hover:text-orange-600" />
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <a 
                href="#login" 
                className="text-gray-700 px-2 lg:px-4 py-2 text-xs lg:text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:scale-95"
              >
                Login
              </a>
              <span className="text-gray-400">/</span>
              <a 
                href="#register" 
                className="text-gray-700 px-2 lg:px-4 py-2 text-xs lg:text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:scale-95"
              >
                Register
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile menu - Navigation Links */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2 pt-2">
            <a 
              href="#home" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100"
            >
              Home
            </a>
            <a 
              href="#tours" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100"
            >
              Our Tours
            </a>
            <a 
              href="#car-booking" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100"
            >
              Car Booking
            </a>
            <a 
              href="#blogs" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100"
            >
              Blogs
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100"
            >
              Contact Us
            </a>
            {/* Mobile Login/Register */}
            <div className="flex items-center space-x-3 pt-2 border-t border-gray-200">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                <FaUser className="text-gray-600 text-base" />
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href="#login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100"
                >
                  Login
                </a>
                <span className="text-gray-400">/</span>
                <a 
                  href="#register" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
