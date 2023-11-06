import React from "react";
import ButtonShop from "./ButtonShop";

const TitleHeader = () => {
  return (
    <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%]  p-5 rounded-lg text-slate-100 w-[100%]">
      <p className="text-lg ">WELCOME TO THE GREENSTORE</p>
      <h1 className="text-6xl mt-10 mb-5">
        Let’s Bring the Spring to <br />
        Your Home
      </h1>
      <ButtonShop bgButton={"bg-slate-100"} textColor={"text-slate-800"} />
    </div>
  );
};

export default TitleHeader;
