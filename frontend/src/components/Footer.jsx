import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#DBDCC4] text-[#1f3f2c] py-10 px-6 md:px-20  w-full font-[DM Sans]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h1 className="text-2xl font-semibold tracking-widest mb-4">
            AMRUTAM
          </h1>
          <h2 className="text-lg font-semibold mt-8 mb-4">Get in touch</h2>
          <p className="text-sm mb-1 font-medium text-[#4C4C4C]">
            support@amrutam.global
          </p>
          <p className="text-sm mb-1 font-medium text-[#4C4C4C]">
            Amrutam Pharmaceuticals Pvt Ltd.,
            <br />
            chitragupt ganj, Nai Sadak, Lashkar,
            <br />
            Gwalior - 474001
          </p>
          <p className="text-sm mt-2  font-medium text-[#4C4C4C]">
            +91 9713171999
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#33643F]">
            Information
          </h2>
          <ul className="space-y-2 text-sm font-medium text-[#4C4C4C]">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/privacy-policy-mobile">
                Privacy Policy for Mobile App
              </Link>
            </li>
            <li>
              <Link to="/shipping-return">Shipping and Return Policy</Link>
            </li>
            <li>
              <Link to="/international-delivery">International Delivery</Link>
            </li>
            <li>
              <Link to="/business">For Business, Hotels and Resorts</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-white">
            <Link to="https://facebook.com" target="_blank" rel="noreferrer">
              <div className="bg-[#1f3f2c] p-2 rounded-full">
                <FaFacebookF />
              </div>
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noreferrer">
              <div className="bg-[#1f3f2c] p-2 rounded-full">
                <FaInstagram />
              </div>
            </Link>
            <Link to="https://youtube.com" target="_blank" rel="noreferrer">
              <div className="bg-[#1f3f2c] p-2 rounded-full">
                <FaYoutube />
              </div>
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noreferrer">
              <div className="bg-[#1f3f2c] p-2 rounded-full">
                <FaTwitter />
              </div>
            </Link>
            <Link to="https://linkedin.com" target="_blank" rel="noreferrer">
              <div className="bg-[#1f3f2c] p-2 rounded-full">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link to="https://pinterest.com" target="_blank" rel="noreferrer">
              <div className="bg-[#1f3f2c] p-2 rounded-full">
                <FaPinterestP />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
