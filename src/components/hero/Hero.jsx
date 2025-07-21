import React from 'react'
import "../hero/hero.css"

const Hero = () => {
  return (
    <>
    <section className='hero-section w-[100%] h-[717px]'>
      <div className="container flex justify-end">
          <div className="hero-box w-[643px] h-[443px] bg-[#FFFFFFB2] mt-[153px] pt-[62px] pr-[56px] pb-[37px] pl-[39px]">
            <h2 className='text-[16px] font-semibold tracking-[3px] text-[#333333] mb-[4px]'>New Arrival</h2>
            <h1 className='text-[52px] text-[#B88E2F] font-bold mb-[17px]'>Discover Our New Collection</h1>
            <p className='text-[18px] text-[#333333] font-medium mb-[26px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='bg-[#B88E2F] hover:bg-white hover:border-slate-300 hover:border-1 hover:text-black shadow-md w-[222px] h-[74px] rounded-md text-[#FFFFFF] font-bold text-[16px] cursor-pointer'>BUY NOW</button>
          </div>
      </div>  
    </section>
    </>
  )
}

export default React.memo(Hero)