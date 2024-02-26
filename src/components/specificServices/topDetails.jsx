import React from "react";
import MainGallery from "../gallery/mainGallery";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TopDetails() {
  return (
    <div className="flex w-full px-2 sm:px-6 lg:px-8">
      <div className="flex w-full  justify-center gap-2 md:gap-10">
        <MainGallery />
        <div className="flex flex-col gap-2">
          <h1 className=" text-xl font-bold md:text-xl lg:text-4xl">
            Swedish Massage
          </h1>
          <div className=" flex flex-col gap-2 text-[10px] font-semibold md:text-sm">
            <div className="flex items-center gap-2">
              <label>60 Mins - NPR 6,000 /-</label>
            </div>
            <div className="flex items-center gap-2">
              <label>60 Mins - NPR 6,000 /-</label>
            </div>
            <div className="flex items-center gap-2">
              <label>60 Mins - NPR 6,000 /-</label>
            </div>
          </div>
          <Button title={"Book Now"} />
        </div>
      </div>
    </div>
  );
}
