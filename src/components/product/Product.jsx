import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useGetProductQuery } from "../../features/api/apiSlice";

const Product = ({ productId }) => {
  const titleClass =
    "font-inter text-xs md:text-lg lg:text-xl xl:text-2xl font-semibold truncate";
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
      <div>
        <img className="w-1/2 absolute top-8 right-4" src={product.image} />
        <div className="absolute bottom-4 lg:bottom-8 lg:left-8">
          <div className="w-16 md:w-40 lg:w-52 xl:w-60">
            <h3 className={titleClass}>{product.title}</h3>
          </div>
          <div className="hidden xl:inline-block w-60 h-11">
            <p className="my-4 font-poppins text-sm font-normal truncate">
              {product.description}
            </p>
          </div>
          <Link to={`/productdetail/${productId}`}>
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
