import hero from "../../assets/wall.jpg";
import ServicesTypes from "./servicesTypes";

export default function EachServices() {
  return (
    <div className="mx-32  mt-[3rem] mb-10">
      <div className="flex flex-col gap-4 text-black text-center mx-40 mb-14">
        <h1 className="text-4xl font-bold">Massage</h1>
        <div className="items-center font-semibold text-sm mb-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin tempor id eu nisl nunc mi ipsum. Risus quis varius quam
            quisque id.
          </p>
        </div>
        <div className="flex justify-center">
          <img className="w-[60rem] h-[26rem]" alt="hero" src={hero}></img>
        </div>
      </div>
      <div className="mx-24">
        <h1 className="font-bold text-3xl mb-10">Types of Massage</h1>
        <ServicesTypes />
        <ServicesTypes />
        <ServicesTypes />

      </div>
    </div>
  );
}
