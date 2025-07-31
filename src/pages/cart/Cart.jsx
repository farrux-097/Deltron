import React from "react";
import { useCart } from "../../zustand/useCart";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, increment, decrement, remove } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  return (
    <div className="p-4 mt-20">
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <div className="w-full lg:w-[817px]">
          <ul className="hidden lg:flex h-[55px] items-center pl-10 bg-[#F9F1E7] w-full text-sm font-medium text-gray-700">
            <li className="w-1/3">Product</li>
            <li className="w-1/6">Price</li>
            <li className="w-1/6">Quantity</li>
            <li className="w-1/4">Subtotal</li>
          </ul>

          {cart?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col lg:flex-row items-center gap-4 mt-10 border-b pb-6"
            >
              <img
                src={product.thumbnail}
                className="w-[108px] h-[108px] bg-[#F9F1E7] rounded-xl object-cover"
                alt={product.title}
              />

              <div className="flex flex-col lg:flex-row items-center w-full gap-4 lg:pl-4">
                <p className="w-full lg:w-[177px] text-[#9F9F9F] text-center lg:text-left">
                  {product.title}
                </p>
                <p className="w-full lg:w-[117px] text-[#9F9F9F] text-center lg:text-left">
                  {product.price} USD
                </p>

                <div className="w-[100px] border px-2 h-[42px] rounded-xl flex justify-between items-center">
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() => decrement(product)}
                    className="text-2xl disabled:text-gray-300"
                  >
                    -
                  </button>
                  <span className="p-1">{product.quantity}</span>
                  <button
                    onClick={() => increment(product)}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>

                <p className="w-full lg:w-[170px] text-center lg:text-left">
                  {(product.quantity * product.price).toFixed(2)} USD
                </p>

                <button onClick={() => remove(product)} className="text-2xl text-red-600">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" bg-[#F9F1E7] w-full lg:w-[393px] md:sticky md:top-[180px] h-[390px] py-10 px-6 text-center font-semibold rounded-xl">
          <h2 className="text-2xl md:text-3xl mb-6">Cart Totals</h2>
          <p className="line-through text-red-700 text-lg">
            Total: {totalPrice.toFixed(2)} USD
          </p>
          <h1 className="text-xl mt-4">Total Sale: {(totalPrice / 2).toFixed(2)} USD</h1>
          <button className="mt-8 px-8 py-3 text-lg border rounded-xl hover:bg-amber-500 hover:border-white hover:text-white transition">
            <NavLink to={'/checkout'}>
                  Check Out
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;