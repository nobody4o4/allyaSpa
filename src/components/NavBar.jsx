import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { fetchImage } from "../utils/fetchImage";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  console.log(location);
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
    setIsMenuOpen(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);

  return (
    <header
      className={`z-40 flex w-full flex-col justify-between overflow-hidden px-3 text-slate-700 sm:px-5 md:px-8 lg:flex-row lg:items-center lg:px-8 ${
        isScrolled
          ? "fixed bg-primaryColor duration-300 ease-in"
          : "fixed bg-gradient-to-b from-primaryColor to-transparent backdrop-blur-sm"
      }
      ${isMenuOpen ? "h-auto" : "h-[100px]"}`}
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
        <ul className="flex flex-col items-center space-y-4 text-lg md:space-x-4 lg:flex-row lg:space-x-8 lg:space-y-0 lg:text-xl">
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
              className={`text-2xl font-medium  ${path == "/about-us" ? "text-slate-100 hover:text-slate-300" : "text-slate-700 hover:text-gray-900"} `}
            >
              About-Us
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
              Contact-Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-8">
        <Link
          to="/appointment"
          className=" hidden rounded-md border-2 bg-primaryColor px-4 py-2 text-base font-medium text-white shadow-lg hover:bg-teal-400  lg:block"
        >
          Book Appointment
<<<<<<< HEAD
        </button>
=======
        </Link>
>>>>>>> 8aa19dd473bafd707c33e82a029553b592b0943b
        <div className="hidden w-fit items-center space-x-2 2md:flex  ">
          <FaPhoneAlt className="text-xl text-slate-700 " />
          <span className="text-lg font-medium text-slate-700">
            +123-12345678
          </span>
        </div>
        <img src={image}></img>
      </div>
    </header>
  );
}

export default NavBar;
