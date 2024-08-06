export default function Dropdown({ text, items, selectedItems, onSelect }) {
  const handleHeadingSelect = (heading, subitems, isChecked) => {
    const updatedSelectedItems = new Set(selectedItems);

    if (isChecked) {
      // Add all subitems to the set
      subitems.forEach((subitem) => updatedSelectedItems.add(subitem));
    } else {
      // Remove all subitems from the set
      subitems.forEach((subitem) => updatedSelectedItems.delete(subitem));
    }

    // Update the selected items
    onSelect(Array.from(updatedSelectedItems));
  };

  const handleSubitemSelect = (subitem) => {
    const updatedSelectedItems = new Set(selectedItems);

    if (updatedSelectedItems.has(subitem)) {
      // Remove subitem from the set
      updatedSelectedItems.delete(subitem);
    } else {
      // Add subitem to the set
      updatedSelectedItems.add(subitem);
    }

    // Update the selected items
    onSelect(Array.from(updatedSelectedItems));
  };

  return (
    <div>
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        data-dropdown-delay="100"
        className="inline-flex items-center rounded-lg border border-black bg-customNavBg px-2 py-1 text-center hover:bg-customNavBgHover"
        type="button"
      >
        {text}
        <span className="material-symbols-rounded ms-1">
          keyboard_arrow_down
        </span>
      </button>

      <div
        id="dropdownHover"
        className="z-10 hidden w-44 divide-y rounded-lg bg-customNavBg shadow"
      >
        <ul
          className="py-2 text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          {items &&
            items.map((item, index) => {
              const subitems = item.subitems || []; // Ensure subitems is defined
              const isHeadingChecked = subitems.every((subitem) =>
                selectedItems.includes(subitem),
              );

              return item.value === "dd" ? (
                <li key={index} className="relative">
                  <button
                    id={`${index}dd`}
                    data-dropdown-toggle={`${index}dropdown`}
                    data-dropdown-trigger="hover"
                    data-dropdown-delay="100"
                    data-dropdown-placement="right-start"
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2 hover:bg-customNavBgHover"
                  >
                    <input
                      id={`heading-${index}`}
                      type="checkbox"
                      checked={isHeadingChecked}
                      onChange={(e) =>
                        handleHeadingSelect(
                          item.item,
                          subitems,
                          e.target.checked,
                        )
                      }
                      className="mr-2 rounded"
                    />
                    <label
                      htmlFor={`heading-${index}`}
                      className="flex-1 cursor-pointer"
                    >
                      {item.item}
                    </label>
                    <span className="material-symbols-rounded">
                      chevron_right
                    </span>
                  </button>
                  <div
                    id={`${index}dropdown`}
                    className="absolute left-full top-0 z-10 hidden w-44 divide-y rounded-xl bg-customNavBg shadow"
                  >
                    <ul className="py-2" aria-labelledby={`${index}dd`}>
                      {subitems.map((subitem, subitemIndex) => (
                        <li
                          key={subitemIndex}
                          className="flex items-center rounded-xl px-4 py-2 hover:bg-customNavBgHover"
                        >
                          <input
                            id={`${index}-${subitemIndex}checkbox`}
                            type="checkbox"
                            checked={selectedItems.includes(subitem)}
                            onChange={() => handleSubitemSelect(subitem)}
                            className="mr-2 rounded"
                          />
                          <label
                            htmlFor={`${index}-${subitemIndex}checkbox`}
                            className="cursor-pointer"
                          >
                            {subitem}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li
                  key={index}
                  className="flex items-center px-4 py-2 hover:bg-customNavBgHover"
                >
                  <input
                    id={`item-${index}`}
                    type="checkbox"
                    checked={selectedItems.includes(item.item)}
                    onChange={() => handleSubitemSelect(item.item)}
                    className="mr-2 rounded"
                  />
                  <label
                    htmlFor={`item-${index}`}
                    className="flex-1 cursor-pointer"
                  >
                    {item.item}
                  </label>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
