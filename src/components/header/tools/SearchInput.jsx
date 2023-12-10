import { useState } from "react";
import { useGetAllProductsQuery } from "../../../features/api/apiSlice";

import { Link } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleSearch = useDebouncedCallback((q) => {
    setQuery(q);
  }, 300);

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  let filteredProducts;

  if (query) {
    filteredProducts = products.filter((product) =>
      product.title.includes(query)
    );
  } else {
    filteredProducts = [];
  }

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = filteredProducts.map((p) => (
      <div
        key={p.id}
        className="flex items-center justify-between w-full gap-8"
      >
        <div className="flex gap-4 items-center">
          <img src={p.image} className="w-8 h-8" />
          <h1 className="text-white truncate w-36 font-poppins text-sm font-normal mt-2">
            {p.title}
          </h1>
        </div>
        <Link
          to={`/productdetail/${p.id}`}
          className="text-white font-poppins text-sm font-normal mt-2"
        >
          View Product
        </Link>
      </div>
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  const inputClass =
    "flex-auto bg-searchInput outline-none placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50 rounded py-2 pl-5 pr-3";
  const resultClass =
    "absolute md:right-1 top-10 bg-black bg-opacity-40 w-96 rounded flex flex-col py-4 px-6 justify-center items-start gap-3 z-10";

  return (
    <>
      <div className="relative">
        <input
          type="search"
          className={inputClass}
          placeholder="What are you looking for?"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        {query ? <div className={resultClass}>{content}</div> : null}
      </div>
    </>
  );
};

export default SearchInput;
