const Pagination = ({ page, goToPage, totalPages }) => {
  const handleChangePage = (newPage) => {
    goToPage(newPage);
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 mt-4">
      <div className="flex w-full items-center justify-between">
        {/* Botón de la página anterior */}
        {page > 1 && (
          <button
            onClick={() => handleChangePage(page - 1)}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer transition"
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
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
