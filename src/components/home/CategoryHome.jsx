import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../features/api/apiSlice";

const CategoryHome = () => {
  const {
    data: cate = [],
    isSuccess,
    isError,
    error,
  } = useGetAllCategoriesQuery();

  let content;

  if (isSuccess) {
    content = cate.map((c, index) => (
      <li key={index} className="lg:w-52">
        <Link to={`/allproducts/${c}`} className="font-poppins text-xs md:text-base font-normal capitalize">
          {c}
        </Link>
      </li>
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div className="pt-10 lg:pr-4 lg:border-r-2">
      <ul className="h-80 lg:flex flex-col justify-between hidden">{content}</ul>
    </div>
  );
};

export default CategoryHome;
