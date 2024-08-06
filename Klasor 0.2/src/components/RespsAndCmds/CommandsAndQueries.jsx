import { useState } from "react";
import Button from "../common/Button";
import DropdownSingle from "../common/DropdownSingle";

export default function CommandsAndQueries({ sendCmd }) {
  const [selectedCmd, setSelectedCmd] = useState("");
  const [payload, setPayload] = useState("");

  return (
    <div className="flex h-full flex-col rounded-lg border border-stone-800 bg-stone-200 p-2">
      <DropdownSingle
        text={"Common Commands"}
        textStyle={
          "px-2 font-medium border-stone-800 drop-shadow-md bg-stone-200 hover:bg-stone-700 hover:text-white"
        }
        options={options}
        ddPos={"bg-stone-600 p-0 border-stone-800"}
        optStyle={
          "bg-stone-600 text-white hover:bg-stone-100 font-bold hover:text-stone-600 text-base"
        }
        onSelect={(value) => setSelectedCmd(value)}
      />
      <input
        name="command"
        type="text"
        value={selectedCmd}
        className="mt-2 w-full rounded-lg border-stone-700 bg-inherit p-2 text-black focus:border-stone-700 focus:ring-2 focus:ring-stone-700"
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
          className="block w-full flex-grow resize-none rounded-lg bg-inherit p-2 text-black focus:border-stone-700 focus:ring-2 focus:ring-stone-700"
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
          "mt-2 ms-0 mx-auto bg-stone-200 font-medium hover:text-white hover:bg-stone-700 border-stone-800"
        }
        handleClick={sendCmd}
      />
    </div>
  );
}

const options = ["Command 1", "Command 2", "Command 3"];
