import { CiMail } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";
import ContactUsForm from "../features/contactUs/contactUsForm";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";

export default function ContactUs() {
  return (
    <div className="h-full w-full">
      <div className="mb-10 mt-10 flex h-full w-full items-center justify-center">
        <div className=" w-[70%] ">
          <div className="mb-10 flex flex-col items-center justify-center gap-2">
            <h3 className="text-4xl font-bold">Contact Us</h3>
            <p className="font-bold text-gray-600">
              Any question or remarks? Just write us a message
            </p>
          </div>
          <div className=" flex h-[34rem] items-center justify-center rounded-lg shadow-xl ">
            <div className="flex h-full w-[40%] flex-col gap-24 rounded-l-lg bg-secondaryColor p-8 px-10 text-white">
              <div>
                <h2 className="text-[28px] font-bold">Contact Information</h2>
                <p className="text-md mt-2">
                  Say something to start a live chat
                </p>
              </div>
              <div className="flex flex-col gap-12">
                <div className="text-md flex items-center gap-5">
                  <BiSolidPhoneCall className="text-xl" />
                  <p>9812357648</p>
                </div>
                <div className="text-md flex items-center gap-5">
                  <CiMail className="text-xl" />
                  <p>info@allyaspa.com.np</p>
                </div>
                <div className="text-md flex items-center gap-5">
                  <HiLocationMarker className="text-xl" />
                  <p>Street No. 17, Lakeside Pokhara Nepal</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="cursor-pointer rounded-full border-2 border-white p-2  duration-500 ease-in hover:rotate-[360deg] hover:bg-white hover:text-black">
                  <FaTwitter className="text-xl " />
                </div>
                <div className="cursor-pointer rounded-full border-2 border-white p-2  duration-500 ease-in hover:rotate-[360deg] hover:bg-white hover:text-black">
                  <FaFacebookF className="text-xl" />
                </div>
                <div className="cursor-pointer rounded-full border-2 border-white p-2  duration-500 ease-in hover:rotate-[360deg] hover:bg-white hover:text-black">
                  <FaLinkedin className="text-xl" />
                </div>
                <div className="cursor-pointer rounded-full border-2 border-white p-2  duration-500 ease-in hover:rotate-[360deg] hover:bg-white hover:text-black">
                  <RiInstagramFill className="text-xl" />
                </div>
              </div>
            </div>
            <div className="h-full w-[60%] rounded-r-lg pt-10">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
