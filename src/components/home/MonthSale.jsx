import { useGetLimitedProductsQuery } from "../../features/api/apiSlice";
import { Title, Card, Button } from "../common";

const MonthSale = () => {
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLimitedProductsQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = products.map((p) => <Card p={p} key={p.id} discount={1} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <Title title="This Month" />
      <div className="flex justify-between items-center mb-16">
        <div className="flex items-end w-1/2">
          <p className="font-inter text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold tracking-widest">
            Best Selling Products
          </p>
        </div>

        <div>
          <Button text="All Products" />
        </div>
      </div>
      <div className="mt-10 w-full whitespace-nowrap overflow-x-scroll snap-x mb-36">
        {content}
      </div>
    </div>
  );
};

export default MonthSale;
