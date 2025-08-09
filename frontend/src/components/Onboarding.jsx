export default function Onboarding() {
  const steps = [
    { title: "Step 1: Get your referral code", desc: "Contact us to begin your unique referral code." },
    { title: "Step 2: Register on Amrutam", desc: "Sign up to join our specialist network." },
    { title: "Step 3: Complete KYC", desc: "Fill in details and upload verification documents." },
    { title: "Step 4: Start consulting", desc: "Once verified, begin offering consultations." },
  ];

  return (
    <section className="py-8 px-6 lg:px-20 font-[DM Sans] ">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl text-[#33643F] font-bold mb-2">Join Our Circle of Care</h2>
        <p className="text-[#4C4C4C]">Becoming a part of Amrutam is simple</p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="border border-[#33643F] rounded-lg p-4 text-left">
              <h3 className="font-bold text-[#3A643C] mb-1">{step.title}</h3>
              <p className="text-[#3A643C]">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/imagee.png"
            alt="Onboarding screenshot"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        {["Consultations", "Payment withdrawal", "Schedule"].map((tab, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-lg border border-[#3A643C] ${
              idx === 0
                ? "bg-[#3A643C] text-white "
                : "text-[#3A643C] hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile mockups */}
   <div className="flex justify-evenly gap-8 mt-12 flex-wrap">
  {["iphone3.png", "iphone2.png", "iphone1.png"].map((num, index) => {
    const isCenter = index === 1; 
    return (
      <img
        key={num}
        src={`/${num}`}
        alt={`Mobile mockup ${num}`}
        className={`rounded-lg shadow-lg transition-all duration-300 
          ${isCenter ? "z-20 scale-110" : "z-10 scale-90 opacity-80"}`}
      />
    );
  })}
</div>

      <div className="flex justify-center mt-12">
        <button className=" text-white px-6 py-3 rounded-lg font-medium bg-[#3A643C] transition">
          Join Now
        </button>
      </div>
    </section>
  );
}
