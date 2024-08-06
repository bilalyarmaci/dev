export default function Filter() {
  return (
    <>
      <form method="Get">
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="inline-flex flex-shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2 text-center text-sm font-bold text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            Filter by
            <span className="material-symbols-rounded ms-2.5 w-2.5">
              keyboard_arrow_down
            </span>
          </button>
          <div
            id="dropdown"
            className="hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Commands
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Queries
                </button>
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              name="fq"
              className="z-10 block w-full rounded-e-lg border border-s-2 border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="material-symbols-rounded">search</span>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
