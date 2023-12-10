import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetAllProductsQuery } from "../features/api/apiSlice";
import { ProductsList } from "../components/product";

const Catagory = () => {
  const [index, setIndex] = useState(0);
  const [sort, setSort] = useState("");

  const { catagory } = useParams();

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  const filteredProducts = useMemo(() => {
    const filteredProducts = products.filter((p) => p.category === catagory);

    filteredProducts.slice();
    switch (sort) {
      case "ascendPrice":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;

      case "descendPrice":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;

      case "ascendName":
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "descendName":
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        break;
    }
    
    return filteredProducts;
  }, [products, sort]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-20 mb-32">
      <ProductsList
        text={catagory}
        index={index}
        setIndex={setIndex}
        setSort={setSort}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
        products={filteredProducts}
      />
    </div>
  );
};

export default Catagory;
