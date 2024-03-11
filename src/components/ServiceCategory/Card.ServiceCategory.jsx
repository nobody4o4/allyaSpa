import { Link } from "react-router-dom";

function CardServiceCategory({ name, description, image }) {
  return (
    <div className="relative mx-5 flex h-60 md:mx-28 lg:mx-52">
      <div className="bottom-0 mr-5 mt-10 flex w-full bg-cyan-100 lg:mr-10">
        <div className="my-auto flex w-full flex-col gap-y-2 pl-2  md:pl-4  lg:gap-y-4 lg:pl-7">
          <Link to="/each-service" className="text-3xl font-medium lg:text-4xl">
            {name}
          </Link>
          <p className="line-clamp-4 text-justify font-light sm:line-clamp-none md:text-base lg:text-lg">
            {description}
          </p>
        </div>
        <img
          src={image}
          alt=""
          className="aspect-square w-36 -translate-y-10 translate-x-5  object-cover md:w-52 lg:w-60 lg:translate-x-10"
        />
      </div>
    </div>
  );
}
export default CardServiceCategory;
