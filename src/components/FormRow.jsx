import React from "react";

const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className=" flex flex-col text-sm font-semibold text-black-500 pt-4 pb-2"
      >
        {labelText || name}
      </label>
      <input
        className=" w-80 border border-gray-300 p-2 rounded-md text-gray-700 outline-none"
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        required
      ></input>
    </div>
  );
};

export default FormRow;
