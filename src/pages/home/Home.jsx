import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import HomeType from "../../components/home-type/HomeType";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../../components/products/Skeleton.jsx";

const Home = () => {
  const { data, error, loading } = useFetch("/products", {
    limit: 8,
    skip: 0,
  });
  return (
    <div>
      <Hero />
      <HomeType />
      {error && <p>something went wrong</p>}
      {loading ? <Skeleton countData={8} /> : <Products data={data} />}
    </div>
  );
};

export default Home;
