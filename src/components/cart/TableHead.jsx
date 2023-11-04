import PropTypes from "prop-types";

const TableHead = ({ tableRowClass }) => {
  const textClass = "font-poppins font-medium text-xs md:text-sm lg:text-base";

  return (
    <thead>
      <tr className={tableRowClass}>
        <th className="w-20 lg:w-40 text-left">
          <p className={textClass}>Product</p>
        </th>
        <th className="w-20 lg:w-40 text-left">
          <p className={textClass}>Price</p>
        </th>
        <th className="w-20 lg:w-40 text-left">
          <p className={textClass}>Quantity</p>
        </th>
        <th className="w-20 lg:w-40 text-left">
          <p className={textClass}>Subtotal</p>
        </th>
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  tableRowClass: PropTypes.string,
};

export default TableHead;
