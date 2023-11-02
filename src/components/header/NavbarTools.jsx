import { useLocation, useNavigate } from "react-router-dom";
import { SearchInput, WishlistIcon, ShoppingIcon, Dropdown } from "./tools";

const NavbarTools = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const iconsClass = "w-full h-full cursor-pointer";

  return (
    <>
      <div className="flex gap-6">
        <SearchInput />

        {location.pathname === "/signup" ||
        location.pathname === "/login" ? null : (
          <div className="relative">
            <div className="flex-auto flex gap-4 h-6 lg:h-8 self-center relative">
              <WishlistIcon iconsClass={iconsClass} navigate={navigate} />

              <ShoppingIcon iconsClass={iconsClass} navigate={navigate} />

              <Dropdown iconsClass={iconsClass} navigate={navigate} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarTools;
