import React from "react";
import TopHeader from "../components/TopHeader.jsx";
import Navbar from "../components/Navbar.jsx";
import Featured from "../components/Featured.jsx";
import ConnectForm from "../components/ConnectForm.jsx";
import Footer from "../components/Footer.jsx";
import GetStarted from "../components/GetStarted.jsx";
import FaqSection from "../components/Faq.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Onboarding from "../components/Onboarding.jsx";
import Hero from "../components/Hero.jsx";
const LandingPage = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Hero/>
      <Featured/>
      <Onboarding/>
      <Testimonials/>
      <FaqSection/>
      <GetStarted/>
      <ConnectForm />
      <Footer />
    </>
  );
};

export default LandingPage;
