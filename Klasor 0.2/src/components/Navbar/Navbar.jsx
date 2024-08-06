import ApiGW from "./ApiGW";
import Filter from "../Filter";
import Button from "../common/Button";
import LoginBtn from "./LoginBtn";
import TopicsToListen from "./TopicsToListen";

export default function Navbar() {
  return (
    <>
      {/* Container: login, topicsToListen, apiGW */}
      <div className="flex flex-wrap items-center justify-center sm:space-x-3">
        <LoginBtn /*** PROD: ADD handleLogin ***/ />
        <TopicsToListen style={"mb-2 lg:mb-0"} />
        <ApiGW />
      </div>
      {/* Container: filter, clearOutput*/}
      <div className="mx-auto flex flex-wrap sm:space-x-2">
        <Filter />
        <Button
          text={"Clear Output"}
          style={
            "font-medium rounded-lg py-2.5 px-1 bg-blue-100 border-blue-900 text-blue-900 hover:bg-blue-700 hover:text-white"
          } /*** PROD: ADD handleClick ***/
        />
      </div>
    </>
  );
}
