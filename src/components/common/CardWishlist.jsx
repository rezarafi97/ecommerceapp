import PropTypes from "prop-types";
import { BsTrash3 } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { addToCart } from "../../features/reducers/cartSlice";

import { removeFromWishlist } from "../../features/reducers/wishlistSlice";

const CardWishlist = ({ p, discount }) => {
  const badgeClass = "font-poppins text-white text-xs font-normal";
  const buttonClass =
    "group-hover:opacity-100 opacity-0 w-full h-10 absolute bottom-0 inset-x-0 bg-black text-white font-poppins text-base font-medium rounded-b transition duration-500 ease-in-out";

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
  };

  let content;

  if (discount === 1) {
    content = (
      <div>
        <div className="bg-red-500 px-3 py-1 inline-block rounded">
          <p className={badgeClass}>-20%</p>
        </div>
      </div>
    );
  } else if (discount === 2) {
    content = (
      <div>
        <div className="bg-success-700 px-3 py-1 inline-block rounded">
          <p className={badgeClass}>NEW</p>
        </div>
      </div>
    );
  } else if (discount === 3) {
    content = null;
  }
  return (
    <div className="h-96 w-64 inline-block md:mr-6 overflow-hidden rounded snap-center mx-auto">
      <div className="w-full h-2/3 relative mb-4 group">
        {content}
        <div className="absolute top-3 right-3">
          <BsTrash3
            className="w-6 h-6 cursor-pointer"
            onClick={() => handleRemoveFromWishlist({ ...p })}
          />
        </div>
        <img src={p.image} className="w-1/2 h-1/2 absolute left-14 top-14" />
        <button
          type="submit"
          className={buttonClass}
          onClick={() => handleAddToCart({ ...p, cartQty: 1 })}
        >
          Add To Cart
        </button>
      </div>
      <div className="px-4">
        <h3 className="truncate font-poppins text-base font-medium">
          {p.title}
        </h3>
        <div className="flex gap-3 my-2 font-poppins text-base font-medium">
          <p className="text-red-600">${Math.floor(p.price * 80) / 100}</p>
          <p className="line-through opacity-50">${p.price}</p>
        </div>
      </div>
    </div>
  );
};

CardWishlist.propTypes = {
  p: PropTypes.object,
  discount: PropTypes.number,
};

export default CardWishlist;
