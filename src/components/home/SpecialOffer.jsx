import { useDispatch } from "react-redux";
import { addToCart } from "../../features/reducers/cartSlice";

import { useGetProductQuery } from "../../features/api/apiSlice";
import { Timer } from "../common";

const SpecialOffer = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const buttonClass =
    "my-6 md:my-10 lg:my-16 py-2 lg:py-4 px-8 lg:px-12 bg-red-700 text-white font-poppins text-xs lg:text-base font-medium rounded";

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(1);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = (
      <div className="flex gap-2 justify-around mb-16 px-14">
        <div>
          <h3 className="font-poppins text-xs md:text-base font-semibold text-red-600">
            Categories
          </h3>
          <p className="font-inter text-base md:text-xl lg:text-5xl font-semibold my-2 md:my-8">
            {product.title}
          </p>
          <Timer />

          <button
            className={buttonClass}
            onClick={() => handleAddToCart({ ...product, cartQty: 1 })}
          >
            Buy Now!
          </button>
        </div>
        <div className="w-1/2">
          <img src={product.image} />
        </div>
      </div>
    );
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

export default SpecialOffer;
