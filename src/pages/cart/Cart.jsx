import React from "react";
import { useCart } from "../../zustand/useCart";
import Products from "../../components/products/Products";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, increment, decrement, remove } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="">
      <div className="mt-[72px] flex justify-center gap-[30px]">
        <div className="w-[817px]">
          <ul className="h-[55px] flex items-center pl-[142px] bg-[#F9F1E7] w-full">
            <li>Product</li>
            <li className="ml-[119px]">Price</li>
            <li className="ml-[107px]">Quantity</li>
            <li className="ml-[46px] w-full">Subtotal</li>
          </ul>
          {cart?.map((product) => (
            <div
              key={product.id}
              className="flex items-center mt-[55px] mb-[55px] "
            >
              <img
                src={product.thumbnail}
                className="size-[108px]  bg-[#F9F1E7] rounded-xl"
                alt=""
              />
              <div className="flex items-center w-full pl-[34px]">
                <p className="w-[177px] text-[#9F9F9F]">{product.title}</p>
                <p className="w-[117px] text-[#9F9F9F]">{product.price} USD</p>
                <div className="w-[100px] border px-[10px] h-[42px] items-center py-[5px] rounded-xl flex justify-between">
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() => decrement(product)}
                    className="text-[40px] pb-[5px] disabled:text-gray-300"
                  >
                    -
                  </button>
                  <span className="p-2">{product.quantity}</span>
                  <button
                    onClick={() => increment(product)}
                    className="text-[30px] pb-[5px]"
                  >
                    +
                  </button>
                </div>
                <p className="pl-[30px] w-[170px]">
                  {(product.quantity * product.price).toFixed(2)} USD
                </p>
                <button className="text-[25px]" onClick={() => remove(product)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#F9F1E7] w-[393px] h-[390px] pt-[60px] text-center font-semibold mb-[63px]">
          <h2 className="text-[32px]">Cart Totals</h2>
          <p className="mt-[60px] line-through">
            Total :{" "}
            <span className="text-red-700">{totalPrice.toFixed(2)}</span>
          </p>
          <h1 className="text-2xl">Total sale : {totalPrice.toFixed(2) / 2}</h1>
          <button className="mt-[42px] px-[59px] py-[15px] text-[20px] border rounded-xl hover:bg-amber-500 hover:border-white hover:text-white">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
