import React, { memo, useEffect, useState } from 'react';
import Logo from "../../assets/logo.svg";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline, IoMenu, IoClose, IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(document.documentElement.scrollTop > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300`}>
      <nav
        className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
          isScroll ? 'h-[80px]' : 'h-[100px]'
        }`}
      >
        {/* Logo */}
        <img
          src={Logo}
          alt="site logo"
          className={`w-[120px] transition-all duration-300 ${isScroll ? 'scale-95' : 'scale-100'}`}
        />

        {/* Desktop Menu */}
        <ul className={`hidden sm:flex gap-10`}>
          {['/', '/shop', '/about', '/contact'].map((path, i) => (
            <li key={i} className="text-[16px] font-medium hover:animate-pulse">
              <NavLink
                to={path}
                className={({ isActive }) => `${isActive ? 'text-yellow-500' : 'text-black'}`}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul className={`sm:hidden absolute top-full left-0 w-full bg-yellow-500 flex flex-col items-start px-4 transition-all duration-300 overflow-hidden z-40 border-b border-gray-200 ${
          toggle ? 'h-[160px] py-3' : 'h-0 py-0'
        }`}>
          {['/', '/shop', '/about', '/contact'].map((path, i) => (
            <li key={i} className="text-[16px] font-medium text-black hover:animate-pulse w-full">
              <NavLink
                to={path}
                className={({ isActive }) => `${isActive ? 'text-white' : ''}`}
                onClick={() => setToggle(false)}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex gap-[30px] sm:gap-[45px] items-center sm:static max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:justify-evenly max-sm:bg-white max-sm:py-3 max-sm:border-t max-sm:border-gray-300 z-50">
          <NavLink className={({ isActive }) => `sm:hidden ${isActive ? 'text-yellow-500' : ''}`} to="/">
            <IoHomeOutline className="w-[24px] h-[24px]" />
          </NavLink>
          <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-500' : ''}`} to="/user">
            <FiUser  className="w-[24px] h-[24px]" />
          </NavLink>
          <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-500' : ''}`} to="/search">
            <IoSearchOutline className="w-[24px] h-[24px]" />
          </NavLink>
          <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-500' : ''}`} to="/wishlist">
            <IoHeartOutline className="w-[24px] h-[24px]" />
          </NavLink>
          <NavLink className={({ isActive }) => `${isActive ? 'text-yellow-500' : ''}`} to="/cart">
            <SlBasket className="w-[24px] h-[24px]" />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-2xl sm:hidden ml-4 z-50"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <IoClose /> : <IoMenu />}
        </button>
      </nav>
    </header>
  );
};

export default memo(Header);
