const TravelCard = ({ 
  image, 
  title, 
  currentPrice, 
  originalPrice, 
  discount, 
  duration, 
  dates,
  hasFreeGoodies = true 
}) => {
  return (
    <div className="relative group">
      {/* Snake Border Animation */}
      <div 
        className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
      >
        <div className="snake-border"></div>
      </div>
      
      {/* Card Content */}
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer z-10">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          
          {/* Free Goodies Badge */}
          {hasFreeGoodies && (
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1.5 rounded-md text-sm font-semibold flex items-center gap-1">
              Free Goodies 🎉
            </div>
          )}
          
          {/* Duration Banner */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1.5 shadow-md">
            <span>⏳</span>
            <span>{duration}</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-3 sm:p-4">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">
            {title}
          </h3>
          
          {/* Pricing */}
          <div className="mb-2 sm:mb-3">
            <div className="flex items-baseline gap-1 sm:gap-2 mb-1 flex-wrap">
              <span className="text-lg sm:text-xl font-bold text-gray-900">₹ {currentPrice.toLocaleString('en-IN')}</span>
              <span className="text-sm sm:text-base text-gray-500 line-through">₹ {originalPrice.toLocaleString('en-IN')}</span>
            </div>
            <span className="text-orange-600 font-semibold text-xs sm:text-sm">₹ {discount.toLocaleString('en-IN')} Off</span>
          </div>
          
          {/* Dates */}
          <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
            <span className="mt-0.5">📅</span>
            <span className="flex flex-wrap gap-1 leading-relaxed">
              {dates.slice(0, 3).map((date, index) => (
                <span key={index}>
                  {date}
                  {index < Math.min(dates.length, 3) - 1 && <span>,</span>}
                </span>
              ))}
              {dates.length > 3 && (
                <span className="text-orange-600 font-medium">+{dates.length - 3} more</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
