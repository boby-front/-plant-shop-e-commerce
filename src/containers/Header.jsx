import React from "react";
import TitleHeader from "../components/TitleHeader";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header className="bg-salon-plants bg-cover h-screen relative py-5 px-5">
      <Nav />
      <TitleHeader />
    </header>
  );
};

export default Header;
