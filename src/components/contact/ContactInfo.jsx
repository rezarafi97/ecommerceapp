import { CiPhone, CiMail } from "react-icons/ci";

const ContactInfo = () => {
  const iconTextClass = "font-poppins text-base font-medium";
  const textClass = "font-poppins text-sm font-normal mb-4 last:mb-0";

  return (
    <div className="px-8 pt-10 pb-12 rounded shadow w-full xl:w-1/4">
      <div>
        <div className="flex gap-4 mb-6">
          <CiPhone className="w-6 h-6" />

          <p className={iconTextClass}>Call To Us</p>
        </div>

        <p className={textClass}>We are available 24/7, 7 days a week.</p>

        <p className={textClass}>Phone: +8801611112222</p>
      </div>

      <div className="bg-black w-full h-px my-8 opacity-50"></div>

      <div>
        <div className="flex gap-4 mb-6">
          <CiMail className="w-6 h-6" />

          <p className={iconTextClass}>Write To Us</p>
        </div>

        <p className={textClass}>
          Fill out our form and we will contact you within 24 hours.
        </p>

        <p className={textClass}>Emails: customer@exclusive.com</p>

        <p className={textClass}>Emails: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
