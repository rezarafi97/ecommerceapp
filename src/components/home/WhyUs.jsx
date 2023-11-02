import { TbTruckDelivery, TbHeadphones, TbSquareRoundedCheck } from "react-icons/tb";
import Advantage from "../common/Advantage";

const WhyUs = () => {
  return (
    <div className="mb-36 flex justify-center gap-12 lg:gap-24">
      <div>
        <Advantage
          icon={<TbTruckDelivery />}
          title="FREE AND FAST DELIVERY"
          desc="Free delivery for all orders over $140"
        />
      </div>
      <div>
        <Advantage
          icon={<TbHeadphones />}
          title="24/7 CUSTOMER SERVICE"
          desc="Friendly 24/7 customer support"
        />
      </div>
      <div>
        <Advantage
          icon={<TbSquareRoundedCheck />}
          title="MONEY BACK GUARANTEE"
          desc="We return money within 30 days"
        />
      </div>
    </div>
  );
};

export default WhyUs;
