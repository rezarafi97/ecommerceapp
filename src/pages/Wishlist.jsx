import { useEffect } from "react";

import { useSelector } from "react-redux";
import { selectWishlist } from "../features/reducers/wishlistSlice";

import { CardWishlist } from "../components/common";
import { useDispatch } from "react-redux";

import { addToCart } from "../features/reducers/cartSlice";
import { removeFromWishlist } from "../features/reducers/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector(selectWishlist);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-20 mb-14">
      <div className="flex justify-between items-center">
        <h2 className="font-poppins text-sm md:text-lg lg:text-xl font-normal">
          Wishlist ({wishlist.length})
        </h2>
        <button
          className="font-poppins text-base font-medium py-1 px-4 lg:py-4 lg:px-12 rounded border border-opacity-50 border-black"
          onClick={() => {
            wishlist.map(handleAddToCart);
            wishlist.map(handleRemoveFromWishlist);
          }}
        >
          Move All To Cart
        </button>
      </div>

      {wishlist.map((p) => (
        <CardWishlist p={p} discount={3} key={p.id} />
      ))}
    </div>
  );
};

export default Wishlist;
