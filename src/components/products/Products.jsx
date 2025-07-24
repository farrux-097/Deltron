import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1236px] w-full px-4 m-auto mt-[57px] flex flex-col items-center">
      <h1 className="text-[32px] sm:text-[40px] text-[#3A3A3A]">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] mt-[32px] w-full">
        {data?.products.map((product) => (
          <div
            key={product.id}
            className="relative bg-[#F4F5F7] hover:bg-[#3A3A3A] hover:opacity-[28%] transition duration-300"
          >
            <img
              alt={product.title}
              className="h-[301px] object-contain w-full cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
              src={product.thumbnail}
            />
            <div className="w-[48px] h-[48px] rounded-full bg-[#E97171] absolute top-[24px] right-[24px] flex items-center justify-center">
              <p className="text-[16px] text-white">-50%</p>
            </div>
            <div className="p-[16px]">
              <h3 className="text-[20px] font-semibold">{product.title}</h3>
              <p className="text-[14px] text-[#898989] font-semibold">
                Brand : {product.brand}
              </p>
              <div className="flex justify-between items-center mt-2">
                <strong className="text-[18px] font-semibold">
                  {product.price} USD
                </strong>
                <strong className="text-[14px] text-[#B0B0B0] line-through font-semibold">
                  {product.price * 2} USD
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-[200px] sm:w-[245px] border p-[12px] text-[12px] mt-[32px] mb-[68px] font-semibold text-[#B88E2F]">
        Show More
      </button>
    </div>
  );
};

export default Products;
