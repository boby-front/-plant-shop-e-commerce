import React from "react";

const Nav = () => {
  return (
    <nav className="flex text-slate-100 justify-between items-center">
      <h1 className="block  text-4xl text-green-500">Greenstore</h1>
      <div className="flex gap-5 items-end">
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
          $ 0.00
          <i className=" ml-1 text-2xl fa-solid fa-cart-shopping  "></i>
        </span>
        <i className=" ml-2 text-2xl fa-solid fa-user cursor-pointer hover:text-green-500 hover:duration-600"></i>
      </div>
    </nav>
  );
};

export default Nav;
