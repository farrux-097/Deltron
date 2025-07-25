import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#0000002B] py-[48px] px-4 sm:px-[40px] md:px-[100px] bg-white">
      <div className="container mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-12 md:gap-0">
          
          {/* Logo & Address */}
          <div className="md:mr-[50px] max-w-[285px]">
            <h2 className="text-[24px] font-bold mb-6">Funiro.</h2>
            <p className="text-[16px] text-[#9F9F9F] leading-relaxed">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <ul className="md:mr-[50px]">
  <li className="mb-6 text-[#9F9F9F] font-medium text-[16px]">Links</li>
  
  <li className="mb-4">
    <NavLink
      to="/"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-[16px] font-medium text-[#000000] hover:text-yellow-500"
    >
      Home
    </NavLink>
  </li>
  
  <li className="mb-4">
    <NavLink
      to="/shop"
      className="text-[16px] font-medium text-[#000000] hover:text-yellow-500"
    >
      Shop
    </NavLink>
  </li>
  
  <li className="mb-4">
    <NavLink
      to="/about"
      className="text-[16px] font-medium text-[#000000] hover:text-yellow-500"
    >
      About
    </NavLink>
  </li>
  
  <li>
    <NavLink
      to="/contact"
      className="text-[16px] font-medium text-[#000000] hover:text-yellow-500"
    >
      Contact
    </NavLink>
  </li>
</ul>
     {/* Help */}
          <ul className="md:mr-[50px]">
            <li className="mb-6 text-[#9F9F9F] font-medium text-[16px]">Help</li>
            <li className="mb-4 text-[16px] font-medium text-[#000000]">Payment Options</li>
            <li className="mb-4 text-[16px] font-medium text-[#000000]">Returns</li>
            <li className="text-[16px] font-medium text-[#000000]">Privacy Policies</li>
          </ul>

          {/* Newsletter */}
          <div className="w-full max-w-sm">
            <h2 className="text-[#9F9F9F] font-medium text-[16px] mb-6">Newsletter</h2>
            <form className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[11px]">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b border-[#000000] w-full sm:w-[200px] pb-1 outline-none text-[14px]"
              />
              <button
                type="button"
                className="border-b border-[#000000] text-[14px] font-medium text-[#000000] pb-1 hover:text-yellow-500"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#D9D9D9] my-[48px]"></div>

        {/* Bottom text */}
        <h2 className="text-[14px] sm:text-[16px] font-normal text-[#000000] text-center md:text-left">
          © 2023 Funiro. All rights reserved.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
