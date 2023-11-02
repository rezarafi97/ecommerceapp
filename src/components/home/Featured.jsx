import { Title } from "../common";
import { Product } from "../product";

const Featured = () => {
  return (
    <div className="mb-36">
      <div className="mb-16">
        <Title title="Featured" />
        <div className="flex items-end">
          <p className="font-inter text-base md:text-4xl font-semibold tracking-widest">
            New Arrival
          </p>
        </div>
      </div>

      <div className="h-96 md:h-[38rem] grid grid-cols-2 gap-2">
        <div className="relative border rounded">
          <Product productId="9" />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="relative border rounded">
            <Product productId="10" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative border rounded">
              <Product productId="11" />
            </div>
            <div className="relative border rounded">
              <Product productId="12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
