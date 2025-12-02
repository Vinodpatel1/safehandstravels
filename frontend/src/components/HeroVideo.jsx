function HeroVideo() {
  return (
    <section className="w-full bg-black">
      <div className="w-full px-0 pb-10 pt-0">
        <div className="w-full">
          <video
            className="h-[75vh] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            poster="https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1600&q=60"
          >
            <source src="/video/homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mx-auto mt-6 w-full max-w-4xl px-4 text-center text-white">
          <p className="text-2xl font-semibold">
            India&apos;s Fastest Growing Community of Travellers
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <span className="flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_2015_logo.svg" alt="Google" className="h-5" />
              4.9 Ratings
            </span>
            <span className="flex items-center gap-2">
              <span role="img" aria-label="Community">📸</span>
              520k+ Community
            </span>
            <span className="flex items-center gap-2">
              <span role="img" aria-label="Itineraries">🧳</span>
              500+ Itineraries
            </span>
            <span className="flex items-center gap-2">
              <span role="img" aria-label="EMI">🪙</span>
              No Cost EMI
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroVideo

