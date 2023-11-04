const CheckoutForm = () => {
  const labelClass = "font-poppins text-base font-normal mb-2 opacity-40";
  const inputClass = "rounded bg-searchInput outline-0 py-2 px-4 mb-8 w-full";

  return (
    <div className="w-96 md:w-[30rem] mx-auto lg:mx-0">
      <label htmlFor="firstname" className={labelClass}>
        Firstname
      </label>
      <br />
      <input
        type="text"
        name="firstname"
        id="firstname"
        className={inputClass}
      />
      <br />
      <label htmlFor="lastname" className={labelClass}>
        Lastname
      </label>
      <br />
      <input
        type="text"
        name="lastname"
        id="lastname"
        className={inputClass}
      />
      <br />
      <label htmlFor="email" className={labelClass}>
        Email
      </label>
      <br />
      <input type="email" name="email" id="email" className={inputClass} />
      <br />
      <label htmlFor="city" className={labelClass}>
        Town/City
      </label>
      <br />
      <input type="text" name="city" id="city" className={inputClass} />
      <br />
      <label htmlFor="address" className={labelClass}>
        Address
      </label>
      <br />
      <input
        type="text"
        name="address"
        id="address"
        className={inputClass}
      />
      <br />
      <label htmlFor="zipCode" className={labelClass}>
        Zip Code
      </label>
      <br />
      <input type="number" name="zipCode" id="zipCode" className={inputClass} />
      <br />
      <input
        type="checkbox"
        name="check"
        id="check"
        className="w-4 h-4 accent-red-700"
      />
      <label
        htmlFor="check"
        className="ml-4 font-poppins text-base font-normal"
      >
        Save this information for faster check-out next time
      </label>
    </div>
  );
};

export default CheckoutForm;
