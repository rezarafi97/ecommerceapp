import { useState } from "react";
import PropTypes from "prop-types";

import {
  CiUser,
  CiShoppingBasket,
  CiLogout,
  CiMenuBurger,
} from "react-icons/ci";
import { Link } from "react-router-dom";

import { logout, selectLogin } from "../../../features/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { NavbarDrawer } from "../";

const Dropdown = ({ iconsClass, navigate }) => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const log = useSelector(selectLogin);

  const dispatch = useDispatch();

  const dropdownToggle = () => {
    setDropdown((prev) => !prev);
  };

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const dropdownClass =
    "absolute right-1 top-10 bg-black opacity-40 rounded w-56 flex flex-col py-4 pl-6 justify-center items-start gap-3 z-10";
  const dropdownMenuClass = "flex flex-auto gap-4 cursor-pointer";

  return (
    <>
      {log ? (
        <CiUser className={iconsClass} onClick={dropdownToggle} />
      ) : (
        <Link to="/login" className={iconsClass}>
          <CiUser className={iconsClass} />
        </Link>
      )}

      {dropdown ? (
        <div className={dropdownClass}>
          <div
            className={dropdownMenuClass}
            onClick={() => {
              navigate("/account");
              setDropdown(false);
            }}
          >
            <CiUser className="text-white w-8 h-8" />
            <p className="text-white font-poppins text-sm font-normal mt-2">
              My Account
            </p>
          </div>
          <div
            className={dropdownMenuClass}
            onClick={() => {
              navigate("/cart");
              setDropdown(false);
            }}
          >
            <CiShoppingBasket className="text-white w-8 h-8" />
            <p className="text-white">My Order</p>
          </div>
          <div
            className={dropdownMenuClass}
            onClick={() => {
              dispatch(logout());
              {
                dropdownMenuClass;
              }
              setDropdown(false);
            }}
          >
            <CiLogout className="text-white w-8 h-8" />
            <p className="text-white">Log Out</p>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="lg:hidden w-full h-full"
        onClick={openDrawer}
      >
        <CiMenuBurger className="w-full h-full" />
      </button>
      <NavbarDrawer open={open} closeDrawer={closeDrawer} />
    </>
  );
};

Dropdown.propTypes = {
  iconsClass: PropTypes.string,
  navigate: PropTypes.func,
};

export default Dropdown;
