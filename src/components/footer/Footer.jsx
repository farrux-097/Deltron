import React from 'react'

const Footer = () => {
  return (
    <footer className='w-[100%] h-[505px] border-t-1 border-[#0000002B] pt-[48px] pr-[100px] pb-[38px] pl-[100px]'>
        <div className="container">
            <div className='flex justify-center'>
              <div className=' mr-[136px]'>
                <h2 className='text-[24px] font-bold mb-[50px]'>Funiro.</h2>
                <div className='w-[285px] h-[72px]'>
                    <p className='text-[16px] text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
                </div>
              </div>
              <ul className='mr-[144px]'>
                <li className='mb-[55px] text-[#9F9F9F] font-medium text-[16px]'>Links</li>
                <li className='mb-[46px] text-[16px] font-medium text-[#000000]'>Home</li>
                <li className='mb-[46px] text-[16px] font-medium text-[#000000]'>Shop</li>
                <li className='mb-[45px] text-[16px] font-medium text-[#000000]'>About</li>
                <li className='text-[16px] font-medium text-[#000000]'>Contact</li>
              </ul>
              <ul className='mr-[72px]'>
                <li className='mb-[55px] text-[#9F9F9F] font-medium text-[16px]'>Help</li>
                <li className='mb-[46px] text-[16px] font-medium text-[#000000]'>Payment Options</li>
                <li className='mb-[45px] text-[16px] font-medium text-[#000000]'>Returns</li>
                <li className='text-[16px] font-medium text-[#000000]'>Privacy Policies</li>
                
              </ul>
              <div >
                <h2 className='text-[#9F9F9F] font-medium text-[16px] mb-[53px]'>Newsletter</h2>
                <form action="" className='flex items-center justify-center gap-[11px]'>
                <input type="text" placeholder='Enter Your Email Address' className='border-b-1 border-[#000000] w-[200px] outline-none' />
                <button type='button' className='border-b-1 border-[#000000] font-medium text-[14px] text-[#000000]'>SUBSCRIBE</button>
                </form>
              </div>
            </div>
            <div className='w-[1140px] h-[0px] border-1 border-[#D9D9D9] mb-[35px] mt-[48px]'></div>
            <h2 className='text-[16px] font-normal text-[#000000]'>2023 furino. All rights reverved</h2>
        </div>
    </footer>
  )
}

export default Footer