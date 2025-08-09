
export default function Hero() {
  return (
    <section className="bg-[radial-gradient(150%_150%_at_10%_10%,#FFEDBE_0%,#FFF9E8_100%)] font-[DM Sans] py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="max-w-lg">
          <p className="text-sm text-[#666666] mb-2">Namaste, Welcome to Amrutam</p>
          <h1 className="text-4xl font-extrabold mb-4 text-[#0C0C0C]">
            Join Amrutam - <span className="text-[#3A643C]">Grow Your Practice</span>
          </h1>
          <p className="text-[#666666] mb-10">
           Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.
          </p>
          <button className="bg-[#3A643C] text-white px-12 py-2 rounded-lg transition">
            Join Now
          </button>
          {/* Stats */}
          <div className="flex gap-8 mt-8">
            <div>
              <p className="text-2xl font-semibold text-[#000000]">500+</p>
              <p className="text-sm text-[#4C4C4C] font-medium">Average Active Users</p>
            </div>
            <div className="border-l pl-8">
              <p className="text-2xl font-semibold text-[#000000]">40+</p>
              <p className="text-sm text-[#4C4C4C] font-medium">Average Free Daily Calls</p>
            </div>
          </div>
        </div>

        {/* Right Image + Icons */}
<div className="bg-[#FFF6DD] py-10">
  <div className="relative flex-shrink-0 w-full max-w-lg mx-auto">
    <img
      src="/main.png"
      alt="Doctors"
      className="rounded-xl shadow-lg w-full h-auto object-cover"
    />
  </div>
</div>
      </div>
    </section>
  );
}
