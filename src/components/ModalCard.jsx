import React from "react";

const ModalCard = ({ imgUrl, titleAlt, toggleModal, handleModalClick }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-80 flex items-center justify-center z-50"
      onClick={toggleModal}
    >
      <div className="w-[30%] relative" onClick={handleModalClick}>
        <span
          className="DM font-semibold text-slate-400 hover:text-slate-600 cursor-pointer text-2xl absolute top-[15px] right-[20px]
        "
          onClick={toggleModal}
        >
          X
        </span>
        <img src={imgUrl} alt={titleAlt} className="w-[100%]" />
      </div>
    </div>
  );
};

export default ModalCard;
