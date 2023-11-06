import React, { useState } from "react";
import ModalCard from "./ModalCard";
import { addOnetoCart } from "../features/cart";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ title, price, description, imgUrl, itemId, picked }) => {
  const [viewModal, setViewModal] = useState(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setViewModal(!viewModal);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="w-[350px] rounded-lg overflow-hidden bg-grayCard relative">
      <div
        className="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer absolute top-[20px] right-[20px]"
        onClick={handleModal}
      >
        <i className=" text-xl text-slate-200 fa-solid fa-magnifying-glass hover:text-slate-400 duration-700"></i>
      </div>

      <img src={imgUrl} alt={title} className="h-[450px] m-auto" />
      {viewModal && (
        <ModalCard
          imgUrl={imgUrl}
          titleAlt={title}
          toggleModal={handleModal}
          handleModalClick={handleModalClick}
        />
      )}
      <div className="w-[100%] relative p-[15px] ">
        <h2 className="mb-2 text-xl font-semibold text-slate-500">{title}</h2>
        <div className="flex gap-2 mb-2 text-green-400">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p className="mb-2 text-slate-500">{description}</p>
        <p className="font-semibold text-lg text-slate-500">{price}</p>

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
  );
};

export default Card;
