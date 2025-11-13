import { 
  FaPhone, 
  FaCalendarCheck, 
  FaHotel, 
  FaUserTie, 
  FaPlane, 
  FaEye, 
  FaHeart,
  FaCar 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaPhone,
      title: "Free Travel Consultation",
      description: "Assistance by Destination travel experts in planning your trip."
    },
    {
      icon: FaCalendarCheck,
      title: "Full Tour Management",
      description: "Manage complete services Flights, Hotels, Transport, activities & Sightseeing."
    },
    {
      icon: FaHotel,
      title: "Best Hotels",
      description: "We visit and choose the hotels for our guests."
    },
    {
      icon: FaUserTie,
      title: "Tour Guide",
      description: "We choose only licensed, experienced and knowledgeable tour guides."
    },
    {
      icon: FaPlane,
      title: "Flight Tickets",
      description: "We can assist you in booking all domestic flight tickets."
    },
    {
      icon: FaEye,
      title: "Sightseeing",
      description: "We make your sightseeing interesting & informative."
    },
    {
      icon: FaHeart,
      title: "Priest for Special Prayers",
      description: "At most of the temples in India we provide Priests for special prayers."
    },
    {
      icon: FaCar,
      title: "Transportation",
      description: "Experienced drivers with high standard vehicles."
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-8 sm:mb-12 font-bold px-4">
          Enhance Your Experience With Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Orange Icon */}
                <div className="mb-3 sm:mb-4">
                  <Icon className="text-orange-500 text-4xl sm:text-5xl" />
                </div>
                
                {/* Title */}
                <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-2 px-2">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

