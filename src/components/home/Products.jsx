import { useGetAllProductsQuery } from "../../features/api/apiSlice";
import { Button, Card, Title } from "../common";

const Products = () => {
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  let content;
  let discounted;
  let normal;
  let newest;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    discounted = products.slice(0, 5);
    normal = products.slice(5, 8);
    newest = products.slice(9, 13);
    content = discounted.map((p) => <Card p={p} key={p.id} discount={1} />);
    content.push(normal.map((p) => <Card p={p} key={p.id} discount={3} />));
    content.push(newest.map((p) => <Card p={p} key={p.id} discount={2} />));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div className="mb-20">
      <Title title="Our Products" />
      <div className="mb-16">
        <p className="font-inter text-lg md:text-2xl lg:text-4xl font-semibold tracking-widest">
          Explore Our Products
        </p>
      </div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">{content}</div>
      <div className="flex justify-center my-8 md:my-12 lg:my-16">
        <Button text="All Products" />
      </div>
    </div>
  );
};

export default Products;
