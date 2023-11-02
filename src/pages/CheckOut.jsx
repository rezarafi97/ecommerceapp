import { useEffect } from "react";
import { CheckoutForm, CheckoutPayment } from "../components/checkout";

const CheckOut = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-20 pb-32">
      <h2 className="font-inter text-4xl font-medium tracking-widest mb-12">
        Billing Details
      </h2>
      <form className="2xl:flex justify-between ">
        <CheckoutForm />

        <CheckoutPayment />
      </form>
    </div>
  );
};

export default CheckOut;
