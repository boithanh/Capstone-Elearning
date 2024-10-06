import React from "react";

const InputCustom = ({
  labelContent,
  id,
  placeholder,
  name,
  onChange,
  value,
  onBlur,
  error,
  touched,
  disabled = false,
  typeInput = "text",
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelContent}
      </label>
      <input
        type={typeInput}
        id={id}
        className="bg-gray-50 border border-gray-300 hover:border-black focus:border-black text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 mb-3"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        disabled={disabled}
      />
      {/* {error && touched ? <p className="text-red-500">{error}</p> : null} */}
    </>
  );
};

export default InputCustom;
