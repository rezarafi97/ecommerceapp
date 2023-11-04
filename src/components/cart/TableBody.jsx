import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../features/reducers/cartSlice";

const TableBody = ({ tableRowClass, cart }) => {
  const textClass = "font-poppins font-normal text-xs md:text-sm lg:text-base";
  
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <tbody>
      {cart.map((item) => (
        <tr key={item.id} className={tableRowClass}>
          <td className="w-20 lg:w-40 flex items-center gap-5">
            <img src={item.image} className="w-8" />
            <p className="truncate font-poppins font-normal text-xs md:text-sm lg:text-base">
              {item.title}
            </p>
          </td>
          <td className="w-20 lg:w-40 place-self-center">
            <p className={textClass}>{item.price}$</p>
          </td>
          <td className="flex gap-2 items-center w-20 lg:w-40 place-self-center">
            <button
              data-action="increment"
              onClick={() => handleAddToCart(item)}
            >
              <span className={textClass}>+</span>
            </button>
            <p className={textClass}>{item.cartQty}</p>
            <button
              data-action="decrement"
              onClick={() => handleDecreaseCart(item)}
            >
              <span className={textClass}>−</span>
            </button>
          </td>
          <td className="flex gap-4 w-20 lg:w-40 place-self-center">
            <p className={textClass}>{item.price * item.cartQty}$</p>
            <p
              className="text-xs md:text-sm lg:text-base text-red-900 font-black cursor-pointer"
              onClick={() => handleRemoveFromCart(item)}
            >
              X
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  tableRowClass: PropTypes.string,
  cart: PropTypes.array,
};

export default TableBody;
