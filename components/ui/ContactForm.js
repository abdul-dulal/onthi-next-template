import React from "react";
import InputField from "./InputField";

const ContactForm = () => {
  return (
    <div className="mt-12 mb-24">
      <form>
        <div className="grid  xs:grid-cols-2 xl:gap-0 gap-4">
          <InputField label="Name" type="text" placeholder="Your Name" />
          <InputField label="Email" type="email" placeholder="Your Email" />
          <InputField
            label="Phone (Optional)"
            type="number"
            placeholder="Your Phone"
          />
          <InputField label="Subject" type="text" placeholder="Your Subject" />
        </div>
        <div>
          <label className="text-lg font-medium text-primary block mb-5">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-[145px] xl:w-[730px] w-full bg-white  pl-[30px]  border rounded transition-outline outline-none focus:outline-secondary "
          ></textarea>
        </div>

        <input
          type="submit"
          className="w-[244px] h-[58px] bg-secondary text-lg font-bold text-primary mt-8 cursor-pointer"
          value="send message"
        />
      </form>
    </div>
  );
};

export default ContactForm;
