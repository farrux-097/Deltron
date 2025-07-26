import { create } from "zustand";

export const useStore = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],

  toggleWishlist: (payload) =>
    set((state) => {
      const exist = state.wishlist.some((item) => item.id === payload.id);
      let store = [];
      if (exist) {
        store = state.wishlist.filter((item) => item.id !== payload.id);
      } else {
        store = [...state.wishlist, payload];
      }
      localStorage.setItem("wishlist", JSON.stringify(store));
      return { wishlist: store };
    }),
}));
