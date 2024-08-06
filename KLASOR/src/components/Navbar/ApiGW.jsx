import { useState } from "react";
import Button from "../common/Button";
import DropdownSingle from "../common/DropdownSingle";

export default function ApiGW({ style }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [connected, setConnected] = useState(true); // PROD: GET CONNECTION STATUS

  return (
    <div
      className={`${style} mx-0 flex items-center rounded-lg border border-dashed border-black/50 bg-customNavBg px-3 py-1 text-center`}
    >
      <DropdownSingle
        text={"API GW URL"}
        options={apiGwUrlOptions}
        onSelect={(value) => setSelectedValue(value)}
        ddPos={"bg-customNavBg"}
        optStyle={"hover:bg-customNavBgHover text-base"}
        textStyle={"hover:bg-customNavBgHover"}
      />
      <input
        type="text"
        className="mx-auto inline-block rounded-lg border border-black bg-customNavBg py-1 md:mx-2 md:inline-block"
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
            setConnected(!connected);
          }}
        />
      ) : (
        <Button
          text={"connect"}
          style={"bg-[#88d66c] rounded-none hover:bg-[#52c02b] w-28"}
          handleClick={() => {
            setConnected(!connected);
          }}
        />
      )}
    </div>
  );
}

const apiGwUrlOptions = ["Option 1", "Option 2", "Option 3"];
