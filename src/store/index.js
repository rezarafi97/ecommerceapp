import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

import userReducer, { auth } from "../features/reducers/userSlice";
import cartReducer, {
  getTotals,
  populateCart,
} from "../features/reducers/cartSlice";

import wishlistReducer, {
  populateWishlist,
} from "../features/reducers/wishlistSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

store.dispatch(populateCart());
store.dispatch(getTotals());

store.dispatch(populateWishlist());

store.dispatch(auth());
