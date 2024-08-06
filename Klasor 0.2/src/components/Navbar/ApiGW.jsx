import { useState } from "react";
import Button from "../common/Button";
import DropdownSingle from "../common/DropdownSingle";

export default function ApiGW({ style }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [connected, setConnected] = useState(false); // PROD: GET CONNECTION STATUS

  return (
    <div
      className={`${style} mx-0 flex items-center rounded-lg border border-dashed border-black/50 bg-customNavBg px-3 py-1 text-center`}
    >
      <DropdownSingle
        text={"API GW URL"}
        options={apiGwUrlOptions}
        onSelect={(value) => setSelectedValue(value)}
        ddPos={"bg-customNavBg"}
        optStyle={"hover:bg-customNavBgHover text-base hover:text-white"}
        textStyle={"hover:bg-customNavBgHover hover:text-white"}
      />
      <input
        type="text"
        className="mx-auto inline-block rounded-lg border border-black bg-customNavBg py-1 focus:border-stone-700 focus:ring-1 focus:ring-stone-700 md:mx-2 md:inline-block"
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      />
      {connected ? (
        <Button
          text={"disconnect"}
          style={"bg-[#e47b7b] hover:bg-[#e93f3f] w-28"}
          handleClick={() => {
            setConnected(
              !connected,
            ); /***  PROD: UPDATE handleClick FUNCTION ***/
          }}
        />
      ) : (
        <Button
          text={"connect"}
          style={"bg-[#88d66c] rounded-none hover:bg-[#52c02b] w-28"}
          handleClick={() => {
            setConnected(
              !connected,
            ); /*** PROD: UPDATE handleClick FUNCTION ***/
          }}
        />
      )}
    </div>
  );
}

const apiGwUrlOptions = ["Option 1", "Option 2", "Option 3"];
