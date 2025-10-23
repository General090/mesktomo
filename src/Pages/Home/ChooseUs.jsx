import React from "react";
import {
  Boxes,
  Cpu,
  Globe2,
  BadgeCheck,
} from "lucide-react";
import { FaHandPointer, FaTruck, FaSearch, FaPhoneAlt } from "react-icons/fa";

const ChooseUs = () => {
  const features = [
    {
      id: 1,
      items: Boxes,
      header: "Comprehensive Solutions",
      text: "End-to-end logistics services covering every aspect of the supply chain.",
    },
    {
      id: 2,
      items: Cpu,
      header: "Cutting-Edge Technology",
      text: "Innovative systems to enhance efficiency, security, and visibility.",
    },
    {
      id: 3,
      items: Globe2,
      header: "Global Network",
      text: "Strong international partnerships to streamline your operations worldwide.",
    },
    {
      id: 4,
      items: BadgeCheck,
      header: "Proven Track Record",
      text: "Trusted by businesses across multiple industries for reliable logistics.",
    },
  ];

  return (
    <div className="text-center mb-20">
      <h1 className="font-bold text-4xl mb-10">Why Choose Us</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="w-[250px] shadow-lg p-5 space-y-4 rounded-xl hover:shadow-2xl transition-all duration-300"
          >
            <feature.items className="mx-auto text-[#ddd53b]" size={45} />
            <h1 className="font-bold text-lg">{feature.header}</h1>
            <p className="text-[#505574] text-sm">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-45">
        <div className="flex flex-col items-center text-center space-y-2 transition-all duration-300 hover:scale-105">
          <div className="border-2 border-[#ddd53b] w-20 h-20 flex items-center justify-center rounded-full">
            <FaHandPointer className="text-3xl text-[#ddd53b]" />
          </div>
          <p className="font-medium text-[#434153]">Request Quote</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2 transition-all duration-300 hover:scale-105">
          <div className="border-2 border-[#ddd53b] w-20 h-20 flex items-center justify-center rounded-full">
            <FaTruck className="text-3xl text-[#ddd53b]" />
          </div>
          <p className="font-medium text-[#434153]">Fast Delivery</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2 transition-all duration-300 hover:scale-105">
          <div className="border-2 border-[#ddd53b] w-20 h-20 flex items-center justify-center rounded-full">
            <FaSearch className="text-3xl text-[#ddd53b]" />
          </div>
          <p className="font-medium text-[#434153]">Track Shipment</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2 transition-all duration-300 hover:scale-105">
          <div className="border-2 border-[#ddd53b] w-20 h-20 flex items-center justify-center rounded-full">
            <FaPhoneAlt className="text-3xl text-[#ddd53b]" />
          </div>
          <p className="font-medium text-[#434153]">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
