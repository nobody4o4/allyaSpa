import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import bill from "../../assets/bill.png"
export default function ServicesTypes() {
  return (
    <div className="flex flex-col mt-10">
    <div className="rounded-md border shadow-md flex w-full overflow-hidden relative" style={{backgroundImage: `url(${bill})`}}>
      <div className=" w-[60%] p-8 pl-10" >
        <h1 className="text-3xl text-primaryColor font-bold mb-4">Aromatherapy Massage</h1>
        <p className="text-sm font-semibold text-white">
          Aromatherapy massage integrates essential oils into the massage
          experience. The use of essential oils dates back thousands of
          years to ancient Egypt, where they often gave scented massages
          and aromatic baths.
        </p>
      </div>
    <div className=" border-b absolute -right-[36rem] w-full h-[20rem] rotate-[39deg] bg-white">
      <FaArrowRightLong className="text-3xl absolute bottom-36 left-[39%] rotate-[-40deg] text-black"/>
    </div>
    </div>
  </div>
  )
}
