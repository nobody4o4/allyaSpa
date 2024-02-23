import { useState } from "react";
import bill from "../../assets/bill.png";
import Button from "../../components/Button";
import Booking from "../../components/Booking";

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
    <div className="flex flex-col items-center justify-center bg-neutralColor  px-4 lg:px-32 mt-10 py-24 relative ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <h1 className=" text-5xl text-center lg:text-6xl font-semibold ">
            Our Services
          </h1>
          <div className="mt-10 mb-9 text-center lg:text-start">
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
            className="h-[420px] md:h-[460px] lg:h-[471px] relative cursor-pointer overflow-hidden rounded "
            onMouseEnter={handleHoverPackage}
            onMouseLeave={handleHoverLeave}
          >
            <img
              src={bill}
              className={`w-full h-full rounded object-cover  ${
                hoverPackage
                  ? "scale-100 ease-in duration-1000 "
                  : "scale-105 ease-out duration-1000 "
              } `}
            ></img>
            {hoverPackage ? (
              <div className="inset-0 absolute group hover:bg-black hover:bg-opacity-25 ease-in duration-500">
                <div
                  className={`absolute bottom-8 right-2  md:right-5 lg:right-10 text-5xl  opacity-0 group-hover:opacity-100  ease-in duration-700   flex flex-col justify-end items-end`}
                >
                  <h1 className="italic text-3xl  lg:text-5xl text-cyan-200 font-serif font-extralight">
                    Spa Package
                  </h1>
                  <div className=" text-xs lg:text-sm text-white  flex flex-col justify-end items-end">
                    <p className="text-end">
                      These packages typically include a combination of
                      treatments such as:
                    </p>
                    <ul className="list-disc flex items-end flex-col">
                      <li>Massages</li>
                      <li>Facials</li>
                      <li>Body Scrubs</li>
                      <li>Manicures or Predicures</li>
                    </ul>
                    <p className="text-end">
                      Additionally, guests may have access to spa facilities
                      like saunas, steam rooms, or relaxation areas.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="absolute bottom-4 lg:bottom-8 right-5 lg:right-10 text-2xl lg:text-5xl font-serif font-extralight hover:opacity-15 ease-in duration-700 italic text-white">
                Spa Package
              </p>
            )}
          </div>
        </div>
        <div className="md:grid flex flex-wrap w-full  justify-center md:grid-cols-3 lg:grid-cols-1 lg:flex-col gap-4 lg:gap-7">
        {[1,2,3].map((hee)=>(
          
          <div className=" h-[16rem] w-full sm:w-[12rem] md:w-[16rem] lg:w-full lg:h-[14rem] relative rounded" key={hee}>
            <img
              src={bill}
              className="w-full h-full object-cover rounded"
            ></img>
            <p className="absolute  bottom-4 lg:bottom-8 right-5 lg:right-10 text-2xl lg:text-5xl font-serif font-extralight italic text-white">
              Massage
            </p>
          </div>
        ))}
          
        </div>
        {/* <div className="md:grid flex flex-wrap w-full border-2 justify-center md:grid-cols-3 lg:grid-cols-1 lg:flex-col gap-4 lg:gap-7">
        {[1,2,3].map((hee)=>(
          
          <div className=" h-[16rem] w-[160px] sm:w-[12rem] md:w-[16rem] lg:w-full lg:h-[14rem] relative rounded" key={hee}>
            <img
              src={bill}
              className="w-full h-full object-cover rounded"
            ></img>
            <p className="absolute  bottom-4 lg:bottom-8 right-5 lg:right-10 text-2xl lg:text-5xl font-serif font-extralight italic text-white">
              Massage
            </p>
          </div>
        ))}
          
        </div> */}
      </div>
      <div className="flex mt-4  w-full justify-center ">
        <Button title={"More Services"} />
      </div>
      <div className="absolute -bottom-32 sm:-bottom-14 md:-bottom-20 lg:-bottom-36">
        <Booking />

      </div>

    </div>
  );
}
