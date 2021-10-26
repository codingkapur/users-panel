import { useState, useRef, useEffect } from "react";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { FiChevronRight, FiChevronLeft, FiChevronDown } from "react-icons/fi";
import RowsContainer from "./RowsContainer";

const Table = ({ userList, totalPages, handleClick, page }) => {
  const [searchState, setSearchState] = useState(false);
  const [searchInputText, setSearchInputText] = useState("");
  const searchInput = useRef(null);

  //   const focusOnClick = (searchState) => {
  //     if (searchState) {
  //       return
  //     } else {
  //       return searchInput.current.blur();
  //     }
  //   };

  const handleSearchIconClick = () => {
    setSearchState(!searchState);
    setSearchInputText("");
  };

  useEffect(() => {
    focusOnClick();
  }, [searchState]);

  const focusOnClick = () => {
    if (searchState) {
      searchInput.current.focus();
    } else {
      searchInput.current.blur();
    }
  };

  const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log(searchInputText);
  }
  return (
    <div className="table__container">
      <div className="table__top-row">
        <form className="table__top-row--search-bar" onSubmit={(e)=> handleSearchSubmit(e)}>
          <BsSearch
            className="search__icon"
            onClick={() => handleSearchIconClick()}
          />
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
        userList={userList}
        page={page}
        totalPages={totalPages}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Table;
