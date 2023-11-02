/* eslint-disable no-unused-vars */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState({
  cartTotalQty: 0,
  cartTotalAmount: 0,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    populateCart(state, action) {
      if (localStorage.getItem("cartItems")) {
        cartAdapter.setAll(
          state,
          JSON.parse(localStorage.getItem("cartItems"))
        );
      }
    },
    addToCart(state, action) {
      const productExist = state.entities[action.payload.id];

      if (productExist) {
        state.entities[action.payload.id].cartQty += 1;
        toast.success("You added another product to your cart");
      } else {
        cartAdapter.addOne(state, action.payload);
        toast.success("The Product has been added to your cart");
      }

      localStorage.setItem("cartItems", JSON.stringify(state.entities));
    },
    getTotals(state, action) {
      let { total, qty } = Object.values(state.entities).reduce(
        (cartTotal, cartItem) => {
          const { price, cartQty } = cartItem;
          const itemTotal = price * cartQty;

          cartTotal.total += itemTotal;
          cartTotal.qty += cartQty;

          return cartTotal;
        },
        {
          total: 0,
          qty: 0,
        }
      );
      state.cartTotalQty = qty;
      state.cartTotalAmount = total;
    },
    decreaseCart(state, action) {
      const product = state.entities[action.payload.id];

      if (product.cartQty > 1) {
        product.cartQty -= 1;
        toast.warn("You subtracted one product from your cart");
      } else if (product.cartQty === 1) {
        cartAdapter.removeOne(state, action.payload.id);
        toast.warn("The Product has been removed to your cart");
      }

      localStorage.setItem("cartItems", JSON.stringify(state.entities));
    },
    removeFromCart(state, action) {
      cartAdapter.removeOne(state, action.payload.id);

      localStorage.setItem("cartItems", JSON.stringify(state.entities));
      toast.warn("The Product has been removed to your cart");
    },
  },
});

export const { selectAll, selectById } = cartAdapter.getSelectors(
  (state) => state.cart
);

export const {
  populateCart,
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
