"use client";
import { useLenis } from "../../hooks/useLenis";

export default function Navbar() {
  const { scrollTo } = useLenis();

  return (
    <>
      <div className="fixed top-10 left-1/2 -translate-x-1/2 flex justify-center rounded-full px-0.5 py-0.5 bg-gradient-to-r from-white via-gray-800 to-neonOrange z-50">
        <nav className="w-full bg-black text-white shadow-md rounded-full px-3">
          <div className="text-xl items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col text-lg font-bold font-inter md:space-x-6 rtl:space-x-reverse md:flex-row">
              <li
                className="scale-110 transition-all duration-300 hover:scale-100 block py-3 px-2 text-white hover:text-neonOrange cursor-pointer"
                onClick={() => scrollTo("#home")} onMouseEnter={() => scrollTo("#home")}
              >
                Home
              </li>
              <li
                className="scale-110 transition-all duration-300 hover:scale-100 block py-3 px-2 text-white hover:text-neonOrange cursor-pointer"
                onClick={() => scrollTo("#services")} onMouseEnter={() => scrollTo("#services")}
              >
                Services
              </li>
              <li
                className="scale-110 transition-all duration-300 hover:scale-100 block py-3 px-2 text-white hover:text-neonOrange cursor-pointer"
                onClick={() => scrollTo("#reviews")} onMouseEnter={() => scrollTo("#reviews")}
              >
                Reviews
              </li>
              <li
                className="scale-110 transition-all duration-300 hover:scale-100 block py-3 px-2 text-white hover:text-neonOrange cursor-pointer"
                onClick={() => scrollTo("#team")} onMouseEnter={() => scrollTo("#team")}
              >
                Team
              </li>
              <li
                className="scale-110 transition-all duration-300 hover:scale-100 block py-3 px-2 text-white hover:text-neonOrange cursor-pointer"
                onClick={() => scrollTo("#blog")} onMouseEnter={() => scrollTo("#blog")}
              >
                Blog
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="fixed top-10 right-10 z-50 px-0.5 py-0.5 rounded-full">
        <button
          className="text-2xl font-bold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-electricBlue from-gray-900 to-black"
          onClick={() => scrollTo("#contact")} onMouseEnter={() => scrollTo("#contact")}
        >
          Contact Us
        </button>
      </div>
    </>
  );
}
