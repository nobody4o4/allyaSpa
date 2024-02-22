import { CiMail } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";
import ContactUsForm from "../features/contactUs/contactUsForm";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";

export default function ContactUs() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex items-center justify-center mt-10 mb-10">
        <div className=" w-[70%] ">
          <div className="flex items-center justify-center flex-col mb-10 gap-2">
            <h3 className="text-4xl font-bold">Contact Us</h3>
            <p className="font-bold text-gray-600">
              Any question or remarks? Just write us a message
            </p>
          </div>
          <div className=" flex items-center justify-center rounded-lg shadow-xl h-[34rem] ">
            <div className="w-[40%] h-full flex flex-col gap-24 p-8 px-10 bg-secondaryColor rounded-l-lg text-white">
              <div>
                <h2 className="text-[28px] font-bold">Contact Information</h2>
                <p className="text-md mt-2">
                  Say something to start a live chat
                </p>
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex text-md items-center gap-5">
                  <BiSolidPhoneCall className="text-xl" />
                  <p>9812357648</p>
                </div>
                <div className="flex text-md items-center gap-5">
                  <CiMail className="text-xl" />
                  <p>info@allyaspa.com.np</p>
                </div>
                <div className="flex text-md items-center gap-5">
                  <HiLocationMarker className="text-xl" />
                  <p>Street No. 17, Lakeside Pokhara Nepal</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="border-2 border-white rounded-full p-2 hover:rotate-[360deg]  hover:bg-white ease-in duration-500 hover:text-black cursor-pointer">
                  <FaTwitter className="text-xl " />
                </div>
                <div className="border-2 border-white rounded-full p-2 hover:rotate-[360deg]  hover:bg-white ease-in duration-500 hover:text-black cursor-pointer">
                  <FaFacebookF className="text-xl" />
                </div>
                <div className="border-2 border-white rounded-full p-2 hover:rotate-[360deg]  hover:bg-white ease-in duration-500 hover:text-black cursor-pointer">
                  <FaLinkedin className="text-xl" />
                </div>
                <div className="border-2 border-white rounded-full p-2 hover:rotate-[360deg]  hover:bg-white ease-in duration-500 hover:text-black cursor-pointer">
                  <RiInstagramFill className="text-xl" />
                </div>
              </div>
            </div>
            <div className="w-[60%] h-full rounded-r-lg pt-10">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
