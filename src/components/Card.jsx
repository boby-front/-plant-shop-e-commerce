import React, { useState } from "react";
import ModalCard from "./ModalCard";
import { addOnetoCart } from "../features/cart";
import { useDispatch } from "react-redux";
import Stars from "./Stars";

const Card = ({
  title,
  price,
  description,
  imgUrl,
  itemId,
  picked,
  newItem,
}) => {
  const [hoveredGlass, setHoveredGlass] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setViewModal(!viewModal);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className=" w-[30%] rounded-lg overflow-hidden bg-grayCard relative hover:translate-y-[-5px] hover:shadow-lg duration-300"
        onMouseEnter={() => setHoveredGlass(true)}
        onMouseLeave={() => setHoveredGlass(false)}
      >
        <span className="absolute top-[20px] left-[20px] text-green-400 font-semibold text-2xl bg">
          {newItem}
        </span>
        <div
          className={`bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer absolute top-[20px] right-[-40px] duration-500   ${
            hoveredGlass ? "hovered-div" : ""
          }`}
          onClick={handleModal}
        >
          <i className=" text-xl text-slate-200 fa-solid fa-magnifying-glass hover:text-slate-400 duration-500 "></i>
        </div>

        <img
          src={imgUrl}
          alt={title}
          className="h-[400px] m-auto hover-trigger object-cover"
        />

        <div className="w-[100%] relative p-[15px] ">
          <h2 className="mb-2 text-xl font-semibold text-slate-500">{title}</h2>
          <Stars />
          <p className="mb-2 text-slate-500">{description}</p>
          <p className="font-semibold text-sm text-slate-500 DM">{price}$</p>

          {picked ? (
            <p className="DM bg-green-300 w-[150px] text-center text-xl p-3 absolute bottom-[20px] right-[20px] anim-addedIttem">
              Added item
            </p>
          ) : (
            <div
              className="absolute bottom-[20px] right-[20px]  bg-green-600 rounded-[50%] w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:scale-110  duration-300"
              onClick={() => {
                dispatch(addOnetoCart(itemId));
              }}
            >
              <i className=" text-slate-100  text-2xl fa-solid fa-bag-shopping "></i>
            </div>
          )}
        </div>
      </div>
      {viewModal && (
        <ModalCard
          imgUrl={imgUrl}
          titleAlt={title}
          toggleModal={handleModal}
          handleModalClick={handleModalClick}
        />
      )}
    </>
  );
};

export default Card;
