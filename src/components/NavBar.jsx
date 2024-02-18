import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
      className={` h-[100pxa]  w-full z-40 top-0  ${
        path == "/"
          ? isScrolled
            ? "bg-[#24C9BF] bg-opacity-100 ease-in duration-300 fixed"
            : "bg-opacity-0 ease-out duration-300 fixed"
          : "bg-[#24C9BF] sticky"
      }`}
    >
      <div className="flex justify-between mx-32">
        <img src={logo} alt="logo" className="max-w-[120px]" />
        <div className="flex gap-x-32 justify-between h-fit my-auto font-semibold text-xl tracking-wide">
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
          <Link className="focus:border-b-2 focus:border-white">Gallery</Link>
        </div>
        <div className="flex gap-x-4">
          <button
            className=" justify-center  p-2 my-auto text-xl font-semibold text-emerald-50 border-2 border-solid border-white"
            aria-label="Book Appointment"
          >
            Book Appointment
          </button>
          <div className="flex flex-col flex-1 justify-center  my-auto border-l-2 border-white pl-4 py-3">
            <div className="text-xl italic font-bold text-emerald-50">
              Feel free to call us on
            </div>
            <div className="flex gap-x-2 text-lg font-semibold text-black items-center">
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
