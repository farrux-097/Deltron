import React from "react";
import Products from "../../components/products/Products";
import { useStore } from "../../zustand/useStore";
import Wish from '../../assets/wishlist.png'

const Wishlist = () => {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <img
          src={Wish}
          alt="Empty wishlist"
          className="w-[300px] h-auto mb-6"
        />
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#3A3A3A]">
          Your Wishlist is Empty
        </h2>
      </div>
    );
  }

  return (
    <div className="container mb-[20px]">
      <Products data={{ products: wishlist }} showMoreButton={false} title="Your Wishlist" />
    </div>
  )
};

export default Wishlist;

