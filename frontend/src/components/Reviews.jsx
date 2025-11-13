import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      review: "Amazing experience! The tour guides were knowledgeable and the itinerary was perfectly planned. Highly recommend Safe Hands Travels for anyone looking to explore India.",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "London, UK",
      rating: 5,
      review: "Outstanding service from start to finish. The hotels were excellent and the transportation was always on time. Made our trip stress-free and memorable.",
      date: "1 month ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Williams",
      location: "Sydney, Australia",
      rating: 4.5,
      review: "Great travel agency with excellent customer support. The destinations were beautiful and the guides were friendly. Would definitely book again!",
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Martinez",
      location: "Toronto, Canada",
      rating: 5,
      review: "Best travel experience we've ever had! Every detail was taken care of. The special prayers at temples were a unique touch. Thank you Safe Hands Travels!",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Anderson",
      location: "Berlin, Germany",
      rating: 4.5,
      review: "Professional and reliable service. The tour was well-organized and we got to see all the highlights. The accommodation choices were perfect.",
      date: "2 months ago",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Taylor",
      location: "Melbourne, Australia",
      rating: 5,
      review: "Exceeded all expectations! The team went above and beyond to make our journey special. The flight bookings and hotel arrangements were seamless.",
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3 sm:mb-4 font-bold px-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Read authentic reviews from our satisfied customers who have experienced unforgettable journeys with us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-3 sm:mb-4 flex-wrap">
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
                <span className="ml-2 text-gray-700 font-semibold text-sm sm:text-base">
                  {review.rating}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-gray-200 pt-3 sm:pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random&size=150`;
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-gray-900 font-bold text-base sm:text-lg truncate">
                        {review.name}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm truncate">
                        {review.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm flex-shrink-0 sm:ml-2">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

