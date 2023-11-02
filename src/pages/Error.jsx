import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="font-inter text-xl lg:text-8xl font-medium">
        404 Not Found
      </h2>

      <p className="mt-4 mb-8 lg:mt-10 lg:mb-20 font-poppins text-xs lg:text-base font-normal">
        Your visited page not found. You may go home page.
      </p>

      <Link
        to="/"
        className="bg-red-600 text-white px-8 py-1 lg:px-12 lg:py-4 font-poppins text-xs lg:text-base font-medium"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default Error;
