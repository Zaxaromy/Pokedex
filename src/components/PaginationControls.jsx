const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination-content">
      <div className="pagination-div">
        <button
          className="paginate left"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          data-state={currentPage === 1 ? "disabled" : ""}
        >
          <i></i>
          <i></i>
        </button>
        <span className="counter">
          Page{" "}
          <span
            className={`{current-pg-span ${
              currentPage === 1 || currentPage === totalPages
                ? "special-color"
                : ""
            }`}
          >
            {currentPage}
          </span>{" "}
          of{" "}
          <span
            className={`{current-pg-span ${
              currentPage === totalPages ? "special-color" : ""
            }`}
          >
            {totalPages}
          </span>
        </span>
        <button
          className="paginate right"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          data-state={currentPage === totalPages ? "disabled" : ""}
        >
          <i></i>
          <i></i>
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
