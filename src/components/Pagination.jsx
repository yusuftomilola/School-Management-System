// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <nav
      aria-label="Page Navigation"
      className="flex justify-end items-center my-2"
    >
      <button
        className={`py-2 px-4 font-bold leading-tight text-gray-500 bg-[#FFFFFF00] border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`mx-1 px-4 py-2 rounded ${
            currentPage === index + 1
              ? "bg-[#253858] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`py-2 px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </nav>
  );
};

export default Pagination;
