import { FaArrowRightLong } from "react-icons/fa6";
import bill from "../../assets/bill.png";
export default function ServicesTypes() {
  return (
    <div className="mt-10 flex flex-col">
      <div className="group relative flex w-full scale-100 overflow-hidden rounded-md border shadow-md group-hover:scale-50">
        <img
          src={bill}
          className="absolute inset-0 h-full w-full object-cover"
        ></img>
        <div className=" z-10 w-[60%] p-4 pl-10 md:p-4 lg:p-8">
          <h1 className="mb-1 text-lg font-bold text-primaryColor md:mb-4 md:text-xl lg:text-3xl">
            Aromatherapy Massage
          </h1>
          <p className="line-clamp-4 text-[10px] font-semibold text-white md:line-clamp-none lg:text-sm ">
            Aromatherapy massage integrates essential oils into the massage
            experience. The use of essential oils dates back thousands of years
            to ancient Egypt, where they often gave scented massages and
            aromatic baths.
          </p>
        </div>
        <div className="absolute -right-[36rem] hidden h-[20rem] w-full -translate-x-[140em] translate-y-[20em] rotate-[39deg] scale-[3] border-b bg-white duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 xl:block">
          <FaArrowRightLong className="absolute bottom-36 left-[39%] rotate-[-40deg] text-3xl text-black " />
        </div>
      </div>
    </div>
  );
}
