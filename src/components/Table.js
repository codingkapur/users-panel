import { BsSearch, BsThreeDots } from "react-icons/bs";
import {
  FiChevronRight,
  FiChevronLeft,
  FiChevronDown,
} from "react-icons/fi";
import RowsContainer from "./RowsContainer";

const Table = ({ userList, totalPages, handleClick, page}) => {

  return (
    <div className="table__container">
      <div className="table__top-row">
        <div className="table__top-row--search-bar">
          <BsSearch />
          <input
            type="text"
            className="table__search-bar--input"
            placeholder="1 of 276 contacts"
          />
        </div>
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
      <RowsContainer userList={userList} page={page} totalPages ={totalPages} handleClick={handleClick}/>
    </div>
  );
};

export default Table;
