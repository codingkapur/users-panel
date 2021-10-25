import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { USER_PER_PAGE } from "../utils/constants";
import Pagination from "./Pagination";
import React from "react";

const RowsContainer = ({ userList, page, totalPages, handleClick }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = userList.slice(startIndex, startIndex + USER_PER_PAGE);

  return (
      <div className="rows__container">
        <div className="rows__container--left">
          {selectedUsers.map((x) => {
            return <LeftContainer user={x} key={x.id} />;
          })}
        </div>
        <div className="rows__container--right">
          {selectedUsers.map((x) => {
            return <RightContainer user={x} key={x.id} />;
          })}
        </div>
      <Pagination totalPages={totalPages} handleClick={handleClick}/>

      </div>
  );
};

export default RowsContainer;
