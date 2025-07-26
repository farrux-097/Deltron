import React from "react";
import Products from "../../components/products/Products";
import { useStore } from "../../zustand/useStore";

const Wishlist = () => {
  const { wishlist } = useStore();
  return (
    <div className="container mb-[20px]">
      <Products data={{ products: wishlist }} showMoreButton={false} title="Your Wishlist" />
    </div>
  )
};

export default Wishlist;

