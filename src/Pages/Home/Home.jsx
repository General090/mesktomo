import React from "react";
import Layout from "../../Components/layout";
import "./Home.css";
import AboutUs from "./AboutUs"
import Industries from "./Industries"
import ChooseUs from "./ChooseUs"
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <Layout>
      <div className="relative background h-screen flex flex-col items-center justify-center text-center text-white pt-20">
        <div className="relative z-10 px-6 animate-slideUp">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Delivering Excellence <br /> in Logistics Solutions
          </h1>
          <p className="text-lg md:text-[15px] max-w-2xl mx-auto mb-5">
            As an industry leader, we specialize in providing comprehensive
            logistics solutions designed to connect businesses, facilitate
            trade, and empower growth across regional and international markets.
          </p>
          <button
            className="bg-[#ddd53b] text-black font-semibold px-6 py-3 rounded-full hover:bg-white transform transition-all duration-300 hover:scale-105"
          >
            Get a Free Quote
          </button>
        </div>
      </div>

      <AboutUs />
      <Industries />
      <ChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Home;