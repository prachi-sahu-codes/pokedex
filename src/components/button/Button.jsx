import React from "react";

const Button = ({ text, action, style }) => {
  return (
    <button
      className={`text-sm border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-1 px-5 m-4 min-w-10 rounded-full shadow-md active:shadow-none pb-[5px] ${style}`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
