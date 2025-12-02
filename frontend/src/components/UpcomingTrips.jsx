import { useMemo, useState } from 'react'

const filters = [
  'All',
  'Meghalaya',
  'Spiti Valley',
  'Tirthan Valley',
  'Himachal Pradesh',
  'Shimla',
  'Varanasi',
  'Rishikesh',
  'Kerala Backwaters'
]

const trips = [
  {
    id: 1,
    title: 'Living Root Bridges & Caves',
    location: 'Meghalaya',
    duration: '6 days',
    nights: '5 nights',
    month: 'December 2024',
    price: '₹22,999',
    oldPrice: '₹24,999',
    discount: '₹2,000 Off',
    departures: ['Nov 29', 'Dec 6', 'Dec 13'],
    freebies: true,
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 2,
    title: 'White Spiti Winter Expedition',
    location: 'Spiti Valley',
    duration: '7 days',
    nights: '6 nights',
    month: 'January 2025',
    price: '₹18,999',
    oldPrice: '₹20,999',
    discount: '₹2,000 Off',
    departures: ['Nov 29', 'Dec 6', 'Dec 13', 'Jan 3', 'Jan 10'],
    freebies: true,
    image:
      'https://images.unsplash.com/photo-1523906630133-f6934a1ab6c8?auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 3,
    title: 'Riverside Retreat & Treks',
    location: 'Tirthan Valley',
    duration: '4 days',
    nights: '3 nights',
    month: 'November 2024',
    price: '₹18,499',
    oldPrice: '₹19,999',
    discount: '₹1,500 Off',
    departures: ['Nov 22', 'Nov 29', 'Dec 6'],
    freebies: false,
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 4,
    title: 'Paragliding & Peaks',
    location: 'Himachal Pradesh',
    duration: '5 days',
    nights: '4 nights',
    month: 'March 2025',
    price: '₹21,999',
    oldPrice: '₹23,999',
    discount: '₹2,000 Off',
    departures: ['Dec 20', 'Dec 27', 'Jan 3'],
    freebies: true,
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 5,
    title: 'Toy Train & Colonial Charm',
    location: 'Shimla',
    duration: '3 days',
    nights: '2 nights',
    month: 'February 2025',
    price: '₹16,499',
    oldPrice: '₹17,999',
    discount: '₹1,500 Off',
    departures: ['Feb 7', 'Feb 14', 'Feb 21'],
    freebies: false,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 6,
    title: 'Ghats & Ganga Aarti Experience',
    location: 'Varanasi',
    duration: '2 days',
    nights: '1 night',
    month: 'January 2025',
    price: '₹14,999',
    oldPrice: '₹15,999',
    discount: '₹1,000 Off',
    departures: ['Jan 5', 'Jan 12', 'Jan 19'],
    freebies: false,
    image:
      'https://images.unsplash.com/photo-1504351873408-0b3fb7ba72d0?auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 7,
    title: 'Yoga by the Ganges',
    location: 'Rishikesh',
    duration: '3 days',
    nights: '2 nights',
    month: 'April 2025',
    price: '₹17,999',
    oldPrice: '₹19,499',
    discount: '₹1,500 Off',
    departures: ['Apr 4', 'Apr 11', 'Apr 18'],
    freebies: true,
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 8,
    title: 'Backwater Houseboat Escape',
    location: 'Kerala Backwaters',
    duration: '4 days',
    nights: '3 nights',
    month: 'December 2024',
    price: '₹23,999',
    oldPrice: '₹25,999',
    discount: '₹2,000 Off',
    departures: ['Dec 6', 'Dec 13', 'Dec 20'],
    freebies: true,
    image:
      'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&w=900&q=60'
  }
]

function UpcomingTrips() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleTrips = useMemo(() => {
    if (activeFilter === 'All') return trips
    return trips.filter((trip) => trip.location === activeFilter)
  }, [activeFilter])

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#017233]">
              Upcoming Trips
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Handpicked Indian Getaways</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-[#017233] hover:text-[#017233]"
          >
            See All
          </button>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'border-[#017233] bg-[#017233] text-white'
                  : 'border-gray-200 text-gray-700 hover:border-[#017233] hover:text-[#017233]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleTrips.map((trip) => (
            <article
              key={trip.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img src={trip.image} alt={trip.title} className="h-full w-full object-cover" />
                {trip.freebies && (
                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Free Goodies 🎁
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <span>⏱️ {trip.nights} / {trip.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{trip.title}</h3>
                <p className="text-sm text-gray-500">{trip.location}</p>

                <div className="flex items-center gap-3 text-base">
                  <span className="text-xl font-bold text-gray-900">{trip.price}</span>
                  <span className="text-sm text-gray-400 line-through">{trip.oldPrice}</span>
                  <span className="text-sm font-semibold text-[#F43F5E]">{trip.discount}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                  <span className="text-base">📅</span>
                  <span>{trip.departures.join(', ')}</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#017233]">
                    {trip.month}
                  </span>
                  <button
                    type="button"
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-[#017233] hover:text-[#017233]"
                  >
                    View Itinerary
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingTrips

