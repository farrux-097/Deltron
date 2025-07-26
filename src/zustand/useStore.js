import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  text: "hello",
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  cart: [],
  cars: [],
  auth: null,

  increment: (payload) => set((state) => ({ count: state.count + payload })),
  changeText: () => set(() => ({ text: "salom" })),
  toggleWishlist: (payload) =>
    set((state) => {
      const exist = state.wishlist.some((item) => item.id === payload.id);
      let store = [];
      if (exist) {
        // remove
        store = state.wishlist.filter((item) => item.id !== payload.id);
      } else {
        // add
        store = [...state.wishlist, payload];
      }
      localStorage.setItem("wishlist", JSON.stringify(store))
      return {wishlist: store}
    }),
}));  