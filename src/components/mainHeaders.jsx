import React from "react";
import billie from "../assets/bill.png";
import allya from "../assets/Logo.png"

export default function MainHeaders() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full">
        <div className="flex justify-center  items-center">
            <img className="w-36 h-36" src={allya}></img>
        </div>
      </div>
      <div className="w-full h-screen">
        <img className="w-full h-full object-cover" src={billie}></img>
      </div>
    </div>
  );
}
