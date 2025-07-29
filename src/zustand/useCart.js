import { create } from "zustand";

const saveStorage = (store) => {
  localStorage.setItem("cart", JSON.stringify(store));
};

export const useCart = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  toggleCart: (payload) =>
    set((state) => {
      const exist = state.cart.some((item) => item.id === payload.id);
      let store = [];
      if (exist) {
        // remove
        store = state.cart.filter((item) => item.id !== payload.id);
      } else {
        // add
        store = [...state.cart, payload];
      }
      localStorage.setItem("cart", JSON.stringify(store));
      return { cart: store };
    }),

  remove: (payload) =>
    set((state) => {
      let store = state.cart.filter((item) => item.id !== payload.id);
      saveStorage(store);
      return { cart: store };
    }),
  increment: (payload) =>
    set((state) => {
      let store = state.cart.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveStorage(store);
      return { cart: store };
    }),
  decrement: (payload) =>
    set((state) => {
      let store = state.cart.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      saveStorage(store);
      return { cart: store };
    }),
}));
