import React from "react";

const Skeleton = () => {
  return (
    <div className=" w-[1236px] m-auto mt-[57px] flex flex-col items-center">
      <h1 className="text-[40px]  text-[#3A3A3A] ">Our Products</h1>
      <div className="grid grid-cols-4 gap-[32px] mt-[32px]">
        {Array(12)
          .fill()
          .map((_, inx) => (
            <div key={inx} className="w-[285px] h-[446px] bg-[#F4F5F7]  ">
              <div className="h-[301px] bg-gray-400"></div>
              <div className="p-[16px]  mb-[14px] flex flex-col gap-1">
                <div className="h-[33px] bg-gray-400"></div>
                <div className="h-[24px] w-[150px] bg-gray-400"></div>
                <div className="h-[30px] w-[90px] bg-gray-400"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skeleton;
