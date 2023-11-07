import React from "react";
import { useSelector } from "react-redux";

const BuyMessage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    cart.buyMessage && (
      <div className="fixed top-1/2 right-1/2 DM  text-center text-3xl transform translate-x-1/2 -translate-y-1/2  z-40 bg-green-600 text-slate-100 p-8 rounded ">
        <p className="pb-5">
          Thank you for your purchases ! <br />
        </p>
        <p>🌱 See you soon ☘️</p>
      </div>
    )
  );
};

export default BuyMessage;
