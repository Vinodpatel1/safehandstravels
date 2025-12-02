const menuItems = [
  { icon: '🇮🇳', label: 'All India Trips', hasDropdown: true },
  { icon: '🏔️', label: 'Himalayan Escapes', hasDropdown: true },
  { icon: '🌊', label: 'Beach & Island Breaks', hasDropdown: false },
  { icon: '🌿', label: 'Wellness Retreats', hasDropdown: false },
  { icon: '🚐', label: 'Weekend Getaways', hasDropdown: false },
  { icon: '🕉️', label: 'Spiritual Trails', hasDropdown: true }
]

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white px-4 py-4 shadow-sm lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4 lg:justify-start">
            <img
              src="/images/logo.webp"
              alt="Capture A Trip"
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <label
            className="flex w-full flex-1 items-center gap-3 rounded-full border border-gray-200 px-5 py-2 text-sm text-gray-500 lg:max-w-2xl"
            aria-label="Search trips"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
            >
              <path
                d="M15.5 14h-.79l-.28-.27a6 6 0 1 0-.71.71l.27.28v.79L20 21.5 21.5 20l-5.5-6zM10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                fill="currentColor"
              />
            </svg>
            <input
              type="search"
              placeholder="Search your trip..."
              className="w-full border-none bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-semibold text-gray-900 lg:w-auto lg:justify-end">
            <a
              href="tel:+918448801998"
              className="flex items-center gap-2 whitespace-nowrap text-gray-900 transition-colors hover:text-[#017233]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-900"
                aria-hidden="true"
              >
                <path
                  d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 .97-.26 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.26.97z"
                  fill="currentColor"
                />
              </svg>
              <span>(+91) 8448801998</span>
            </a>
            <button
              type="button"
              className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Login
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-gray-900 lg:justify-between">
          {menuItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#017233]"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M7 10l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

