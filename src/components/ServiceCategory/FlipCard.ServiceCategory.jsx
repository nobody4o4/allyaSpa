import { Link } from "react-router-dom";

function FlipCardServiceCategory({ name, description, image }) {
  return (
    <div className="relative mx-5 flex h-60 md:mx-28 lg:mx-52">
      <div className="bottom-0 ml-10 mt-10 flex w-full flex-row-reverse bg-cyan-100">
        <div className="mt-1 flex w-full flex-col gap-y-2 self-center pr-2 md:pr-4 lg:gap-y-4 lg:pr-7">
          <Link
            to="/each-service"
            className="text-right text-3xl font-medium lg:text-4xl"
          >
            {name}
          </Link>
          <p className=" line-clamp-4 text-right font-light sm:line-clamp-none md:text-base lg:text-lg">
            {description}
          </p>
        </div>
        <img
          src={image}
          alt=""
          className=" aspect-square w-36 border-spacing-3  -translate-x-5 -translate-y-10 border-gray-600 object-cover  md:w-52 lg:w-60 lg:-translate-x-10"
        />
      </div>
    </div>
  );
}
export default FlipCardServiceCategory;
