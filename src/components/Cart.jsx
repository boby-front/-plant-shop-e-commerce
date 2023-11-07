import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromCart,
  updateItemFromSelect,
  resetCart,
  resetBuyMessage,
} from "../features/cart";

const Cart = ({ closeCart }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="fixed anim-cart right-[60px] top-[80px] bg-slate-100  duration-500 rounded-lg min-w-[450px] border border-slate-300 overflow-hidden pt-5 ">
      <span
        onClick={closeCart}
        className="font-semibold absolute top-[2px] right-[8px] cursor-pointer active:scale-[1.3] DM"
      >
        X
      </span>
      <p></p>
      {cart.cartItems.length > 0 ? (
        cart.cartItems.map((item) => (
          <div
            className="flex items-start justify-between  border-b border-b-slate-300 p-3 min-h-[95px]
      "
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[70px] h-[70px] object-cover shadow-lg shadow-slate-300 rounded-md"
            />
            <div className="w-[135px]">
              <h2 className="font-semibold text-slate-600 text-sm DM">
                {item.title}
              </h2>
              <p className="DM text-slate-400 text-sm">{item.description}</p>
            </div>
            <div className="flex flex-col justify-between h-[75px]">
              <select
                name="quantity"
                onChange={(e) => {
                  dispatch(
                    updateItemFromSelect({ value: e.target.value, id: item.id })
                  );
                }}
                className="w-15 p-1 rounded "
                value={item.quantity}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <button
                onClick={() => {
                  dispatch(deleteFromCart(item.id));
                }}
                className=" text-slate-800 px-2 inline-flex items-center justify-center rounded  DM hover:scale-[1.3] duration-500 p-3"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>

            <p className="DM text-sm w-[66px] text-right">u/{item.price} $</p>
          </div>
        ))
      ) : (
        <p className="text-center DM  text-xl">Cart empty</p>
      )}
      <div className="flex justify-between p-3">
        {cart.cartItems
          .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
          .toFixed(2) > 0 && (
          <button
            className="DM bg-green-600 text-slate-100 px-7 rounded text-base cursor-pointer hover:scale-[1.1] duration-500 font-semibold"
            onClick={() => {
              dispatch(resetCart());
              setTimeout(() => dispatch(resetBuyMessage()), 2000);
            }}
          >
            BUY
          </button>
        )}
        <p className="text-xl text-right DM ">
          Total :
          <span className="font-semibold pl-3 DM text-slate-700">
            {cart.cartItems
              .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
              .toFixed(2)}
            $
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
