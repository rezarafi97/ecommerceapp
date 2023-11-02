import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectAll } from "../../../features/reducers/cartSlice";
import { CiShoppingCart } from "react-icons/ci";

const ShoppingIcon = ({ iconsClass, navigate }) => {
  const cart = useSelector(selectAll);

  return (
    <>
      <CiShoppingCart
        className={iconsClass}
        onClick={() => navigate("/cart")}
      />
      {cart.length === 0 ? null : (
        <div className="absolute left-14 lg:left-[4.5rem] w-4 h-4 bg-red-600 text-center rounded-full">
          <p className="font-poppins text-xs font-normal text-white">
            {cart.length}
          </p>
        </div>
      )}
    </>
  );
};

ShoppingIcon.propTypes = {
  iconsClass: PropTypes.string,
  navigate: PropTypes.func,
};

export default ShoppingIcon;
