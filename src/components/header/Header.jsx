import React, { memo } from 'react'
import Logo from "../../assets/logo.svg"
import { UlItems } from '../static'
import { FaRegUser,FaRegHeart  } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <>
    <header className='pt-[29px] pb-[30px] shadow-md bg-[#FFFFFF]'>
    <div className="container flex items-center justify-between">
        <img src={Logo} alt="site logo" className='cursor-pointer' />
          <ul className='flex items-center gap-[75px]'>
          {
          UlItems?.map((item, index) =>(
            <li key={index}>
              <span className=' cursor-pointer text-[16px] font-medium text-[#000000] hover:animate-pulse hover:shadow-lg shadow-blue-200'>{item}</span>
            </li>
          ))
        }
          </ul>
          <div className='flex items-center gap-[45px]'>
              <button><FaRegUser className='w-[28px] h-[28px] cursor-pointer' /></button>
              <button><GoSearch  className='w-[28px] h-[28px] cursor-pointer'/></button>
              <button><FaRegHeart  className='w-[28px] h-[28px] cursor-pointer'/></button>
              <button><SlBasket className='w-[28px] h-[28px] cursor-pointer' /></button>
          </div>
    </div>
    </header>
    </>
  )
}

export default memo(Header)