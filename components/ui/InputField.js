import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div>
      <label className="text-lg font-medium text-primary block">{label}</label>
      <input
        type={type}
        name={type}
        placeholder={placeholder}
        class=" xl:w-[350px] w-full mt-5 mb-7 bg-white  pl-[30px]  h-[60px] border rounded transition-outline outline-none focus:outline-secondary "
      />
    </div>
  );
};

export default InputField;
