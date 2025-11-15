import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const TripDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showReadMore, setShowReadMore] = useState(false);
  const [expandedDays, setExpandedDays] = useState({});
  const [isVisible, setIsVisible] = useState({});

  // Sample images for the slider - you can replace these with actual images
  const sliderImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop"
  ];

  const descriptionSections = [
    {
      title: "Scenic Landscapes",
      content: "The state is renowned for its stunning landscapes, featuring lush green hills, dense forests, and picturesque valleys. The rolling hills and breathtaking vistas make it a perfect destination for trekking and hiking enthusiasts."
    },
    {
      title: "Living Root Bridges",
      content: "Meghalaya is home to the unique living root bridges, particularly in Mawlynnong and Cherrapunji. Crafted by the indigenous Khasi people, these natural bridges are made from the roots of ficus trees, creating an awe-inspiring spectacle and providing a fascinating trekking experience."
    },
    {
      title: "Caves Exploration",
      content: "The region boasts some of the deepest and longest caves in the world, offering a thrilling adventure for spelunkers. Exploring caves like Mawsmai in Cherrapunji reveals impressive limestone formations and adds an element of excitement to the backpacking journey."
    },
    {
      title: "Waterfalls",
      content: "Meghalaya is adorned with numerous waterfalls, such as Nohkalikai Falls and Elephant Falls. These cascading wonders not only provide refreshing breaks during treks but also contribute to the overall enchanting ambiance of the state."
    },
    {
      title: "Cultural Richness",
      content: "The diverse and vibrant culture of the Khasi tribe, predominant in Meghalaya, adds a unique dimension to the backpacking experience. Engaging with locals, participating in traditional dances, and immersing oneself in the local way of life enhances the cultural exploration aspect of the trip."
    },
    {
      title: "Friendly Locals",
      content: "Meghalaya is known for its warm and welcoming people. Backpackers can often find themselves invited to participate in local festivities, ceremonies, or even share a meal with the locals, fostering a sense of community and connection."
    },
    {
      title: "Culinary Delights",
      content: "The local cuisine of Meghalaya is a treat for the taste buds. Traditional dishes like Jadoh (rice with meat), Bamboo Shoot Curry, and various other indigenous delicacies offer a gastronomic adventure for food enthusiasts."
    },
    {
      title: "Safe and Peaceful",
      content: "Meghalaya is considered one of the safest destinations in India. The peaceful atmosphere allows backpackers to explore with a sense of security, making it an attractive option for solo travelers."
    },
    {
      title: "Off-the-Beaten-Path Exploration",
      content: "Meghalaya is still relatively undiscovered compared to other popular tourist destinations, providing backpackers with the opportunity to explore hidden gems and off-the-beaten-path locations."
    }
  ];

  const itineraryDays = [
    {
      day: 1,
      title: "Guwahati Arrival | Umiam Lake | Overnight At Shillong",
      details: "Arrival at Lokpriya Gopinath Bordoloi International Airport in the morning. Arrive by 11:00 AM and proceed for Shillong after breakfast. After lunch, visit Umiam Lake and then head to Shillong market for shopping. Check in at the hotel and freshen up. Overnight stay in Shillong."
    },
    {
      day: 2,
      title: "Shillong To Cherrapunjee | Lyngksiar Waterfalls | Arwah Cave | Nohkalikai Falls",
      details: "Early morning departure from Shillong to Cherrapunjee. Visit the stunning Lyngksiar Waterfalls, explore the fascinating Arwah Cave with its impressive limestone formations, and witness the breathtaking Nohkalikai Falls - one of the tallest waterfalls in India. Overnight stay in Cherrapunjee."
    },
    {
      day: 3,
      title: "Trek To Single Root Bridge | Double Decker Bridge",
      details: "Embark on an adventurous trek to witness the unique living root bridges. First, visit the Single Root Bridge, a natural wonder crafted by the Khasi people. Then, continue to the magnificent Double Decker Bridge - a rare architectural marvel made entirely from living tree roots. This is a moderate trek through lush forests and scenic landscapes."
    },
    {
      day: 4,
      title: "Mawsma Mawlynnong Village | Overnight At Shnongpdeng (Dawki Dom Camps)",
      details: "Visit Mawsmai Cave, one of the most accessible caves in Meghalaya, and explore Mawlynnong Village - known as Asia's cleanest village. Experience the local culture and traditions. Later, proceed to Shnongpdeng for camping. Enjoy the pristine beauty of the Umngot River and set up camp for the night."
    },
    {
      day: 5,
      title: "Water Sports | Krang Suri Waterfall | Overnight Stay At Shillong",
      details: "Start the day with exciting water sports activities at Shnongpdeng including kayaking, snorkeling, and boating in the crystal-clear waters. Visit the beautiful Krang Suri Waterfall, a hidden gem surrounded by lush greenery. Return to Shillong for overnight stay."
    },
    {
      day: 6,
      title: "Laitlum Grand Canyon | Departure",
      details: "Visit the spectacular Laitlum Grand Canyon, offering panoramic views of the surrounding valleys and hills. This is one of the most scenic viewpoints in Meghalaya. After the visit, proceed to Guwahati for departure. Trip ends with beautiful memories."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  useEffect(() => {
    // Intersection Observer for smooth animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Image Slider */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10 transform hover:scale-125 active:scale-95 group"
          aria-label="Previous image"
        >
          <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10 rotate-180 transform hover:scale-125 active:scale-95 group"
          aria-label="Next image"
        >
          <FaArrowLeft className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentImageIndex
                  ? 'bg-white w-8 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 z-10 transform hover:scale-110 hover:shadow-lg active:scale-95 group"
        >
          <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full py-4 sm:py-6 px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Title */}
            <h1 
              id="title"
              data-animate
              className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 transition-all duration-1000 ${
                isVisible['title'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Meghalaya Backpacking Trip
            </h1>

            {/* Main Description */}
            <div 
              id="description"
              data-animate
              className={`prose prose-lg max-w-none transition-all duration-1000 delay-100 ${
                isVisible['description'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-gray-700 leading-relaxed mb-4">
                Meghalaya is a backpacker's paradise for several compelling reasons, making it an ideal destination for those seeking adventure, cultural richness, and natural beauty:
              </p>

              {!showReadMore ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowReadMore(true);
                  }}
                  type="button"
                  className="text-green-500 hover:text-green-600 font-semibold mb-6 transition-all duration-300 transform hover:scale-110 hover:translate-y-1 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Read More</span>
                  <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
                </button>
              ) : (
                <div className="space-y-6 mb-8 animate-fadeIn">
                  {descriptionSections.map((section, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ${
                        isVisible[`section-${index}`] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      id={`section-${index}`}
                      data-animate
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{section.content}</p>
                    </div>
                  ))}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowReadMore(false);
                    }}
                    type="button"
                    className="text-green-500 hover:text-green-600 font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Read Less</span>
                    <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
                  </button>
                </div>
              )}

              <p className="text-gray-700 leading-relaxed mb-6">
                In brief, Meghalaya stands out with its captivating blend of natural marvels, cultural abundance, hospitable atmosphere, and adventurous spirit, making it an ideal destination for backpackers. The inclusion of a Meghalaya tour package further enhances the appeal, providing a seamless and diverse experience for those seeking a memorable adventure.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-3 sm:p-4 mb-6 sm:mb-8">
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  Check out our best meghalaya backpacking trips
                </p>
              </div>
            </div>

            {/* Roadmap Image */}
            <div 
              id="roadmap"
              data-animate
              className={`mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
                isVisible['roadmap'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Complete Tour Roadmap</h2>
              <div className="rounded-lg overflow-hidden shadow-lg border border-green-200 transition-all duration-500 hover:shadow-2xl hover:border-green-400">
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=600&fit=crop"
                  alt="Meghalaya Tour Roadmap"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Itinerary Section */}
            <div 
              id="itinerary"
              data-animate
              className={`mb-8 transition-all duration-1000 delay-300 ${
                isVisible['itinerary'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5 gap-3 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Itinerary Breakdown
                </h2>
                <button className="bg-green-400 hover:bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95 text-xs sm:text-sm font-semibold">
                  <FaDownload className="transition-transform duration-300 hover:rotate-12" />
                  <span>Download Itinerary</span>
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {itineraryDays.map((day) => (
                  <div
                    key={day.day}
                    className={`card-hover rounded-lg overflow-hidden transition-all duration-500 ease-out ${
                      expandedDays[day.day] 
                        ? 'bg-green-50 border-2 border-green-300 shadow-lg' 
                        : 'bg-white border border-gray-200 hover:border-green-300'
                    }`}
                    style={{
                      animation: `fadeInScale 0.5s ease-out ${day.day * 0.1}s both`
                    }}
                  >
                    <button
                      onClick={() => toggleDay(day.day)}
                      className="w-full text-left p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 hover:bg-green-50 transition-all duration-300 group"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 flex-1">
                        <span className="bg-green-400 text-white px-3 sm:px-4 py-1 rounded-full font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-300 group-hover:bg-green-500 group-hover:scale-110 transform">
                          Day {day.day}
                        </span>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-600">
                          {day.title}
                        </h3>
                      </div>
                      {expandedDays[day.day] ? (
                        <FaChevronUp className="text-green-500 flex-shrink-0 mt-1 sm:mt-0 transition-transform duration-300 rotate-180" />
                      ) : (
                        <FaChevronDown className="text-green-500 flex-shrink-0 mt-1 sm:mt-0 transition-transform duration-300 group-hover:translate-y-1" />
                      )}
                    </button>
                    {expandedDays[day.day] && (
                      <div className="px-3 sm:px-4 pb-4 animate-slideDown overflow-hidden">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base pl-0 sm:pl-16 lg:pl-20 animate-fadeIn">
                          {day.details}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Package Details */}
            <div 
              id="package"
              data-animate
              className={`mb-4 sm:mb-6 transition-all duration-1000 delay-400 ${
                isVisible['package'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">What's in the Package?</h2>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-green-400 card-hover">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2 sm:mb-3 transition-colors duration-300 hover:text-green-800">Included</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Transportation: Entire travel by tempo traveler as per the itinerary.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Accommodation: Total of 5 nights (2 Nights in a hotel at Cherrapunjee, 1 Night in camps at Shnongpdeng, 2 Nights in a hotel at Shillong on double/triple sharing basis).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Meals: Breakfast provided on Day 2, Day 3, Day 4, Day 5, and Day 6. Dinner provided on Day 4.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Entry fees to all sightseeing places mentioned in the itinerary.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Guided trek to various points of interest.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Team Captain provided throughout the trip for assistance and guidance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Medical Kit available for handling emergency conditions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Driver night charges, toll fees, and parking charges covered.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>All necessary inner line permits for the trip included.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Cliff jumping, kayaking and snorkeling with boating experience at Shnongpdeng and also includes travel insurance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Bonfire arranged at Shnongpdeng campsite (weather permitting).</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-red-400 card-hover">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-800 mb-2 sm:mb-3 transition-colors duration-300 hover:text-red-900">Not Included</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Any personal Expenses / Adventure activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Anything not mentioned in the itinerary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Any kind of entry tickets/fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Any Meals / Drinks other than Inclusion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>5% GST</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div 
              id="notes"
              data-animate
              className={`mb-4 sm:mb-6 bg-yellow-50 border-l-4 border-yellow-500 p-3 sm:p-4 rounded-r-lg transition-all duration-1000 delay-500 ${
                isVisible['notes'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Notes</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>• Travelers residing outside Guwahati are recommended to book trains/flights reaching Guwahati not delay than 12 PM on the trip start date. Similarly, on the trip end date, book the returning flight/ train departure post 6 PM respectively.</li>
                <li>• Numerous factors such as weather, road conditions, the physical ability of participants etc. may cause itinerary change. We reserve the right to change any schedule in the interest of safety, comfort and general well-being.</li>
                <li>• The age limit of our group departures is 16 to 42 years due to the power-packed itineraries that we provide for our travellers. We can customise trips for travellers beyond the mentioned age bracket.</li>
                <li>• Stay in Shnongpedeng will be in Alpine/Dome Tents with common washroom.</li>
                <li>• Additionally, since this is not a leisure trip and several of our sightseeing locations are in rural areas, we kindly request that you avoid late-night strolling around the hotel for your safety and convenience.</li>
              </ul>
            </div>

            {/* Pricing Section */}
            <div 
              id="pricing"
              data-animate
              className={`mb-4 sm:mb-6 bg-gray-50 rounded-lg p-3 sm:p-4 transition-all duration-1000 delay-600 ${
                isVisible['pricing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Costing</h2>
              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full border-collapse min-w-full">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="border border-green-400 px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-sm sm:text-base">Mode</th>
                      <th className="border border-green-400 px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-sm sm:text-base">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-green-400 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Double Sharing</td>
                      <td className="border border-green-400 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                        <span className="text-gray-500 line-through">₹ 26,999</span>
                        <span className="ml-2 font-bold text-gray-900">₹ 24,999</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-green-400 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Triple Sharing</td>
                      <td className="border border-green-400 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                        <span className="text-gray-500 line-through">₹ 24,999</span>
                        <span className="ml-2 font-bold text-gray-900">₹ 22,999</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 sm:mt-4">
                <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Trip Starts From</p>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-gray-500 line-through text-lg sm:text-xl">₹ 24,999</span>
                  <span className="text-2xl sm:text-3xl font-bold text-green-500">₹ 22,999</span>
                  <span className="text-red-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">₹ 2,000 Off</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Per Person</p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Section */}
          <div className="lg:col-span-1">
            <div 
              id="booking"
              data-animate
              className={`sticky top-20 lg:top-24 bg-white rounded-lg p-3 sm:p-4 text-gray-900 transition-all duration-1000 delay-300 shadow-lg border border-gray-200 ${
                isVisible['booking'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="mb-3 sm:mb-4">
                <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Trip Starts From</p>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="text-gray-500 line-through text-base sm:text-lg">₹ 24,999</span>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">₹ 22,999</span>
                </div>
                <span className="text-red-600 text-xs sm:text-sm font-semibold">₹ 2,000 Off</span>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Per Person</p>
              </div>

              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">📅 Trip Dates</h2>
              <div className="space-y-2 mb-4 sm:mb-5">
                <div className="border border-gray-300 rounded-lg p-2 sm:p-3 cursor-pointer hover:border-green-400 hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center transition-all duration-300 group-hover:border-green-500 group-hover:scale-125">
                      <div className="w-2 h-2 rounded-full bg-gray-900 transition-all duration-300 group-hover:bg-green-500"></div>
                    </div>
                    <p className="font-semibold text-sm sm:text-base transition-colors duration-300 group-hover:text-green-600">22 Nov 2025</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 ml-6 transition-colors duration-300 group-hover:text-gray-800">Starting ₹ 22,999/Person</p>
                </div>
                <div className="border border-gray-300 rounded-lg p-2 sm:p-3 cursor-pointer hover:border-green-400 hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-400 bg-white transition-all duration-300 group-hover:border-green-500 group-hover:scale-125"></div>
                    <p className="font-semibold text-sm sm:text-base transition-colors duration-300 group-hover:text-green-600">29 Nov 2025</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 ml-6 transition-colors duration-300 group-hover:text-gray-800">Starting ₹ 22,999/Person</p>
                </div>
              </div>
              
              <div className="mb-4 sm:mb-5">
                <label className="block mb-2 font-semibold text-sm sm:text-base">👥 No. of Travellers</label>
                <div className="flex items-center justify-center gap-4">
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-lg px-3 sm:px-4 py-2 font-bold transition-all duration-300 transform hover:scale-125 active:scale-95 hover:shadow-md text-lg sm:text-xl">−</button>
                  <span className="text-xl sm:text-2xl font-bold min-w-[2rem] text-center transition-all duration-300">1</span>
                  <button className="bg-gray-100 hover:bg-gray-200 rounded-lg px-3 sm:px-4 py-2 font-bold transition-all duration-300 transform hover:scale-125 active:scale-95 hover:shadow-md text-lg sm:text-xl">+</button>
                </div>
              </div>

              <button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 sm:py-3 rounded-lg transition-all duration-300 mb-3 sm:mb-4 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm sm:text-base animate-pulse-slow">
                Send Enquiry
              </button>

              <div className="text-center">
                <p className="mb-2 text-xs sm:text-sm text-gray-600 transition-colors duration-300">Any Doubt?</p>
                <button className="bg-green-400 hover:bg-green-500 text-white px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95 text-sm sm:text-base group">
                  <FaWhatsapp className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
