import billie from "../../assets/bill.png";


export default function AboutUs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10 lg:mx-32 mt-14">
      <div className=" h-[20rem] md:h-[26rem] lg:h-[35rem] ">
        <img className="h-full w-full object-cover" src={billie}></img>
      </div>
      <div className="flex flex-col gap-6  justify-center text-center md:text-start ">
        <h1 className="text-5xl font-semibold">About us</h1>
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
