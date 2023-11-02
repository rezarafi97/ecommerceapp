import { NavbarLogo, NavbarMenu, NavbarTools } from ".";

const NavbarContent = () => {
  return (
    <div className="flex justify-between mt-10 mb-4">
      <NavbarLogo className="flex-auto" />

      <NavbarMenu className="flex-auto" />

      <NavbarTools className="flex-auto" />
    </div>
  );
};

export default NavbarContent;
