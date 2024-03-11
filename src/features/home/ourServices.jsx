import { useState } from "react";
import bill from "../../assets/bill.png";
import Button from "../../components/Button";
import Booking from "../../components/Booking";
import { Link } from "react-router-dom";

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
    <div className="relative mt-10 flex flex-col items-center  justify-center bg-neutralColor px-4 py-24 lg:px-32 ">
      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="">
          <h1 className=" text-center text-5xl font-semibold lg:text-6xl ">
            Our Services
          </h1>
          <div className="mb-9 mt-10 text-center lg:text-start">
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
            className="relative h-[420px] cursor-pointer overflow-hidden rounded md:h-[460px] lg:h-[471px] "
            onMouseEnter={handleHoverPackage}
            onMouseLeave={handleHoverLeave}
          >
            <img
              src={bill}
              className={`h-full w-full rounded object-cover  ${
                hoverPackage
                  ? "scale-100 duration-1000 ease-in "
                  : "scale-105 duration-1000 ease-out "
              } `}
            ></img>
            {hoverPackage ? (
              <div className="group absolute inset-0 duration-500 ease-in hover:bg-black hover:bg-opacity-25">
                <div
                  className={`absolute bottom-8 right-2  flex flex-col items-end  justify-end text-5xl  opacity-0 duration-700   ease-in group-hover:opacity-100 md:right-5 lg:right-10`}
                >
                  <h1 className="font-serif text-3xl  font-extralight italic text-cyan-200 lg:text-5xl">
                    Spa Package
                  </h1>
                  <div className=" flex flex-col items-end  justify-end text-xs text-white lg:text-sm">
                    <p className="text-end">
                      These packages typically include a combination of
                      treatments such as:
                    </p>
                    <ul className="flex list-disc flex-col items-end">
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
              <p className="absolute bottom-4 right-5 font-serif text-2xl font-extralight italic text-white duration-700 ease-in hover:opacity-15 lg:bottom-8 lg:right-10 lg:text-5xl">
                Spa Package
              </p>
            )}
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center  gap-4 md:grid md:grid-cols-3 lg:grid-cols-1 lg:flex-col lg:gap-7">
          {[1, 2, 3].map((hee) => (
            <div
              className=" relative h-[16rem] w-full rounded sm:w-[12rem] md:w-[16rem] lg:h-[14rem] lg:w-full"
              key={hee}
            >
              <img
                src={bill}
                className="h-full w-full rounded object-cover"
              ></img>
              <p className="absolute  bottom-4 right-5 font-serif text-2xl font-extralight italic text-white lg:bottom-8 lg:right-10 lg:text-5xl">
                Massage
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link to={"/services"} className="mt-4 flex  w-full justify-center ">
        <Button title={"More Services"} />
      </Link>
      <Link
        to={"/appointment"}
        className="absolute -bottom-32 w-full sm:-bottom-14 md:-bottom-20 lg:-bottom-36"
      >
        <Booking />
      </Link>
    </div>
  );
}
