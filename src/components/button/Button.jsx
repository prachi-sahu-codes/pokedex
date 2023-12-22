import React from "react";

const Button = ({ text, action }) => {
  return (
    <button
      className="bg-orange-600 hover:bg-orange-700 text-base sm:text-lg text-white py-1 px-5 m-4 min-w-10 rounded-full shadow-md active:shadow-none"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
