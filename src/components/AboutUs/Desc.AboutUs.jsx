import hehe from "../../assets/hero.jpg";

function Desc(data) {
  return (
    <div className="">
      <div className=" relative h-[25rem]">
        <img className="h-full w-full object-cover" src={hehe}></img>
        <div className="absolute top-44 flex w-full justify-center ">
          <h1 className="text-5xl font-bold text-white">Allya Spa</h1>
        </div>
      </div>
      <div className=" mx-auto flex flex-col items-center space-y-10 px-4 py-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-12">
        <p className="text-justify leading-7">
          {data?.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita
          saepe et officiis reiciendis eveniet cupiditate deleniti ea neque
          dolor, minima, odio vitae dolore quos alias quo unde, deserunt sint?
        </p>
      </div>
    </div>
  );
}
export default Desc;
