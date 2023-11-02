import { Outlet } from "react-router-dom";
import { NavbarContent } from "./components/header";

import { Footer } from "./components/footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <div className="container w-4/5 mx-auto">
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="after:block after:w-full after:h-px after:bg-black after:opacity-5">
          <NavbarContent />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
