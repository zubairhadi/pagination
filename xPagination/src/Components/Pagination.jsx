import React from "react";

const Pagination = ({ currentPage, prev, next }) => {
  return (
    <div className="paginationButtonsContainer">
      <button onClick={prev}>Previous</button>
      <p className="count">{currentPage + 1}</p>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
