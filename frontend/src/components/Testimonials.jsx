import React from "react";

const testimonials = [
  {
    name: "Dr. Pooja Deshmukh",
    title: "BAMS",
    stars: 4,
    image: "/Dr2.png", 
    text: `Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.`,
  },
  {
    name: "Dr. Rajesh Iyer",
    title: "Ayurvedic Practitioner",
    stars: 4,
    image: "/Dr3.png", 
    text: `Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.`,
  },
  {
    name: "Dr. Ananya Sharma",
    title: "BAMS",
    stars: 4,
    image: "/Dr4.png",
    text: `As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products.`,
  },
];

const StarRating = ({ stars }) => {
  return (
    <div className="flex gap-1 mt-1">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < stars ? (
            <span className="text-yellow-400">★</span>
          ) : (
            <span className="text-gray-300">★</span>
          )}
        </span>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="font-[DM Sans] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#33643F]">
          What other Ayurvedic Doctors are Saying
        </h2>
        <p className="text-[#4C4C4C] mt-2">
          Trusted by experts - Hear what Ayurvedic doctors say about Amrutam!
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
               <div
      key={idx}
      className={`
        rounded-xl p-6 text-left flex flex-col items-start transition-all duration-300 bg-[#FFEEC3] 
        ${idx === 1
          ? 'scale-105 shadow-xl z-10 relative'
          : 'scale-95 opacity-90'}
      `}
    >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[16px] text-[#333333]">{item.name}, <span className="font-semibold text-[#666666]">{item.title}</span></p>
                  <StarRating stars={item.stars} />
                </div>
              </div>
              <p className="text-[#7E7E7E] text-[15px] leading-relaxed">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
