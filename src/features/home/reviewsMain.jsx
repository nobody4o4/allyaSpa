import React from "react";
import MainSlider from "../../components/slider/mainSlider";
import Reviews from "../../components/reviews";

export default function ReviewsMain() {
  return (
    <div className=" w-full flex items-center justify-center flex-col from-transparent via-cyan-100 to-transparent  font-serif text-3xl py-10 mb-10">
      <div className="flex flex-col items-center justify-center gap-4  w-[50%] italic ">
        <h1>What our clients had to say </h1>
        <h1>about us!</h1>
        <div className="mt-20 w-[40rem]">
          <MainSlider sliders={<Reviews />} />
        </div>
      </div>
    </div>
  );
}
