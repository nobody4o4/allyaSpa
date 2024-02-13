import React, { useState } from "react";
import bill from "../../assets/bill.png";
import Button from "../../components/Button";

//TODO: Need to break into several components
export default function OurServices() {
  const [hoverPackage, setHoverPackage] = useState(false);

  const handleHoverPackage = () => {
    setHoverPackage(true);
  };
  const handleHoverLeave = () => {
    setHoverPackage(false);
  };
  return (
    <div className="flex flex-col items-center justify-center bg-neutralColor  px-32 mt-10 py-32">
      <div className="grid grid-cols-2 gap-10">
        <div className="">
          <h1 className="text-6xl font-extralight font-serif italic">
            Our Services
          </h1>
          <div className="mt-10 mb-9">
            <p className="text-[16px] font-thin">
              Indulge in relaxation and rejuvenation at our spa oasis. Unwind
              with luxurious massages, facials, and body treatments tailored to
              your needs. Pamper yourself with soothing aromatherapy, calming
              steam rooms, and invigorating sauna sessions. Experience ultimate
              bliss with our expertly curated spa packages, designed to melt
              away stress and leave you feeling refreshed from head to toe.
              Escape the hustle and bustle of everyday life and immerse yourself
              in tranquility at our serene sanctuary.
            </p>
          </div>
          <div
            className="h-[471px] relative cursor-pointer overflow-hidden rounded "
            onMouseEnter={handleHoverPackage}
            onMouseLeave={handleHoverLeave}
          >
            <img
              src={bill}
              className={`w-full h-full rounded  ${
                hoverPackage
                  ? "scale-100 ease-in duration-1000 "
                  : "scale-105 ease-out duration-1000 "
              } `}
            ></img>
            {hoverPackage ? (
              <div className="inset-0 absolute group hover:bg-black hover:bg-opacity-25 ease-in duration-500">
                <div
                  className={`absolute bottom-8 right-10 text-5xl  opacity-0 group-hover:opacity-100  ease-in duration-700   flex flex-col justify-end items-end`}
                >
                  <h1 className="italic text-cyan-200 font-serif font-extralight">
                    Spa Package
                  </h1>
                  <div className=" text-sm text-white  flex flex-col justify-end items-end">
                    <p>
                      These packages typically include a combination of
                      treatments such as:
                    </p>
                    <ul className="list-disc flex items-end flex-col">
                      <li>Massages</li>
                      <li>Facials</li>
                      <li>Body Scrubs</li>
                      <li>Manicures or Predicures</li>
                    </ul>
                    <p>
                      Additionally, guests may have access to spa facilities
                      like saunas, steam rooms, or relaxation areas.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="absolute bottom-8 right-10 text-5xl font-serif font-extralight hover:opacity-15 ease-in duration-700 italic text-white">
                Spa Package
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className=" h-[14rem] relative rounded">
            <img
              src={bill}
              className="w-full h-full object-cover rounded"
            ></img>
            <p className="absolute bottom-8 right-10 text-5xl font-serif font-extralight italic text-white">
              Massage
            </p>
          </div>
          <div className=" h-[14rem] relative rounded">
            <img
              src={bill}
              className="w-full h-full object-cover rounded"
            ></img>
            <p className="absolute bottom-8 right-10 text-5xl font-serif font-extralight italic text-white">
              Steam Room
            </p>
          </div>
          <div className=" h-[14rem] relative rounded">
            <img
              src={bill}
              className="w-full h-full object-cover rounded"
            ></img>
            <p className="absolute bottom-8 right-10 text-5xl font-serif font-extralight italic text-white">
              {" "}
              Facials
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-4  w-full justify-center ">
        <Button title={"More Services"} />
      </div>
    </div>
  );
}
