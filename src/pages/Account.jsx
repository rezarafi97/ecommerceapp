import { useEffect } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const textClass = "font-poppins text-base font-medium";
  const inputClass =
    "grow rounded bg-searchInput p-4 outline-0 placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50";

    const passwordClass =
    "grow rounded bg-searchInput p-4 outline-0 placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50 w-full";

  const buttonClass =
    "px-12 py-4 bg-red-600 font-poppins text-base font-medium text-white";

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <div className="mt-20 mb-32 flex justify-between">
      <ul>
        <li className="mb-8">
          <Link to="/account" className={textClass}>
            My Profile
          </Link>
        </li>
        <li className="mb-8">
          <Link to="/cart" className={textClass}>
            My Orders
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className={textClass}>
            My Wishlist
          </Link>
        </li>
      </ul>

      <div className="px-8 pt-10 pb-12 rounded shadow w-full xl:w-3/4">
        <h3 className="font-poppins text-xl font-medium text-red-700 mb-4">Edit Your Profile</h3>
        <form>
          <div className="flex flex-col 2xl:flex-row gap-4 mb-8">
            <input type="text" className={inputClass} placeholder="Firstname" />

            <input type="text" className={inputClass} placeholder="Lastname" />
          </div>

          <div className="flex flex-col 2xl:flex-row gap-4 mb-8">
            <input type="email" className={inputClass} placeholder="Email" />

            <input type="text" className={inputClass} placeholder="Address" />
          </div>

          <div className="mb-8">
            <input
              type="password"
              className={passwordClass}
              placeholder="Current Password"
            />
          </div>

          <div className="mb-8">
            <input
              type="password"
              className={passwordClass}
              placeholder="New Password"
            />
          </div>

          <div className="mb-8">
            <input
              type="password"
              className={passwordClass}
              placeholder="Confirm New Password"
            />
          </div>

          <div className="flex justify-end gap-8 items-center">
            <button type="reset" className="font-poppins text-base font-normal">Cancel</button>
            <button type="submit" className={buttonClass}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
