import { useState } from "react";
import Button from "../common/Button";

export default function Response({ index, type, json }) {
  const [isJsonVisible, setIsJsonVisible] = useState(false);

  return (
    <div className="m-2 space-y-1 rounded-md border border-black p-2">
      <p>{index}</p>
      <p>
        {type.value} {type.service} {type.topic}
      </p>
      {json && (
        <Button
          text={
            <div className="inline-flex justify-center">
              <p className="w-12">{isJsonVisible ? "Hide" : "Show"}</p>
              <span>JSON</span>
              <span className="material-symbols-rounded">
                {isJsonVisible ? "keyboard_arrow_up" : "keyboard_arrow_down"}
              </span>
            </div>
          }
          handleClick={() => {
            setIsJsonVisible(!isJsonVisible);
          }}
          style="px-0 rounded-md bg-green-400"
        />
      )}
      {isJsonVisible && (
        <pre className="mt-2 max-h-96 overflow-y-auto whitespace-pre-wrap break-words bg-gray-100 p-2">
          {JSON.stringify(json, null, 2)}
        </pre>
      )}
    </div>
  );
}
