const Pagination = ({ totalPages, handleClick}) => {

  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="pagination__container">
      {pages.map((page) => {
        return <button className="pagination__btn" key={page} onClick={()=>handleClick(page)}>{page}</button>;
      })}
    </div>
  );
};
export default Pagination;
