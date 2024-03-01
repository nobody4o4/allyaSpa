import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaCreativeCommonsSamplingPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa6";
import ContactUsForm from "../features/contactUs/contactUsForm";
import FetchMain from "../services/fetchMain.service";
import { getContact } from "../endpoint/services.endpoint";

export default function ContactUs() {
  const { data } = FetchMain(getContact);

  console.log(data);
  return (
    <div className="h-full w-full pt-24 sm:mx-10 lg:mx-0">
      <div className="mb-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="mb-10 flex flex-col items-center justify-center gap-2">
            <h3 className="text-center text-4xl font-bold">Contact Us</h3>
            <p className="text-center font-bold text-gray-600">
              Any questions or remarks? Just write us a message.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg shadow-xl lg:flex-row">
            <div className="h-full w-full rounded-l-lg bg-secondaryColor p-16 px-10  text-white lg:w-2/5">
              <div>
                <h2 className="text-2xl font-bold lg:text-3xl">
                  Contact Information
                </h2>
                <p className="text-md mt-2">
                  Feel free to contact us for any queries or information.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-6">
                <div className="text-md flex items-center gap-5">
                  <BiSolidPhoneCall className="text-xl" />
                  <p>{data?.tel}</p>
                </div>
                <div className="text-md flex items-center gap-5">
                  <BiSolidPhoneCall className="text-xl" />
                  <p>{data?.phone}</p>
                </div>
                <div className="text-md flex items-center gap-5">
                  <FaCreativeCommonsSamplingPlus className="text-xl" />
                  <p>{data?.email}</p>
                </div>
                <div className="text-md flex items-center gap-5">
                  <FaLocationArrow className="text-xl" />
                  <p>{data?.address}</p>
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-3 lg:justify-start">
                <div className="cursor-pointer rounded-full border-2 border-white p-2 duration-500 ease-in hover:rotate-[360deg] hover:bg-white hover:text-black">
                  <FaTwitter className="text-xl" />
                </div>
                <div className="cursor-pointer rounded-full border-2 border-white p-2 duration-500 ease-in hover:rotate-[360deg] hover:bg-white hover:text-black">
                  <FaFacebookF className="text-xl" />
                </div>
                <div className="cursor-pointer rounded-full border-2 border-white p-2 duration-500 ease-in hover:rotate-[360deg] hover:bg-white hover:text-black">
                  <FaLinkedin className="text-xl" />
                </div>
                <div className="cursor-pointer rounded-full border-2 border-white p-2 duration-500 ease-in hover:rotate-[360deg] hover:bg-white hover:text-black">
                  <FaInstagram className="text-xl" />
                </div>
              </div>
            </div>
            <div className="w-full px-8  lg:w-3/5">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
