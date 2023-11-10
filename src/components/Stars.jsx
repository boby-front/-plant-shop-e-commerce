import React, { useState } from "react";

const Stars = () => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [noticeDone, setNoticeDone] = useState(false);

  const handleStarHover = (index) => {
    setHoveredIndex(index);
  };

  const handleStarLeave = () => {
    setHoveredIndex(-1);
  };

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
    setNoticeDone(true);
    setTimeout(() => setNoticeDone(false), 2000);
  };

  return (
    <div className="  text-green-400 flex items-center my-3 ">
      {[1, 2, 3, 4, 5].map((index) => (
        <i
          key={index}
          className={`cursor-pointer ${
            index <= hoveredIndex || index < selectedStars
              ? "fa-solid fa-star pr-2 flex "
              : "fa-regular fa-star pr-2"
          }`}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={handleStarLeave}
          onClick={() => handleStarClick(index)}
        ></i>
      ))}
      {noticeDone && (
        <span className="absolute top-[50%] left-[50%] p-3 w-[280px] bg-white rounded-xl z-50 transform -translate-x-1/2 -translate-y-1/2 text-2xl border border-slate-300 shadow-lg text-slate-700">
          Merci pour votre avis ! 🌿
        </span>
      )}
    </div>
  );
};

export default Stars;
