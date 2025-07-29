import React, { useState } from "react";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../../components/products/Skeleton";
import { NavLink } from "react-router-dom";
import Categories from "../../components/categories/Categories";

const Shop = () => {
  const [skip, setSkip] = useState(0);
  const [skipCount, setSkipCount] = useState(0);
  const [active, setActive] = useState(0);
  const { data, error, loading } = useFetch("/products", {
    limit: 16,
    skip: skip,
  });
  const categories = useFetch(`/products/categories` );
  console.log(categories.data);
  const handleClick = (count) => {
    setActive(count);
    
    if (count - 1 == skipCount && skipCount >= 1) {
      setSkipCount(skipCount - 1);
    } else if (skipCount - 2 === count) {
      setSkipCount(skipCount);
    } else if (count - 3 === skipCount) {
      setSkipCount(skipCount + 1);
    }

    setSkip(16 * (count - 1));
  };

  return (
    <div>
      <div>
        <Categories/>
      </div>
      <div className="overflow-scroll flex gap-9 items-center w-full p-5 px-10 justify-between">
        {
          categories?.data?.map((category,inx)=>(
            <NavLink key={inx} to={`/shop/category/${category.slug}`} className="text-nowrap font-medium active:text-yellow-500 active:underline">{category.name}</NavLink>
          ))
        }
      </div>
      {error && <p>something went wrong</p>}
      {loading ? (
        <Skeleton countData={16} />
      ) : (
        <Products data={data} title={""} showMoreButton={false} />
      )}
      <div className="mt-[70px] mb-[85px] group flex justify-center gap-[38px]">
        <button
          value={skipCount + 1}
          className={`w-[60px] active:bg-[#B88E2F] active:text-white ${
            active === 1 || active === skipCount
              ? "bg-[#B88E2F] text-white"
              : "bg-[#F9F1E7]"
          } rounded-[10px] py-[18px] text-center`}
          onClick={(e) => {
            handleClick(Number(e.target.value));
          }}
        >
          {skipCount + 1}
        </button>
        <button
          value={skipCount + 2}
          onClick={(e) => handleClick(Number(e.target.value))}
          className={`w-[60px] ${
            active == skipCount + 2 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
          } rounded-[10px] py-[18px] text-center`}
        >
          {skipCount + 2}
        </button>
        <button
          value={skipCount + 3}
          onClick={(e) => handleClick(Number(e.target.value))}
          className={`w-[60px] active:bg-[#B88E2F] active:text-white ${
            active === 13 ? "hidden" : "bg-[#F9F1E7]"
          } rounded-[10px] py-[18px] text-center`}
        >
          {skipCount + 3}
        </button>
        <button
          value={skipCount + 3}
          onClick={(e) => handleClick(Number(e.target.value))}
          className={`w-[98px] active:bg-[#B88E2F] active:text-white ${
            active === 13 ? "hidden" : ""
          }  rounded-[10px] py-[18px] text-center bg-[#F9F1E7]`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Shop;
