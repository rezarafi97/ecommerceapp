import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectAll } from "../../../features/reducers/cartSlice";
import { CiShoppingCart } from "react-icons/ci";

import { selectLogin } from "../../../features/reducers/userSlice";

const ShoppingIcon = ({ iconsClass, navigate }) => {
  const log = useSelector(selectLogin);
  const cart = useSelector(selectAll);

  const navigateHandler = () => {
    if (log) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <CiShoppingCart className={iconsClass} onClick={navigateHandler} />
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
