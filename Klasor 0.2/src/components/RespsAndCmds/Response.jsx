import { useState } from "react";
import Button from "../common/Button";

export default function Response({ index, type, json }) {
  const [isJsonVisible, setIsJsonVisible] = useState(false);

  return (
    <div
      className={`mt-2 mx-2 rounded-md border border-black p-2 ${type.value === "Event" ? "bg-blue-100" : "bg-stone-200"}`}
    >
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
          style="py-0.5 rounded-md bg-blue-100 hover:bg-blue-700 hover:text-white border-blue-900"
        />
      )}
      {isJsonVisible && (
        <pre className="scrollbar scrollbar-thumb mt-2 max-h-[calc(100vh-16rem)] overflow-y-auto whitespace-pre-wrap break-words bg-gray-100 p-2">
          {JSON.stringify(json, null, 2)}
        </pre>
      )}
    </div>
  );
}
