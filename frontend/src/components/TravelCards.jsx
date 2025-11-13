import TravelCard from './TravelCard';

const TravelCards = () => {
  const travelPackages = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Meghalaya Backpacking - 6 Days Road Trip",
      currentPrice: 22999,
      originalPrice: 24999,
      discount: 2000,
      duration: "5 nights / 6 days",
      dates: ["Nov 15", "Nov 22", "Nov 29", "Dec 6", "Dec 13"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      title: "Goa Beach Paradise - 4 Days Coastal Escape",
      currentPrice: 18999,
      originalPrice: 21999,
      discount: 3000,
      duration: "3 nights / 4 days",
      dates: ["Nov 20", "Nov 27", "Dec 4", "Dec 11", "Dec 18"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      title: "Ladakh Adventure - 8 Days Mountain Expedition",
      currentPrice: 34999,
      originalPrice: 38999,
      discount: 4000,
      duration: "7 nights / 8 days",
      dates: ["Nov 10", "Nov 17", "Nov 24", "Dec 1", "Dec 8"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      title: "Kerala Backwaters - 5 Days Serene Journey",
      currentPrice: 19999,
      originalPrice: 22999,
      discount: 3000,
      duration: "4 nights / 5 days",
      dates: ["Nov 12", "Nov 19", "Nov 26", "Dec 3", "Dec 10"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop",
      title: "Rajasthan Heritage Tour - 7 Days Royal Experience",
      currentPrice: 27999,
      originalPrice: 31999,
      discount: 4000,
      duration: "6 nights / 7 days",
      dates: ["Nov 14", "Nov 21", "Nov 28", "Dec 5", "Dec 12"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      title: "Himachal Pradesh - 6 Days Hill Station Retreat",
      currentPrice: 23999,
      originalPrice: 26999,
      discount: 3000,
      duration: "5 nights / 6 days",
      dates: ["Nov 16", "Nov 23", "Nov 30", "Dec 7", "Dec 14"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      title: "Andaman Islands - 5 Days Tropical Paradise",
      currentPrice: 31999,
      originalPrice: 34999,
      discount: 3000,
      duration: "4 nights / 5 days",
      dates: ["Nov 18", "Nov 25", "Dec 2", "Dec 9", "Dec 16"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop",
      title: "Sikkim & Darjeeling - 6 Days Tea Garden Tour",
      currentPrice: 24999,
      originalPrice: 27999,
      discount: 3000,
      duration: "5 nights / 6 days",
      dates: ["Nov 11", "Nov 18", "Nov 25", "Dec 2", "Dec 9"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
      title: "Uttarakhand Trekking - 7 Days Adventure Trail",
      currentPrice: 26999,
      originalPrice: 29999,
      discount: 3000,
      duration: "6 nights / 7 days",
      dates: ["Nov 13", "Nov 20", "Nov 27", "Dec 4", "Dec 11"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      title: "Kashmir Valley - 6 Days Scenic Beauty",
      currentPrice: 28999,
      originalPrice: 32999,
      discount: 4000,
      duration: "5 nights / 6 days",
      dates: ["Nov 17", "Nov 24", "Dec 1", "Dec 8", "Dec 15"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Pondicherry French Colony - 4 Days Coastal Charm",
      currentPrice: 17999,
      originalPrice: 20999,
      discount: 3000,
      duration: "3 nights / 4 days",
      dates: ["Nov 19", "Nov 26", "Dec 3", "Dec 10", "Dec 17"],
      hasFreeGoodies: true
    },
    {
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      title: "Spiti Valley - 7 Days Desert Mountain Trek",
      currentPrice: 32999,
      originalPrice: 36999,
      discount: 4000,
      duration: "6 nights / 7 days",
      dates: ["Nov 21", "Nov 28", "Dec 5", "Dec 12", "Dec 19"],
      hasFreeGoodies: true
    }
  ];

  return (
    <section id="tours" className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">
          Our Travel Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {travelPackages.map((pkg, index) => (
            <TravelCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCards;

