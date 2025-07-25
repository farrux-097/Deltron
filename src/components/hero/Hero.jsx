import React from 'react';
import "../hero/hero.css";

const Hero = () => {
  return (
    <section className="hero-section pt-[100px] sm:pt-[120px] w-full min-h-[600px] sm:h-[717px] bg-cover bg-center bg-no-repeat relative z-0">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-end items-center h-full py-12 sm:py-0">
        <div className="w-full max-w-[643px] bg-white/70 p-6 sm:px-[39px] sm:pt-[62px] sm:pb-[37px] mt-8 sm:mt-[153px] text-center sm:text-left rounded-md backdrop-blur-sm shadow-md z-10">
          <h2 className="text-sm sm:text-base font-semibold tracking-[3px] text-[#333333] mb-1 uppercase">
            New Arrival
          </h2>
          <h1 className="text-[24px] sm:text-[40px] md:text-[52px] text-[#B88E2F] font-bold leading-snug mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#333333] font-medium mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] hover:bg-white hover:text-black border border-transparent hover:border-gray-300 shadow-md w-[150px] sm:w-[180px] md:w-[222px] h-[48px] sm:h-[60px] md:h-[74px] rounded-md text-white font-bold text-[14px] sm:text-[16px] transition duration-200">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
