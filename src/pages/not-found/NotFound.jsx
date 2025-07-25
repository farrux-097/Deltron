import React from 'react'
import notFound from "../../assets/notfound.jpg"
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="containers  flex items-center flex-col">
        <img src={notFound } className='mt-[30px]'  width={700} height={500} alt="404" />
        <div className='flex items-center justify-center gap-[20px] mb-[20px]'>
        <button className='border-1 border-slate-300 py-[10px] w-[70px] rounded-[50px] shadow-md bg-[#ddd] text-[20px]' onClick={() => navigate("/")}>Home</button>
        <button className='border-1 border-slate-300 py-[10px] w-[70px] rounded-[50px] shadow-md bg-[#ddd] text-[20px]' onClick={() => navigate(-1)}>Back</button>
        </div>
    </div>
   
    </>
  )
}

export default Notfound
