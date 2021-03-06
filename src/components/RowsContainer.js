import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { USER_PER_PAGE } from "../utils/constants";
import Pagination from "./Pagination";
import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const RowsContainer = ({ userList, totalPages }) => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = userList.slice(startIndex, startIndex + USER_PER_PAGE);

  const handleRightClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const handleLeftClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="rows__container">
      <div className="rows__container--left">
        <div className="heading__row--left">
          <input type="checkbox" className="input__checkbox" />
          <p className="row__user--name">Name</p>
          <BsThreeDots className="more__icon" />
        </div>
        {selectedUsers.map((x) => {
          return <LeftContainer user={x} key={x.id} />;
        })}
      </div>
      <div className="rows__container--right">
        <div className="heading__row--right">
          <p className="row__user--email">Email</p>
          <p className="row__user--phone">Phone</p>
          <p className="row__user--status">Status</p>
          <p className="row__user--source">Source</p>
          <p className="row__user--date">Date</p>
        </div>
        {selectedUsers.map((x) => {
          return <RightContainer user={x} key={x.id} />;
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        page={page}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </div>
  );
};

export default RowsContainer;
