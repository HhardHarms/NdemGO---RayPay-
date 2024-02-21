import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TextField = ({ label, placeholder, value, onChange, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="div">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="{label}"
      >
        {label}
      </label>
      <div className="flex border outline-[blue] rounded-md py-2 px-3 w-full bg-blue-200 leading-tight">
        <input
          className="w-full focus:outline-none focus:shadow-outline bg-transparent h-full"
          id={label}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <div className="" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
