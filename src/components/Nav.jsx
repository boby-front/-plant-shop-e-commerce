import React, { useState } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useSelector((state) => state.cart);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="flex text-slate-100 justify-between items-center absolute z-10 w-full px-5">
        <h1 className="block  text-4xl text-green-500">Greenstore</h1>
        <div className="flex gap-5 items-end relative ">
          <ul className="flex gap-10">
            <li className="DM px-2 hover:text-green-500 hover:duration-600">
              Home
            </li>
            <li className="DM px-2 hover:text-green-500 hover:duration-600">
              Plants
            </li>
            <li className="DM px-2 hover:text-green-500 hover:duration-600">
              About
            </li>
            <li className="DM px-2 hover:text-green-500 hover:duration-600">
              Contact
            </li>
          </ul>
          <span className="cursor-pointer mx-2 DM font-semibold  flex items-end hover:text-green-500 hover:duration-600">
            {cart.cartItems
              .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
              .toFixed(2)}
            $
            <i
              className=" ml-1 text-2xl fa-solid fa-cart-shopping  "
              onClick={toggleModal}
            ></i>
          </span>
          <i className=" ml-2 text-2xl fa-solid fa-user cursor-pointer hover:text-green-500 hover:duration-600"></i>
          {showModal &&
            createPortal(<Cart closeCart={toggleModal} />, document.body)}
        </div>
      </header>
      {cart.cartItems.length > 0 && (
        <div
          className="flex justify-center items-center rounded-[50%] w-[70px] h-[70px] bg-green-600 fixed bottom-5 right-5 cursor-pointer anim-cart active:bg-slate-100 duration-[0.2s]"
          onClick={toggleModal}
        >
          <p className="absolute top-[-10px] right-[-10px] DM text-xl  border border-green-600 w-[30px] h-[30px] flex justify-center items-center bg-slate-100 rounded-[50%]">
            {cart.cartItems.length}
          </p>
          <i className="text-slate-100 text-4xl fa-solid fa-seedling hover:scale-[1.2]  active:text-green-600 duration-[0.2s]"></i>
        </div>
      )}
    </>
  );
};

export default Nav;
