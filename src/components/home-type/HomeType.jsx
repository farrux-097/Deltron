import React from 'react'
import Dining from "../../assets/mask.png"
import Living from "../../assets/living.png"
import Bedroom from "../../assets/mask2.png"
const HomeType = () => {
  return (
    <>
      <section>
          <div className="container">
              <h2 className='text-center text-[32px] font-bold text-[#333333] mt-[55.47px]'>Browse The Range</h2>
              <p className='text-center text-[20px] text-[#666666] font-normal mb-[62.29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className='flex items-center justify-center gap-[20px]'>
                <div>
                  <img src={Dining} alt="dining room" />
                  <p className='text-center mt-[30px] text-[24px] font-semibold text-[#333333]'>Dining</p>
                </div>
                <div>
                  <img src={Living} alt="living room" />
                  <p className='text-center mt-[30px] text-[24px] font-semibold text-[#333333]'>Living</p>
                </div>
                <div>
                  <img src={Bedroom} alt="dining room" />
                  <p className='text-center mt-[30px] text-[24px] font-semibold text-[#333333]'>Bedroom</p>
                </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default HomeType