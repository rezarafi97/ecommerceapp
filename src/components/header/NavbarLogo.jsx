import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div>
      <Link
        to="/"
        className="font-inter font-bold lg:text-2xl text-xl tracking-wider"
      >
        Exclusive
      </Link>
    </div>
  );
};

export default NavbarLogo;
