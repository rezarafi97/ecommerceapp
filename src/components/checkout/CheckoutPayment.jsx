import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTotals, selectAll } from "../../features/reducers/cartSlice";
import { Button } from "../common";

const CheckoutPayment = () => {
  const textClass = "font-poppins text-base font-normal";
  const totalClass =
    "flex justify-between border-b border-black border-opacity-40 pb-4 mb-4";

  const cart = useSelector(selectAll);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="mt-12 w-96 lg:w-60 mx-auto lg:mx-0">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center mb-8">
          <img src={item.image} className="w-12" />
          <p className="font-poppins text-base font-normal ml-6 mr-52">
            {item.title}
          </p>
          <p className={textClass}>{item.price * item.cartQty}$</p>
        </div>
      ))}

      <div>
        <div className={totalClass}>
          <p className={textClass}>Subtotal:</p>

          <p className={textClass}>{cartTotalAmount}$</p>
        </div>

        <div className={totalClass}>
          <p className={textClass}>Shipping:</p>

          <p className={textClass}>Free</p>
        </div>

        <div className="flex justify-between mb-4">
          <p className={textClass}>Total:</p>

          <p className={textClass}>{cartTotalAmount}$</p>
        </div>
      </div>

      <div className="mb-12">
        <input
          type="radio"
          id="bank"
          name="payment"
          value="BANK"
          className="mr-4 my-8"
        />
        <label htmlFor="bank" className={textClass}>
          Bank
        </label>
        <br />
        <input
          type="radio"
          id="cash"
          name="payment"
          value="CASH"
          className="mr-4"
        />
        <label htmlFor="cash" className={textClass}>
          Cash on delivery
        </label>
        <br />
      </div>
      <div>
        <Button text="Place Order" />
      </div>
    </div>
  );
};

export default CheckoutPayment;
