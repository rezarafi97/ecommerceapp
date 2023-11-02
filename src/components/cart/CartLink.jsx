import { Link } from "react-router-dom";

const CartLink = () => {
  const linkClass =
    "py-2 lg:py-4 px-6 lg:px-12 rounded border border-black border-opacity-50 font-poppins text-xs lg:text-base font-medium";

  return (
    <div className="flex justify-between mb-20">
      <Link to="/allproducts" className={linkClass}>
        Return To Shop
      </Link>
      <Link to="/cart" className={linkClass}>
        Update Cart
      </Link>
    </div>
  );
};

export default CartLink;
