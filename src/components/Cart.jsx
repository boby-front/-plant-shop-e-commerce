import React from "react";
import { useSelector } from "react-redux";

const Cart = ({ closeCart }) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="fixed anim-cart right-[60px] top-[80px] bg-slate-100  duration-500 rounded-lg min-w-[450px] border border-slate-300 overflow-hidden pt-5">
      <span
        onClick={closeCart}
        className="absolute top-[2px] right-[8px] cursor-pointer active:scale-[1.3] DM"
      >
        X
      </span>
      <p></p>
      {cart.cartItems.length > 0 ? (
        cart.cartItems.map((item) => (
          <div
            className="flex items-start justify-between  border-b border-b-slate-300 p-3
      "
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[70px] h-[70px] object-cover shadow-lg shadow-slate-300 rounded-md"
            />
            <div className="w-[125px]">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div>{item.price}</div>
          </div>
        ))
      ) : (
        <p className="text-center DM">Cart empty</p>
      )}
    </div>
  );
};

export default Cart;
