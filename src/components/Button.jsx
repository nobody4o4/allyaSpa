import { FaArrowRightLong } from "react-icons/fa6";

function Button(props) {
  return (
    <button className="group flex w-28 cursor-pointer select-none items-center  justify-center rounded-md  border-2  border-white bg-secondaryColor  text-sm text-white transition hover:border-2 hover:border-secondaryColor hover:bg-white md:w-40 md:text-base lg:w-fit lg:p-3 lg:text-base">
      <a
        href="#"
        className="group ml-3 flex w-full items-center justify-center rounded py-1 text-center text-sm font-bold group-hover:text-secondaryColor md:text-base"
      >
        {props.title}
      </a>
      <FaArrowRightLong className=" mx-2 h-6 w-0 transition-all group-hover:w-6 group-hover:text-secondaryColor" />
    </button>
  );
}

export default Button;
