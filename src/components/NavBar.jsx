import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Use useLocation hook to get current location
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
    <div
      className={` top-0  z-40 h-[100pxa] w-full  ${
        path == "/" || path == "/services" || path == "/gallery"
          ? isScrolled
            ? "b  fixed bg-primaryColor duration-300 ease-in"
            : "backdrop-blur-lsg fixed bg-gradient-to-b from-primaryColor   to-transparent"
          : "fixed bg-primaryColor duration-700 ease-out"
      }`}
    >
      <div className="mx-32 flex justify-between gap-x-4">
        <img src={logo} alt="logo" className="max-w-[120px]" />
        <div className="my-auto flex  h-fit gap-x-16 text-xl font-semibold tracking-wide">
          <Link to={"/"} className="focus:border-b-2 focus:border-white">
            Home
          </Link>
          <Link
            to={"/about-us"}
            className="focus:border-b-2 focus:border-white"
          >
            About Us
          </Link>
          <Link
            to={"/services"}
            className="focus:border-b-2 focus:border-white"
          >
            {" "}
            Services
          </Link>
          <Link to={"/gallery"} className="focus:border-b-2 focus:border-white">
            Gallery
          </Link>
          <Link
            to={"/contact-us"}
            className="focus:border-b-2 focus:border-white"
          >
            Contact us
          </Link>
        </div>
        <div className="flex gap-x-4">
          <button
            className=" my-auto  justify-center border-2 border-solid border-white px-4 py-2 text-xl font-semibold text-emerald-50"
            aria-label="Book Appointment"
          >
            Book Appointment
          </button>
          <div className="my-auto flex flex-1 flex-col  justify-center border-l-2 border-white py-3 pl-4">
            <div className="text-xl font-bold italic text-emerald-50">
              Feel free to call us on
            </div>
            <div className="flex items-center gap-x-2 text-lg font-semibold text-black">
              <FaPhoneAlt className=" aspect-square" />
              <p>+123-12345678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
