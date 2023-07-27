import '../App.css';


function Pagination({ page, limit, totalTodo, setPage }) {
  const handleNextPage = async () => {
    await setPage(page + 1);
  };

  const handlePrevPage = async () => {
    await setPage(page - 1);
  };

  const totalPages = Math.ceil(totalTodo / limit);

  return (
    <div className="pagination" data-testid="pagination">
      <button
        className="pagination-button"
        disabled={page === 1}
        onClick={handlePrevPage}
      >
        PREVIOUS
      </button>
      <div className="current-page"><h1>{page}</h1></div>
      <button
        className="pagination-button"
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        NEXT
      </button>
    </div>
  );
}

export default Pagination;
