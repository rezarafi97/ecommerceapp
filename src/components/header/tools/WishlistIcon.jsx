import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { CiHeart } from "react-icons/ci";
import { selectWishlist } from "../../../features/reducers/wishlistSlice";

const WishlistIcon = ({ iconsClass, navigate }) => {
  const wishlist = useSelector(selectWishlist);

  return (
    <>
      <CiHeart className={iconsClass} onClick={() => navigate("/wishlist")} />
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
