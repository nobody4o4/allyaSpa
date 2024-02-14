import React from "react";
import MainGallery from "../gallery/mainGallery";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";

//!Here will be the top part details of the service like gallery and the info
export default function TopDetails() {
  return (
    <div className="flex gap-10  mx-48">
      <MainGallery />
      <div className="flex flex-col gap-8 ">
        <h1 className="text-4xl font-bold">Swedish Massage</h1>
        <div className="flex flex-col gap-2  text-sm font-semibold">
          <div className="flex items-center gap-2">
            <input type="radio" className="w-5 h-5 "></input>
            <label>60 Mins - NPR 6,000 /-</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" className="w-5 h-5 "></input>
            <label>60 Mins - NPR 6,000 /-</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" className="w-5 h-5 "></input>
            <label>60 Mins - NPR 6,000 /-</label>
          </div>
        </div>
        <button className="group hover:bg-white border-2 border-white  hover:border-2 hover:border-[#24A1C9]  hover:  flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-[#24A1C9] px-4 py-2 text-white transition">
      <a
        href="#"
        className="group  group-hover:text-[#24A1C9] flex w-full items-center justify-center rounded py-1 text-center font-bold"
      >
        Book Now
      </a>
      <FaArrowRightLong className="flex-0 group-hover:w-6 ml-4 h-6 w-0 group-hover:text-[#24A1C9] transition-all" />
    </button>
      </div>
    </div>
  );
}
