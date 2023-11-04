import { useGetLimitedProductsQuery } from "../../features/api/apiSlice";
import { Card, Timer, Title, Button } from "../common";

const TodaySale = () => {
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
    content = products.map((p) => <Card  p={p} key={p.id} discount={1} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <div>
        <Title title="Today's" />
        <div className="flex justify-between">
          <div className="flex gap-20">
            <div className="flex items-end">
              <p className="font-inter text-lg md:text-2xl lg:text-4xl font-semibold tracking-widest">
                Flash Sales
              </p>
            </div>
            <Timer />
          </div>
        </div>
      </div>
      <div className="mt-10 w-full whitespace-nowrap overflow-x-scroll snap-x scroll-m-2">
        {content}
      </div>
      <div className="flex justify-center my-16">
        <Button text="All Products" />
      </div>
    </div>
  );
};

export default TodaySale;
