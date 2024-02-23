import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function NavTest() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
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
      //   className="container relative mx-auto flex flex-col overflow-hidden px-4 py-4 text-slate-700 lg:flex-row lg:items-center"
      className={`top-0 z-40 flex w-screen flex-col overflow-hidden py-4 text-slate-700 lg:h-[100px] lg:flex-row lg:items-center ${
        isScrolled
          ? "fixed bg-primaryColor duration-300 ease-in"
          : "fixed bg-gradient-to-b from-primaryColor to-transparent backdrop-blur-lg"
      }
      ${isMenuOpen ? "h-fit pt-0" : "max-h-[100px]"}`}
    >
      <a
        href="#"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="mr-2 w-8">
          <img src={logo} alt="logo" className="max-w-[120px]" />
        </span>
      </a>
      <button
        className="absolute right-5 top-5 cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <nav
        aria-label="Header Navigation"
        className={`${
          isMenuOpen ? "max-h-60 pt-8" : "max-h-0 pt-0"
        } flex w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row`}
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          <li className="lg:mr-12">
            <Link to={"/"} className="focus:border-b-2 focus:border-white">
              Home
            </Link>
          </li>
          <li className="lg:mr-12">
            <Link
              to={"/about-us"}
              className="focus:border-b-2 focus:border-white"
            >
              About Us
            </Link>
          </li>
          <li className="lg:mr-12">
            <Link
              to={"/services"}
              className="focus:border-b-2 focus:border-white"
            >
              Services
            </Link>
          </li>
          <li className="lg:mr-12">
            <Link
              to={"/gallery"}
              className="focus:border-b-2 focus:border-white"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to={"/contact-us"}
              className="focus:border-b-2 focus:border-white"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
        <div className=" flex items-center lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <button className="my-auto justify-center border-2 border-solid border-white px-4 py-2 text-xl font-semibold text-emerald-50">
            Book Appointment
          </button>
          <div className=" flex  flex-1 flex-col justify-center border-l-2 border-white py-3 pl-4">
            <div className="text-xl font-bold italic text-emerald-50">
              Feel free to call us on
            </div>
            <div className="flex items-center gap-x-2 text-lg font-semibold text-black">
              <FaPhoneAlt className="aspect-square" />
              <p>+123-12345678</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavTest;
