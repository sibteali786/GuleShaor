import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SelectMenu from "../SelectMenu/SelectMenu";
const SearchBox = ({ setOptionValue, optionValue }) => {
  const history = useNavigate();
  const location = useLocation();
  const [keyword, setKeyword] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (location.pathname?.includes("mentors")) {
      if (keyword.trim()) {
        history(`/mentors/search/${keyword}`);
      } else {
        history(`/mentors`);
      }
    } else if (location.pathname?.includes("students")) {
      if (keyword.trim()) {
        history(`/students/search/${keyword}`);
      } else {
        history(`/students`);
      }
    }
  };
  return (
    <form
      className="flex items-center self-center shadow-md"
      onSubmit={submitHandler}
    >
      <div className="flex w-full">
        <SelectMenu optionValue={optionValue} setOptionValue={setOptionValue} />
        <div className="relative w-full h-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            required=""
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
