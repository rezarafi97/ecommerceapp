import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { CiHeart } from "react-icons/ci";
import { selectWishlist } from "../../../features/reducers/wishlistSlice";

import { selectLogin } from "../../../features/reducers/userSlice";

const WishlistIcon = ({ iconsClass, navigate }) => {
  const log = useSelector(selectLogin);
  const wishlist = useSelector(selectWishlist);

  const navigateHandler = () => {
    if (log) {
      navigate("/wishlist");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <CiHeart className={iconsClass} onClick={navigateHandler} />
      {wishlist.length === 0 ? null : (
        <div className="absolute left-4 lg:left-6 w-4 h-4 bg-red-600 text-center rounded-full">
          <p className="font-poppins text-xs font-normal text-white">
            {wishlist.length}
          </p>
        </div>
      )}
    </>
  );
};

WishlistIcon.propTypes = {
  iconsClass: PropTypes.string,
  navigate: PropTypes.func,
};

export default WishlistIcon;
