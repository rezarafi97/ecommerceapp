import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTotals, selectAll } from "../features/reducers/cartSlice";
import { TableHead, TableBody, CartLink, CartTotal } from "../components/cart";

import { selectLogin } from "../features/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const log = useSelector(selectLogin);
  const cart = useSelector(selectAll);
  const { cartTotalAmount } = useSelector((state) => state.cart);

  const tableRowClass =
    "flex justify-between gap-3 py-6 px-2 md:px-6 lg:px-10 rounded shadow mb-10";

  useEffect(() => {
    if (!log) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="my-10">
      <h2 className="font-inter text-2xl font-medium tracking-widest mb-10">
        Cart
      </h2>
      <table className="w-full">
        <TableHead tableRowClass={tableRowClass} />

        <TableBody tableRowClass={tableRowClass} cart={cart} />
      </table>

      <CartLink />

      <div className="flex justify-center mb-32">
        <CartTotal cartTotalAmount={cartTotalAmount} />
      </div>
    </div>
  );
};

export default Cart;
