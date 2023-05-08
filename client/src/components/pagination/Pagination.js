import ReactPaginate from "react-paginate";

function Pagination({ totalPages, handlePageClick, currentPage }) {
  return (
    <div>
      <ReactPaginate
        previousLabel={false}
        nextLabel={false}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center "}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        forcePage={currentPage}
      />
    </div>
  );
}

export default Pagination;
