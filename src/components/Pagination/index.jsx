const Pagination = ({ page, setPage, totalPages }) => {
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 mt-4">
      <div className="flex w-full items-center justify-between">
        {/* Botón de la página anterior */}
        {page > 1 && (
          <button
            onClick={() => handleChangePage(page - 1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            Prev
          </button>
        )}

        {/* Mostrar la página actual */}
        <p className="text-lg font-semibold">Page {page}</p>

        {/* Botón de la página siguiente */}
        {page < totalPages && (
          <button
            onClick={() => handleChangePage(page + 1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
