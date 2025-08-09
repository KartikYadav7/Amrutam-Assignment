
export default function WhyChooseUs() {
 const logos = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
    "/img9.png",
  ];

  const features = [
    {
      title: "Instant FREE 5-Mins Call",
      desc: "We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.",
      img: "/1featured.png",
    },
    {
      title: "Forum for Meaningful Connections",
      desc: "We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the Thoughts section allows you to share deeper Ayurvedic wisdom.",
      img: "/2featured.png",
    },
    {
      title: "Choose Your Session Mode",
      desc: "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.",
      img: "/3featured.png",
    },
    {
      title: "Smart Wallet",
      desc: "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
      img: "/4featured.png",
    },
    {
      title: "Flexible Work Timing",
      desc: "We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
      img: "/4featured.png",
    },
  ];

  return (
    <>
    <section className="bg-[#FFF8E6] py-8 font-[DM Sans]">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[28px] font-bold text-[#33643F] tracking-wide">
          Featured
        </h2>
        <p className="text-[16px] text-[#4c4c4c] mt-1 max-w-xl mx-auto">
          Recognized and celebrated by leading publications - Amrutam in the spotlight!
        </p>
      </div>

      {/* Logos */}
      <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8 mt-12 px-6">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Featured Logo ${i + 1}`}
            className="h-[40px] object-contain"
          />
        ))}
      </div>
    </section>

    <section className="py-16 px-6 lg:px-20 font-[DM Sans] ">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-[#3A643C]">Why Doctors Choose Us?</h2>
        <p className="text-[#4C4C4C] font-medium">
          Unlock the Benefits of Smarter Healthcare Management and Patient Care
        </p>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              idx % 2 == 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-[#3A643C]">{feature.title}</h3>
              <p className="text-[#666666]">{feature.desc}</p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="rounded-lg shadow-lg p-8"
              />
            </div>
            
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
