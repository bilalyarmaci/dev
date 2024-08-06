import "flowbite";
import Navbar from "./components/Navbar/Navbar";
import ResponsesAndCommands from "./components/RespsAndCmds/ResponsesAndCommands";

export default function App() {
  return (
    <div className="mx-auto flex h-screen max-w-screen-page-lg flex-col space-y-2 p-2">
      <Navbar />
      <div className="flex-1">
        <ResponsesAndCommands />
      </div>
    </div>
  );
}
