import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Pagination = ({
  totalPages,
  handleRightClick,
  handleLeftClick,
  page,
}) => {
  //returns an array of numbers uptill the value of the variable
  // const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="pagination__container">
      <FiChevronLeft
        className="arrow__icon"
        onClick={() => handleLeftClick()}
      />
      <p className="pagination__btn">{page}</p>
      <p>of {totalPages}</p>
      <FiChevronRight
        className="arrow__icon"
        onClick={() => handleRightClick()}
      />
    </div>
  );
};
export default Pagination;
