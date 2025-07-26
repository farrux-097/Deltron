import { create } from "zustand";

export const useCart = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  add: (payload) =>
    set((state) => {
      const exist = state.cart.some((item) => item.id === payload.id);
      if (exist) {
        return { cart: state.cart };
      } else {
        let store = [...state.cart, { ...payload, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(store));
        return { cart: store };
      }
    }),
  remove: (payload) =>
    set((state) => {
      let store = state.cart.filter((item) => item.id !== payload.id);
      localStorage.setItem("cart", JSON.stringify(store));
      return { cart: store };
    }),
  increment: (payload) =>
    set((state) => {
      let store = state.cart.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(store));
      return { cart: store };
    }),
  decrement: (payload) =>
    set((state) => {
      let store = state.cart.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(store));
      return { cart: store };
    }),
}));
