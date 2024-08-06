import { useContext, useState } from "react";
import { FilterContext } from "../context/FilterContext";

export default function Filter() {
  const { setFilter } = useContext(FilterContext);
  const [filterValue, setFilterValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [lastChanged, setLastChanged] = useState(""); // Track last changed
  const [isOpen, setIsOpen] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
    setLastChanged("value"); // Mark as value change
    setFilter({
      value: event.target.value,
      type: filterType,
      lastChanged: "value",
    });
  };

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
    setLastChanged("type"); // Mark as type change
    setFilter({ value: "", type, lastChanged: "type" });
    setIsOpen(false);
  };

  const handleSearch = () => {
    setFilter({ value: filterValue, type: filterType, lastChanged });
  };

  return (
    <div className="flex">
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        className="inline-flex flex-shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2 text-center text-sm font-bold text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {filterType || "Filter By"}
        <span className="material-symbols-rounded ms-2.5 w-2.5">
          keyboard_arrow_down
        </span>
      </button>
      <div
        id="dropdown"
        className={`w-44 z-10  divide-y divide-gray-100 rounded-lg bg-white shadow ${isOpen? "" : "hidden"}`}
      >
        <ul className="text-sm text-gray-700" aria-labelledby="dropdown-button">
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
              onClick={() => handleFilterTypeChange("Event")}
            >
              Event
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
              onClick={() => handleFilterTypeChange("Command")}
            >
              Command
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
              onClick={() => handleFilterTypeChange("Query")}
            >
              Querie
            </button>
          </li>
          <hr />
          <li>
            <button
              type="button"
              className="inline-flex w-full rounded-lg bg-gray-100 px-4 py-2"
              onClick={() => handleFilterTypeChange("")}
            >
              Reset
            </button>
          </li>
        </ul>
      </div>
      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          name="fq"
          value={filterValue}
          className="z-10 block w-full rounded-e-lg border border-s-2 border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          onChange={handleFilterChange}
          required
        />
        <button
          type="button"
          className="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={handleSearch}
        >
          <span className="material-symbols-rounded">search</span>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
}
