import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "../features/products";
import Card from "../components/Card";

const MainShop = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [datafiltered, setDatafiltered] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  let categories = [];

  if (products.items) {
    categories = [
      ...new Set(products.items.newPlants.map((item) => item.category)),
    ];
  }

  const handleDataFiltered = (category) => {
    setSelectedCategory(category);

    if (category === "Tous") {
      setDatafiltered(products.items.newPlants);
    } else {
      const filteredData = products.items.newPlants.filter(
        (item) => item.category === category
      );
      setDatafiltered(filteredData);
    }
  };

  useEffect(() => {
    if (!products.items) {
      dispatch(getProductsList());
    } else {
      handleDataFiltered("Tous"); //
    }
  }, [dispatch, products.items]);

  return (
    <main className="text-slate-800 py-[100px]">
      <div className="flex justify-between w-[65%] m-auto mb-[60px]">
        <h1 className="text-4xl">Shop</h1>
      </div>
      <article
        className="w-[65%] m-auto flex flex-wrap justify-between gap-[30px]
      "
      >
        <div className="mb-[10px]">
          <button
            className={` px-3 py-2 rounded DM mr-5 hover:scale-110 duration-300 font-semibold ${
              selectedCategory === "Tous"
                ? "text-slate-100 bg-green-600"
                : "bg-slate-200 text-slate-500"
            }`}
            onClick={() => handleDataFiltered("Tous")}
          >
            Tous
          </button>

          {categories.map((category, index) => {
            if (category !== undefined) {
              const capitalizedCategory =
                category.charAt(0).toUpperCase() + category.slice(1);
              return (
                <button
                  key={index}
                  className={`  px-3 py-2 rounded DM mr-5 hover:scale-110 duration-300 font-semibold ${
                    selectedCategory === category
                      ? "bg-green-600 text-slate-100"
                      : "bg-slate-200 text-slate-500"
                  }`}
                  onClick={() => handleDataFiltered(category)}
                >
                  {capitalizedCategory}
                </button>
              );
            }
            return null;
          })}
        </div>

        <div className="w-[100%] m-auto flex flex-wrap justify-base gap-[30px]">
          {datafiltered &&
            datafiltered.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                imgUrl={item.image}
                itemId={item.id}
                picked={item.picked}
                newItem={item.new}
              />
            ))}
        </div>
      </article>
    </main>
  );
};

export default MainShop;
