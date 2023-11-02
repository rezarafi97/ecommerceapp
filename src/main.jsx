import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./store";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { Loading } from "./components/common";
import App from "./App.jsx";

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
} from "./pages";

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
