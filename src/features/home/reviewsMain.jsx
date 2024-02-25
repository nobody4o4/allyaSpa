import MainSlider from "../../components/slider/mainSlider";
import Reviews from "../../components/reviews";

export default function ReviewsMain() {
  return (
    <div className=" w-full flex items-center justify-center flex-col from-transparent via-cyan-100 to-transparent  font-serif text-lg md:text-xl lg:text-3xl py-0 lg:py-8 mb-10">
      <div className="flex flex-col items-center justify-center gap-2 lg:w-[80%] italic ">
        <h1>What our clients had to say </h1>
        <h1>about us!</h1>
        <div className=" mt-6 md:mt-16 lg:mt-20 w-[22rem] md:w-[40rem] lg:w-[80rem]">
          <MainSlider sliders={<Reviews />} />
        </div>
      </div>
    </div>
  );
}
