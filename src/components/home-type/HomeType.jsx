import React from 'react'
import Dining from "../../assets/mask.png"
import Living from "../../assets/living.png"
import Bedroom from "../../assets/mask2.png"
const HomeType = () => {
  return (
    <>
<section className="py-12 sm:py-[60px]">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-[24px] sm:text-[32px] font-bold text-[#333333] mt-[30px] sm:mt-[55px]">
      Browse The Range
    </h2>
    <p className="text-center text-[16px] sm:text-[20px] text-[#666666] font-normal mb-[40px] sm:mb-[62px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] max-w-6xl mx-auto">
      <div className="flex flex-col items-center">
        <img src={Dining} alt="dining room" className="w-full object-cover" />
        <p className="text-center mt-[20px] text-[20px] sm:text-[24px] font-semibold text-[#333333]">
          Dining
        </p>
      </div>
      
      <div className="flex flex-col items-center">
        <img src={Living} alt="living room" className="w-full object-cover" />
        <p className="text-center mt-[20px] text-[20px] sm:text-[24px] font-semibold text-[#333333]">
          Living
        </p>
      </div>
      
      <div className="flex flex-col items-center">
        <img src={Bedroom} alt="bedroom" className="w-full object-cover" />
        <p className="text-center mt-[20px] text-[20px] sm:text-[24px] font-semibold text-[#333333]">
          Bedroom
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default HomeType