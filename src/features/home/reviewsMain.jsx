import MainSlider from "../../components/slider/mainSlider";
import Reviews from "../../components/reviews";

export default function ReviewsMain() {
  return (
    <div className=" mb-10 flex w-full flex-col items-center justify-center bg-cyan-100   py-0 font-serif text-lg md:text-xl lg:py-8 lg:text-3xl">
      <div className="flex flex-col items-center justify-center gap-2 italic lg:w-[80%] ">
        <h1>What our clients had to say </h1>
        <h1>about us!</h1>
        <div className=" mt-6 w-[22rem] md:mt-16 md:w-[40rem] lg:mt-20 lg:w-[80rem]">
          <MainSlider sliders={<Reviews />} />
        </div>
      </div>
    </div>
  );
}
