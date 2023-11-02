import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartTotal = ({ cartTotalAmount }) => {
  const subClass =
    "flex justify-between border-b border-black border-opacity-40 pb-4 mb-4";
  const linkClass =
    "font-poppins text-xs 2xl:text-base font-medium text-white py-4 px-12 bg-red-600";

  return (
    <div className="border-2 rounded border-black w-72 2xl:w-[30rem] py-8 px-6">
      <h3 className="font-poppins text-xl font-medium mb-6">Cart Total</h3>

      <div className={subClass}>
        <p>Subtotal:</p>

        <p>{cartTotalAmount}</p>
      </div>

      <div className={subClass}>
        <p>Shipping:</p>

        <p>Free</p>
      </div>

      <div className="flex justify-between mb-4">
        <p>Total:</p>

        <p>{cartTotalAmount}</p>
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
