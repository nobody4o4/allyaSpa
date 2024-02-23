import { FaArrowRightLong } from "react-icons/fa6";

function Button(props) {
  return (
    <button className="group text-sm md:text-base lg:text-base hover:bg-white border-2 border-white  hover:border-2 hover:border-secondaryColor  hover:  flex w-28 md:w-40 lg:w-44 cursor-pointer select-none items-center justify-center rounded-md bg-secondaryColor px-1 lg:px-4 py-1 lg:py-4 text-white transition">
      <a
        href="#"
        className="group  group-hover:text-secondaryColor flex  w-full items-center justify-center rounded py-1 text-center font-bold"
      >
        {props.title}
      </a>
      <FaArrowRightLong className="flex-0 group-hover:w-6 ml-4 h-6 w-0 group-hover:text-secondaryColor transition-all" />
    </button>
  );
}

export default Button;
