import React, { createContext, useState } from "react";

const defaultFilter = {
  value: "",
  type: "all", // Default type, e.g., 'all', 'Events', 'Commands', 'Queries'
};

export const FilterContext = createContext({
  filter: defaultFilter,
  setFilter: () => {},
});

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState(defaultFilter);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
