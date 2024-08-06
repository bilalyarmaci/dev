import { useState, useEffect, useRef } from "react";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";

export default function TopicsToListen({ style }) {
  const [selectedItems, setSelectedItems] = useState([]); // State to manage selected items
  const [areAllSelected, setAreAllSelected] = useState(false); // State to manage "select all" toggle
  const [showSelected, setShowSelected] = useState(false); // State to manage visibility of selected items
  const [editableText, setEditableText] = useState(""); // State to manage the content of the textarea

  // References
  const timerRef = useRef(null);
  const toggleAllRef = useRef(null);
  const selectedTopicsRef = useRef(null);
  const selectedTopicsModalRef = useRef(null);

  // Function to handle selection of items
  const handleSelect = (itemsToToggle) => {
    const selectedItemsSet = new Set(itemsToToggle);

    services.forEach((service) => {
      const allSubitemsSelected = service.subitems.every((subitem) =>
        selectedItemsSet.has(subitem),
      );

      if (allSubitemsSelected) {
        selectedItemsSet.add(service.item);
      } else {
        selectedItemsSet.delete(service.item);
      }
    });

    setSelectedItems(Array.from(selectedItemsSet));
  };

  // Function to toggle "select all" functionality
  const toggleAll = () => {
    if (areAllSelected) {
      setSelectedItems([]); // Deselect all items
    } else {
      const allItems = services.flatMap((item) => [
        item.item,
        ...item.subitems,
      ]);
      setSelectedItems(allItems); // Select all items
    }
    setAreAllSelected(!areAllSelected); // Toggle state
  };

  // Function to toggle the visibility of the selected items
  const toggleShowSelected = () => {
    setShowSelected(!showSelected);
  };

  // Function to handle changes in the textarea content
  const handleTextChange = (event) => {
    const value = event.target.value;
    setEditableText(value); // Update editable text state

    // Clear previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set a timer to handle debounce
    timerRef.current = setTimeout(() => {
      // Split text into lines or by double spaces
      const lines = value
        .split(/\n|  +/)
        .map((line) => line.trim())
        .filter((line) => line !== "");

      // Create a set to manage selected items
      const selectedItemsSet = new Set();

      // Iterate over services to add or remove subitems based on input
      services.forEach((service) => {
        const itemIsIncluded = lines.includes(service.item);

        if (itemIsIncluded) {
          // Add the item and all its subitems
          selectedItemsSet.add(service.item);
          service.subitems.forEach((subitem) => selectedItemsSet.add(subitem));
        } else {
          // Remove the item and all its subitems
          service.subitems.forEach((subitem) =>
            selectedItemsSet.delete(subitem),
          );
          selectedItemsSet.delete(service.item);
        }

        // Check if individual subitems are included
        service.subitems.forEach((subitem) => {
          if (lines.includes(subitem)) {
            selectedItemsSet.add(subitem);
          }
        });
      });

      // Update the selected items state
      setSelectedItems(Array.from(selectedItemsSet));
    }, 300); // Delay for debounce
  };

  useEffect(() => {
    if (editableText !== selectedItems.join("\n")) {
      setEditableText(selectedItems.join("\n"));
    }
  }, [selectedItems]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggleAllRef.current &&
        !toggleAllRef.current.contains(event.target) &&
        selectedTopicsRef.current &&
        !selectedTopicsRef.current.contains(event.target) &&
        selectedTopicsModalRef.current &&
        !selectedTopicsModalRef.current.contains(event.target)
      ) {
        setShowSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${style} rounded-lg border border-dashed border-black/50 bg-customNavBg px-3 py-1 relative`}
    >
      <div className="flex items-center">
        <span className="font-bold">Topics to Listen</span>
        <div ref={toggleAllRef}>
          <Button
            text={"Toggle All"}
            style={"px-2 py-1 mx-1 ms-2 rounded-lg hover:bg-stone-700 hover:text-white"}
            handleClick={toggleAll}
          />
        </div>
        <Dropdown
          text={"Services"}
          items={services}
          selectedItems={selectedItems}
          onSelect={handleSelect}
        />
        <div ref={selectedTopicsRef}>
          <Button
            text={"Selected Topics"}
            style={"px-2 py-1 ms-1 rounded-lg hover:bg-customNavBgHover hover:text-white"}
            handleClick={toggleShowSelected}
          />
        </div>
      </div>
      {showSelected && (
        <div
          ref={selectedTopicsModalRef}
          className="absolute left-0 top-full z-20 mt-2 w-full rounded-md border bg-customNavBg p-2 shadow-lg focus:outline-none"
        >
          <textarea
            className="h-32 w-full rounded border p-2 scrollbar scrollbar-thumb focus:border-stone-800 focus:ring-1 focus:ring-stone-700"
            value={editableText}
            onChange={handleTextChange} // Update text and selected items on change
          />
        </div>
      )}
    </div>
  );
}

const services = [
  {
    value: "dd",
    item: "Item 1",
    subitems: ["Subitem 1.1", "Subitem 1.2"],
  },
  {
    value: "dd",
    item: "Item 2",
    subitems: [
      "Subitem 2.1",
      "Subitem 2.2",
      "Subitem 2.3",
      "Subitem 2.4",
      "Subitem 2.5",
      "Subitem 2.6",
      "Subitem 2.7",
      "Subitem 2.8",
      "Subitem 2.9",
    ],
  },
  {
    value: "dd",
    item: "Item 3",
    subitems: ["Subitem 3.1", "Subitem 3.2", "Subitem 3.3"],
  },
];
