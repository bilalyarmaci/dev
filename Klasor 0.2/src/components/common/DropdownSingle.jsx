import { useState, useRef, useEffect } from "react";

export default function DropdownSingle({
  text,
  options,
  onSelect,
  ddPos,
  optStyle,
  textStyle,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-nowrap text-left"
      ref={dropdownRef}
    >
      <div>
        <button
          className={`inline-flex rounded-lg border border-black py-1 ps-2 shadow-sm transition-all ease-in-out focus:outline-none  ${textStyle}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {text}
          <span className="material-symbols-rounded">keyboard_arrow_down</span>
        </button>
      </div>

      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-56 rounded-lg border border-black shadow-lg ${ddPos}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                key={option}
                className={`block w-full rounded-md px-4 py-2 text-left text-sm text-gray-700 ${optStyle}`}
                role="menuitem"
                tabIndex="-1"
                value={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
