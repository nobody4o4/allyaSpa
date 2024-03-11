import hero from "../assets/wall.jpg";
import ServicesTypes from "../features/services/servicesTypes";
import FetchMain from "../services/fetchMain.service";

export default function EachServices() {
  const { data } = FetchMain();
  return (
    <div className=" mb-10 pt-[3rem]">
      <div className="flex w-full justify-center">
        <img
          className="h-[26rem] w-full object-cover"
          alt="hero"
          src={hero}
        ></img>
      </div>
      <div className="mx-4 mb-14 mt-4 flex flex-col gap-4 text-center text-black md:mx-20 lg:mx-40 lg:px-32 ">
        <h1 className="text-4xl font-bold">Massage</h1>
        <div className="mb-6 items-center text-sm font-semibold">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin tempor id eu nisl nunc mi ipsum. Risus quis varius quam
            quisque id.
          </p>
        </div>
      </div>
      <div className="mx-10 lg:mx-52">
        <h1 className="mb-10 text-3xl font-bold">Types of Massage</h1>
        <ServicesTypes />
        <ServicesTypes />
        <ServicesTypes />
      </div>
    </div>
  );
}
