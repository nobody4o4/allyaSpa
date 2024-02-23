import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 600) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);

  return (
    <header
      className={` z-40 flex w-full flex-col justify-between overflow-hidden px-10 text-slate-700 lg:flex-row lg:items-center ${
        isScrolled
          ? "fixed bg-primaryColor duration-300 ease-in"
          : "fixed bg-gradient-to-b from-primaryColor to-transparent backdrop-blur-lg"
      }
      ${isMenuOpen ? "h-auto pt-8" : "h-[100px]"}`}
    >
      <div className="flex w-full items-center justify-between lg:w-auto">
        <Link to={"/"} className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-auto w-24 scale-125 overflow-x-hidden"
          />
        </Link>
        <button
          className="block focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6 text-slate-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block pb-4" : "hidden"
        } lg:flex lg:flex-row lg:items-center`}
      >
        <ul className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
          <li>
            <Link
              to={"/"}
              className="text-2xl font-medium text-slate-700 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about-us"}
              className="text-2xl font-medium text-slate-700 hover:text-gray-900"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/services"}
              className="text-2xl font-medium text-slate-700 hover:text-gray-900"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={"/gallery"}
              className="text-2xl font-medium text-slate-700 hover:text-gray-900"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to={"/contact-us"}
              className="text-2xl font-medium text-slate-700 hover:text-gray-900"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-8">
        <button className=" hidden rounded-md border-2 bg-primaryColor px-4 py-2 text-base font-medium text-white shadow-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800 lg:block">
          Book Appointment
        </button>
        <div className="hidden items-center space-x-2 lg:flex ">
          <FaPhoneAlt className="text-xl text-slate-700 " />
          <span className="text-lg font-medium text-slate-700">
            +123-12345678
          </span>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
