export default function LoginBtn({ handleLogin }) {
  return (
    <>
      <button
        id="loginHoverButton"
        data-dropdown-toggle="loginHover"
        data-dropdown-trigger="hover"
        className="mb-2 inline-flex items-center rounded-lg border border-black bg-customNavBg px-3 py-[9px] text-center transition-all ease-in-out hover:bg-customNavBgHover hover:text-white lg:mb-0"
        type="button"
      >
        Log in
      </button>

      <div
        id="loginHover"
        className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-customNavBg px-5 py-1 text-center shadow"
      >
        <ul
          className="py-2 text-sm text-stone-700"
          aria-labelledby="loginHoverButton"
        >
          <li>
            <label
              htmlFor="website-admin"
              className="block text-left font-medium text-gray-900"
            >
              Username
            </label>
            <div className="flex w-36">
              <span className="material-symbols-rounded rounded-e-0 inline-flex items-center rounded-s-md border border-e-0 border-stone-700 bg-stone-200 px-3">
                account_circle
              </span>

              <input
                type="text"
                id="website-admin"
                className="block w-56 min-w-0 flex-1 rounded-none rounded-e-lg border border-stone-700 bg-inherit p-2 text-sm focus:border-stone-500 focus:ring-stone-500"
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
              <span className="material-symbols-rounded rounded-e-0 inline-flex items-center rounded-s-md border border-e-0 border-stone-700 bg-stone-200 px-3">
                password
              </span>

              <input
                type="password"
                id="pass"
                className="block w-56 min-w-0 flex-1 rounded-none rounded-e-lg border border-stone-700 bg-inherit p-2 text-sm focus:border-stone-500 focus:ring-stone-500"
                placeholder="********"
              />
            </div>
          </li>
        </ul>
        <button
          type="button"
          className="my-2 rounded-lg bg-stone-300 px-5 py-2 text-center text-sm font-medium transition-all ease-in-out hover:scale-105 hover:bg-stone-700 hover:font-bold hover:text-white"
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </>
  );
}
