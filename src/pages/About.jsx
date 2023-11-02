import { useEffect } from "react";
import WhyUs from "../components/home/WhyUs";

const About = () => {
  const textClass = "font-poppins text-base font-normal mb-6 text-justify";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div>
      <div className="lg:w-1/2 mb-32 mt-20">
        <h2 className="font-inter text-5xl font-semibold tracking-widest mb-10">
          Our Story
        </h2>

        <p className={textClass}>
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>

        <p className={textClass}>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>

      <WhyUs />
    </div>
  );
};

export default About;
