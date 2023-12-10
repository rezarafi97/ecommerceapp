import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import { Drawer } from "@material-tailwind/react";
import { CiCircleRemove } from "react-icons/ci";

import { Navlink } from "../common";
import { useGetAllCategoriesQuery } from "../../features/api/apiSlice";

import { SearchInput } from "./tools";

const NavbarDrawer = ({ open, closeDrawer }) => {
  let location = useLocation();

  const activeLink = "border-l-4 px-4";
  const normalLink = "";
  const navClass =
    "font-poppins xl:text-base lg:text-sm font-normal leading-normal mx-auto";
  const divClass = "flex flex-col justify-center items-center flex-grow gap-6";

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
            <button type="button" onClick={closeDrawer}>
              <Navlink
                page="Home"
                path=""
                activeLink={activeLink}
                normalLink={normalLink}
                navClass={navClass}
              />
            </button>
            <button type="button" onClick={closeDrawer}>
              <Navlink
                page="Contact"
                path="/contact"
                activeLink={activeLink}
                normalLink={normalLink}
                navClass={navClass}
              />
            </button>
            <button type="button" onClick={closeDrawer}>
              <Navlink
                page="About"
                path="/about"
                activeLink={activeLink}
                normalLink={normalLink}
                navClass={navClass}
              />
            </button>
            <button type="button" onClick={closeDrawer}>
              <Navlink
                page="Sign Up"
                path="/signup"
                activeLink={activeLink}
                normalLink={normalLink}
                navClass={navClass}
              />
            </button>
            
            <SearchInput />

            <div className={divClass}>{content}</div>
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
