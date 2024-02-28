import hehe from "../../assets/hero.jpg";

function Desc() {
  return (
    <div className="">
      <div className=" relative h-[25rem]">
        <img className="h-full w-full object-cover" src={hehe}></img>
        <div className="absolute top-44 flex w-full justify-center ">
          <h1 className="text-5xl font-bold text-white">Allya Spa</h1>
        </div>{" "}
      </div>
      <div className=" mx-auto flex flex-col items-center space-y-10 px-4 py-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-12">
        <p className="text-justify leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
          erat at elit tempus, et scelerisque mi eleifend. Donec augue risus,
          malesuada id vestibulum pharetra, rutrum vel sem. Praesent malesuada
          elit in erat tristique feugiat. Quisque pretium sagittis euismod.
          Donec non enim eu metus tristique euismod. Etiam consequat ipsum
          nulla. Sed eget diam ornare, volutpat sapien a, pretium lectus. Sed
          tempus, risus ac mollis bibendum, libero erat vestibulum leo, vel
          posuere turpis neque ut lectus. Morbi interdum libero sit amet dolor
          vestibulum, id dictum enim sollicitudin. Pellentesque imperdiet,
          turpis vel mattis semper, mi mauris consequat metus, eget cursus
          turpis libero ac arcu. Curabitur in augue ut justo tincidunt iaculis.
          Nulla et enim vel nibh suscipit commodo. Sed ornare non justo vitae
          molestie. Suspendisse ac vulputate felis. Sed ornare dolor orci, nec
          pulvinar magna tristique et. Fusce ipsum quam, viverra quis ultrices
          sit amet, volutpat egestas justo. Fusce consectetur odio id volutpat
          vestibulum. Nullam eget sagittis est, non ultrices magna. Ut dictum
          sem nec nunc dignissim malesuada. Morbi non cursus sem, et rutrum
          sapien. Duis maximus metus leo. In ultricies arcu vitae blandit
          sagittis. Morbi a mauris vel arcu viverra sodales. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae;
        </p>
      </div>
    </div>
  );
}
export default Desc;
