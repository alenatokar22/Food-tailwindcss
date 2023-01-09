import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Food = ({ foods, resetFood, filterType, filterPrice }) => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>

          <div className="flex justify-between flex-wrap">
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => resetFood()}
            >
              All
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("burger")}
            >
              Burgers
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("pizza")}
            >
              Pizza
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("salad")}
            >
              Salads
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterPrice("$")}
            >
              $
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterPrice("$$")}
            >
              $$
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterPrice("$$$")}
            >
              $$$
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterPrice("$$$$")}
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            key={index}
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
              <button className="border-0">
                <BsFillCartFill size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
