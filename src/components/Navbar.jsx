import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import SearchBar from "../components/SearchBar";

const Navbar = ({ searchByName }) => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <SearchBar searchByName={searchByName} />

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill className="mr-2" size={20} /> Cart
      </button>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          className="absolute right-4 top-4 cursor-pointer"
          size={30}
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery className="mr-4" size={25} /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite className="mr-4" size={25} /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet className="mr-4" size={25} /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp className="mr-4" size={25} /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag className="mr-4" size={25} /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill className="mr-4" size={25} /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends className="mr-4" size={25} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
