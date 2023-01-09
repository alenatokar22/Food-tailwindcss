import { useState } from "react";
import { data } from "../data/data";

export const useFoodState = () => {
  const [foods, setFood] = useState(data);

  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  const filterName = (name) => {
    setFood(
      data.filter((item) => {
        return item.name.toLowerCase().includes(name);
      })
    );
  };

  const resetFood = () => {
    setFood(data);
  };

  return { foods, resetFood, filterType, filterPrice, filterName };
};
