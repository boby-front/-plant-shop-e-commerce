import React, { useEffect } from "react";
import ButtonShop from "../components/ButtonShop";
import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "../features/products";
import Card from "../components/Card";

const MainNewPlants = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.items) {
      dispatch(getProductsList());
    }
  }, [dispatch, products.items]);

  return (
    <main className="text-slate-800 py-[100px]">
      <div className="flex justify-between w-[65%] m-auto mb-[60px]">
        <h1 className="text-4xl">New plants</h1>
        <ButtonShop bgButton={"bg-green-600"} textColor={"text-slate-100"} />
      </div>
      <article
        className="w-[65%] m-auto flex flex-wrap justify-between gap-[30px]
      "
      >
        {products.items &&
          products.items.newPlants.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              imgUrl={item.image}
              itemId={item.id}
              picked={item.picked}
            />
          ))}
      </article>
    </main>
  );
};

export default MainNewPlants;
