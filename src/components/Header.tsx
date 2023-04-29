import { FC, useState } from 'react';
import { Link } from 'gatsby';

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => setShowMenu((prevState) => !prevState);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          className="text-white no-underline hover:text-white hover:no-underline"
          href="#"
        >
          <span className="text-2xl pl-2">
            <i className="em em-grinning"></i>
            Guitar shop
          </span>
        </a>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 ${
          !showMenu && `hidden`
        }`}
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <Link
              to="/"
              className="inline-block py-2 px-4 text-white no-underline"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
