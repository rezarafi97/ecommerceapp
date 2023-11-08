import { useEffect } from "react";
import { useSelector } from "react-redux";

import { CheckoutForm, CheckoutPayment } from "../components/checkout";
import { selectLogin } from "../features/reducers/userSlice";

import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const log = useSelector(selectLogin);

  useEffect(() => {
    if (!log) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-20 pb-32">
      <h2 className="font-inter text-4xl font-medium tracking-widest mb-12">
        Billing Details
      </h2>
      <form className="lg:flex justify-between ">
        <CheckoutForm />

        <CheckoutPayment />
      </form>
    </div>
  );
};

export default CheckOut;
