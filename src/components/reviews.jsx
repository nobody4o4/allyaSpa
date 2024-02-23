import { FiStar } from "react-icons/fi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BiLike } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { GiBeveledStar } from "react-icons/gi";
import { LuMessageSquare } from "react-icons/lu";

export default function Reviews() {
  return (
    <div className="relative overflow-hidden rounded-bl-3xl rounded-tr-3xl bg-primaryColor p-6">
      <div className="flex justify-between px-4 text-2xl text-white">
        <p className="not-italic">Nishan Gurung</p>
        <div className="flex gap-2">
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
      <BiLike className="absolute bottom-5 left-6 rotate-[20deg] text-5xl text-white opacity-25" />
      <FiAward className="absolute left-24 top-16 rotate-[-20deg] text-4xl text-white opacity-25" />
      <GiBeveledStar className="absolute -top-4  left-56 rotate-[20deg] text-6xl text-white opacity-25" />
      <LuMessageSquare className="absolute left-[26rem]  top-16 rotate-[20deg] text-2xl text-white opacity-25" />
      <GiBeveledStar className="absolute left-[36rem]  top-16 rotate-[20deg] text-6xl text-white opacity-25" />
      <LuMessageSquare className="absolute bottom-10  right-[10rem] translate-x-9 rotate-[-20deg] text-4xl text-white opacity-25" />
      <GiBeveledStar className="absolute bottom-7 left-48 rotate-[20deg] text-4xl text-white opacity-25" />
      <FiAward className="absolute -bottom-3 left-[26rem] rotate-[20deg] text-5xl text-white opacity-25" />
    </div>
  );
}
