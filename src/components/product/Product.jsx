import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useGetProductQuery } from "../../features/api/apiSlice";

const Product = ({ productId }) => {
  const titleClass =
    "font-inter text-base md:text-lg lg:text-xl font-semibold truncate";
  const shopClass =
    "underline font-poppins text-xs underline-offset-8 font-medium";

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(productId);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = (
      <div className="w-full">
        <img
          className="w-1/5 lg:w-1/2 absolute top-8 right-4"
          src={product.image}
        />
        <div className="absolute bottom-12 lg:bottom-14 xl:bottom-16 left-2 md:left-4 lg:left-6">
          <div className="w-60 lg:w-40 xl:w-48">
            <h3 className={titleClass}>{product.title}</h3>
          </div>
          <div className="hidden xl:inline-block w-60 lg:w-40 xl:w-48 h-11">
            <p className="my-4 font-poppins text-sm font-normal truncate">
              {product.description}
            </p>
          </div>
          <Link
            to={`/productdetail/${productId}`}
            className="absolute -bottom-6 left-0"
          >
            <span className={shopClass}>Shop Now</span>
          </Link>
        </div>
      </div>
    );
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

Product.propTypes = {
  productId: PropTypes.string,
};

export default Product;
