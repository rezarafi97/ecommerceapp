import { Title } from "../common";
import { Product } from "../product";

const Featured = () => {
  return (
    <div className="mb-16 lg:mb-32">
      <div className="mb-16">
        <Title title="Featured" />
        <div className="flex items-end">
          <p className="font-inter text-lg md:text-2xl lg:text-4xl font-semibold tracking-widest">
            New Arrival
          </p>
        </div>
      </div>
      <div className="grid grid-rows-4 lg:grid-rows-2 grid-cols-1 lg:grid-cols-4 gap-2 h-[52rem]">
        <div className="relative border rounded lg:col-span-2 lg:row-span-2 w-3/4 lg:w-full mx-auto">
          <Product productId="9" />
        </div>
        <div className="relative border rounded lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-1 w-3/4 lg:w-full mx-auto">
          <Product productId="10" />
        </div>
        <div className="relative border rounded lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2 w-3/4 lg:w-full mx-auto">
          <Product productId="11" />
        </div>
        <div className="relative border rounded lg:col-start-4 lg:col-end-4 lg:row-start-2 lg:row-end-2 w-3/4 lg:w-full mx-auto">
          <Product productId="12" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
