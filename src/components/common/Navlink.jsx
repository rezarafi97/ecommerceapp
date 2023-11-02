import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navlink = ({ page, path, activeLink, normalLink, navClass }) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className={navClass}>{page}</span>
      </NavLink>
    </>
  );
};

Navlink.propTypes = {
  page: PropTypes.string,
  path: PropTypes.string,
  activeLink: PropTypes.string,
  normalLink: PropTypes.string,
  navClass: PropTypes.string,
};

export default Navlink;
