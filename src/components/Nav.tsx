import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-black shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://bllimousines.com/wp-content/uploads/2022/05/rsz_jpeg-300x63.jpg"
            className="h-8"
            alt="Logo"
          />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-white focus:ring-gray-200"
          aria-controls="navbar-dropdown"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:flex-row md:space-x-8 md:p-0 text-white">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 hover:text-red-500 md:hover:text-red-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="block py-2 px-3 hover:text-red-500 md:hover:text-red-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 hover:text-red-500 md:hover:text-red-700"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/fleet"
                className="block py-2 px-3 hover:text-red-500 md:hover:text-red-700"
              >
                Fleet
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 hover:text-red-500 md:hover:text-red-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
