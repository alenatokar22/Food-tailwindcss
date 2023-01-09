import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import { useFoodState } from "./components/useFoodState";

function App() {
  const { foods, resetFood, filterType, filterPrice, filterName } =
    useFoodState();

  return (
    <div>
      <Navbar searchByName={filterName} />
      <Hero />
      <HeadLineCards />
      <Food
        foods={foods}
        resetFood={resetFood}
        filterType={filterType}
        filterPrice={filterPrice}
      />
      <Category />
    </div>
  );
}

export default App;
