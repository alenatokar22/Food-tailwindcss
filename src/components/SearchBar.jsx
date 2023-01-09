import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ searchByName }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    searchByName(query.toLowerCase());
  };

  return (
    <form
      className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-transparent p-2 w-full focus:outline-none"
        id="search"
        type="text"
        placeholder="Search foods"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="border-none" type="submit">
        <AiOutlineSearch size={25} />
      </button>
    </form>
  );
};

export default SearchBar;
