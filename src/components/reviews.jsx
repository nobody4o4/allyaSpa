<<<<<<< HEAD
import billie from "../assets/asset 21.jpeg";
import { FiStar } from "react-icons/fi";
import { ImQuotesLeft } from "react-icons/im";

export default function Reviews() {
  return (
    <div className="rounded-r-md p-4 bg-cyan-300">
      <div className="flex justify-between">
        <p>Nishan Gurung</p>
        <div className="gap-2 flex">
          <FiStar />
        </div>
      </div>
      <div>
        <ImQuotesLeft />
      </div>
=======
import React from "react";
import billie from "../assets/asset 21.jpeg";
import { FiStar } from "react-icons/fi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BiLike } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { GiBeveledStar } from "react-icons/gi";
import { LuMessageSquare } from "react-icons/lu";

export default function Reviews() {
  return (
    <div className="rounded-tr-3xl rounded-bl-3xl p-6 relative overflow-hidden" style={{background:'#24C9BF'}}>
      <div className="flex justify-between text-white text-2xl px-4">
        <p className="not-italic">Nishan Gurung</p>
        <div className="gap-2 flex">
          {[1, 2, 3, 4, 5].map((hehe) => (
            <FiStar key={hehe} />
          ))}
        </div>
      </div>
      <div className="relative mt-10 p-4">
        <ImQuotesLeft className="absolute top-0 text-white" />
        <div className="m-4 mx-8 text-base font-thin *:italic">
          <p>
            Morbi blandit cursus risus at ultrices mi tempus imperdiet. Vitae
            tempus quam pellentesque nec nam aliquam sem et. Tincidunt tortor
            aliquam nulla facilisi cras fermentum odio. Quis eleifend quam
            adipiscing vitae proin sagittis. Sit amet commodo nulla facilisi
            nullam vehicula. Ut faucibus pulvinar elementum integer.
          </p>
        </div>
        <ImQuotesRight className="absolute bottom-6 right-5 text-white" />
      </div>
      <BiLike className="absolute bottom-5 left-6 rotate-[20deg] text-5xl opacity-25 text-white" />
      <FiAward className="absolute top-16 left-24 rotate-[-20deg] text-4xl opacity-25 text-white" />
      <GiBeveledStar className="absolute -top-4  left-56 rotate-[20deg] text-6xl opacity-25 text-white" />
      <LuMessageSquare className="absolute top-16  left-[26rem] rotate-[20deg] text-2xl opacity-25 text-white"/>
      <GiBeveledStar className="absolute top-16  left-[36rem] rotate-[20deg] text-6xl opacity-25 text-white" />
      <LuMessageSquare className="absolute bottom-10  right-[10rem] rotate-[-20deg] text-4xl opacity-25 text-white"/>
      <GiBeveledStar className="absolute bottom-7 left-48 rotate-[20deg] text-4xl opacity-25 text-white" />
      <FiAward className="absolute -bottom-3 left-[26rem] rotate-[20deg] text-5xl opacity-25 text-white" />
>>>>>>> 2ca12e2b691f84fa02d759d690ed93902d793aaa
    </div>
  );
}
