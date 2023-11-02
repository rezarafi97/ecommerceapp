import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import { Drawer } from "@material-tailwind/react";
import { CiCircleRemove, CiSearch } from "react-icons/ci";

import { Navlink } from "../common";
import { useGetAllCategoriesQuery } from "../../features/api/apiSlice";

const NavbarDrawer = ({ open, closeDrawer }) => {
  let location = useLocation();

  const activeLink = "border-l-4 px-4";
  const normalLink = "";
  const navClass =
    "font-poppins xl:text-base lg:text-sm font-normal leading-normal mx-auto";
  const inputClass =
    "flex-auto bg-searchInput outline-none placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50";
  const divClass = "flex flex-col justify-center items-center flex-grow gap-6"

  const {
    data: cate = [],
    isSuccess,
    isError,
    error,
  } = useGetAllCategoriesQuery();

  let content;

  if (isSuccess) {
    content = cate.map((c, index) => (
      <div
        key={index}
        className={location.pathname === "/" ? "block" : "hidden"}
      >
        <Link to="" className="font-poppins text-xs md:text-base font-normal">
          {c}
        </Link>
      </div>
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <>
      <Drawer
        placement="left"
        open={open}
        onClose={closeDrawer}
        className="p-2"
      >
        <div className="mb-2">
          <div className="flex justify-end">
            <button type="button" className="w-8 h-8" onClick={closeDrawer}>
              <CiCircleRemove className="w-full h-full" />
            </button>
          </div>

          <div className={divClass}>
            <Navlink
              page="Home"
              path=""
              activeLink={activeLink}
              normalLink={normalLink}
              navClass={navClass}
            />
            <Navlink
              page="Contact"
              path="/contact"
              activeLink={activeLink}
              normalLink={normalLink}
              navClass={navClass}
            />
            <Navlink
              page="About"
              path="/about"
              activeLink={activeLink}
              normalLink={normalLink}
              navClass={navClass}
            />
            <Navlink
              page="Sign Up"
              path="/signup"
              activeLink={activeLink}
              normalLink={normalLink}
              navClass={navClass}
            />

            <div className="flex md:hidden bg-searchInput rounded py-2 pl-5 pr-3 flex-auto">
              <input
                type="search"
                className={inputClass}
                placeholder="What are you looking for?"
              />
              <button type="submit">
                <CiSearch className="flex-auto w-6 h-6" />
              </button>
            </div>

            <div className={divClass}>
              {content}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

NavbarDrawer.propTypes = {
  closeDrawer: PropTypes.func,
  open: PropTypes.bool,
};

export default NavbarDrawer;
