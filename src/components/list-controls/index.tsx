import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ListControlsProps {
  setLimit: (limit: number) => void;
  setPage: (page: number) => void;
  limit: number;
  page: number;
  maxPages: number;
}

function ListControls({
  setLimit,
  setPage,
  limit,
  page,
  maxPages,
}: ListControlsProps) {
  const setLimitHandler = (limit: number) => {
    setLimit(limit);
    setPage(1);
  };

  const setPageHandler = (page: number) => {
    setPage(page);
  };

  const changePageHandler = (action: string) => {
    if (action === "next") {
      setPage(page + 1);
    } else if (action === "previous") {
      setPage(page - 1);
    }
  };

  function generateSequenceUpTo(n: number): number[] {
    let result: number[] = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }

  return (
    <div className="flex flex-row justify-around w-full mb-2">
      <div className="flex">
        {page !== 1 ? (
          <button
            onClick={() => changePageHandler("previous")}
            className="px-2 py-1 bg-sky-600 text-white rounded m-1 hover:bg-sky-700 duration-300"
          >
            <FaArrowLeft />
          </button>
        ) : (
          <button
            onClick={() => changePageHandler("previous")}
            className="px-2 py-1 bg-zinc-600 opacity-50 text-white rounded m-1"
            disabled
          >
            <FaArrowLeft />
          </button>
        )}
        {maxPages && page < maxPages ? (
          <button
            onClick={() => changePageHandler("next")}
            className="px-2 py-1 bg-sky-600 text-white rounded m-1 hover:bg-sky-700 duration-300"
          >
            <FaArrowRight />
          </button>
        ) : (
          <button
            onClick={() => changePageHandler("next")}
            className="px-2 py-1 bg-zinc-600 text-white rounded m-1"
            disabled
          >
            <FaArrowRight />
          </button>
        )}
        {generateSequenceUpTo(maxPages).map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => setPageHandler(pageNumber)}
              className={`px-2 bg-zinc-900 text-white rounded m-1 w-18 ${
                page == pageNumber ? "bg-sky-500" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ListControls;
