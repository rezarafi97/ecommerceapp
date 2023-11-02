import PropTypes from "prop-types";

const Advantage = ({ icon, title, desc }) => {
  return (
    <div className="text-center">
      <div className="mb-6 pt-3 mx-auto w-16 h-16 lg:w-20 lg:h-20 bg-blue-gray-400 rounded-full">
        <div className="mx-auto w-10 h-10 lg:w-14 lg:h-14 bg-black text-white text-lg lg:text-4xl flex justify-center items-center rounded-full">
          {icon}
        </div>
      </div>
      <p className="font-poppins text-sm lg:text-xl font-semibold mb-2">{title}</p>
      <p className="font-poppins text-xs lg:text-sm font-normal">{desc}</p>
    </div>
  );
};

Advantage.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Advantage;
