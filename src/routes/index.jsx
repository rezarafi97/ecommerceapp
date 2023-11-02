import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import {
  Error,
  SignUp,
  Login,
  Wishlist,
  Cart,
  CheckOut,
  Account,
  About,
  Contact,
  ProductDetail,
  Home,
  AllProducts,
  Catagory,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <SignUp />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
        errorElement: <Error />,
      },
      {
        path: "/account",
        element: <Account />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/productdetail/:productID",
        element: <ProductDetail />,
        errorElement: <Error />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
        errorElement: <Error />,
      },
      {
        path: "/allproducts/:catagory",
        element: <Catagory />,
        errorElement: <Error />,
      },
    ],
  },
]);
