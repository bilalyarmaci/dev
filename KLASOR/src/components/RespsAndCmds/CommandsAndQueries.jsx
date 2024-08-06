import { useState } from "react";
import Button from "../common/Button";
import DropdownSingle from "../common/DropdownSingle";

export default function CommandsAndQueries({ sendCmd }) {
  const [selectedCmd, setSelectedCmd] = useState("");
  const [payload, setPayload] = useState("");

  return (
    <div className="flex h-full flex-col rounded-lg border border-slate-400 bg-customCmdBg p-2">
      <DropdownSingle
        text={"Common Commands"}
        textStyle={
          "px-2 font-medium bg-customCmdBtn hover:bg-customCmdBtnHover hover:text-white"
        }
        options={options}
        ddPos={"bg-customCmdBtn p-0"}
        optStyle={
          "bg-customCmdBtn hover:bg-customCmdBtnHover hover:text-white hover:font-extrabold"
        }
        onSelect={(value) => setSelectedCmd(value)}
      />
      <input
        name="command"
        type="text"
        value={selectedCmd}
        className="mt-2 w-full rounded-lg bg-inherit p-2 text-black focus:ring-2 focus:ring-customCmdBtnHover"
        placeholder="command/query.."
        onChange={(event) => {
          setSelectedCmd(event.target.value);
        }}
      />
      <div className="mt-4 flex flex-grow flex-col">
        <p className="font-bold">JSON Payload</p>
        <textarea
          name="payload"
          type="text"
          className="block w-full flex-grow resize-none rounded-lg bg-inherit p-2 text-black focus:ring-2 focus:ring-customCmdBtnHover"
          placeholder="payload.."
          onChange={(event) => {
            setPayload(event.target.value);
          }}
          value={payload}
        />
      </div>
      <Button
        text={"Send"}
        style={
          "mt-2 ms-0 mx-auto bg-customCmdBtn font-medium hover:text-white hover:bg-customCmdBtnHover"
        }
        handleClick={sendCmd}
      />
    </div>
  );
}

const options = ["Command 1", "Command 2", "Command 3"];
