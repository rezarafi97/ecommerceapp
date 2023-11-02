import { CiPaperplane } from "react-icons/ci";

const FooterExclusive = () => {
  const inputClass =
    "bg-transparent border-0 outline-0 text-white flex-auto placeholder:font-poppins placeholder:text-opacity-40 placeholder:font-normal placeholder:text-base";
  
    return (
    <div>
      <ul>
        <li className="text-white font-inter font-bold text-2xl tracking-wider">
          Exclusive
        </li>
        <li className="text-white font-poppins font-medium text-xl my-6">
          Subscribe
        </li>
        <li className="text-white font-poppins font-normal text-base">
          Get 10% off your first order
        </li>
      </ul>
      <div className="bg-black rounded border py-2 px-3 flex-auto flex mt-3">
        <input
          type="email"
          className={inputClass}
          placeholder="Enter your email"
        />

        <button type="button" className="h-6 flex-auto">
          <CiPaperplane className="text-white w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default FooterExclusive;
