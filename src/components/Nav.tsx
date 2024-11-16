import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-black border-black dark:bg-black dark:border-black shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://bllimousines.com/wp-content/uploads/2022/05/rsz_jpeg-300x63.jpg"
            className="h-8"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-white focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-white rounded-lg b md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  text-white  dark:bg-black md:dark:bg-black dark:border-black">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bounded md:bg-transparent md:p-0 md:dark:text-Fire dark:bg-black md:dark:bg-transparent hover:text-Fire "
                aria-current="page"
              >
                <Link to="/"> Home</Link>
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-Fire md:p-0 md:w-auto dark:text-white md:dark:hover:text-Fire dark:focus:text-white dark:border-black dark:hover:bg-black md:dark:hover:bg-transparent text-white"
              >
                <Link to="/service">Services</Link>{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 text-white dark:hover:bg-Fire dark:hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-white dark:hover:bg-Fire dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-white dark:hover:bg-Fire dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm  text-white  hover:bg-gray-100 dark:hover:bg-Fire dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bg-#b92b27 text-white"
              >
                <Link to="/about">About Us</Link>
              </a>
            </li>
            <li>
              <a className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-Fire md:p-0 dark:text-white md:dark:hover:text-Fire dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-white">
                <Link to="/fleet" className="">
                  {" "}
                  Fleet
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-Fire md:p-0 dark:text-white md:dark:hover:text-Fire dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-white"
              >
                <Link to="/contact">Contact</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
