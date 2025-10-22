import React from "react";
import AboutImg from "../../assets/about.png"

const About = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-bold mb-8 text-4xl">About Us</h1>
      <div className="flex items-center gap-12 px-20">
        <img src={AboutImg} className="w-[45%] rounded-xl" />

        <div>
          <p className="text-[17px] tracking-wider mb-5">At <span className="font-bold">MESKTOMO LOGISTICS LIMITED</span>, we are more than just a logistics provider - we are a trusted partner committed to simplifying supply chains and empowering business growth. With a blend of industry expertise and cutting-edge technology, we ensure that every shipment is delivered safely, on time, and cost-effectively.</p>

          <button className="bg-[#ddd53b] text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
