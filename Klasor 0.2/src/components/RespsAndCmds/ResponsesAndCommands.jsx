import Response from "./Response";
import { useContext } from "react";
import CommandsAndQueries from "./CommandsAndQueries";
import { FilterContext } from "../../context/FilterContext";

export default function ResponsesAndCommands() {
  const { filter } = useContext(FilterContext); // Accessing filter state from context

  const filteredResponses = responses.filter((response) => {
    const filterValue = filter.value?.toLowerCase() || "";
    const filterType = filter.type?.toLowerCase() || "all";
    const lastChanged = filter.lastChanged;

    if (lastChanged === "value") {
      const valueExists =
        response.value && response.value.toLowerCase().includes(filterValue);
      const serviceExists =
        response.service &&
        response.service.toLowerCase().includes(filterValue);
      const topicExists =
        response.topic && response.topic.toLowerCase().includes(filterValue);
      return valueExists || serviceExists || topicExists;
    }

    if (lastChanged === "type") {
      if (filterType === "all") {
        return true; // Return all items if type is "all"
      }
      return (
        response.value && response.value.toLowerCase().includes(filterType)
      );
    }

    return true; // Default to showing all items if no lastChanged or invalid state
  });

  return (
    <div className="grid h-full grid-cols-3 gap-4">
      <div className="col-span-2 flex flex-col rounded-lg border border-stone-800">
        <div className="col-span-2 flex h-full max-h-[calc(100vh-8rem)] flex-col space-y-2 overflow-y-auto scrollbar-thumb scrollbar">
          {filteredResponses.map((response, index) => (
            <Response
              key={index}
              index={index}
              type={{
                value: response.value,
                service: response.service,
                topic: response.topic,
              }}
              json={myJson}
            />
          ))}
        </div>
      </div>
      <CommandsAndQueries />
    </div>
  );
}

const myJson = {
  value: "deneme",
  type: "k1.v0.1.3",
  content: "mg1.22",
  ipsum:
    "Voluptates consequuntur voluptatem asperiores, delectus sapiente earum tempora illum ducimus eum, aliquid reiciendis maiores.",
};

const responses = [
  { id: 1, value: "Event 1", service: "Service A", topic: "Topic X" },
  { id: 2, value: "Command 1", service: "Service B", topic: "Topic Y" },
  { id: 3, value: "Query 1", service: "Service C", topic: "Topic Z" },
];

const deneme = () => {};
