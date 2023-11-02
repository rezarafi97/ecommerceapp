const FooterSupport = () => {
  const listClass = "text-white text-base font-poppins font-normal mb-4";
  
  return (
    <div>
      <ul>
        <li className="text-white text-xl font-poppins font-medium mb-6">
          Support
        </li>
        <li className={listClass}>
          111 Bijoy sarani, Dhaka,
          <br /> DH 1515, Bangladesh.
        </li>
        <li className={listClass}>exclusive@gmail.com</li>
        <li className={listClass}>+88015-88888-9999</li>
      </ul>
    </div>
  );
};

export default FooterSupport;
