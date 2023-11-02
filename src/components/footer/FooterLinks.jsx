import { Link } from "react-router-dom";

const FooterLinks = () => {
  const listClass = "text-white text-base font-poppins font-normal mb-4 cursor-pointer";

  return (
    <div>
      <ul>
        <li className="text-white text-xl font-poppins font-medium mb-6">
          Quick Links
        </li>
        <li className={listClass}>Privacy Policy</li>
        <li className={listClass}>Terms Of Use</li>
        <li className={listClass}>FAQ</li>
        <li className={listClass}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
