import React from "react";
import TitleHeader from "../components/TitleHeader";
import MainNewPlants from "./MainNewPlants";

const Header = () => {
  return (
    <main>
      <section className="bg-salon-plants bg-cover h-screen relative py-5 px-5 ">
        <TitleHeader />
      </section>
      <MainNewPlants />
    </main>
  );
};

export default Header;
