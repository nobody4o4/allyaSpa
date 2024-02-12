import React from 'react'
import billie from "../assets/asset 21.jpeg"
import { FiStar } from "react-icons/fi";
import { ImQuotesLeft } from "react-icons/im";


export default function Reviews() {
  return (
    <div className='rounded-r-md p-4 bg-cyan-300'>
        <div className='flex justify-between'>
            <p>Nishan Gurung</p>
            <div className='gap-2 flex'>
                <FiStar />
            </div>
        </div>
        <div>
        <ImQuotesLeft />

        </div>
    </div>
  )
}
