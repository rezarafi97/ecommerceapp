import { Navlink } from "../common";

const NavbarMenu = () => {
  const activeLink =
    "after:block after:w-auto after:h-px after:opacity-6 after:bg-black";
  const normalLink = "";
  const navClass =
    "font-poppins xl:text-base lg:text-xs font-normal leading-normal";

  return (
    <div className="hidden lg:flex xl:gap-12 lg:gap-6 place-items-center">
      <Navlink
        page="Home"
        path="/"
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
    </div>
  );
};

export default NavbarMenu;
