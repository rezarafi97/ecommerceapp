import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  selectWishlistById,
  addToWishlist,
} from "../features/reducers/wishlistSlice";

import { useGetProductQuery } from "../features/api/apiSlice";
import {
  decreaseCart,
  addToCart,
  selectById,
} from "../features/reducers/cartSlice";

import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { Loading } from "../components/common";

const ProductDetail = () => {
  const textClass = "font-poppins font-normal text-xs md:text-base";

  const { productID } = useParams();
  const dispatch = useDispatch();

  const {
    data: product,
    isFetching,
    isSuccess,
  } = useGetProductQuery(productID);

  const wishlist = useSelector((state) => selectWishlistById(state, productID));
  const cart = useSelector((state) => selectById(state, productID));

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  let content;

  if (isFetching) {
    content = <Loading />;
  } else if (isSuccess) {
    content = (
      <div className="flex justify-around flex-col lg:flex-row items-center lg:items-start mt-20 mb-32">
        <img src={product.image} className="w-96 mb-12" />
        <div className="w-80">
          <p className="font-inter text-2xl font-semibold tracking-wider mb-6">
            {product.title}
          </p>
          <p className="font-inter text-xl font-normal tracking-wider mb-4">
            ${product.price}
          </p>
          <p className="font-poppins text-sm font-normal text-justify">
            {product.description}
          </p>
          <div className="h-px w-full bg-black opacity-50 my-8"></div>
          <div className="flex justify-between items-center">
            {cart ? (
              <div className="flex gap-6 items-center place-self-center border p-2 rounded border-black">
                <button
                  data-action="increment"
                  onClick={() => handleAddToCart(cart)}
                >
                  <span className={textClass}>+</span>
                </button>
                <p className={textClass}>{cart.cartQty}</p>
                <button
                  data-action="decrement"
                  onClick={() => handleDecreaseCart(cart)}
                >
                  <span className={textClass}>−</span>
                </button>
              </div>
            ) : (
              <p className={textClass}>0</p>
            )}

            <div className="flex justify-between gap-4">
              <button
                type="button"
                className="py-3 px-8 rounded bg-red-600 text-white font-poppins text-sm font-medium"
                onClick={() => handleAddToCart({ ...product, cartQty: 1 })}
              >
                Buy Now
              </button>

              <div
                onClick={() => handleAddToWishlist({ ...product, cartQty: 1 })}
                className="border p-2 rounded border-black"
              >
                {!wishlist ? (
                  <BsSuitHeart className="w-6 h-6 cursor-pointer" />
                ) : (
                  <BsSuitHeartFill className="w-6 h-6 cursor-pointer text-red-700" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ProductDetail;
