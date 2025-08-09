import {  FaLeaf, FaMoneyBill, FaPhone, FaWallet } from "react-icons/fa";

export default function GetStarted() {

  return (
    <div className="min-h-screen font-[DM Sans] bg-[#FFEDBF] flex flex-col md:flex-row items-center justify-between md:px-20 px-8 py-12">
      
      <div className="max-w-xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A643C] ">
          Get Started Today - <br /> Download the App Now!
        </h2>
        <p className="text-[#666666] text-lg">
          Simplify consultations, manage patients, and grow your practice - all in one place.
        </p>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Benefit icon={<FaLeaf />} text="Build Trust and Community with Forum" />
          <Benefit icon={<FaMoneyBill />} text="Earn More with Pay Per Conversation" />
          <Benefit icon={<FaPhone />} text="Attract Patients with 5-Minute Free Call" />
          <Benefit icon={<FaWallet />} text="Instant Access to Your Earnings with Wallet" />
        </div>

   
        <div className="flex gap-4 pt-4">
       <img src="play.png" alt="Play Store" />
        <img src="app.png" alt="App Store" />
        </div>
      </div>


      <div className="absolute mb-30 right-40">
        <img
          src="/mobile.png"
          alt="App Preview"
          className="w-[320px] md:w-[320px] rounded-xl shadow-xl"
        />
    
        <div className="absolute top-20 -left-20 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
          <img src="/Dr2.png" alt="Doctor" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 -left-16 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
          <img src="/Dr.png" alt="Doctor" className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-28 -right-16 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
          <img src="/Dr3.png" alt="Doctor" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-1/3 -right-20 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
          <img src="/Dr4.png" alt="Doctor" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  );
}

function Benefit({ icon, text }) {
  return (
    <div className="border border-[#9E9E9E] rounded-lg p-3 flex items-center gap-3 shadow-sm text-[#33643F] font-medium">
      <div className="">{icon}</div>
      <p className="">{text}</p>
    </div>
  );
}
