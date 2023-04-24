import React from "react";

const Input = ({ type, placeholder, name }) => {
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          name={name}
          className="w-full h-14 outline-none border border-primary px-3 peer"
          required
        />
        <span
          className="absolute flex items-start top-4 left-4 text-sm transition-all peer-focus:text-xs 
            peer-focus:top-1 peer-valid:top-1 peer-valid:text-xs"
        >
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default Input;
