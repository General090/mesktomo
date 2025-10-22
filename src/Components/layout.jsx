import React from "react";
import Logo from "../assets/mesklogo.png";
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-colors ease-in-out duration-300 bg-[#00000080] shadow-md text-white py-5">
        <div className="flex items-center justify-between px-30 font-semibold">
          <div>
            <img src={Logo} alt="MESKTOMO Logo" className="w-15" />
          </div>

          <ul className="hidden md:flex items-center gap-10 list-none">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Blogs</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          </ul>

          <button className="bg-[#ddd53b] text-black font-semibold rounded-full px-6 py-3 hover:bg-white transition">
            Get a Free Quote
          </button>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-[#0f2c27] text-white text-sm py-15 px-30 flex justify-between">
        <div className="space-y-5">
          <img src={Logo} className="w-15" />
          <p className="w-55">
            Efficient, time-bound logistics that impacts your business growth |
            Delivering Excellence in Logistics Solutions.
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="font-bold text-xl">Quick Links</h1>
          <ul className="space-y-5">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Blogs</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          </ul>
        </div>

        <div className="space-y-5">
          <h1 className="font-bold text-xl">Contact</h1>
          <div className="flex items-center gap-2">
            <MdLocalPhone className="text-[#c3c039] text-lg" />
            08140807725
          </div>

          <div className="flex items-center gap-2">
            <MdLocalPhone className="text-[#c3c039] text-lg" />
            08140807725
          </div>

          <div className="flex items-center gap-2">
            <MdLocalPhone className="text-[#c3c039] text-lg" />
            08140807725
          </div>

          <div className="flex items-center gap-2">
            <CiMail className="text-[#c3c039] text-lg" />
            sales@mesktomolog.com
          </div>

          <div className="flex items-center gap-2">
            <MdLocalPhone className="text-[#c3c039] text-lg" />
            25 Diya Street, Gbagada, Lagos, Nigeria.
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="font-bold text-xl">Follow us</h1>
          <div className="flex items-center gap-5">
           <BsTwitterX className="text-lg" />
           <FiInstagram className="text-lg" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
