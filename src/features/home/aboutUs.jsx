import billie from "../../assets/bill.png";

export default function AboutUs({ aboutUs }) {
  return (
    <div className="mx-10 mt-14 grid grid-cols-1 gap-10 lg:mx-32  lg:grid-cols-2">
      <div className="order-2 h-[20rem] md:h-[26rem] lg:order-1 lg:h-[35rem] ">
        <img className="h-full w-full object-cover" src={billie}></img>
      </div>
      <div className="order-1 flex flex-col justify-center gap-6 text-center md:text-start lg:order-2">
        <h1 className="text-center text-5xl font-semibold lg:text-left">
          About us
        </h1>
        <p>{aboutUs?.description}</p>
      </div>
    </div>
  );
}
