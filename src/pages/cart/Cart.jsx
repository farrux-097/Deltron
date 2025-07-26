import React from "react";
import { useCart } from "../../zustand/useCart";
import Products from "../../components/products/Products";

const Cart = () => {
  const { cart, increment, decrement, remove } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-2x1">{totalPrice.toFixed(2)}</h1>
      {cart?.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} width={60} alt="" />
          <p>{product.title}</p>
          <p>{product.price} USD</p>
          <strong>{(product.quantity * product.price).toFixed(2)} USD</strong>
          <div>
            <button
              disabled={product.quantity <= 1}
              onClick={() => decrement(product)}
              className="p-2 bg-gray-300 disabled: opacity-40"
            >
              -
            </button>
            <span className="p-2">{product.quantity}</span>
            <button
              onClick={() => increment(product)}
              className="p-2bg-gray-300"
            >
              +
            </button>
            <button onClick={() => remove(product)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart
