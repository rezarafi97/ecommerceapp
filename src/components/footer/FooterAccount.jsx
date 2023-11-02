import { Link } from "react-router-dom";

const FooterAccount = () => {
  const linkClass = "text-white text-base font-poppins font-normal";

  return (
    <div>
      <ul>
        <li className="mb-4">
          <h3 className="text-white text-xl font-poppins font-medium mb-6">
            Account
          </h3>
        </li>
        <li className="mb-4">
          <Link to="/account" className={linkClass}>
            My Account
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/signup" className={linkClass}>
            Login/Register
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/cart" className={linkClass}>
            Cart
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/wishlist" className={linkClass}>
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/allproducts" className={linkClass}>
            Shop
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterAccount;
