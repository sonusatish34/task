// components/HamburgerMenu.js

import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center">
      <button
        className="block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 fill-current text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
          />
        </svg>
      </button>

      <nav className={`${isOpen ? 'block' : 'hidden'} lg:flex`}>
        <ul className="lg:flex  items-center">
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900 lg:mx-3">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900 lg:mx-3">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900 lg:mx-3">
              Contact
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-700 hover:text-red-900 lg:mx-3">
              Log out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
