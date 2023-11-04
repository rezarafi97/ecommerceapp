import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  const buttonClass =
  "py-2 md:py-3 lg:py-4 px-6 md:px-[2.25rem] lg:px-12 font-poppins text-xs md:text-sm lg:text-base font-medium bg-red-600 text-white";
    
  return (
    <>
      <Link to="/allproducts" className={buttonClass}>
        {text}
      </Link>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
