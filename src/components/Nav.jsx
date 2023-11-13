import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { isLogoutAction } from "../features/auth";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [changeColorFont, setChangeColorFont] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChangeColor = () => {
    setChangeColorFont(true);
  };

  return (
    <>
      <header
        className={`flex text-slate-100 justify-between items-center absolute z-10 w-full px-5 py-3 font-semibold ${
          changeColorFont ? "text-slate-100" : "text-slate-600"
        }`}
      >
        <Link to="/home" onClick={handleChangeColor}>
          <h1 className="block  text-4xl text-green-500 cursor-pointer">
            Greenstore
          </h1>
        </Link>

        <div className="flex  items-center relative ">
          <ul className="flex gap-10">
            <Link to="/home" onClick={handleChangeColor}>
              <li
                className="DM px-2 hover:text-green-500 hover:duration-600 
                "
              >
                Home
              </li>
            </Link>

            <Link
              to="/shop"
              className=""
              onClick={() => setChangeColorFont(false)}
            >
              <li className="DM px-2 hover:text-green-500 hover:duration-600">
                Plants & Utils
              </li>
            </Link>

            <li className="DM px-2 hover:text-green-500 hover:duration-600">
              About
            </li>
            <li className="DM px-2 hover:text-green-500 hover:duration-600">
              Contact
            </li>
            <span className=" mx-2 DM font-semibold  flex items-center ">
              {cart.cartItems
                .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                .toFixed(2)}
              $
            </span>
          </ul>

          <div
            className="rounded-[50%] w-[70px] h-[70px]  border-2 border-green-600 relative cursor-pointer  overflow-hidden  "
            onClick={toggleModal}
          >
            <img
              src={auth.imageUser}
              alt="image Avatar"
              className="  hover:scale-[1.1]  duration-300  objectif-cover translate-y-[5px]"
            />
          </div>
          {showModal &&
            createPortal(<Cart closeCart={toggleModal} />, document.body)}
          <div
            className="ml-1 relative group"
            onClick={() => dispatch(isLogoutAction())}
          >
            <i className="fa-solid fa-right-from-bracket cursor-pointer text-green-600 hover:text-green-400"></i>
            <p className="DM bg-slate-200 text-slate-800 rounded p-1 z-100 absolute left-[-60px] hidden group-hover:block">
              Logout
            </p>
          </div>
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
