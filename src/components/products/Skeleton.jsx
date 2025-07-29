import React from "react";

const Skeleton = ({countData}) => {
  return (
    <div className="max-w-[1236px] w-full px-4 m-auto mt-[57px] flex flex-col items-center">
      <h1 className="text-[32px] sm:text-[40px] text-[#3A3A3A]">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[32px] w-full">
        {Array(countData)
          .fill()
          .map((_, inx) => (
            <div
              key={inx}
              className="bg-[#F4F5F7] h-[446px] w-full max-w-[285px] mx-auto"
            >
              <div className="h-[301px] bg-gray-400"></div>
              <div className="p-[16px] mb-[14px] flex flex-col gap-1">
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
