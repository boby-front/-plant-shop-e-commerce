import React from "react";

const ButtonShop = ({ bgButton, textColor }) => {
  return (
    <button
      className={`${bgButton} ${textColor} border-none py-2 px-5 DM   hover:scale-110 duration-500`}
    >
      Shop Now
    </button>
  );
};

export default ButtonShop;
