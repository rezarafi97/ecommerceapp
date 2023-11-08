import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartTotal = ({ cartTotalAmount }) => {

  const subClass =
    "flex justify-between border-b border-black border-opacity-40 pb-4 mb-4";
  const linkClass =
    "py-2 md:py-3 lg:py-4 px-6 md:px-[2.25rem] lg:px-12 font-poppins text-xs md:text-sm lg:text-base font-medium bg-red-600 text-white";
    const textClass = "font-poppins font-normal text-xs md:text-sm lg:text-base"

  return (
    <div className="border-2 rounded border-black w-72 2xl:w-[30rem] py-8 px-6">
      <h3 className="font-poppins text-xl font-medium mb-6">Cart Total</h3>

      <div className={subClass}>
        <p className={textClass}>Subtotal:</p>

        <p className={textClass}>{cartTotalAmount}</p>
      </div>

      <div className={subClass}>
        <p className={textClass}>Shipping:</p>

        <p className={textClass}>Free</p>
      </div>

      <div className="flex justify-between mb-4">
        <p className={textClass}>Total:</p>

        <p className={textClass}>{cartTotalAmount}</p>
      </div>

      <div className="flex justify-center">
        <Link to="/checkout" className={linkClass}>
          Procees to checkout
        </Link>
      </div>
    </div>
  );
};

CartTotal.propTypes = {
  cartTotalAmount: PropTypes.number,
};

export default CartTotal;
