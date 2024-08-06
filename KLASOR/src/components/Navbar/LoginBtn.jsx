export default function LoginBtn({ handleLogin }) {
  return (
    <>
      <button
        id="loginHoverButton"
        data-dropdown-toggle="loginHover"
        data-dropdown-trigger="hover"
        className="mb-2 inline-flex items-center rounded-lg border border-black bg-customNavBg px-3 py-[9px] text-center hover:bg-customNavBgHover lg:mb-0"
        type="button"
      >
        Log in
      </button>

      <div
        id="loginHover"
        className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-customNavBg px-5 py-1 text-center shadow dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="loginHoverButton"
        >
          <li>
            <label
              htmlFor="website-admin"
              className="block text-left font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <div className="flex w-36">
              <span className="material-symbols-rounded rounded-e-0 inline-flex items-center rounded-s-md border border-e-0 border-slate-500 bg-customNavBgHover px-3 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                account_circle
              </span>

              <input
                type="text"
                id="website-admin"
                className="block w-56 min-w-0 flex-1 rounded-none rounded-e-lg border border-slate-500 bg-inherit p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="elonmusk"
              />
            </div>
          </li>
          <li>
            <label
              htmlFor="pass"
              className="mt-3 block text-left font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <div className="flex w-36">
              <span className="material-symbols-rounded rounded-e-0 inline-flex items-center rounded-s-md border border-e-0 border-slate-500 bg-customNavBgHover px-3 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                password
              </span>

              <input
                type="password"
                id="pass"
                className="block w-56 min-w-0 flex-1 rounded-none rounded-e-lg border border-slate-500 bg-inherit p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="********"
              />
            </div>
          </li>
        </ul>
        <button
          type="button"
          className="my-2 rounded-lg bg-customNavBgHover px-5 py-2 text-center text-sm font-medium hover:scale-105 hover:bg-orange-300 focus:outline-none"
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </>
  );
}
