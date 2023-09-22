"use client";
import Image from "next/image";

const HomeNavbar = () => {
  return (
    <>
      <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
        <div className="mx-6 flex flex-wrap items-center justify-between  p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <picture>
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
                width={25}
                height={500}
              />
            </picture>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white py-5 px-10 tracking-3.2 bg-transparent border border-solid border-light  rounded-none hover:bg-alter focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              BOOK NOW!
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col uppercase tracking-3.9 text-13 p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="py-4 px-5">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4  text-white  rounded md:bg-transparent md:text-alter  md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              {/* ----------------- */}
              <li className="group relative py-4 px-5">
                <a
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="flex items-center justify-between py-2 pl-3 pr-4 w-full text-white rounded hover:text-alter  md:hover:text-alter md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  OUR SPA
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
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
                </a>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownHover"
                  className="min-w-260 group-hover:block absolute top-14 z-10 hidden bg-white divide-y divide-gray-100  shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className=" top-0 py-15 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 min-w-260 text-11 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 min-w-260 text-11 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 min-w-260 text-11 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* ------------------ */}
              <li className="py-4 px-5">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:text-alter  md:hover:text-alter md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li className="py-4 px-5">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:text-alter  md:hover:text-alter md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      ;
    </>
  );
};

export default HomeNavbar;
