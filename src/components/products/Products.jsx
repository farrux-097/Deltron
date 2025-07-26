import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../zustand/useStore";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "../../zustand/useCart";

const Products = ({ data, showMoreButton = true, title = "Our Products" }) => {
  const navigate = useNavigate();
  const { toggleWishlist, wishlist } = useStore();
  const { add } = useCart();

  return (
    <div className="max-w-[1236px] w-full px-4 mx-auto mt-[57px] flex flex-col items-center">
      <h1 className="text-[32px] sm:text-[40px] text-[#3A3A3A] font-semibold">
        {title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] mt-[32px] w-full">
        {data?.products.map((product) => (
          <div
            key={product.id}
            className="relative bg-[#F4F5F7] group transition-all duration-300 ease-in-out"
          >
            {/* ✅ TUZATILGAN QISM */}
            <img
              alt={product.title}
              className="h-[301px] object-contain cursor-pointer p-5 hover:p-0 max-w-[285px] hover:max-w-[325px] transition-all duration-300 mx-auto"
              onClick={() => navigate(`/detailproduct/${product.id}`)}
              src={product.thumbnail}
            />

            <div className="w-[48px] h-[48px] rounded-full bg-[#E97171] absolute top-[24px] right-[24px] md:group-hover:translate-x-[72px] md:group-hover:opacity-0 duration-300 flex items-center justify-center">
              <p className="text-[16px] text-white font-medium">-50%</p>
            </div>

            <div className="w-[48px] h-[70px] top-[84px] right-[12px] absolute md:top-[24px] md:right-[-24px]  md:group-hover:translate-x-[-30px] opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300">
              <button
                className="size-[30px]"
                onClick={() => toggleWishlist(product)}
              >
                {wishlist.some((item) => item.id === product.id) ? (
                  <FaHeart size="25px" />
                ) : (
                  <FaRegHeart size="25px" />
                )}
              </button>
              <button onClick={() => add(product)}>
                <LuShoppingCart size="25px" />
              </button>
            </div>

            <div className="p-[16px]">
              <h3 className="text-[20px] font-semibold text-[#3A3A3A]">
                {product.title}
              </h3>
              <p className="text-[14px] text-[#898989] font-medium">
                Brand: {product.brand}
              </p>
              <div className="flex justify-between items-center mt-2">
                <strong className="text-[18px] font-semibold text-[#3A3A3A]">
                  {product.price} USD
                </strong>
                <strong className="text-[14px] text-[#B0B0B0] line-through font-medium">
                  {product.price * 2} USD
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showMoreButton && (
        <button className="w-[200px] sm:w-[245px] border p-[12px] text-[12px] mt-[32px] mb-[68px] font-semibold text-[#B88E2F] hover:bg-[#f9f1e7] transition">
          Show More
        </button>
      )}
    </div>
  );
};

export default Products;
