import logo from "../assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer className="bg-[#24C9BF]">
        <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div className="mb-6 h-2/3 items-center space-x-2 max-w-sm">
            <img className="h-2/3 object-center " src={logo} alt="" />
            <div className="text-3xl flex justify-between w-2/3">
              <FaFacebook className="text-slate-950" />
              <FaInstagram className="text-slate-950" />
              <FaTwitter className="text-slate-950" />
            </div>
          </div>

          <div className="">
            <div className="mt-4 mb-2 font-semibold text-xl xl:mb-4">
              Services
            </div>
            <nav aria-label="Guides Navigation" className="text-slate-950">
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Sauna
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Massage
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Steam room
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Facials
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Spa Package
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className="mt-4 mb-2 font-semibold text-xl xl:mb-4">
              Customer Care
            </div>
            <nav aria-label="Footer Navigation" className="text-slate-950">
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    FAQs
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className="mt-4 mb-2 font-semibold text-xl xl:mb-4">
              Customer Care
            </div>
            <nav aria-label="Footer Navigation" className="text-slate-950">
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Copyright Information
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
            <p className="">© 2024 Allya | All Rights Reserved</p>
            <p className="-order-1 sm:order-none">
              Powered By Websoft Technology Nepal
            </p>
            <p className="">
              <a className="" href="#">
                Privacy Policy
              </a>
              <span>|</span>
              <a className="" href="#">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
