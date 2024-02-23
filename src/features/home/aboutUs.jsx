import billie from "../../assets/bill.png";

export default function AboutUs() {
  return (
    <div className="mx-10 mt-14 grid grid-cols-1 gap-10 lg:mx-32  lg:grid-cols-2">
      <div className="order-2 h-[20rem] md:h-[26rem] lg:order-1 lg:h-[35rem] ">
        <img className="h-full w-full object-cover" src={billie}></img>
      </div>
      <div className="order-1 flex flex-col justify-center gap-6 text-center md:text-start lg:order-2">
        <h1 className="text-center text-5xl font-semibold lg:text-left">
          About us
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
          fusce ut placerat orci nulla pellentesque. Vestibulum lectus mauris
          ultrices eros in. Congue nisi vitae suscipit tellus mauris a diam.
          Pharetra vel turpis nunc eget lorem dolor sed viverra. Commodo elit at
          imperdiet dui accumsan.
        </p>
      </div>
    </div>
  );
}
