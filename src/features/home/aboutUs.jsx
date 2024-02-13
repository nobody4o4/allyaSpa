import billie from "../../assets/bill.png";


export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 gap-10 mx-32  ">
      <div className=" h-[35rem] ">
        <img className="h-full w-full object-cover" src={billie}></img>
      </div>
      <div className="flex flex-col gap-6  justify-center">
        <h1 className="text-5xl font-semibold">About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
          fusce ut placerat orci nulla pellentesque. Vestibulum lectus mauris
          ultrices eros in. Congue nisi vitae suscipit tellus mauris a diam.
          Pharetra vel turpis nunc eget lorem dolor sed viverra. Commodo elit at
          imperdiet dui accumsan. Tincidunt id aliquet risus feugiat in. Quis
          imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
          Morbi blandit cursus risus at ultrices mi tempus imperdiet. Vitae
          tempus quam pellentesque nec nam aliquam sem et. Tincidunt tortor
          aliquam nulla facilisi cras fermentum odio. Quis eleifend quam
          adipiscing vitae proin sagittis. Sit amet commodo nulla facilisi
          nullam vehicula. Ut faucibus pulvinar elementum integer. Morbi blandit
          cursus risus at ultrices mi tempus imperdiet. Vitae tempus quam
          pellentesque nec nam aliquam sem et. Tincidunt tortor aliquam nulla
          facilisi cras fermentum odio. Quis eleifend quam adipiscing vitae
          proin sagittis. Sit amet commodo nulla facilisi nullam vehicula. Ut
          faucibus pulvinar elementum integer.
        </p>
      </div>
    </div>
  );
}
