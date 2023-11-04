const ContactForm = () => {
  const inputClass =
    "grow rounded bg-searchInput p-4 outline-0 placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50";

  const textareaClass =
    "w-full resize-none my-8 rounded bg-searchInput p-4 outline-0 placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50";

  const buttonClass =
    "absolute right-0 md:-bottom-8 lg:-bottom-24 py-2 md:py-3 lg:py-4 px-6 md:px-[2.25rem] lg:px-12 font-poppins text-xs md:text-sm lg:text-base font-medium bg-red-600 text-white";

  return (
    <div className="px-8 pt-10 pb-12 rounded shadow w-full xl:w-3/4">
      <form>
        <div className="flex flex-col 2xl:flex-row gap-4">
          <input type="text" className={inputClass} placeholder="Your Name" />

          <input type="email" className={inputClass} placeholder="Your Email" />

          <input type="tel" className={inputClass} placeholder="Your Phone" />
        </div>

        <textarea className={textareaClass} placeholder="Your Message" />

        <div className="relative">
          <button type="submit" className={buttonClass}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
