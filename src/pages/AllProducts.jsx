import { useState, useMemo } from "react";
import { useGetAllProductsQuery } from "../features/api/apiSlice";

import { ProductsList } from "../components/product";

const AllProducts = () => {
  const [index, setIndex] = useState(0);
  const [sort, setSort] = useState("");

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  const sortedProducts = useMemo(() => {
    const sortedProducts = products.slice();
    switch (sort) {
      case "ascendPrice":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;

      case "descendPrice":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;

      case "ascendName":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "descendName":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        break;
    }
    return sortedProducts;
  }, [products, sort]);

  return (
    <div className="mt-20 mb-32">
      <ProductsList
        text="All Products"
        index={index}
        setIndex={setIndex}
        setSort={setSort}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
        products={sortedProducts}
      />
    </div>
  );
};

export default AllProducts;
