/* eslint-disable no-unused-vars */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistAdapter = createEntityAdapter();
const initialState = wishlistAdapter.getInitialState();

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    populateWishlist(state, action) {
      if (localStorage.getItem("wishlistItems")) {
        wishlistAdapter.setAll(
          state,
          JSON.parse(localStorage.getItem("wishlistItems"))
        );
      }
    },
    addToWishlist(state, action) {
      const productExist = state.entities[action.payload.id];

      if (!productExist) {
        wishlistAdapter.addOne(state, action.payload);
        toast.success("The Product has been added to your wishlist");
      } else {
        wishlistAdapter.removeOne(state, action.payload.id);
        toast.warn("The Product has been removed to your wishlist");

        localStorage.setItem("wishlistItems", JSON.stringify(state.entities));
      }

      localStorage.setItem("wishlistItems", JSON.stringify(state.entities));
    },
    removeFromWishlist(state, action) {
      wishlistAdapter.removeOne(state, action.payload.id);
      toast.warn("The Product has been removed to your wishlist");

      localStorage.setItem("wishlistItems", JSON.stringify(state.entities));
    },
  },
});

export const { selectAll: selectWishlist, selectById: selectWishlistById } =
  wishlistAdapter.getSelectors((state) => state.wishlist);

export const { populateWishlist, addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
