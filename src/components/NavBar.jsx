import logo from "../assets/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";

function NavBar() {
  return (
    <div className="bg-[#24C9BF] h-[100pxa] z-40 sticky top-0 ">
      <div className="flex justify-between mx-32">
        <img src={logo} alt="logo" className="max-w-[120px]" />
        <div className="flex gap-x-32 justify-between h-fit my-auto font-semibold text-xl tracking-wide">
          <button className="focus:border-b-2 focus:border-white">Home</button>
          <button className="focus:border-b-2 focus:border-white">
            About Us
          </button>
          <button className="focus:border-b-2 focus:border-white">
            Services
          </button>
          <button className="focus:border-b-2 focus:border-white">
            Gallery
          </button>
        </div>
        <div className="flex gap-x-4">
          <button
            className=" justify-center  p-2 my-auto text-xl font-semibold text-emerald-50 border-2 border-solid border-white"
            aria-label="Book Appointment"
          >
            Book Appointment
          </button>
          {/* <div>
              <p>Feel to call us on</p>
              <p>+123 12345678</p>
            </div> */}
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
