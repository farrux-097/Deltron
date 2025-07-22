import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className=" w-[1236px]  m-auto mt-[57px] flex flex-col items-center">
      <h1 className="text-[40px]  text-[#3A3A3A] ">Our Products</h1>
      <div className="grid grid-cols-4 gap-[32px] mt-[32px]">
        {data?.products.map((product) => (
          <div
            key={product.id}
            className="w-[285px] relative  h-[446px] hover:bg-[#3A3A3A] hover:opacity-[28%] bg-[#F4F5F7] "
          >
            <img
              className="h-[301px] object-contain w-full"
              onClick={() => navigate(`/product/${product.id}`)}
              src={product.thumbnail}
            />
            <div className="w-[48px] h-[48px] rounded-[48px] bg-[#E97171] absolute top-[24px] right-[24px]">
              <p className="text-16px text-white mt-[50%] text-center -translate-y-[50%]">
                -50%
              </p>
            </div>
            <div className="p-[16px]  mb-[14px]">
              <h3 className="text-[22px] font-semibold">{product.title}</h3>
              <p className="text-[16px] text-[#898989] font-semibold">
                Brand : {product.brand}
              </p>
              <div className="flex justify-between items-center">
                <strong className="text-[20px]  font-semibold">
                  {product.price} USD
                </strong>
                <strong className="text-[16px] text-[#B0B0B0] line-through font-semibold">
                  {product.price * 2} USD
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[245px] border p-[12px] text-[12px] mt-[32px] mb-[68px] font-semibold text-[#B88E2F]">
        Show More
      </button>
    </div>
  );
};

export default Products;
