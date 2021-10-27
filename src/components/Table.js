import { useState, useRef, useEffect } from "react";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import {
  FiChevronRight,
  FiChevronLeft,
  FiChevronDown,
  FiX,
} from "react-icons/fi";
import RowsContainer from "./RowsContainer";
import { USER_PER_PAGE } from "../utils/constants";

const Table = ({ userList, totalPages }) => {
  const [searchState, setSearchState] = useState(false);
  const [searchInputText, setSearchInputText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchResultsPages, setSearchResultsPages] = useState(null);
  const searchInput = useRef(null);

  //Function handles click on search icon.
  const handleSearchIconClick = () => {
    setSearchState(!searchState);
    setSearchInputText("");
  };
  //Every time the value of variable changes, run this function.
  useEffect(() => {
    focusOnClick();
    returnUserList();
  }, [searchState]);

  const returnUserList = () => {
    if (!searchState) {
      setSearchResults(null);
      setSearchResultsPages(null);
    }
  };

  const focusOnClick = () => {
    if (searchState) {
      searchInput.current.focus();
    } else {
      searchInput.current.blur();
    }
  };
  //On submit of search form input, what happens?
  const handleSearchSubmit = (e) => {
    //prevent default behavior
    e.preventDefault();
    //Store value of input in a variable
    const searchVariable = searchInputText;
    //Search for input in userList
    setSearchResults(userList.filter((x) => x.name.includes(searchVariable)));
    //Pagination for search results

    //Search for users in database

    //If no results found

    //Go to page nnumber 1.
  };

  const updatePageCount = () => {
    if (searchResults) {
      setSearchResultsPages(Math.ceil(searchResults.length / USER_PER_PAGE));
    }
  };

  useEffect(() => {
    updatePageCount();
  }, [searchResults]);

  return (
    <div className="table__container">
      <div className="table__top-row">
        <form
          className="table__top-row--search-bar"
          onSubmit={(e) => handleSearchSubmit(e)}
        >
          {searchState ? (
            <FiX
              className="search__icon"
              onClick={() => handleSearchIconClick()}
            />
          ) : (
            <BsSearch
              className="search__icon"
              onClick={() => handleSearchIconClick()}
            />
          )}
          <input
            value={searchInputText}
            onChange={(e) => setSearchInputText(e.target.value)}
            ref={searchInput}
            type="text"
            className={
              searchState
                ? "table__search-bar--input active"
                : "table__search-bar--input"
            }
            placeholder="Search for a user"
          />
        </form>
        <div className="table__toprow--empty-space"></div>
        <div className="table__top-row--operations">
          <button className="table__top-row--btn btn">View</button>
          <button className="table__top-row--btn btn">Edit</button>
          <div className="btn status-btn">
            <p>Status</p>
            <FiChevronDown />
          </div>
          <button className="table__top-row--btn btn">Send</button>
          <button className="table__top-row--btn btn">
            <BsThreeDots />
          </button>
          <p>|</p>
          <button className="table__top-row--btn btn">
            <FiChevronLeft />
          </button>
          <button className="table__top-row--btn btn">
            <FiChevronRight />
          </button>
        </div>
      </div>
      <RowsContainer
        userList={searchResults ? searchResults : userList}
        totalPages={searchResultsPages ? searchResultsPages : totalPages}
      />
    </div>
  );
};

export default Table;
